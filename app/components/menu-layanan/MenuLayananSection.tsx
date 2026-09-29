"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { menuLayanan, IMenuLayanan } from "../../menu-layanan";

interface MenuLayananSectionProps {
	waNumber?: string;
}

const AUTOPLAY_INTERVAL = 5000; // 5 seconds per slide for desktop

const SERVICE_META: Record<
	string,
	{ icon: string; tag: string; perks: string[] }
> = {
	"d7ebd109-af56-4b0c-928a-0879ed0e2f50": {
		icon: "🤝",
		tag: "Sedekah & Berkah",
		perks: [
			"Amanah, Halal & Tepat Sasaran",
			"Dokumentasi & Laporan Distribusi",
			"Porsi Higienis & Siap Santap",
			"Program Berbagi & Jumat Berkah",
		],
	},
	"2f733290-3b09-4be3-9150-c3cc4e5c17e3": {
		icon: "🍲",
		tag: "Acara Besar & Gathering",
		perks: [
			"Hidangan Pembuka s/d Penutup Lengkap",
			"Peralatan & Dekorasi Prasmanan Elegan",
			"Staf & Waiter Profesional",
			"Kapasitas 50 s/d Ribuan Tamu",
		],
	},
	"70e76966-77ac-48ae-ae7b-83aa3574e2f3": {
		icon: "🎁",
		tag: "Momen Spesial & Bingkisan",
		perks: [
			"Kemasan Premium & Eksklusif",
			"Pilihan Menu Kuliner Istimewa",
			"Bisa Sertakan Kartu Ucapan Khusus",
			"Tanda Apresiasi & Kasih Sayang",
		],
	},
	"7c31cc03-6b58-4c31-842a-314bff10dc6a": {
		icon: "🥪",
		tag: "Rapat, Seminar & Acara",
		perks: [
			"Kudapan Tradisional & Modern",
			"Kombinasi Rasa Manis & Gurih",
			"Freshly Made Setiap Hari",
			"Kemasan Kotak Mini Rapi & Higienis",
		],
	},
	"18615efd-3df9-43b1-a165-9db6f52d59d4": {
		icon: "🍱",
		tag: "Best Seller Nusantara",
		perks: [
			"Pilihan Nasi Besek, Tumpeng Mini & Bento",
			"Cita Rasa Otentik Rempah Nusantara",
			"100% Halal MUI & Higienis",
			"Kapasitas Order Fleksibel",
		],
	},
};

const slideVariants: Variants = {
	enter: (direction: number) => ({
		x: direction > 0 ? 30 : -30,
		opacity: 0,
		scale: 0.98,
	}),
	center: {
		x: 0,
		opacity: 1,
		scale: 1,
		transition: {
			x: { type: "spring", stiffness: 300, damping: 30 },
			opacity: { duration: 0.35 },
		},
	},
	exit: (direction: number) => ({
		x: direction > 0 ? -30 : 30,
		opacity: 0,
		scale: 0.98,
		transition: {
			x: { type: "spring", stiffness: 300, damping: 30 },
			opacity: { duration: 0.25 },
		},
	}),
};

export default function MenuLayananSection({
	waNumber = "+628129006767",
}: MenuLayananSectionProps) {
	const sortedMenus = [...menuLayanan].sort((a, b) => a.order - b.order);
	const [currentIndex, setCurrentIndex] = useState<number>(0);
	const [direction, setDirection] = useState<number>(1);
	const [isPaused, setIsPaused] = useState<boolean>(false);
	const [progressKey, setProgressKey] = useState<number>(0);

	const activeItem = sortedMenus[currentIndex] || sortedMenus[0];
	const activeMeta = SERVICE_META[activeItem.uuid] || {
		icon: "🍽️",
		tag: "Pilihan Layanan",
		perks: [
			"100% Halal & Higienis",
			"Bahan Baku Berkualitas",
			"Pelayanan Tepat Waktu",
		],
	};

	const cleanWaNumber = waNumber.replace(/[^0-9]/g, "");

	const handleNext = useCallback(() => {
		setDirection(1);
		setCurrentIndex((prev) => (prev + 1) % sortedMenus.length);
		setProgressKey((prev) => prev + 1);
	}, [sortedMenus.length]);

	const handlePrev = useCallback(() => {
		setDirection(-1);
		setCurrentIndex(
			(prev) => (prev - 1 + sortedMenus.length) % sortedMenus.length
		);
		setProgressKey((prev) => prev + 1);
	}, [sortedMenus.length]);

	const handleSelect = useCallback(
		(index: number) => {
			if (index === currentIndex) return;
			setDirection(index > currentIndex ? 1 : -1);
			setCurrentIndex(index);
			setProgressKey((prev) => prev + 1);
		},
		[currentIndex]
	);

	// Auto-play timer for desktop slider
	useEffect(() => {
		if (isPaused) return;

		const timer = setInterval(() => {
			handleNext();
		}, AUTOPLAY_INTERVAL);

		return () => clearInterval(timer);
	}, [isPaused, handleNext]);

	const desktopWaMessage = encodeURIComponent(
		`Halo Humani Catering, saya tertarik untuk konsultasi dan pemesanan layanan *${activeItem.name}*. Mohon info menu dan penawarannya.`
	);
	const desktopWaUrl = `https://wa.me/${cleanWaNumber}?text=${desktopWaMessage}`;

	return (
		<section
			id="menu-layanan"
			className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24"
		>
			{/* Section Header (Shared for Mobile & Desktop) */}
			<div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12">
				<motion.div
					initial={{ opacity: 0, y: -10 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50/90 border border-red-200/80 text-[#88171d] text-xs sm:text-sm font-bold tracking-wide uppercase mb-3 sm:mb-4 shadow-sm backdrop-blur-sm"
				>
					<span className="text-base">✨</span>
					<span>RAGAM MENU &amp; LAYANAN</span>
				</motion.div>
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.1 }}
					className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#88171d] tracking-tight"
				>
					Pilihan Katering untuk Segala Momen
				</motion.h2>
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed"
				>
					Dari santapan harian, konsumsi acara keluarga, hingga
					prasmanan ribuan porsi — disajikan halalan thayyiban dengan
					standar cita rasa terbaik.
				</motion.p>
			</div>

			{/* =================================================================== */}
			{/* 1. DESKTOP & TABLET VIEW: Interactive Auto-Play Spotlight Slider  */}
			{/* =================================================================== */}
			<div className="hidden md:block">
				{/* Top Category Tabs Switcher */}
				<div className="flex items-center justify-center overflow-x-auto no-scrollbar pb-3 mb-8 gap-3 px-1">
					{sortedMenus.map((item, index) => {
						const isSelected = index === currentIndex;
						const meta = SERVICE_META[item.uuid];

						return (
							<button
								key={item.uuid}
								onClick={() => handleSelect(index)}
								className={`relative shrink-0 flex items-center gap-2 px-5 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
									isSelected
										? "text-white shadow-lg shadow-red-900/20"
										: "bg-white/80 hover:bg-white text-gray-700 hover:text-[#88171d] border border-gray-200/80 shadow-sm"
								}`}
							>
								{isSelected && (
									<motion.div
										layoutId="activeTabIndicator"
										className="absolute inset-0 bg-gradient-to-r from-[#88171d] to-[#a82027] rounded-full"
										transition={{
											type: "spring",
											stiffness: 400,
											damping: 30,
										}}
									/>
								)}
								<span className="relative z-10 text-lg">
									{meta?.icon || "🍽️"}
								</span>
								<span className="relative z-10 whitespace-nowrap">
									{item.name}
								</span>
							</button>
						);
					})}
				</div>

				{/* Spotlight Auto-Play Container */}
				<div
					onMouseEnter={() => setIsPaused(true)}
					onMouseLeave={() => setIsPaused(false)}
					className="relative bg-white/95 backdrop-blur-2xl border border-white rounded-[2.5rem] p-8 md:p-12 shadow-[0_20px_60px_rgba(136,23,29,0.07)] overflow-hidden"
				>
					{/* Progress Countdown Bar */}
					<div className="absolute top-0 left-0 right-0 h-1.5 bg-red-100/60 overflow-hidden">
						<motion.div
							key={progressKey}
							initial={{ width: "0%" }}
							animate={{ width: isPaused ? undefined : "100%" }}
							transition={{
								duration: AUTOPLAY_INTERVAL / 1000,
								ease: "linear",
							}}
							className="h-full bg-gradient-to-r from-[#88171d] to-[#e63946]"
						/>
					</div>

					{/* Prev / Next Controls */}
					<div className="absolute top-8 right-8 z-20 flex items-center gap-2">
						<button
							onClick={handlePrev}
							aria-label="Previous Slide"
							className="w-10 h-10 rounded-full bg-white/90 hover:bg-white border border-gray-200/80 hover:border-[#88171d] text-gray-700 hover:text-[#88171d] flex items-center justify-center font-bold text-lg shadow-sm hover:shadow-md transition-all duration-200 active:scale-95"
						>
							‹
						</button>
						<button
							onClick={handleNext}
							aria-label="Next Slide"
							className="w-10 h-10 rounded-full bg-white/90 hover:bg-white border border-gray-200/80 hover:border-[#88171d] text-gray-700 hover:text-[#88171d] flex items-center justify-center font-bold text-lg shadow-sm hover:shadow-md transition-all duration-200 active:scale-95"
						>
							›
						</button>
					</div>

					{/* Ambient Glow */}
					<div className="absolute top-0 right-0 w-96 h-96 bg-red-100/40 rounded-full filter blur-[100px] pointer-events-none" />
					<div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-100/30 rounded-full filter blur-[90px] pointer-events-none" />

					<AnimatePresence custom={direction} mode="wait">
						<motion.div
							key={activeItem.uuid}
							custom={direction}
							variants={slideVariants}
							initial="enter"
							animate="center"
							exit="exit"
							className="relative z-10 grid grid-cols-12 gap-10 lg:gap-12 items-center"
						>
							{/* Left Column: Proportional 4:3 Image Card */}
							<div className="col-span-5">
								<div className="group relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-gray-100 border border-white/60">
									<Image
										src={activeItem.image}
										alt={activeItem.name}
										fill
										priority
										sizes="50vw"
										className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70" />

									<div className="absolute top-4 left-4 flex flex-wrap gap-2">
										<span className="px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-xs font-black text-[#88171d] shadow-md border border-white/60 flex items-center gap-1.5">
											<span className="w-2 h-2 rounded-full bg-[#88171d] animate-pulse" />
											Layanan #{activeItem.order}
										</span>
									</div>

									<div className="absolute bottom-4 left-4 right-4 text-white">
										<div className="text-xs font-semibold text-red-200 uppercase tracking-wider mb-1">
											{activeMeta.tag}
										</div>
										<div className="text-xl font-bold drop-shadow-md">
											{activeItem.name}
										</div>
									</div>
								</div>
							</div>

							{/* Right Column: Detailed Info & Actions */}
							<div className="col-span-7 flex flex-col justify-between">
								<div>
									<div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-red-50 text-[#88171d] text-xs font-bold uppercase tracking-wider mb-3">
										<span>{activeMeta.icon}</span>
										<span>{activeMeta.tag}</span>
									</div>

									<h3 className="text-3xl lg:text-4xl font-extrabold text-[#2d2d2d] mb-4 tracking-tight">
										{activeItem.name}
									</h3>

									<div
										className="text-base text-gray-600 leading-relaxed mb-6 font-normal [&>p]:mb-0"
										dangerouslySetInnerHTML={{
											__html: activeItem.description,
										}}
									/>

									<div className="mb-8">
										<div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
											Keunggulan Layanan Ini:
										</div>
										<div className="grid grid-cols-2 gap-3">
											{activeMeta.perks.map((perk, i) => (
												<div
													key={i}
													className="flex items-center gap-2.5 text-sm text-gray-700 font-medium bg-red-50/50 hover:bg-red-50 p-2.5 rounded-xl border border-red-100/60 transition-colors"
												>
													<span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#88171d] text-white text-xs font-bold shrink-0">
														✓
													</span>
													<span>{perk}</span>
												</div>
											))}
										</div>
									</div>
								</div>

								<div className="pt-6 border-t border-gray-100 flex items-center justify-between gap-4">
									<motion.div
										whileHover={{ scale: 1.02 }}
										whileTap={{ scale: 0.98 }}
										className="flex-1 max-w-md"
									>
										<Link
											href={desktopWaUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-[#88171d] to-[#a82027] hover:from-[#a82027] hover:to-[#88171d] text-white font-bold text-base shadow-xl shadow-red-900/20 hover:shadow-2xl transition-all duration-300 group/btn"
										>
											<span>
												Pesan / Konsultasi {activeItem.name}
											</span>
											<span className="inline-block transition-transform duration-200 group-hover/btn:translate-x-1.5 text-lg">
												➔
											</span>
										</Link>
									</motion.div>

									<div className="text-xs text-gray-500 font-semibold text-right">
										<div className="text-green-600 flex items-center justify-end gap-1">
											<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
											Respon Cepat via WhatsApp
										</div>
										<div className="text-gray-400 mt-0.5">
											{isPaused
												? "⏸️ Slideshow Dijeda"
												: "▶️ Slideshow Berjalan"}
										</div>
									</div>
								</div>
							</div>
						</motion.div>
					</AnimatePresence>
				</div>

				{/* Bottom Synchronized Thumbnail Deck */}
				<div className="mt-8 grid grid-cols-5 gap-4">
					{sortedMenus.map((item, index) => {
						const isSelected = index === currentIndex;
						const meta = SERVICE_META[item.uuid];

						return (
							<button
								key={item.uuid}
								onClick={() => handleSelect(index)}
								className={`group relative text-left p-4 rounded-2xl transition-all duration-300 ${
									isSelected
										? "bg-white border-2 border-[#88171d] shadow-lg shadow-red-900/10 scale-[1.02]"
										: "bg-white/70 hover:bg-white border border-gray-200/80 hover:border-red-200 shadow-sm hover:shadow-md"
								}`}
							>
								<div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-2.5 bg-gray-100">
									<Image
										src={item.image}
										alt={item.name}
										fill
										sizes="20vw"
										className="object-cover group-hover:scale-105 transition-transform duration-300"
									/>
									{isSelected && (
										<div className="absolute inset-0 bg-[#88171d]/20 border-2 border-[#88171d] rounded-xl" />
									)}
								</div>
								<div className="flex items-center gap-1.5 mb-1">
									<span className="text-xs">{meta?.icon}</span>
									<span className="text-xs font-bold text-gray-500">
										#{item.order}
									</span>
								</div>
								<div
									className={`text-sm font-bold line-clamp-1 transition-colors ${
										isSelected
											? "text-[#88171d]"
											: "text-[#2d2d2d] group-hover:text-[#88171d]"
									}`}
								>
									{item.name}
								</div>
							</button>
						);
					})}
				</div>
			</div>

			{/* =================================================================== */}
			{/* 2. MOBILE WEB VIEW: Full Card Feed (Shows all 5 Menu Layanan)       */}
			{/* =================================================================== */}
			<div className="block md:hidden space-y-6">
				{sortedMenus.map((item) => {
					const meta = SERVICE_META[item.uuid] || {
						icon: "🍽️",
						tag: "Pilihan Layanan",
						perks: ["100% Halal & Higienis", "Bahan Berkualitas"],
					};
					const mobileWaMessage = encodeURIComponent(
						`Halo Humani Catering, saya ingin konsultasi dan pesan layanan *${item.name}*. Mohon informasi daftar menu dan penawarannya.`
					);
					const mobileWaUrl = `https://wa.me/${cleanWaNumber}?text=${mobileWaMessage}`;

					return (
						<motion.div
							key={item.uuid}
							initial={{ opacity: 0, y: 25 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.2 }}
							transition={{ duration: 0.5 }}
							className="bg-white/95 backdrop-blur-xl border border-white hover:border-red-100 rounded-3xl p-5 shadow-[0_12px_35px_rgba(136,23,29,0.06)] overflow-hidden"
						>
							{/* Proportional 4:3 Image */}
							<div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-gray-100 shadow-inner">
								<Image
									src={item.image}
									alt={item.name}
									fill
									sizes="100vw"
									className="object-cover"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

								{/* Badge Layanan */}
								<div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-xs font-black text-[#88171d] shadow-md border border-white/60 flex items-center gap-1.5">
									<span className="w-2 h-2 rounded-full bg-[#88171d] animate-pulse" />
									Layanan #{item.order}
								</div>

								<div className="absolute bottom-3 left-3 right-3 text-white">
									<div className="text-[11px] font-semibold text-red-200 uppercase tracking-wider">
										{meta.tag}
									</div>
								</div>
							</div>

							{/* Category Tag & Title */}
							<div className="mb-2">
								<div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-red-50 text-[#88171d] text-[11px] font-bold uppercase tracking-wider mb-2">
									<span>{meta.icon}</span>
									<span>{meta.tag}</span>
								</div>
								<h3 className="text-xl font-bold text-[#2d2d2d] tracking-tight">
									{item.name}
								</h3>
							</div>

							{/* Description */}
							<div
								className="text-sm text-gray-600 leading-relaxed mb-4 font-normal [&>p]:mb-0"
								dangerouslySetInnerHTML={{
									__html: item.description,
								}}
							/>

							{/* Perks Pills (Compact for mobile) */}
							<div className="mb-5 space-y-1.5">
								{meta.perks.slice(0, 3).map((perk, i) => (
									<div
										key={i}
										className="flex items-center gap-2 text-xs text-gray-700 font-medium bg-red-50/60 px-3 py-1.5 rounded-lg border border-red-100/60"
									>
										<span className="text-[#88171d] font-bold">
											✓
										</span>
										<span>{perk}</span>
									</div>
								))}
							</div>

							{/* WhatsApp Direct CTA Button */}
							<Link
								href={mobileWaUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl bg-gradient-to-r from-[#88171d] to-[#a82027] hover:from-[#a82027] hover:to-[#88171d] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all duration-300"
							>
								<span>Pesan / Konsultasi {item.name}</span>
								<span className="text-base">➔</span>
							</Link>
						</motion.div>
					);
				})}
			</div>
		</section>
	);
}
