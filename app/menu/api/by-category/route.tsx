import db from "@/prisma/lib/db";

type ResponseData = {
	message: string;
};

export async function POST(request: Request) {
	const { m_menu_category_id } = await request.json();
	const assets_api = process.env.API_ASSETS_HOST + "/view";

	let data = await db.m_menu.findMany({
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
		},
		where: {
			m_menu_category_id,
			status: "published",
		},
	});

	if (data && data.length > 0) {
		data = data.map((menu, i) => {
			const m_menu_files = menu.m_menu_files.map((item, i) => {
				if (item?.m_files) {
					item.m_files = {
						...item.m_files,
						path: assets_api + "/" + item?.m_files.uuid + "?width=400",
					};
				}
				return item;
			});

			return { ...menu, m_menu_files };
		});
	}

	return Response.json({
		data,
	});
}
