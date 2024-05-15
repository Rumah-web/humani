import db from "@/prisma/lib/db";
import { m_menu } from "@prisma/client";

type ResponseData = {
	message: string;
};

export async function POST(request: Request) {
	const assets_api = process.env.API_ASSETS_HOST + "/view";

	let parents = [] as {
		id: number;
		name: string;
		slug: string;
		categories: [];
	}[];

	let parent = await db.m_menu_category.findMany({
		include: {
			m_menu_category: {
				select: {
					name: true,
					slug: true,
					id: true,
					order: true,
				},
			},
			m_files: {
				select: {
					path: true,
					uuid: true,
				},
			},
			m_menu: {
				include: {
					m_menu_files: {
						include: {
							m_files: {
								select: {
									path: true,
									uuid: true,
								},
							},
						},
					},
					m_menu_item: {
						include: {
							m_item: true,
						},
						orderBy: {
							order: "asc",
						},
						where: {
							status: "published",
						},
					},
				},
				where: {
					status: "published",
				},
			},
		},
		where: {
			status: "published",
			parent_id: {
				not: null,
			},
			m_menu_category: {
				is_show: true,
				status: "published",
			},
		},
		orderBy: {
			order: "asc",
		},
	});

	if (parent && parent.length > 0) {
		parents = Object.values(
			parent.reduce((search: any, item) => {
				if (item.m_menu_category?.slug) {
					if (typeof search[item.m_menu_category.slug] === "undefined") {
						search[item.m_menu_category.slug] = {
							id: item.m_menu_category.id,
							name: item.m_menu_category.name,
							slug: item.m_menu_category.slug,
							order: item.m_menu_category.order,
							categories: [
								{
									id: item.id,
									name: item.name,
									slug: item.slug,
									description: item.description,
									order: item.order,
									cover: item.m_files
										? assets_api + "/" + item.m_files?.uuid + "?width=400"
										: null,
									menus: item.m_menu
										.map((menu, i) => {
											const m_menu_files = menu.m_menu_files.map((item, i) => {
												if (item?.m_files) {
													item.m_files = {
														...item.m_files,
														path:
															assets_api +
															"/" +
															item?.m_files.uuid +
															"?width=400",
													};
												}
												return item;
											});

											return { ...menu, m_menu_files };
										})
										.sort((a: any, b: any) => a.price - b.price),
								},
							],
						};
					} else {
						search[item.m_menu_category.slug] = {
							...search[item.m_menu_category.slug],
							categories: [
								...search[item.m_menu_category.slug]["categories"],
								{
									id: item.id,
									name: item.name,
									slug: item.slug,
									description: item.description,
									order: item.order,
									cover: item.m_files
										? assets_api + "/" + item.m_files?.uuid + "?width=400"
										: null,
									menus: item.m_menu
										.map((menu, i) => {
											const m_menu_files = menu.m_menu_files.map((item, i) => {
												if (item?.m_files) {
													item.m_files = {
														...item.m_files,
														path:
															assets_api +
															"/" +
															item?.m_files.uuid +
															"?width=400",
													};
												}
												return item;
											});

											return { ...menu, m_menu_files };
										})
										.sort((a: any, b: any) => a.price - b.price),
								},
							],
						};
					}
				}

				return search;
			}, [])
		);

		parents = parents
			.map((item, i) => {
				item.categories.sort((a: any, b: any) => a.order - b.order);
				return item;
			})
			.sort((a: any, b: any) => a.order - b.order);
	}

	return Response.json({
		data: parents,
	});
}
