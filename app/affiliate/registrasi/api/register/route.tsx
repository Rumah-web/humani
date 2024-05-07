import db from "@/prisma/lib/db";
// import referralCodes from "referral-codes";
const argon2 = require("argon2");
import * as referralCodes from "referral-codes";

type ResponseData = {
	message: string;
};

export async function POST(request: Request) {
	const { name, username, password } = await request.json();
	const assets_api = process.env.API_ASSETS_HOST + "/view";

	let success = false;
	let message = "Failed";

	const pass = await argon2.hash(password);

	const affiliate_code = referralCodes.generate({
		length: 5,
		prefix: "I",
		postfix: "24",
	});

	try {
		await prisma?.$transaction(async (tx) => {
			const findRole = await db.m_roles.findFirst({
				where: {
					name: "affiliate",
				},
			});

			if (findRole) {
				const user = await db.m_user.create({
					data: {
						name,
						password: pass,
						username,
						status: "inactive",
						affiliate_code: affiliate_code[0].toUpperCase(),
					},
				});

				console.log(user);

				if (user) {
					await db.m_user_roles.create({
						data: {
							m_user_id: user.id,
							m_roles_id: findRole.id,
						},
					});
				}
			}
		});

		success = true;
		message = "Success";
	} catch (error) {}

	return Response.json({
		success,
		message,
	});
}
