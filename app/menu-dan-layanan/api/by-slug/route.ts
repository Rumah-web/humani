import db from "@/prisma/lib/db";

type ResponseData = {
	message: string;
};

export async function POST(request: Request) {
	const { slug } = await request.json();
	const assets_api = process.env.API_ASSETS_HOST + "/view";

	const data = await db.m_menu_category.findFirst({
		include: {
			m_files: {
				select: {
					path: true,
					uuid: true,
				},
			},
		},
		where: {
			slug,
		},
	});

	if (data?.m_files) {
		data.m_files = {
			...data.m_files,
			path: assets_api + "/" + data?.m_files.uuid,
		};
	}

	return Response.json({
		data,
	});
}
