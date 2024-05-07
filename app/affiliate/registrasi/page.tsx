"use client";

import { OpenCloseCS } from "@/app/components/help/openCloseCS";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function AffiliateRegistrasi() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const [isSubmit, setSubmit] = useState(false);

	const customerService = {
		wa: `+6287888111778`,
		content: `Saya ingin mendapatkan informasi affiliate`,
	};
	return (
		<main className='flex flex-col items-center justify-between md:px-24 px-0'>
			<div
				style={{ maxWidth: `500px` }}
				className='overflow-hidden w-full shadow-2xl relative'>
				<section
					id='introduction'
					className='h-screen bg-contain relative'
					style={{
						backgroundImage: `url(/bg/bg-top-food.jpg)`,
					}}>
					<div className='bg-black opacity-25 absolute w-full h-full'></div>
					<div className='md:px-10 px-6 md:py-8 py-6 space-y-2 relative'>
						<h1 className='font-bold text-4xl text-white'>
							Dapatkan <br />
							Pendapatan Tambahan <br />
							Tak Terbatas
						</h1>
						<h2 className='rounded-full w-fit text-white px-3 py-1 text-sm bg-[#88171d]'>
							Buruan daftar sebelum di tutup
						</h2>
					</div>
				</section>
				<div className='relative -top-64 -mb-64 bg-contain bg-no-repeat'>
					<section
						id='about-us'
						className='relative'>
						<div className='bg-white md:px-10 px-2.5 pb-2 pt-8'>
							<h4 className='md:text-3xl text-2xl text-center font-bold md:pt-8 md:pb-6 pt-4 px-2 text-[#88171d]'>
								Form Registrasi Affiliate
							</h4>

							<div className='md:pt-4 pt-8 md:px-0 px-4 pb-8'>
								<form className='flex flex-col space-y-4'>
									<div className='flex flex-col space-y-1'>
										<label
											htmlFor='name'
											className='text-[#88171d]'>
											Nama
										</label>
										<input
											{...register("name", { required: true })}
											placeholder='Nama Langkap Anda'
											className='w-full placeholder:font-normal placeholder:text-sm rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'
											onChange={(e) => null}
										/>
									</div>
									<div className='flex flex-col space-y-1'>
										<label
											htmlFor='username'
											className='text-[#88171d]'>
											No WhatsApp
										</label>
										<input
											{...register("username", { required: true })}
											placeholder='Pastikan No WhatsApp Aktif'
											className='w-full placeholder:font-normal placeholder:text-sm rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'
											onChange={(e) => null}
										/>
									</div>
									<div className='flex flex-col space-y-1'>
										<label
											htmlFor='password'
											className='text-[#88171d]'>
											Password
										</label>
										<input
											{...register("password", { required: true })}
											placeholder='Buat Password'
											className='w-full placeholder:font-normal placeholder:text-sm rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'
											onChange={(e) => null}
										/>
									</div>
									<div className='flex flex-col space-y-1'>
										<label
											htmlFor='retype'
											className='text-[#88171d]'>
											Retype Password
										</label>
										<input
											{...register("retype", { required: true })}
											placeholder='Ketik Ulang Password'
											className='w-full placeholder:font-normal placeholder:text-sm rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'
											onChange={(e) => null}
										/>
									</div>
								</form>
							</div>
						</div>
						<div className='relative md:pb-12 pb-0 bg-white px-10'>
							<button
								disabled={isSubmit ? true : false}
								className={`md:relative fixed bottom-0 left-0 bg-[#88171d] flex w-full px-8 py-4 z-50 border-t border-t-4 border-white text-white text-base justify-center cursor-pointer hover:opacity-70 ${
									isSubmit ? "opacity-70 cursor-wait" : "opacity-100"
								}`}
								onClick={() => null}>
								Registrasi Sekarang
							</button>
						</div>
					</section>

					<section
						id='service'
						className='bg-white'>
						<div className='relative top-1'>
							<Image
								src='/bg/wave.png'
								alt='Wave Background'
								style={{ width: `100%` }}
								width={100}
								height={50}
								priority
							/>
						</div>

						<div className='relative md:-top-9 -top-7 md:-mb-10 -mb-8 z-20'>
							<Image
								src='/bg/wave.png'
								alt='Wave Background'
								style={{ width: `100%` }}
								width={200}
								height={80}
								priority
							/>
						</div>
					</section>
					<section
						id='why-us'
						className='text-white text-2xl font-bold pb-12 bg-[#88171d]'>
						<h2 className='text-center py-8'>Kenapa Harus</h2>
						<div className='flex justify-center pb-12'>
							<Image
								src='/logo.png'
								alt='Humani Food Logo'
								width={150}
								height={50}
								priority
							/>
						</div>

						<div className='flex justify-center  pt-0'>
							<div className='flex w-1/2 text-center justify-between'>
								<div>
									<Image
										src='/icon/iso.png'
										alt='Humani Food ISO 22000'
										width={70}
										height={24}
										priority
									/>
								</div>
								<div>
									<Image
										src='/icon/halal.png'
										alt='Humani Food Sertifikat HALAL'
										width={70}
										height={24}
										priority
									/>
								</div>
								<div>
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
						<div className='flex flex-col space-y-8 pt-12'>
							<div className='text-center space-y-2'>
								<div className='flex justify-center'>
									<h3 className='bg-white px-6 py-1 rounded-full text-[#88171d]'>
										10+ Tahun
									</h3>
								</div>
								<h4 className='text-lg'>melayani jabodetabek</h4>
							</div>
							<div className='text-center space-y-2'>
								<div className='flex justify-center'>
									<h3 className='bg-white px-6 py-1 rounded-full text-[#88171d]'>
										25.000
									</h3>
								</div>
								<h4 className='text-lg'>acara telah kami dampingi</h4>
							</div>
							<div className='text-center space-y-2'>
								<div className='flex justify-center'>
									<h3 className='bg-white px-6 py-1 rounded-full text-[#88171d]'>
										+2.000.000
									</h3>
								</div>
								<h4 className='text-lg'>
									porsi telah dinikmati Sahabat <br />
									Humani Catering Service
								</h4>
							</div>
						</div>
					</section>

					<section
						id='footer'
						className='flex space-x-12 px-4 pt-6 bg-[#88171d] pb-36'>
						<div className='text-[#88171d]'>
							<Image
								src='/logo.png'
								alt='Humani Food Logo'
								width={100}
								height={24}
								priority
							/>
						</div>
						<div className='text-white space-y-6'>
							<div id='workshop'>
								<h4 className='text-lg font-bold'>Workshop</h4>
								<div>
									Jalan Anggrek No. 57C <br />
									Kel. Curug, Kec. Cimanggis <br />
									Kota Depok - Jawa Barat
								</div>
							</div>
							<div id='customer-care'>
								<h4 className='text-lg font-bold'>Customer Care</h4>
								<div>
									WhatsApp - 087 888 111 778 <br />
								</div>
							</div>
						</div>
					</section>
					<section
						id='help'
						className='relative'>
						<OpenCloseCS
							no={customerService.wa}
							content={customerService.content}
							isFull={false}
						/>
					</section>
				</div>
			</div>
		</main>
	);
}
