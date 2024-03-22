"use client";

import Image from "next/image";
import Carosel from "./components/slider/carosel";
import Link from "next/link";
import Slickslider from "./components/slider/slickslider";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { WaCS } from "./components/help/waCS";
import { poppins, rancho } from "./font";
import { useEffect, useRef } from "react";

export default function Home() {
	const listInnerRef = useRef(null);
	const customerService = {
		wa: `+6287888111778`,
		content: `Saya ingin mendapatkan informasi katering terbaru`,
	};
	const testimoni = [
		`/testimoni/testimoni-1.jpg`,
		`/testimoni/testimoni-2.jpg`,
		`/testimoni/testimoni-3.jpg`,
		`/testimoni/testimoni-4.jpg`,
		`/testimoni/testimoni-5.jpg`,
		`/testimoni/testimoni-6.jpg`,
	];

	const gallery = [
		`/gallery/gallery-1.jpg`,
		`/gallery/gallery-2.jpg`,
		`/gallery/gallery-3.jpg`,
		`/gallery/gallery-4.jpg`,
		`/gallery/gallery-5.jpg`,
		`/gallery/gallery-6.jpg`,
		`/gallery/gallery-7.jpg`,
	];

	const review = [
		`/review/review-1.png`,
		`/review/review-2.png`,
		`/review/review-3.png`,
		`/review/review-4.png`,
		`/review/review-5.png`,
		`/review/review-6.png`,
		`/review/review-7.png`,
		`/review/review-8.png`,
		`/review/review-9.png`,
		`/review/review-10.png`,
		`/review/review-11.png`,
	];

	const ourCustomer = [1, 2, 3, 4, 5, 6, 7, 8];

	const menus = [
		{
			prefix: null,
			title: "Nasi Box",
			description:
				"Aneka nasih box kami sajikan dengan citarasa nusantara terbaik seperti Nasi Besek, Nasi Tumpeng Mini, Nasi Padang, Nasi Menggono dan banyak pilihan lainnya.",
			imagePath: null,
		},
		{
			prefix: null,
			title: "Snack Box",
			description:
				"Kudapan dalam kotak mini yang dihidangkan dengan ragam jenis rasa, baik manis asin maupun gurih berasal dari selera tradisional maupun modern.",
			imagePath: null,
		},
		{
			prefix: null,
			title: "Gift Box",
			description:
				"Pilihan paket makanan terbaik dari kami untuk segala acara keluarga dan kerabat untuk sebuah pencapaian maupun kebahagian bersama.",
			imagePath: null,
		},
		{
			prefix: "Layanan",
			title: "Prasmanan",
			description:
				"Paket prasmanan kami meliputi hidangan pembuka, hidangan utama, hidangan penutup, hingga hidangan pelengkap dengan sajian dan selera nusantara.",
			imagePath: null,
		},
		{
			prefix: "Layanan",
			title: "Perusahaan & Sekolah",
			description:
				"Kami juga menyediakan pelayanan in house untuk kebutuhan perusahaan maupun sekolah dengan kapasitas dan kualitas layanan profesional.",
			imagePath: null,
		},
		{
			prefix: "Layanan",
			title: "Berbagi Makanan",
			description:
				"Keinginan berbagi makanan antar sesama di masyarakat kita semakin besar sehingga butuh layanan yang halalan toyiban, amanah dan terpercaya.",
			imagePath: null,
		},
	];

	useEffect(() => {
		const listInnerElement = listInnerRef.current as any;

		if (listInnerElement) {
			listInnerElement.addEventListener("scroll", onScroll);

			// Clean-up
			return () => {
				listInnerElement.removeEventListener("scroll", onScroll);
			};
		}
	}, []);

	const onScroll = () => {
		console.log("scroll bottom");
		if (listInnerRef.current) {
			const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
			const isNearBottom = scrollTop + clientHeight >= scrollHeight;

			if (isNearBottom) {
				console.log("Reached bottom");
				// DO SOMETHING HERE
			}
		}
	};

	return (
		<main
			className='flex min-h-screen relative flex-col items-center justify-between relative overflow-y-scroll'
			ref={listInnerRef}
			onScroll={() => console.log("click")}>
			<section
				id='wellcome'
				className='relative w-full md:h-screen flex flex-col bg-white'>
				<div
					className='absolute bottom-0 left-0 bg-contain w-28 h-full bg-no-repeat bg-left-bottom md:flex hidden'
					style={{
						backgroundImage: `url(/bg/bg-top-left.png)`,
					}}></div>
				<div
					className='absolute bottom-0 right-0 bg-contain w-28 h-full bg-no-repeat bg-right-bottom md:flex hidden'
					style={{
						backgroundImage: `url(/bg/bg-top-right.png)`,
					}}></div>
				<div className='fixed z-20 w-full font-mono text-sm justify-center flex py-2 bg-[#88171d] lg:px-0 px-4'>
					<div className='max-w-5xl w-full flex justify-between'>
						<div className=''>
							<Image
								src='/logo-white.png'
								alt='Humani Food Logo'
								width={70}
								height={30}
								priority
							/>
						</div>
						<div className='flex items-center'>
							<div className='md:w-16 w-12 flex justify-center'>
								<Image
									src='/icon/iso.png'
									alt='Humani Food ISO 22000'
									width={70}
									height={24}
									priority
								/>
							</div>
							<div className='md:w-16 w-12 flex justify-center'>
								<Image
									src='/icon/halal.png'
									alt='Humani Food Sertifikat HALAL'
									width={70}
									height={24}
									priority
								/>
							</div>
							<div className='md:w-16 w-12 flex justify-center'>
								<Image
									src='/icon/slhs.png'
									alt='Humani Food Sertifikat SLHS'
									width={70}
									height={24}
									priority
								/>
							</div>
						</div>
					</div>
				</div>
				<div className='flex w-full justify-center md:mt-16 mt-16'>
					<div className='flex max-w-5xl w-full md:flex-row flex-col lg:py-24 md:py-16 py-0'>
						<div className='md:w-1/2 w-full text-[#88171d] lg:pt-0 pt-4 flex flex-col justify-between'>
							<div className='w-full lg:pr-10 lg:px-0 md:px-4 px-4'>
								<h1
									className={`lg:text-5xl md:text-4xl text-2xl font-bold tracking-wide md:px-0 px-2 flex flex-col flex-nowrap space-y-2 ${rancho.className}`}>
									<span>
										Apapun Acaranya ... <br />
									</span>
									<span>
										Berapapun Jumlahnya ... <br />
									</span>
									<span>
										Kapanpun Waktunya ... <br />
									</span>
									<span>
										Beragampun Menunya ... <br />
									</span>
									<span>
										Berapapun Biayanya ... <br />
									</span>
								</h1>
							</div>

							<div
								className={`lg:px-0 px-12 md:pt-10 pt-4 w-full md:px-4 px-6 text-sm md:pb-0 pb-4 ${poppins.className}`}>
								Humani Catering Service (HCS) selalu siap untuk solusi sajian
								Anda. <br />
								Konsultasikan dengan Catering Consultant HCS untuk mendapatkan{" "}
								<br />
								solusi masalah catering atau konsumsi acara Anda.
							</div>
						</div>
						<div className='md:order-last -order-1  md:w-1/2 w-full lg:pt-0 md:pt-6 pt-4'>
							<Carosel
								images={testimoni}
								size={`md:bg-contain bg-cover`}
							/>
						</div>
					</div>
				</div>
			</section>
			<section
				id='komitmen-kami'
				className='relative flex w-full'>
				<div
					className='absolute top-0 bg-contain w-full h-12 md:bg-repeat bg-no-repeat'
					style={{
						backgroundImage: `url(/bg/wave-xl.png)`,
					}}></div>
				<div
					className='absolute bottom-0 bg-contain w-full h-12 md:bg-repeat bg-no-repeat rotate-180'
					style={{
						backgroundImage: `url(/bg/wave-xl.png)`,
					}}></div>
				<div className='flex w-full'>
					<div className='bg-black opacity-50 absolute w-full h-full'></div>
					<div
						className='flex w-full justify-center bg-no-repeat bg-cover md:bg-fixed bg-local'
						style={{
							backgroundImage: `url(/bg/bg-menu-service.jpg)`,
						}}>
						<div className='flex max-w-5xl w-full flex-col'>
							<div className='relative w-fit mt-28 mb-20'>
								<div className='absolute bg-[#88171d] opacity-70 w-full h-full rounded-[1rem]'></div>
								<div
									className={`relative flex flex-col text-right text-white px-12 py-10 gap-2 ${rancho.className}`}>
									<div>
										<h3 className='text-4xl'>+10 tahun</h3>
										<h4 className='text-2xl'>melayani jabodetabek</h4>
									</div>
									<div>
										<h3 className='text-4xl'>+25.000</h3>
										<h4 className='text-2xl'>acara telah kami dampingi</h4>
									</div>
									<div>
										<h3 className='text-4xl'>+2.000.000</h3>
										<h4 className='text-2xl'>
											porsi telah dinikmati Sahabat Humani Catering Service
										</h4>
									</div>
								</div>
							</div>
							<div
								className={`z-10 flex justify-center ${poppins.className} md:px-0 px-4`}>
								<div className='border border-white flex items-center justify-between rounded-full px-8 md:pt-4 pt-2 pb-2.5 md:w-4/5 w-full bg-[#e7e8ea] my-4'>
									<div className='flex flex-col w-full md:space-y-3 space-y-1 text-white items-center justify-center'>
										<div className='flex bg-[#88171d] rounded-full md:h-12 md:w-12 h-10 w-10 items-center justify-center text-white'>
											<svg
												width='30'
												height='30'
												viewBox='0 0 28 28'
												xmlns='http://www.w3.org/2000/svg'>
												<path
													fill='currentColor'
													d='m12.167 17.802l-.006-.014a7.798 7.798 0 0 1-.36-.094l-.009-.003A7.985 7.985 0 0 1 8.708 16a8 8 0 1 1 13.257-6.75c.039.413-.3.75-.715.75c-.414 0-.745-.337-.793-.749A6.5 6.5 0 1 0 11.496 16l.04.017c.2.082.406.154.616.217A2 2 0 0 1 16 17a2 2 0 0 1-3.833.802m-.986 1.272a9.514 9.514 0 0 1-4.53-3.054A3 3 0 0 0 4 19v.715C4 23.433 8.21 26 14 26s10-2.708 10-6.285V19a3 3 0 0 0-3-3h-3.645a3.5 3.5 0 0 1-6.174 3.074M19 10c0-1.512-.67-2.867-1.731-3.784a5 5 0 1 0-5.624 8.195A3.486 3.486 0 0 1 14 13.5a3.49 3.49 0 0 1 2.356.911A5 5 0 0 0 19 10'
												/>
											</svg>
										</div>
										<h3 className='flex md:text-sm text-[0.6rem] text-center md:h-6 h-6 items-center font-bold text-[#88171d] leading-none'>
											Catering Consultant
										</h3>
									</div>
									<div className='flex flex-col w-full md:space-y-3 space-y-1 text-white items-center justify-center'>
										<div className='flex bg-[#88171d] rounded-full md:h-12 md:w-12 h-10 w-10 items-center justify-center text-white'>
											<svg
												width='30'
												height='30'
												viewBox='0 0 20 20'
												xmlns='http://www.w3.org/2000/svg'>
												<path
													fill='currentColor'
													d='M7 4.5c-.3 0-.5.3-.5.5v2.5h-1V5c0-.3-.2-.5-.5-.5s-.5.3-.5.5v2.5h-1V5c0-.3-.2-.5-.5-.5s-.5.3-.5.5v3.3c0 .9.7 1.6 1.5 1.7v7c0 .6.4 1 1 1s1-.4 1-1v-7c.8-.1 1.5-.8 1.5-1.7V5c0-.2-.2-.5-.5-.5M9 5v6h1v6c0 .6.4 1 1 1s1-.4 1-1V2c-1.7 0-3 1.3-3 3m7-1c-1.4 0-2.5 1.5-2.5 3.3c-.1 1.2.5 2.3 1.5 3V17c0 .6.4 1 1 1s1-.4 1-1v-6.7c1-.7 1.6-1.8 1.5-3C18.5 5.5 17.4 4 16 4'
												/>
											</svg>
										</div>
										<h3 className='flex md:text-sm text-[0.6rem] text-center md:h-6 h-6 items-center font-bold text-[#88171d] leading-none'>
											Super Team
										</h3>
									</div>
									<div className='flex flex-col w-full md:space-y-3 space-y-1 text-white items-center justify-center'>
										<div className='flex bg-[#88171d] rounded-full md:h-12 md:w-12 h-10 w-10 items-center justify-center text-white'>
											<svg
												width='30'
												height='30'
												viewBox='0 0 24 24'
												xmlns='http://www.w3.org/2000/svg'>
												<g
													fill='none'
													stroke='currentColor'
													strokeLinecap='round'
													strokeWidth='1.5'>
													<path
														strokeLinejoin='round'
														strokeMiterlimit='1.5'
														d='M8 19a2 2 0 1 0 0-4a2 2 0 0 0 0 4m10 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4'
													/>
													<path d='M10.05 17H15V6.6a.6.6 0 0 0-.6-.6H1m4.65 11H3.6a.6.6 0 0 1-.6-.6v-4.9' />
													<path
														strokeLinejoin='round'
														d='M2 9h4'
													/>
													<path d='M15 9h5.61a.6.6 0 0 1 .548.356l1.79 4.028a.6.6 0 0 1 .052.243V16.4a.6.6 0 0 1-.6.6h-1.9M15 17h1' />
												</g>
											</svg>
										</div>
										<h3 className='flex md:text-sm text-[0.6rem] text-center md:h-6 h-6 items-center font-bold text-[#88171d] leading-none'>
											SatSet Service
										</h3>
									</div>
									<div className='flex flex-col w-full md:space-y-3 space-y-1 text-white items-center justify-center'>
										<div className='flex bg-[#88171d] rounded-full md:h-12 md:w-12 h-10 w-10 items-center justify-center text-white'>
											<svg
												width='30'
												height='30'
												viewBox='0 0 24 24'
												xmlns='http://www.w3.org/2000/svg'>
												<path
													fill='currentColor'
													d='M7 5v10c0 1.11-.89 2-2 2H4c-.55 0-1-.45-1-1v-3H1v3c0 1.66 1.34 3 3 3h1c2.21 0 4-1.79 4-4V5m14 8.38l-1.23-1.23A3.905 3.905 0 0 0 19 11h-2v2h2c.5 0 1 .2 1.35.56l.35.35l-1.2.69c-.46.26-.97.4-1.5.4h-1c-.56 0-1-.44-1-1V6h-2v3.81l-.62-.69C12.7 8.37 11.6 8 10.59 8H10v2h.59c.64 0 1.25.25 1.7.71l1.71 1.7V14c0 1.12-.88 2-2 2h-2v2h2c1.37 0 2.5-.7 3.17-1.76A2.5 2.5 0 0 0 17 17h1c.88 0 1.74-.23 2.5-.67l2.5-1.44Z'
												/>
											</svg>
										</div>
										<h3 className='flex md:text-sm text-[0.6rem] text-center md:h-6 h-6 items-center font-bold text-[#88171d] leading-none'>
											Thayyiban
										</h3>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section
				id='menu'
				className='w-full relative bg-white flex justify-center pb-4'>
				<div
					className='absolute top-0 left-0 bg-contain bg-no-repeat w-full md:h-52 h-36 bg-left-top'
					style={{
						backgroundImage: `url(/bg/bg-ragam-menu-left-top.png)`,
					}}></div>
				<div
					className='absolute top-0 right-0 bg-contain bg-no-repeat w-full md:h-52 h-36 bg-right-top'
					style={{
						backgroundImage: `url(/bg/bg-ragam-menu-right-top.png)`,
					}}></div>
				<div className='flex max-w-5xl w-full flex-col'>
					<h2
						className={`text-[#88171d] md:text-5xl text-2xl text-center mt-12 font-bold ${rancho.className}`}>
						Ragam Menu dan Layanan
					</h2>
					<div
						className={`pt-16 pb-8 md:grid md:grid-cols-3 grid-cols-1  md:grid-flow-row grid-flow-column flex md:flex-row flex-col gap-12 text-[#88171d] md:px-0 md:px-12 px-0 ${poppins.className}`}>
						{menus.map((menu, i) => {
							return (
								<div
									key={i}
									className='flex flex-col items-center'>
									{menu.prefix && (
										<h3 className='font-medium text-xl text-center'>
											{menu.prefix}
										</h3>
									)}
									<h3 className='font-medium text-xl text-center pb-2'>
										<span>{menu.title}</span>
									</h3>
									<div
										className='w-full bg-[#88171d] my-2 h-72 bg-cover bg-no-repeat bg-center'
										style={{
											backgroundImage: `url(/menu/menu-${i + 1}.jpg)`,
										}}></div>
									<div className='pt-2 text-center md:px-0 px-4'>
										{menu.description}
									</div>
								</div>
							);
						})}
					</div>
					<h3
						className={`text-center text-[#88171d] text-xl my-8 md:px-12 px-6 ${poppins.className}`}>
						Dari acara keluarga hingga pelayanan perusahaan, beragam pilihan
						<br />
						menu eksotik lokal, satu setengah jam siap kirim dengan SatSet
						Service,
						<br />
						pemesanan mulai 5 porsi hingga ribuan porsi, siap 24 jam
						<br />
						waktu pengantaran dan fleksibel tentukan biaya.
					</h3>

					<h2
						className={`text-center text-[#88171d] text-xl my-8 px-12 font-bold ${poppins.className}`}>
						Silahkan Anda fokus acaranya, biar kami urus sajiannya.
					</h2>
				</div>
				<div
					className='absolute bottom-0 left-0 bg-contain bg-no-repeat w-full md:h-1/3 h-48 bg-left-bottom'
					style={{
						backgroundImage: `url(/bg/bg-ragam-menu-left-bottom.png)`,
					}}></div>
				<div
					className='absolute bottom-0 right-0 bg-contain bg-no-repeat w-full md:h-1/3 h-48 bg-right-bottom'
					style={{
						backgroundImage: `url(/bg/bg-ragam-menu-right-bottom.png)`,
					}}></div>
			</section>
			<section
				id='chat-admin'
				className='relative flex w-full bg-white justify-center overflow-hidden'>
				<div
					className='absolute -bottom-36 -left-36 bg-contain bg-no-repeat w-full h-72 bg-left-bottom'
					style={{
						filter: `blur(8px)`,
						WebkitFilter: `blur(8px)`,
						backgroundImage: `url(/logo-red.png)`,
					}}></div>
				<div
					className='absolute top-0 -right-72 bg-contain bg-no-repeat w-full h-[36rem] bg-right-top'
					style={{
						filter: `blur(8px)`,
						WebkitFilter: `blur(8px)`,
						backgroundImage: `url(/logo-red.png)`,
					}}></div>
				<div className='bg-white opacity-90 absolute w-full h-full'></div>
				<div className='relative flex flex-col space-y-4 item-center text-center py-4 text-[#88171d]'>
					<div className='flex justify-between md:px-24 px-16 py-8'>
						<div className='animate-bounce'>
							<Image
								src='/icon/arrow-cs.png'
								alt='Humani Food CS'
								className='-rotate-45'
								width={60}
								height={20}
								priority
							/>
						</div>
						<div className='animate-bounce'>
							<Image
								src='/icon/arrow-cs.png'
								alt='Humani Food CS'
								width={60}
								height={20}
								priority
							/>
						</div>
						<div className='animate-bounce'>
							<Image
								src='/icon/arrow-cs.png'
								alt='Humani Food CS'
								className='rotate-45'
								width={60}
								height={20}
								priority
							/>
						</div>
					</div>
					<div className='flex justify-center pb-4'>
						<div className='border border-[#88171d] py-1.5 px-1.5 rounded-full'>
							<div className='flex pl-6 pr-4 py-2.5 rounded-full items-center text-white bg-gradient-to-r from-[#88171d] to-[#d83831]'>
								<svg
									width='40'
									height='40'
									viewBox='0 0 32 32'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										fill='currentColor'
										d='M23.328 19.177c-.401-.203-2.354-1.156-2.719-1.292c-.365-.13-.63-.198-.896.203c-.26.391-1.026 1.286-1.26 1.547s-.464.281-.859.104c-.401-.203-1.682-.62-3.203-1.984c-1.188-1.057-1.979-2.359-2.214-2.76c-.234-.396-.026-.62.172-.818c.182-.182.401-.458.604-.698c.193-.24.255-.401.396-.661c.13-.281.063-.5-.036-.698s-.896-2.161-1.229-2.943c-.318-.776-.651-.677-.896-.677c-.229-.021-.495-.021-.76-.021s-.698.099-1.063.479c-.365.401-1.396 1.359-1.396 3.297c0 1.943 1.427 3.823 1.625 4.104c.203.26 2.807 4.26 6.802 5.979c.953.401 1.693.641 2.271.839c.953.302 1.823.26 2.51.161c.76-.125 2.354-.964 2.688-1.901c.339-.943.339-1.724.24-1.901c-.099-.182-.359-.281-.76-.458zM16.083 29h-.021c-2.365 0-4.703-.641-6.745-1.839l-.479-.286l-5 1.302l1.344-4.865l-.323-.5a13.166 13.166 0 0 1-2.021-7.01c0-7.26 5.943-13.182 13.255-13.182c3.542 0 6.865 1.38 9.365 3.88a13.058 13.058 0 0 1 3.88 9.323C29.328 23.078 23.39 29 16.088 29zM27.359 4.599C24.317 1.661 20.317 0 16.062 0C7.286 0 .14 7.115.135 15.859c0 2.792.729 5.516 2.125 7.927L0 32l8.448-2.203a16.13 16.13 0 0 0 7.615 1.932h.005c8.781 0 15.927-7.115 15.932-15.865c0-4.234-1.651-8.219-4.661-11.214z'
									/>
								</svg>
								<div className='text-xl pl-2'>Chat Aja Dulu Yuuk</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section
				id='review-slider'
				className='relative w-full flex justify-center bg-no-repeat bg-cover'>
				<div
					className='bg-[#dfdfdf] opacity-90 absolute w-full h-full'
					style={{
						backgroundImage: `url(/bg/bg-menu-service.jpg)`,
						filter: `blur(8px)`,
						WebkitFilter: `blur(8px)`,
					}}></div>
				<div className='py-24 text-white'>
					<div className='relative  w-screen'>
						<Slickslider
							images={review}
							size={"cover"}
							className={`mx-4`}></Slickslider>
					</div>
				</div>
			</section>
			<section
				id='customer'
				className='w-full bg-white'>
				<h2
					className={`text-[#88171d] md:text-5xl text-2xl text-center mt-12 font-bold ${rancho.className}`}>
					Pelanggan Setia Kami
				</h2>
				<div className='flex flex-col justify-center pt-6 space-y-2 items-center'>
					<div className='w-full flex justify-center md:h-[30rem] h-[10rem]'>
						<div
							className={`md:w-1/2 w-full md:px-0 px-4 bg-cover bg-[url('/client/pelanggan-kami.jpg')]`}></div>
					</div>
				</div>
			</section>
			<section
				id='gallery'
				className='w-full bg-white'>
				<h2
					className={`text-[#88171d] md:text-5xl text-2xl text-center mt-12 font-bold ${rancho.className}`}>
					Gallery Humani Catering Service
				</h2>
				<div className='md:pt-8 pt-4 pb-2'>
					<Carosel
						images={gallery}
						size={"md:bg-contain bg-cover"}
					/>
				</div>
			</section>
			<section
				id='chat-wa'
				className='py-8 bg-white w-full flex justify-center'>
				<div className='w-fit'>
					<div className='border border-[#88171d] py-1.5 px-1.5 rounded-full'>
						<div className='flex pl-6 pr-4 py-2.5 rounded-full items-center text-white bg-gradient-to-r from-[#88171d] to-[#d83831]'>
							<svg
								width='40'
								height='40'
								viewBox='0 0 32 32'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									fill='currentColor'
									d='M23.328 19.177c-.401-.203-2.354-1.156-2.719-1.292c-.365-.13-.63-.198-.896.203c-.26.391-1.026 1.286-1.26 1.547s-.464.281-.859.104c-.401-.203-1.682-.62-3.203-1.984c-1.188-1.057-1.979-2.359-2.214-2.76c-.234-.396-.026-.62.172-.818c.182-.182.401-.458.604-.698c.193-.24.255-.401.396-.661c.13-.281.063-.5-.036-.698s-.896-2.161-1.229-2.943c-.318-.776-.651-.677-.896-.677c-.229-.021-.495-.021-.76-.021s-.698.099-1.063.479c-.365.401-1.396 1.359-1.396 3.297c0 1.943 1.427 3.823 1.625 4.104c.203.26 2.807 4.26 6.802 5.979c.953.401 1.693.641 2.271.839c.953.302 1.823.26 2.51.161c.76-.125 2.354-.964 2.688-1.901c.339-.943.339-1.724.24-1.901c-.099-.182-.359-.281-.76-.458zM16.083 29h-.021c-2.365 0-4.703-.641-6.745-1.839l-.479-.286l-5 1.302l1.344-4.865l-.323-.5a13.166 13.166 0 0 1-2.021-7.01c0-7.26 5.943-13.182 13.255-13.182c3.542 0 6.865 1.38 9.365 3.88a13.058 13.058 0 0 1 3.88 9.323C29.328 23.078 23.39 29 16.088 29zM27.359 4.599C24.317 1.661 20.317 0 16.062 0C7.286 0 .14 7.115.135 15.859c0 2.792.729 5.516 2.125 7.927L0 32l8.448-2.203a16.13 16.13 0 0 0 7.615 1.932h.005c8.781 0 15.927-7.115 15.932-15.865c0-4.234-1.651-8.219-4.661-11.214z'
								/>
							</svg>
							<div className='text-xl pl-2'>Chat Aja Dulu Yuuk</div>
						</div>
					</div>
				</div>
			</section>
			<section
				id='kontak-kami'
				className='bg-[#88171d] flex md:flex-row flex-col w-full py-8'>
				<div className='md:w-1/6 w-full px-8 flex md:justify-start justify-center'>
					<div>
						<Image
							src='/logo-white.png'
							alt='Humani Food Logo'
							width={100}
							height={50}
							priority
						/>
					</div>
				</div>
				<div className='flex md:flex-row flex-col justify-between md:w-5/6 w-full text-white md:pt-0 pt-8 md:gap-0 gap-8'>
					<div className='w-full md:items-start items-center flex flex-col'>
						<h3 className={`text-4xl pb-2 ${rancho.className}`}>
							Layanan Pelanggan
						</h3>
						<div className={`${poppins.className}`}>Whatsapp</div>
						<div className={`font-bold cursor-pointer ${poppins.className}`}>
							<Link
								href={`https://wa.me/${customerService.wa}?text=${customerService.content}`}
								rel='noopener noreferrer'
								target='_blank'>
								0811 9119 200
							</Link>
						</div>
						<div className={`pt-4 ${poppins.className}`}>Email</div>
						<div className={`font-bold cursor-pointer ${poppins.className}`}>
							<Link
								href='mailto:info@humanifood.co.id'
								rel='noopener noreferrer'
								target='_blank'>
								info@humanifood.com
							</Link>
						</div>
					</div>
					<div className='w-full md:items-start items-center flex flex-col'>
						<h3 className={`text-4xl pb-2 ${rancho.className}`}>
							Waktu Pelayanan
						</h3>
						<div className={poppins.className}>Senin - Jumat</div>
						<div className={`font-bold ${poppins.className}`}>
							08.00 - 17.00
						</div>
					</div>
					<div className='w-full md:items-start items-center flex flex-col'>
						<h3 className={`text-4xl pb-2 ${rancho.className}`}>
							Sentra Dapur
						</h3>
						<div className={poppins.className}>
							Jalan Anggrek No. 57C <br />
							Cimanggis Depok <br />
							Jawa Barat - 16453
						</div>
					</div>
				</div>
			</section>
			<section
				id='footer'
				className='pt-16 pb-6 text-[#88171d] w-full'>
				<div className='text-center'>
					<h4>&#169;2024 Humanifood</h4>
				</div>
				<div className='flex justify-center pt-8'>
					<Image
						src='/logo-red.png'
						alt='Humani Food Logo'
						width={250}
						height={50}
						priority
					/>
				</div>
				<div className='flex justify-center pt-10 gap-4'>
					<div className='cursor-pointer'>
						<Link
							href='https://www.facebook.com/Humanifood-100278535022728/'
							rel='noopener noreferrer'
							target='_blank'>
							<svg
								width='30'
								height='30'
								viewBox='0 0 256 256'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									fill='#1877F2'
									d='M256 128C256 57.308 198.692 0 128 0C57.308 0 0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445'
								/>
								<path
									fill='#FFF'
									d='m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A128.959 128.959 0 0 0 128 256a128.9 128.9 0 0 0 20-1.555V165z'
								/>
							</svg>
						</Link>
					</div>
					<div className='cursor-pointer'>
						<Link
							href='#'
							rel='noopener noreferrer'
							target='_blank'>
							<svg
								width='30'
								height='30'
								viewBox='0 0 256 290'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									fill='#FF004F'
									d='M189.72 104.421c18.678 13.345 41.56 21.197 66.273 21.197v-47.53a67.115 67.115 0 0 1-13.918-1.456v37.413c-24.711 0-47.59-7.851-66.272-21.195v96.996c0 48.523-39.356 87.855-87.9 87.855c-18.113 0-34.949-5.473-48.934-14.86c15.962 16.313 38.222 26.432 62.848 26.432c48.548 0 87.905-39.332 87.905-87.857v-96.995zm17.17-47.952c-9.546-10.423-15.814-23.893-17.17-38.785v-6.113h-13.189c3.32 18.927 14.644 35.097 30.358 44.898M69.673 225.607a40.008 40.008 0 0 1-8.203-24.33c0-22.192 18.001-40.186 40.21-40.186a40.313 40.313 0 0 1 12.197 1.883v-48.593c-4.61-.631-9.262-.9-13.912-.801v37.822a40.268 40.268 0 0 0-12.203-1.882c-22.208 0-40.208 17.992-40.208 40.187c0 15.694 8.997 29.281 22.119 35.9'
								/>
								<path d='M175.803 92.849c18.683 13.344 41.56 21.195 66.272 21.195V76.631c-13.794-2.937-26.005-10.141-35.186-20.162c-15.715-9.802-27.038-25.972-30.358-44.898h-34.643v189.843c-.079 22.132-18.049 40.052-40.21 40.052c-13.058 0-24.66-6.221-32.007-15.86c-13.12-6.618-22.118-20.206-22.118-35.898c0-22.193 18-40.187 40.208-40.187c4.255 0 8.356.662 12.203 1.882v-37.822c-47.692.985-86.047 39.933-86.047 87.834c0 23.912 9.551 45.589 25.053 61.428c13.985 9.385 30.82 14.86 48.934 14.86c48.545 0 87.9-39.335 87.9-87.857z' />
								<path
									fill='#00F2EA'
									d='M242.075 76.63V66.516a66.285 66.285 0 0 1-35.186-10.047a66.47 66.47 0 0 0 35.186 20.163M176.53 11.57a67.788 67.788 0 0 1-.728-5.457V0h-47.834v189.845c-.076 22.13-18.046 40.05-40.208 40.05a40.06 40.06 0 0 1-18.09-4.287c7.347 9.637 18.949 15.857 32.007 15.857c22.16 0 40.132-17.918 40.21-40.05V11.571zM99.966 113.58v-10.769a88.787 88.787 0 0 0-12.061-.818C39.355 101.993 0 141.327 0 189.845c0 30.419 15.467 57.227 38.971 72.996c-15.502-15.838-25.053-37.516-25.053-61.427c0-47.9 38.354-86.848 86.048-87.833'
								/>
							</svg>
						</Link>
					</div>
					<div className='cursor-pointer'>
						<Link
							href='https://www.instagram.com/humanifoods.family/'
							rel='noopener noreferrer'
							target='_blank'>
							<svg
								width='30'
								height='30'
								viewBox='0 0 256 256'
								xmlns='http://www.w3.org/2000/svg'>
								<g fill='none'>
									<rect
										width='256'
										height='256'
										fill='url(#skillIconsInstagram0)'
										rx='60'
									/>
									<rect
										width='256'
										height='256'
										fill='url(#skillIconsInstagram1)'
										rx='60'
									/>
									<path
										fill='#fff'
										d='M128.009 28c-27.158 0-30.567.119-41.233.604c-10.646.488-17.913 2.173-24.271 4.646c-6.578 2.554-12.157 5.971-17.715 11.531c-5.563 5.559-8.98 11.138-11.542 17.713c-2.48 6.36-4.167 13.63-4.646 24.271c-.477 10.667-.602 14.077-.602 41.236s.12 30.557.604 41.223c.49 10.646 2.175 17.913 4.646 24.271c2.556 6.578 5.973 12.157 11.533 17.715c5.557 5.563 11.136 8.988 17.709 11.542c6.363 2.473 13.631 4.158 24.275 4.646c10.667.485 14.073.604 41.23.604c27.161 0 30.559-.119 41.225-.604c10.646-.488 17.921-2.173 24.284-4.646c6.575-2.554 12.146-5.979 17.702-11.542c5.563-5.558 8.979-11.137 11.542-17.712c2.458-6.361 4.146-13.63 4.646-24.272c.479-10.666.604-14.066.604-41.225s-.125-30.567-.604-41.234c-.5-10.646-2.188-17.912-4.646-24.27c-2.563-6.578-5.979-12.157-11.542-17.716c-5.562-5.562-11.125-8.979-17.708-11.53c-6.375-2.474-13.646-4.16-24.292-4.647c-10.667-.485-14.063-.604-41.23-.604zm-8.971 18.021c2.663-.004 5.634 0 8.971 0c26.701 0 29.865.096 40.409.575c9.75.446 15.042 2.075 18.567 3.444c4.667 1.812 7.994 3.979 11.492 7.48c3.5 3.5 5.666 6.833 7.483 11.5c1.369 3.52 3 8.812 3.444 18.562c.479 10.542.583 13.708.583 40.396c0 26.688-.104 29.855-.583 40.396c-.446 9.75-2.075 15.042-3.444 18.563c-1.812 4.667-3.983 7.99-7.483 11.488c-3.5 3.5-6.823 5.666-11.492 7.479c-3.521 1.375-8.817 3-18.567 3.446c-10.542.479-13.708.583-40.409.583c-26.702 0-29.867-.104-40.408-.583c-9.75-.45-15.042-2.079-18.57-3.448c-4.666-1.813-8-3.979-11.5-7.479s-5.666-6.825-7.483-11.494c-1.369-3.521-3-8.813-3.444-18.563c-.479-10.542-.575-13.708-.575-40.413c0-26.704.096-29.854.575-40.396c.446-9.75 2.075-15.042 3.444-18.567c1.813-4.667 3.983-8 7.484-11.5c3.5-3.5 6.833-5.667 11.5-7.483c3.525-1.375 8.819-3 18.569-3.448c9.225-.417 12.8-.542 31.437-.563zm62.351 16.604c-6.625 0-12 5.37-12 11.996c0 6.625 5.375 12 12 12s12-5.375 12-12s-5.375-12-12-12zm-53.38 14.021c-28.36 0-51.354 22.994-51.354 51.355c0 28.361 22.994 51.344 51.354 51.344c28.361 0 51.347-22.983 51.347-51.344c0-28.36-22.988-51.355-51.349-51.355zm0 18.021c18.409 0 33.334 14.923 33.334 33.334c0 18.409-14.925 33.334-33.334 33.334c-18.41 0-33.333-14.925-33.333-33.334c0-18.411 14.923-33.334 33.333-33.334'
									/>
									<defs>
										<radialGradient
											id='skillIconsInstagram0'
											cx='0'
											cy='0'
											r='1'
											gradientTransform='matrix(0 -253.715 235.975 0 68 275.717)'
											gradientUnits='userSpaceOnUse'>
											<stop stopColor='#FD5' />
											<stop
												offset='.1'
												stopColor='#FD5'
											/>
											<stop
												offset='.5'
												stopColor='#FF543E'
											/>
											<stop
												offset='1'
												stopColor='#C837AB'
											/>
										</radialGradient>
										<radialGradient
											id='skillIconsInstagram1'
											cx='0'
											cy='0'
											r='1'
											gradientTransform='matrix(22.25952 111.2061 -458.39518 91.75449 -42.881 18.441)'
											gradientUnits='userSpaceOnUse'>
											<stop stopColor='#3771C8' />
											<stop
												offset='.128'
												stopColor='#3771C8'
											/>
											<stop
												offset='1'
												stopColor='#60F'
												stopOpacity='0'
											/>
										</radialGradient>
									</defs>
								</g>
							</svg>
						</Link>
					</div>
				</div>
			</section>
			<section id='help'>
				<WaCS
					no={customerService.wa}
					content={customerService.content}
				/>
			</section>
		</main>
	);
}
