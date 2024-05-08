import db from "@/prisma/lib/db";

type ResponseData = {
	message: string;
};

export async function POST(request: Request) {
	const assets_api = process.env.API_ASSETS_HOST + "/view";

	let datas = await db.m_menu_category.findMany({
		where: {
			status: "published",
			parent_id: null,
			is_show: true,
		},
		orderBy: {
			order: "asc",
		},
	});

	return Response.json({
		data: datas,
	});
}
