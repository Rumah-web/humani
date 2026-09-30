import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("https://humanicatering.id"),
	title: "Humani Catering Service",
	description:
		"Humani Catering Service (HCS) selalu siap untuk solusi sajian Anda. Konsultasikan kebutuhan catering acara Anda kepada kami.",
	keywords:
		"humani catering service, humani catering, catering, catering depok, konsultasi catering, catering prasmanan, catering perusahaan, catering sekolah, nasi box, snack box, gift box",
	openGraph: {
		title: "Humani Catering Service",
		description:
			"Humani Catering Service (HCS) selalu siap untuk solusi sajian Anda. Konsultasikan kebutuhan catering acara Anda kepada kami.",
		url: "https://humanicatering.id",
		siteName: "Humani Catering Service",
		images: [
			{
				url: "/og-image.png",
				width: 1200,
				height: 630,
				alt: "Humani Catering Service",
			},
		],
		locale: "id_ID",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Humani Catering Service",
		description:
			"Humani Catering Service (HCS) selalu siap untuk solusi sajian Anda. Konsultasikan kebutuhan catering acara Anda kepada kami.",
		images: ["/og-image.png"],
	},
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon.ico",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={inter.className}>{children}</body>
			<GoogleAnalytics gaId='G-GRZ86KF2WC' />
		</html>
	);
}
