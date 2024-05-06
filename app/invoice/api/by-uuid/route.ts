import db from "@/prisma/lib/db";

type ResponseData = {
	message: string;
};

export async function POST(request: Request) {
	const { uuid } = await request.json();
	const assets_api = process.env.API_ASSETS_HOST + "/view";

	const data = await db.invoice.findFirst({
		include: {
			order: {
				include: {
					customer: {
						select: {
							name: true,
							phone: true,
							address: true,
						},
					},
					order_detail: {
						include: {
							order_detail_menu_item: {
								select: {
									name: true,
								},
							},
						},
					},
				},
			},
		},
		where: {
			uuid,
		},
	});

	// if (data?.m_files) {
	// 	data.m_files = {
	// 		...data.m_files,
	// 		path: assets_api + "/" + data?.m_files.uuid + "?width=400",
	// 	};
	// }

	return Response.json({
		data,
	});
}
