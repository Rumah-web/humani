"use client";

import { useParams } from "next/navigation";
import Image from "next/image";

import { poppins, rancho } from "../../font";
import { useEffect, useRef, useState } from "react";
import { OpenCloseCS } from "../../components/help/openCloseCS";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Skeleton from "@/app/components/loading/skeleton";
import { IMenu } from "@/app/typing";
import {
	customer,
	invoice,
	m_item,
	m_menu,
	m_menu_files,
	m_menu_item,
	order,
	order_detail,
	order_detail_menu_item,
} from "@prisma/client";
import { iconLoading } from "../../components/icon";
import { formatShorttDate } from "@/app/lib";

const Invoice = () => {
	const params = useParams<{ uuid: string }>();
	const listInnerRef = useRef(null);
	const [lastPosition, setLastPosition] = useState(0);
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState(
		{} as Partial<
			invoice & {
				order: order & {
					customer: customer;
					order_detail: Partial<
						order_detail & { order_detail_menu_item: order_detail_menu_item[] }
					>[];
				};
			}
		>
	);
	const [opacity, setOpacity] = useState(0);
	const [scrollDirection, setScrollDirection] = useState(
		"down" as "down" | "up" | "end"
	);

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
		(async () => {
			setLoading(true);

			const req = await fetch("/invoice/api/by-uuid", {
				method: "POST",
				body: JSON.stringify({ uuid: params.uuid }),
				headers: {
					"content-type": "application/json",
				},
			});

			if (req) {
				const { data } = await req.json();

				if (data) {
					setData(data);
				}
			}

			setLoading(false);
		})();
	}, []);

	if (loading) {
		return (
			<>
				<div className='h-screen flex justify-center items-center'>
					{iconLoading}
				</div>
			</>
		);
	}

	return (
		<main
			className='flex md:h-screen h-screen bg-white flex-col items-center justify-between relative overflow-y-scroll'
			ref={listInnerRef}
			onScroll={onScroll}>
			{data.status === "paid" ? (
				<div className='badge-corner'></div>
			) : (
				<div className='badge-corner-not-paid'></div>
			)}
			<section
				id='wellcome'
				className='relative w-full flex flex-col'>
				<div className='fixed z-20 w-full font-mono text-sm justify-center flex md:py-0 py-0 lg:px-0 px-4 bg-[#88171d]'>
					<div className='max-w-5xl w-full flex justify-between relative py-2'>
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
			</section>

			<section
				id='invoice'
				className={`max-w-5xl w-full flex flex-col justify-between relative md:px-0 px-4 py-2 mt-24 ${poppins.className}`}>
				<div className='uppercase text-4xl text-left py-10 font-bold'>
					Invoice
				</div>
				<div className='flex flex-wrap space-y-2'>
					<div className='w-1/2'>
						<label>Invoice No</label>
						<div>{data.invoice_no}</div>
					</div>
					<div className='w-1/2'>
						<label>Status</label>
						<div className='capitalize'>{data.status}</div>
					</div>
					<div className='w-1/2'>
						<label>Date</label>
						<div>
							{data.invoice_date ? formatShorttDate(data.invoice_date) : null}
						</div>
					</div>

					<div className='w-1/2'>
						<label>Due Date</label>
						<div>
							{data.invoice_due_date
								? formatShorttDate(data.invoice_due_date)
								: null}
						</div>
					</div>
					<div className='w-1/2'>
						<label>Customer</label>
						<div>
							{data.order?.customer.name} ({data.order?.customer.phone})
						</div>
					</div>
					<div className='w-1/2'>
						<label>Address</label>
						<div>{data.order?.customer.address}</div>
					</div>
					<div className='w-full'>
						<label>Notes</label>
						<div
							dangerouslySetInnerHTML={{
								__html: data.order?.notes ? data.order?.notes : "",
							}}
						/>
					</div>
				</div>
				<div className='flex flex-col'>
					<div className='text-2xl font-semibold mt-10 mb-4'>Order</div>
					{data.order?.order_detail && (
						<div>
							{data.order?.order_detail.length > 0 && (
								<>
									{data.order?.order_detail.map((order, i) => {
										return (
											<div
												key={i}
												className='flex flex-col'>
												<div className='flex space-x-2'>
													<div>{`${i + 1}.`}</div>
													<div className='flex justify-between w-full underline'>
														<div>{order.menu_name}</div>
														<div>{`${order.qty} pax`}</div>
														<div>
															{order.menu_price
																? `@Rp. ${order.menu_price
																		.toString()
																		.replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`
																: "-"}
														</div>
													</div>
												</div>
												<div className='py-2'>
													<div className='px-4 font-semibold pb-1'>Item</div>
													{order.order_detail_menu_item &&
														order.order_detail_menu_item.length > 0 &&
														order.order_detail_menu_item.map((item, i) => {
															return (
																<div
																	key={i}
																	className='flex space-x-2 px-4'>
																	<div>{`${i + 1}.`}</div>
																	<div>{item.name}</div>
																</div>
															);
														})}
												</div>
											</div>
										);
									})}
								</>
							)}
						</div>
					)}
					<div className='flex flex-col border-t pt-4 mt-4'>
						<div className='flex justify-between space-x-4'>
							<div className='flex-1 md:text-right text-left'>Total</div>
							<div className='md:w-1/5 text-right'>{`${
								data.total
									? `Rp. ${data.total
											.toString()
											.replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`
									: `-`
							}`}</div>
						</div>
						<div className='flex justify-between space-x-4'>
							<div className='flex-1 md:text-right text-left'>Discount</div>
							<div className='md:w-1/5 text-right'>{`${
								data.discount
									? `Rp. ${data.discount
											.toString()
											.replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`
									: `-`
							}`}</div>
						</div>
						<div className='flex justify-between space-x-4'>
							<div className='flex-1 md:text-right text-left'>Pengiriman</div>
							<div className='md:w-1/5 text-right'>{`${
								data.delivery_charge
									? `Rp. ${data.delivery_charge
											.toString()
											.replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`
									: `-`
							}`}</div>
						</div>
						<div className='flex justify-between space-x-4 py-2 mt-2 bg-[#e5e5e5]'>
							<div className='flex-1 md:text-right text-left font-bold'>
								Total bayar
							</div>
							<div className='md:w-1/5 text-right font-bold'>{`${
								data.total && data.discount && data.delivery_charge
									? `Rp. ${(
											parseInt(data.total.toString()) +
											parseInt(data.discount.toString()) +
											parseInt(data.delivery_charge.toString())
									  )
											.toString()
											.replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`
									: `-`
							}`}</div>
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

export default Invoice;
