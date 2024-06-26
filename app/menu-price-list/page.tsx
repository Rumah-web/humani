"use client";

import { useParams } from "next/navigation";
import Image from "next/image";

import { poppins, rancho } from "../font";
import { useEffect, useRef, useState } from "react";
import { OpenCloseCS } from "../components/help/openCloseCS";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
	m_files,
	m_item,
	m_menu,
	m_menu_category,
	m_menu_files,
	m_menu_item,
} from "@prisma/client";
import React from "react";
import Skeleton from "../components/loading/skeleton";
import { iconLoading, iconNoImage } from "../components/icon";
import { Decimal } from "@prisma/client/runtime/library";
import { IPriceMenu } from "../typing";

const MenuPriceList = () => {
	const params = useParams<{ slug: string }>();
	const listInnerRef = useRef(null);
	const [lastPosition, setLastPosition] = useState(0);
	const [loading, setLoading] = useState(false);
	const [activeMenu, setActiveMenu] = useState(null as null | m_menu_category);
	const [data, setData] = useState(
		[] as Array<
			m_menu_category & {
				m_files: m_files;
			}
		>
	);
	const [parents, setParents] = useState([] as IPriceMenu[]);
	const [menuSelected, setMenuSelected] = useState(
		[] as Array<
			m_menu & {
				m_menu_files: m_menu_files[];
				m_menu_item: Partial<m_menu_item & { m_item: m_item }>[];
			}
		>
	);

	const [opacity, setOpacity] = useState(0);
	const [scrollDirection, setScrollDirection] = useState(
		"down" as "down" | "up" | "end"
	);
	const controls = useAnimation();
	const controlsService = useAnimation();
	const controlsServiceStat = useAnimation();
	const controlsPelanggan = useAnimation();
	const [ref, inView] = useInView();
	const [refService, inViewService, entryService] = useInView();
	const [refPelanggan, inViewPelanggan] = useInView();

	const customerService = {
		wa: `+6208119119200`,
		content: `Saya ingin mendapatkan informasi katering terbaru`,
	};

	const onScroll = () => {
		if (listInnerRef.current) {
			const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
			const isNearBottom = scrollTop + clientHeight >= scrollHeight;

			if (scrollTop < lastPosition) {
				setScrollDirection("up");
			} else {
				setScrollDirection("down");
			}

			setLastPosition(scrollTop);
			setOpacity(scrollTop / 4 / 100);

			if (isNearBottom) {
				setScrollDirection("end");
				console.log("Reached bottom");
				// DO SOMETHING HERE
			}
		}
	};

	const squareVariants = {
		visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
		hidden: { opacity: 0, scale: 0 },
	};

	useEffect(() => {
		if (inView) {
			controls.start("visible");
		}
	}, [controls, inView]);

	useEffect(() => {
		if (entryService) {
			controlsService.start("visible");
		}
	}, [controlsService, entryService]);

	useEffect(() => {
		if (inViewPelanggan) {
			controlsPelanggan.start("visible");
		}
	}, [controlsPelanggan, inViewPelanggan]);

	useEffect(() => {
		(async () => {
			setLoading(true);

			const reqParent = await fetch("/menu-dan-layanan/api/parent", {
				method: "POST",
				body: JSON.stringify({}),
				headers: {
					"content-type": "application/json",
				},
			});

			if (reqParent) {
				const parentData = await reqParent.json();
				setParents(parentData.data);
			}

			setLoading(false);
		})();
	}, []);

	const onClickCategory = async (slug: string) => {
		const section = document.querySelector(`#${slug}`);

		if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
	};

	return (
		<main
			className='flex md:h-screen h-screen flex-col items-center justify-between relative overflow-y-scroll'
			ref={listInnerRef}
			onScroll={onScroll}>
			<section
				id='wellcome'
				className='relative w-full md:h-screen h-screen flex flex-col bg-white'>
				<div className='fixed z-20 w-full font-mono text-sm justify-center flex md:py-0 py-0 lg:px-0 px-4'>
					<div
						className={`bg-header`}
						style={{ opacity }}></div>
					<div className='max-w-5xl w-full flex justify-between relative py-2'>
						<div className='w-16'>
							<Image
								src='/logo-white.png'
								alt='Humani Food Logo'
								width={70}
								height={30}
								className='w-16'
								priority
							/>
						</div>

						<div className='flex items-center'>
							{/* {opacity > 1 && (
								<div
									className={`md:flex hidden  text-white items-center justify-end text-lg font-semibold ${poppins.className}`}>
									{parents.map((parent, i) => {
										return (
											<div
												key={i}
												onClick={() => onClickCategory(parent.slug)}
												className='hover:underline'>
												<div className='px-2 cursor-pointer'>{parent.name}</div>
											</div>
										);
									})}
								</div>
							)} */}
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
					<div className='bg-black opacity-60 absolute w-full h-full'></div>
					<div
						className='flex w-full justify-center bg-no-repeat bg-cover md:bg-fixed bg-local'
						style={{
							backgroundImage: `url(/bg/bg-menu-service.jpg)`,
						}}>
						<div className='flex max-w-5xl w-full flex-col items-center'>
							<div className='flex md:flex-row md:w-fit w-full flex-col  justify-between space-x-4'>
								<motion.div
									ref={refService}
									animate={controlsService}
									initial='hidden'
									variants={squareVariants}
									className={`flex md:flex-row flex-col w-full md:mt-28 mt-20 md:mr-0 mr-4 md:mb-20 md:items-left items-center ${
										opacity > 1
											? `fixed md:-top-8 -top-1 left-0 z-50 border-t`
											: `relative`
									}`}>
									<div
										className={`${
											opacity > 1 ? `opacity-1` : `opacity-70`
										} absolute bg-[#88171d] w-full h-full`}></div>
									<div
										className={`relative md:text-5xl text-2xl flex flex-col md:text-left text-center text-white px-10 w-full ${
											opacity > 1
												? `md:pt-4 md:pb-4 flex-1 md:px-48`
												: `md:pt-10 md:pb-10`
										} pb-4 pt-4 ${rancho.className}`}>
										{opacity <= 1 && (
											<div className='text-center pb-4'>Daftar Harga Menu</div>
										)}
										<div
											className={`flex flex-wrap text-3xl ${
												opacity > 1 ? `justify-center` : `justify-center`
											}`}>
											{loading ? (
												<div className='flex-1 space-x-4'>
													<div className='flex w-full justify-center'>
														{iconLoading}
													</div>
												</div>
											) : (
												<>
													{parents.map((parent, i) => {
														return (
															<div
																key={i}
																onClick={() => onClickCategory(parent.slug)}
																className='border border-transparent hover:border-white mx-2'>
																<div className='px-2 cursor-pointer md:text-xl text-lg'>
																	{parent.name}
																</div>
															</div>
														);
													})}
												</>
											)}
										</div>
									</div>
								</motion.div>
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
				<div
					className={`flex max-w-5xl w-full flex-col ${
						opacity > 1 ? `md:mt-96 mt-72` : ``
					}`}
					ref={ref}>
					<h2
						className={`text-[#88171d] flex justify-center md:flex-row flex-col md:space-x-2 space-x-0  md:text-5xl text-2xl text-center mt-12 font-bold ${rancho.className}`}>
						<span>Anda Fokus Acaranya, </span>
						<span>Kami Urus Sajiannya.</span>
					</h2>
					<h4
						className={`text-center text-[#88171d] text-xl my-8 md:px-12 px-6 ${poppins.className}`}>
						Dari acara keluarga hingga pelayanan perusahaan, beragam pilihan
						<br />
						menu eksotik lokal, satu setengah jam siap kirim dengan SatSet
						Service,
						<br />
						pemesanan mulai 10 porsi hingga ribuan porsi, siap 24 jam
						<br />
						waktu pengantaran dan fleksibel tentukan biaya.
					</h4>
					<div className='flex justify-between'>
						<motion.div
							ref={ref}
							animate={controls}
							initial='hidden'
							variants={squareVariants}
							className='flex flex-col mt-8 w-full'>
							{loading ? (
								<div className='flex space-x-4'>
									{[1, 2, 3].map((_, i) => {
										return (
											<div
												key={i}
												className='flex w-full'>
												<Skeleton />
											</div>
										);
									})}
								</div>
							) : (
								<div className={`flex flex-col ${poppins.className}`}>
									{parents.map((data, i) => {
										return (
											<div
												key={i}
												id={data.slug}
												style={{ scrollMargin: "6rem" }}>
												<div>
													{data.categories.map((menu, i) => {
														return (
															<motion.div
																key={i}
																id={`${menu.slug}`}
																onClick={() => onClickCategory(menu.slug)}
																className={`flex-1 flex-col items-center  border-t cursor-pointer  ${
																	i + 1 === data.categories.length
																		? `border-b`
																		: ``
																}`}>
																<h3
																	className={`py-4 text-lg text-center ${`text-white bg-[#88171d] font-bold underline`} hover:bg-[#88171d] hover:text-white hover:font-bold`}>
																	<span className=''>{menu.name}</span>
																</h3>

																<div className='bg-white py-4 md:px-12 px-2 flex flex-col'>
																	<div className='flex md:flex-col flex-col'>
																		{menu.cover && (
																			<div
																				className='w-full md:my-2 my-0 md:h-72 h-48 bg-contain bg-no-repeat bg-center'
																				key={i}
																				style={{
																					backgroundImage: `url(${menu.cover})`,
																				}}></div>
																		)}

																		<div
																			className='md:text-center text-justify md:px-0 px-4 md:py-4 py-8 items-center justify-center flex'
																			dangerouslySetInnerHTML={{
																				__html: menu.description,
																			}}
																		/>
																	</div>

																	{menu.menus.length > 0 ? (
																		<div
																			className={`md:pt-16 pt-4 pb-8 md:grid md:grid-cols-3 grid-cols-2  md:grid-flow-row grid-flow-col flex md:flex-row flex-row flex-wrap md:gap-12 text-[#88171d] md:px-0 md:px-12 px-0 ${poppins.className}`}>
																			{menu.menus.map((menu, i) => {
																				let priceAfterDiscount =
																					parseInt(menu.price.toString()) -
																					parseInt(menu.price_promo.toString());

																				if (priceAfterDiscount < 0)
																					priceAfterDiscount = 0;

																				return (
																					<motion.div
																						key={i}
																						className='flex flex-col items-center md:w-full w-1/2 px-0 md:pb-0 pb-8 border-b border-l border-r md:border-t-0 border-t-0 border-[#88171d] rounded-b-lg rounded-t-lg shadow-2xl mb-2'>
																						<h3 className='font-medium text-xl text-center pb-2 text-wrap pt-2 w-full bg-[#88171d] rounded-t-lg border border-[#88171d]'>
																							<span className='text-white'>
																								{menu.name}
																							</span>
																						</h3>
																						{menu.m_menu_files.map(
																							(menu_file: any, i: number) => {
																								return (
																									<div
																										className='w-full md:my-2 my-0 md:h-72 h-48 bg-contain bg-no-repeat bg-center'
																										key={i}
																										style={{
																											backgroundImage: `url(${menu_file.m_files.path})`,
																										}}></div>
																								);
																							}
																						)}

																						<div className='flex w-full flex-col md:px-0 md:px-6 px-2 md:pt-6 pt-4'>
																							{parseInt(menu.price.toString()) >
																								priceAfterDiscount && (
																								<del>
																									<div className='font-semibold underline md:justify-start justify-center flex w-full'>{`Rp. ${menu.price
																										.toString()
																										.replace(
																											/\B(?=(\d{3})+(?!\d))/g,
																											"."
																										)}`}</div>
																								</del>
																							)}

																							{priceAfterDiscount > 0 ? (
																								<div className='font-semibold underline md:text-left md:text-left text-center'>{`Rp. ${priceAfterDiscount
																									.toString()
																									.replace(
																										/\B(?=(\d{3})+(?!\d))/g,
																										"."
																									)}`}</div>
																							) : (
																								<>Hubungi kami</>
																							)}

																							<div className='flex w-full flex-col md:py-6 py-6'>
																								{menu.m_menu_item.map(
																									(item, i) => {
																										return (
																											<div
																												key={i}
																												className='flex'>
																												<div className='w-6'>{`${
																													i + 1
																												}.`}</div>
																												<div className='text-left flex-1'>
																													{item.m_item?.name}
																												</div>
																											</div>
																										);
																									}
																								)}
																							</div>
																						</div>
																					</motion.div>
																				);
																			})}
																		</div>
																	) : (
																		<div className='flex w-full flex-col space-y-4 py-4 text-[#88171d]'>
																			<div className='flex w-full justify-center md:px-24 px-16 space-x-4'>
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
																			<div className='flex justify-center'>
																				<div className='w-fit border border-[#88171d] py-1.5 px-1.5 rounded-full'>
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
																						<div className='md:text-xl text-base pl-2'>
																							Hubungi Kami
																						</div>
																					</div>
																				</div>
																			</div>
																		</div>
																	)}
																</div>
															</motion.div>
														);
													})}
												</div>
											</div>
										);
									})}
								</div>
							)}
						</motion.div>
					</div>
				</div>
			</section>
			<section
				id='customer'
				className='w-full bg-white relative'>
				<h2
					ref={refPelanggan}
					className={`text-[#88171d] md:text-5xl text-2xl text-center mt-12 font-bold ${rancho.className}`}>
					Pelanggan Setia Kami
				</h2>
				<div className='flex flex-col justify-center pt-6 space-y-2 items-center'>
					<div className='w-full flex justify-center md:h-[30rem] h-[15rem]'>
						<motion.div
							animate={controlsPelanggan}
							initial='hidden'
							variants={squareVariants}
							className={`md:w-1/2 w-full md:px-0 px-4 bg-contain bg-no-repeat bg-[url('/client/pelanggan-kami.jpg')]`}></motion.div>
					</div>
				</div>
				<div
					className='absolute bottom-0 left-0 bg-contain bg-no-repeat w-full md:h-2/3 h-48 bg-left-bottom'
					style={{
						backgroundImage: `url(/bg/bg-ragam-menu-left-bottom.png)`,
					}}></div>
				<div
					className='absolute bottom-0 right-0 bg-contain bg-no-repeat w-full md:h-2/3 h-48 bg-right-bottom'
					style={{
						backgroundImage: `url(/bg/bg-ragam-menu-right-bottom.png)`,
					}}></div>
			</section>

			<section
				id='chat-wa'
				className='py-8 bg-white w-full flex justify-center'>
				<div
					className='w-fit cursor-pointer'
					onClick={() => {
						window.open(
							`https://wa.me/${customerService.wa}?text=${customerService.content}`,
							"_blank"
						);
					}}>
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
				id='help'
				className={`pt-16 pb-6 text-[#88171d] w-full ${
					scrollDirection === "up" ? `flex` : `hidden`
				} relative`}>
				<OpenCloseCS
					no={customerService.wa}
					content={customerService.content}
				/>
			</section>
		</main>
	);
};

export default MenuPriceList;
