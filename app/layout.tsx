import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Humani Catering Service",
	description:
		"Humani Catering Service (HCS) selalu siap untuk solusi sajian Anda. Konsultasikan kebutuhan catering acara Anda kepada kami.",
	keywords:
		"humani catering service, humani catering, catering, catering depok, konsultasi catering, catering prasmanan, catering perusahaan, catering sekolah, nasi box, snack box, gift box",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
