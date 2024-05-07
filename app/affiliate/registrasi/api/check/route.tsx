import db from "@/prisma/lib/db";

type ResponseData = {
	message: string;
};

export async function POST(request: Request) {
	let success = false;
	let message = "Failed";

	const find = await db.config.findFirst({
		where: {
			open_registration: true,
		},
	});

	if (find) {
		success = true;
		message = "Success";
	}

	return Response.json({
		success,
		message,
	});
}
