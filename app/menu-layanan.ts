export interface IMenuLayanan {
	uuid: string;
	name: string;
	description: string;
	order: number;
	slug: string;
	image: string;
}

export const menuLayanan: IMenuLayanan[] = [
	{
		uuid: "d7ebd109-af56-4b0c-928a-0879ed0e2f50",
		name: "Layanan Berbagi Makanan",
		description:
			"<p>Keinginan berbagi makanan antar sesama di masyarakat kita semakin besar sehingga butuh layanan yang halalan toyiban, amanah dan terpercaya</p>\r\n",
		order: 5,
		slug: "layanan-berbagi-makanan-zhgls",
		image: "/menulayanan/layanan-berbagi-makanan-zhgls.jpg",
	},
	{
		uuid: "2f733290-3b09-4be3-9150-c3cc4e5c17e3",
		name: "Pelayanan Prasmanan",
		description:
			"<p>Paket prasmanan kami meliputi hidangan pembuka, hidangan utama, hidangan penutup, hingga hidangan pelengkap dengan sajian dan selera nusantara.</p>\r\n",
		order: 4,
		slug: "pelayanan-prasmanan",
		image: "/menulayanan/pelayanan-prasmanan.jpg",
	},
	{
		uuid: "70e76966-77ac-48ae-ae7b-83aa3574e2f3",
		name: "Gift Box",
		description:
			"<p>Pilihan paket makanan terbaik dari kami untuk segala acara keluarga dan kerabat untuk sebuah pencapaian maupun kebahagian bersama.</p>\r\n",
		order: 3,
		slug: "gift-box-ynbfr",
		image: "/menulayanan/gift-box-ynbfr.jpg",
	},
	{
		uuid: "7c31cc03-6b58-4c31-842a-314bff10dc6a",
		name: "Snack Box",
		description:
			"<p>Kudapan dalam kotak mini yang dihidangkan dengan ragam jenis rasa, baik manis asin maupun gurih berasal dari selera tradisional maupun modern.</p>\r\n",
		order: 2,
		slug: "snack-box-tznbt",
		image: "/menulayanan/snack-box-tznbt.jpg",
	},
	{
		uuid: "18615efd-3df9-43b1-a165-9db6f52d59d4",
		name: "Nasi Box",
		description:
			"<p>Aneka nasi box kami sajikan dengan citarasa nusantara terbaik seperti Nasi Besek, Nasi Tumpeng Mini, Nasi Padang, Nasi Menggono dan banyak pilihan lainnya.</p>\r\n",
		order: 1,
		slug: "nasi-box-plrur",
		image: "/menulayanan/nasi-box-plrur.jpg",
	},
];

export default menuLayanan;

