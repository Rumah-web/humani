import db from "@/prisma/lib/db";

type ResponseData = {
	message: string;
};

export async function POST(request: Request) {
	const assets_api = process.env.API_ASSETS_HOST + "/view";

	let datas = await db.m_menu_category.findMany({
		include: {
			m_files: {
				select: {
					path: true,
					uuid: true,
				},
			},
		},
		where: {
			status: "published",
			slug: {
				not: "ramadhan",
			},
			// is_show: true,
		},
		orderBy: {
			order: "asc",
		},
	});

	if (datas) {
		datas = datas.map((item, i) => {
			if (item?.m_files) {
				item.m_files = {
					...item.m_files,
					path: assets_api + "/" + item?.m_files.uuid + "?width=400",
				};
			}
			return item;
		});
	}

	return Response.json({
		data: datas,
	});
}
