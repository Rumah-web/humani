import { Poppins, Rancho } from "next/font/google";

export const rancho = Rancho({
	weight: ["400"],
	subsets: ["latin"],
});

export const poppins = Poppins({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	subsets: ["latin"],
});
