"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { OpenCloseCS } from "./components/help/openCloseCS";
import { iconHalal } from "./components/icon/halal/halal";
import { iconConsult } from "./components/icon/consult/consult";
import { iconRight, iconSatSetService, iconSuperTeam } from "./components/icon";
import Typewriter from "typewriter-effect";
import { useAnimation, motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const [controlsService] = [useAnimation()];
  const [controlsServiceStat] = [useAnimation()];
  const [controlsPelanggan] = [useAnimation()];
  const [refService, inViewService, entryService] = useInView({ threshold: 0.1 });
  const [refServiceStat, inViewServiceStat] = useInView({ threshold: 0.1 });
  const [refPelanggan, inViewPelanggan] = useInView({ threshold: 0.1 });
  const [isScrolled, setIsScrolled] = useState(false);

  const customerService = {
    wa: `+628129006767`,
    content: `Halo, saya ingin mendapatkan informasi terkait layanan katering Humani`,
  };

  const cardVariants: Variants = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    hidden: { opacity: 0, y: 30 },
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (entryService || inViewService) {
      controlsService.start("visible");
    }
  }, [controlsService, entryService, inViewService]);

  useEffect(() => {
    if (inViewServiceStat) {
      controlsServiceStat.start("visible");
    }
  }, [controlsServiceStat, inViewServiceStat]);

  useEffect(() => {
    if (inViewPelanggan) {
      controlsPelanggan.start("visible");
    }
  }, [controlsPelanggan, inViewPelanggan]);

  return (
    <main className="relative min-h-screen flex flex-col items-center overflow-x-hidden bg-gradient-to-br from-[#faf8f5] via-white to-[#fdf7f4] text-[#2d2d2d] selection:bg-[#88171d] selection:text-white">
      {/* Background Masked Corner Graphics - humanicatering.id aesthetic */}
      <div className="absolute top-0 left-0 w-[70vw] h-[70vw] sm:w-[50vw] sm:h-[50vw] md:w-[40vw] md:h-[40vw] max-w-[600px] max-h-[600px] pointer-events-none z-0">
        <div className="relative w-full h-full [mask-image:radial-gradient(circle_at_top_left,black_20%,transparent_70%)]">
          <Image
            src="/catering_top_left.jpg"
            alt="Catering Ingredients"
            fill
            className="object-cover mix-blend-multiply opacity-30 md:opacity-40"
            priority
          />
        </div>
      </div>

      <div className="absolute bottom-0 right-0 w-[80vw] h-[80vw] sm:w-[60vw] sm:h-[60vw] md:w-[50vw] md:h-[50vw] max-w-[800px] max-h-[800px] pointer-events-none z-0">
        <div className="relative w-full h-full [mask-image:radial-gradient(circle_at_bottom_right,black_20%,transparent_70%)]">
          <Image
            src="/catering_bottom_right.jpg"
            alt="Catering Spread"
            fill
            className="object-cover mix-blend-multiply opacity-30 md:opacity-40"
          />
        </div>
      </div>

      {/* Ambient Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-red-100/40 rounded-full filter blur-[90px] md:blur-[120px] pointer-events-none"></div>
      <div className="absolute top-2/3 right-1/4 w-72 h-72 md:w-96 md:h-96 bg-orange-100/40 rounded-full filter blur-[90px] md:blur-[120px] pointer-events-none"></div>

      {/* Glassmorphic Fixed Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "backdrop-blur-xl bg-white/90 border-b border-gray-100/90 shadow-[0_4px_20px_rgba(0,0,0,0.04)] py-2 sm:py-3"
            : "backdrop-blur-md bg-white/60 border-b border-transparent py-3 sm:py-5"
        }`}
      >
        <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between transition-all duration-300">
          <Link href="/" className="relative flex items-center group shrink-0">
            <div
              className={`relative transition-all duration-300 group-hover:scale-105 ${
                isScrolled ? "w-28 sm:w-40 h-9 sm:h-11" : "w-32 sm:w-44 h-10 sm:h-12"
              }`}
            >
              <Image
                src="/logo-red.png"
                alt="Humani Catering Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          <div className="flex items-center space-x-2 sm:space-x-6">
            {/* Certification Badges */}
            <div className="hidden sm:flex items-center space-x-1.5 md:space-x-2 bg-white/90 backdrop-blur-md border border-red-100/80 px-3 py-1.5 rounded-full shadow-[0_2px_10px_rgba(136,23,29,0.04)] hover:shadow-[0_4px_16px_rgba(136,23,29,0.08)] transition-all duration-300">
              <div className="hidden lg:flex items-center gap-1.5 pr-2 mr-0.5 border-r border-gray-100 text-xs font-bold text-[#88171d]">
                <svg className="w-3.5 h-3.5 text-[#88171d]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Tersertifikasi</span>
              </div>

              {/* ISO 22000 */}
              <div className="group/badge relative flex items-center justify-center px-1.5 py-0.5 rounded-lg hover:bg-red-50/60 transition-colors duration-200 cursor-default">
                <div className="relative w-10 h-6 flex items-center justify-center transition-transform duration-200 group-hover/badge:scale-110">
                  <Image src="/icon/iso.png" alt="ISO 22000 Food Safety" width={40} height={24} className="object-contain max-h-6 w-auto" />
                </div>
                <div className="absolute -bottom-9 left-1/2 -translate-x-1/2 opacity-0 pointer-events-none group-hover/badge:opacity-100 transition-all duration-200 z-50 whitespace-nowrap bg-gray-900 text-white text-xs font-medium py-1 px-3 rounded-md shadow-lg">
                  ISO 22000 Food Safety
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 border-4 border-transparent border-b-gray-900"></div>
                </div>
              </div>

              <div className="w-px h-3.5 bg-gray-200/80"></div>

              {/* HALAL */}
              <div className="group/badge relative flex items-center justify-center px-1.5 py-0.5 rounded-lg hover:bg-red-50/60 transition-colors duration-200 cursor-default">
                <div className="relative w-10 h-6 flex items-center justify-center transition-transform duration-200 group-hover/badge:scale-110">
                  <Image src="/icon/halal.png" alt="Halal MUI Certified" width={40} height={24} className="object-contain max-h-6 w-auto" />
                </div>
                <div className="absolute -bottom-9 left-1/2 -translate-x-1/2 opacity-0 pointer-events-none group-hover/badge:opacity-100 transition-all duration-200 z-50 whitespace-nowrap bg-gray-900 text-white text-xs font-medium py-1 px-3 rounded-md shadow-lg">
                  100% Halal MUI
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 border-4 border-transparent border-b-gray-900"></div>
                </div>
              </div>

              <div className="w-px h-3.5 bg-gray-200/80"></div>

              {/* SLHS */}
              <div className="group/badge relative flex items-center justify-center px-1.5 py-0.5 rounded-lg hover:bg-red-50/60 transition-colors duration-200 cursor-default">
                <div className="relative w-10 h-6 flex items-center justify-center transition-transform duration-200 group-hover/badge:scale-110">
                  <Image src="/icon/slhs.png" alt="Sertifikat Laik Higiene Sanitasi" width={40} height={24} className="object-contain max-h-6 w-auto" />
                </div>
                <div className="absolute -bottom-9 left-1/2 -translate-x-1/2 opacity-0 pointer-events-none group-hover/badge:opacity-100 transition-all duration-200 z-50 whitespace-nowrap bg-gray-900 text-white text-xs font-medium py-1 px-3 rounded-md shadow-lg">
                  Laik Higiene Sanitasi (SLHS)
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 border-4 border-transparent border-b-gray-900"></div>
                </div>
              </div>
            </div>

            {/* Direct Header CTA Button */}
            <a
              href={`https://wa.me/${customerService.wa}?text=${customerService.content}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-base font-bold text-white bg-gradient-to-r from-[#88171d] to-[#c42828] hover:from-[#a62020] hover:to-[#88171d] shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 shrink-0"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              <span>Hubungi CS</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-14 sm:pt-32 md:pt-36 md:pb-24 flex flex-col items-center text-center">
        {/* Top Tagline Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-red-50/90 border border-red-100 text-[#88171d] text-xs sm:text-base font-semibold shadow-2xs mb-6 sm:mb-8 animate-fade-in max-w-full">
          <span className="flex h-2.5 w-2.5 rounded-full bg-[#88171d] shrink-0"></span>
          <span className="truncate sm:overflow-visible">Solusi Katering Profesional &amp; Terpercaya se-Jabodetabek</span>
        </div>

        {/* Dynamic Typewriter Headline */}
        <div className="w-full max-w-4xl min-h-[6rem] sm:min-h-[7rem] md:min-h-[6.5rem] flex items-center justify-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-[#88171d] leading-tight sm:leading-tight">
            <Typewriter
              options={{
                strings: [
                  "Apapun Acaranya ...",
                  "Berapapun Jumlahnya ...",
                  "Kapanpun Waktunya ...",
                  "Beragampun Menunya ...",
                  "Berapapun Biayanya ...",
                ],
                autoStart: true,
                loop: true,
                delay: 60,
                deleteSpeed: 40,
              }}
            />
          </h1>
        </div>

        {/* Hero Value Prop Description */}
        <p className="mt-5 sm:mt-8 text-base sm:text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0 font-normal">
          <strong className="text-[#88171d] font-bold">Humani Catering Service (HCS)</strong> siap menghadirkan sajian nusantara lezat, higienis, dan tepat waktu untuk berbagai kebutuhan acara keluarga, kantor, hingga korporasi besar.
        </p>

        {/* Hero Call to Action Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4 w-full sm:w-auto px-2 sm:px-0">
          <a
            href={`https://wa.me/${customerService.wa}?text=${customerService.content}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center w-full sm:w-auto px-7 py-4 sm:px-9 sm:py-4.5 text-base sm:text-xl font-bold text-white bg-gradient-to-r from-[#88171d] via-[#a62020] to-[#c42828] rounded-full shadow-lg shadow-red-950/20 hover:shadow-xl hover:shadow-red-950/30 hover:-translate-y-1 transition-all duration-300 overflow-hidden min-h-[52px]"
          >
            <span className="relative z-10 flex items-center gap-2.5">
              <span>Konsultasi Menu Gratis</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1.5">{iconRight}</span>
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </a>

          <a
            href="#keunggulan"
            className="inline-flex items-center justify-center w-full sm:w-auto px-7 py-4 sm:px-8 sm:py-4.5 text-base sm:text-lg font-bold text-[#88171d] bg-white/90 border border-red-100/80 rounded-full hover:bg-red-50/80 shadow-2xs hover:shadow-sm transition-all duration-300 min-h-[52px]"
          >
            Jelajahi Keunggulan
          </a>
        </div>

        {/* Feature Highlights Trust Chips */}
        <div className="mt-12 sm:mt-16 w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-left">
          <div className="bg-white/80 backdrop-blur-md border border-white p-3.5 sm:p-4 rounded-xl sm:rounded-2xl shadow-xs flex items-center gap-3">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-red-50 flex items-center justify-center text-[#88171d] shrink-0 font-bold text-base sm:text-xl">
              ⚡
            </div>
            <div>
              <div className="text-sm sm:text-base font-extrabold text-[#88171d]">SatSet Service</div>
              <div className="text-xs sm:text-sm text-gray-600 font-medium">1.5 Jam Siap Kirim</div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-md border border-white p-3.5 sm:p-4 rounded-xl sm:rounded-2xl shadow-xs flex items-center gap-3">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-red-50 flex items-center justify-center text-[#88171d] shrink-0 font-bold text-base sm:text-xl">
              🍽️
            </div>
            <div>
              <div className="text-sm sm:text-base font-extrabold text-[#88171d]">Porsi Fleksibel</div>
              <div className="text-xs sm:text-sm text-gray-600 font-medium">10 s/d Ribuan Porsi</div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-md border border-white p-3.5 sm:p-4 rounded-xl sm:rounded-2xl shadow-xs flex items-center gap-3">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-red-50 flex items-center justify-center text-[#88171d] shrink-0 font-bold text-base sm:text-xl">
              🕒
            </div>
            <div>
              <div className="text-sm sm:text-base font-extrabold text-[#88171d]">Siap 24 Jam</div>
              <div className="text-xs sm:text-sm text-gray-600 font-medium">Waktu Pengantaran</div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-md border border-white p-3.5 sm:p-4 rounded-xl sm:rounded-2xl shadow-xs flex items-center gap-3">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-red-50 flex items-center justify-center text-[#88171d] shrink-0 font-bold text-base sm:text-xl">
              🌿
            </div>
            <div>
              <div className="text-sm sm:text-base font-extrabold text-[#88171d]">Halal &amp; Thayyib</div>
              <div className="text-xs sm:text-sm text-gray-600 font-medium">ISO 22000 &amp; SLHS</div>
            </div>
          </div>
        </div>
      </section>

      {/* Keunggulan Kami Section (Bento Grid) */}
      <section id="keunggulan" className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#88171d] tracking-tight">
            Mengapa Memilih Humani Catering?
          </h2>
          <p className="mt-3 text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
            Komitmen kami untuk selalu memberikan sajian terbaik dengan standar kebersihan, rasa, dan pelayanan prima.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Card 1 */}
          <div className="bg-white/80 backdrop-blur-xl border border-white/80 p-6 sm:p-7 md:p-8 rounded-2xl sm:rounded-3xl shadow-[0_15px_30px_rgba(136,23,29,0.04)] hover:shadow-[0_20px_40px_rgba(136,23,29,0.08)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#88171d] to-[#c42828] text-white flex items-center justify-center shadow-md shadow-red-950/15 mb-5 sm:mb-6">
                {iconConsult}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#88171d] mb-2.5">Catering Consultant</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Konsultasikan kebutuhan menu, selera hidangan, dan budget acara Anda secara gratis dengan tim ahli kami.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center text-xs sm:text-sm font-bold text-[#88171d]">
              Solusi Budget Tepat
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white/80 backdrop-blur-xl border border-white/80 p-6 sm:p-7 md:p-8 rounded-2xl sm:rounded-3xl shadow-[0_15px_30px_rgba(136,23,29,0.04)] hover:shadow-[0_20px_40px_rgba(136,23,29,0.08)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#88171d] to-[#c42828] text-white flex items-center justify-center shadow-md shadow-red-950/15 mb-5 sm:mb-6">
                {iconSatSetService}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#88171d] mb-2.5">SatSet Service</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Layanan pengantaran kilat 1.5 jam siap kirim dengan jaminan ketepatan waktu pengantaran 24 jam.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center text-xs sm:text-sm font-bold text-[#88171d]">
              Cepat &amp; Tepat Waktu
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white/80 backdrop-blur-xl border border-white/80 p-6 sm:p-7 md:p-8 rounded-2xl sm:rounded-3xl shadow-[0_15px_30px_rgba(136,23,29,0.04)] hover:shadow-[0_20px_40px_rgba(136,23,29,0.08)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#88171d] to-[#c42828] text-white flex items-center justify-center shadow-md shadow-red-950/15 mb-5 sm:mb-6">
                {iconSuperTeam}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#88171d] mb-2.5">Super Team</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Didukung chef dan tenaga profesional berpengalaman puluhan tahun dalam mengelola hidangan berskala besar.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center text-xs sm:text-sm font-bold text-[#88171d]">
              Tenaga Terlatih
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white/80 backdrop-blur-xl border border-white/80 p-6 sm:p-7 md:p-8 rounded-2xl sm:rounded-3xl shadow-[0_15px_30px_rgba(136,23,29,0.04)] hover:shadow-[0_20px_40px_rgba(136,23,29,0.08)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#88171d] to-[#c42828] text-white flex items-center justify-center shadow-md shadow-red-950/15 mb-5 sm:mb-6">
                {iconHalal}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#88171d] mb-2.5">Halal &amp; Thayyiban</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Proses masak higienis tersertifikasi Halal MUI, standar ISO 22000, serta Sertifikat Laik Higiene Sanitasi (SLHS).
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center text-xs sm:text-sm font-bold text-[#88171d]">
              Higienis &amp; Teruji
            </div>
          </div>
        </div>
      </section>

      {/* Story & Milestones Section */}
      <section id="komitmen-kami" className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Company Story Card */}
          <motion.div
            ref={refService}
            animate={controlsService}
            initial="hidden"
            variants={cardVariants}
            className="lg:col-span-7 bg-white/90 backdrop-blur-2xl border border-white/80 p-6 sm:p-10 md:p-12 rounded-3xl sm:rounded-[2.5rem] shadow-[0_20px_50px_rgba(136,23,29,0.06)] flex flex-col justify-between"
          >
            <div>
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#88171d] bg-red-50/90 border border-red-100/80 px-4 py-1.5 rounded-full mb-5">
                <span className="w-2 h-2 rounded-full bg-[#88171d]"></span>
                Tentang Humanifood
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#88171d] tracking-tight leading-tight mb-5">
                Berdedikasi Melayani Sajian Terbaik Sejak 2012
              </h2>
              <div className="space-y-4 text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed font-normal">
                <p>
                  <strong className="text-[#88171d] font-bold">Humani Catering Service</strong> berdiri sejak bulan Oktober 2012 di Jakarta dan saat ini berdomisili usaha di Cimanggis, Depok, Jawa Barat.
                </p>
                <p>
                  Dengan bendera Humanifood kami telah dipercaya melayani berbagai perusahaan dari beragam industri ternama mulai dari pertelevisian, energi, telekomunikasi, farmasi, hingga acara instansi dan keluarga.
                </p>
                <p>
                  Dukungan tim tenaga profesional kami siap menyajikan sajian istimewa dalam kapasitas kecil maupun besar dengan mutu dan rasa yang konsisten.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap items-center gap-4 text-xs sm:text-sm font-semibold text-gray-500">
              <span className="flex items-center gap-1.5 text-[#88171d]">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Legalitas Resmi
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 text-[#88171d]">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Dapur Higienis
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 text-[#88171d]">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Kapasitas Besar
              </span>
            </div>
          </motion.div>

          {/* Stats Counter Card */}
          <motion.div
            ref={refServiceStat}
            animate={controlsServiceStat}
            initial="hidden"
            variants={cardVariants}
            className="lg:col-span-5 relative overflow-hidden bg-gradient-to-br from-[#88171d] via-[#751217] to-[#500b0e] text-white p-6 sm:p-8 md:p-10 rounded-3xl sm:rounded-[2.5rem] shadow-xl shadow-red-950/25 flex flex-col justify-between"
          >
            {/* Ambient Background Accents */}
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>
            <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-black/20 rounded-full blur-2xl pointer-events-none"></div>

            <div className="relative z-10 flex flex-col h-full justify-between gap-5">
              <div className="inline-flex items-center gap-2 self-start text-xs sm:text-sm font-bold uppercase tracking-wider text-red-200 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10">
                <span>⭐</span>
                Rekam Jejak &amp; Prestasi
              </div>

              {/* 3 Stat Cards that stretch evenly */}
              <div className="grid grid-cols-1 gap-3.5 sm:gap-4 flex-1 my-1">
                {/* Stat 1 */}
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/10 hover:bg-white/15 transition-all duration-300 flex items-center justify-between gap-4">
                  <div>
                    <div className="text-2xl sm:text-3xl xl:text-4xl font-black tracking-tight text-white mb-0.5">
                      +12 Tahun
                    </div>
                    <div className="text-xs sm:text-sm text-red-100 font-medium">
                      Melayani area Jabodetabek sejak 2012
                    </div>
                  </div>
                  <div className="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center text-xl shrink-0">
                    🏆
                  </div>
                </div>

                {/* Stat 2 */}
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/10 hover:bg-white/15 transition-all duration-300 flex items-center justify-between gap-4">
                  <div>
                    <div className="text-2xl sm:text-3xl xl:text-4xl font-black tracking-tight text-white mb-0.5">
                      +25.000
                    </div>
                    <div className="text-xs sm:text-sm text-red-100 font-medium">
                      Acara sukses telah kami dampingi
                    </div>
                  </div>
                  <div className="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center text-xl shrink-0">
                    🎉
                  </div>
                </div>

                {/* Stat 3 */}
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/10 hover:bg-white/15 transition-all duration-300 flex items-center justify-between gap-4">
                  <div>
                    <div className="text-2xl sm:text-3xl xl:text-4xl font-black tracking-tight text-white mb-0.5">
                      +20.000.000
                    </div>
                    <div className="text-xs sm:text-sm text-red-100 font-medium">
                      Porsi telah dinikmati Sahabat Humani
                    </div>
                  </div>
                  <div className="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center text-xl shrink-0">
                    🍽️
                  </div>
                </div>
              </div>

              {/* Bottom Guarantee Banner */}
              <div className="pt-4 border-t border-white/15 flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm text-red-100 font-semibold">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                  Kapasitas 10 s/d Ribuan Porsi
                </span>
                <span className="text-white font-bold">100% Halal &amp; Higienis</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pelanggan Setia Kami (Client Showcase) */}
      <section id="customer" className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 md:py-20 text-center">
        <div className="max-w-3xl mx-auto mb-6 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#88171d] tracking-tight">
            Pelanggan Setia Kami
          </h2>
          <p className="mt-3 text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
            Dipercaya oleh berbagai instansi, perusahaan multinasional, BUMN, dan ribuan keluarga di Jabodetabek.
          </p>
        </div>

        <motion.div
          ref={refPelanggan}
          animate={controlsPelanggan}
          initial="hidden"
          variants={cardVariants}
          className="w-full max-w-4xl mx-auto bg-white/80 backdrop-blur-xl border border-white p-3 sm:p-6 md:p-8 rounded-2xl sm:rounded-[2rem] shadow-[0_20px_50px_rgba(136,23,29,0.06)]"
        >
          <div className="relative w-full h-56 sm:h-[24rem] md:h-[30rem] rounded-xl overflow-hidden">
            <Image
              src="/client/pelanggan-kami.jpg"
              alt="Pelanggan Setia Humani Catering Service"
              fill
              className="object-contain"
            />
          </div>
        </motion.div>
      </section>

      {/* High-Conversion CTA Banner */}
      <section className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 md:py-20">
        <div className="relative overflow-hidden rounded-3xl sm:rounded-[2.5rem] bg-gradient-to-r from-[#88171d] via-[#a62020] to-[#c42828] text-white p-6 sm:p-12 md:p-16 text-center shadow-2xl shadow-red-950/25">
          {/* Background Decorative Rings */}
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full border-8 border-white/10 pointer-events-none"></div>
          <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full border-8 border-white/10 pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl mx-auto space-y-4 sm:space-y-6">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight">
              Anda Fokus Acaranya, Kami Urus Sajiannya.
            </h2>
            <p className="text-sm sm:text-lg md:text-xl text-red-100 leading-relaxed px-1 sm:px-0 max-w-2xl mx-auto">
              Dari acara keluarga hingga pelayanan perusahaan, beragam pilihan menu eksotik lokal siap diantar dengan SatSet Service. Pemesanan mulai 10 porsi hingga ribuan porsi.
            </p>

            <div className="pt-3 sm:pt-5">
              <a
                href={`https://wa.me/${customerService.wa}?text=${customerService.content}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 sm:gap-3.5 w-full sm:w-auto px-7 py-4 sm:px-12 sm:py-5 rounded-full text-base sm:text-xl font-extrabold text-[#88171d] bg-white hover:bg-red-50 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 min-h-[54px]"
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  className="shrink-0 text-green-600 sm:w-8 sm:h-8"
                >
                  <path
                    fill="currentColor"
                    d="M23.328 19.177c-.401-.203-2.354-1.156-2.719-1.292c-.365-.13-.63-.198-.896.203c-.26.391-1.026 1.286-1.26 1.547s-.464.281-.859.104c-.401-.203-1.682-.62-3.203-1.984c-1.188-1.057-1.979-2.359-2.214-2.76c-.234-.396-.026-.62.172-.818c.182-.182.401-.458.604-.698c.193-.24.255-.401.396-.661c.13-.281.063-.5-.036-.698s-.896-2.161-1.229-2.943c-.318-.776-.651-.677-.896-.677c-.229-.021-.495-.021-.76-.021s-.698.099-1.063.479c-.365.401-1.396 1.359-1.396 3.297c0 1.943 1.427 3.823 1.625 4.104c.203.26 2.807 4.26 6.802 5.979c.953.401 1.693.641 2.271.839c.953.302 1.823.26 2.51.161c.76-.125 2.354-.964 2.688-1.901c.339-.943.339-1.724.24-1.901c-.099-.182-.359-.281-.76-.458zM16.083 29h-.021c-2.365 0-4.703-.641-6.745-1.839l-.479-.286l-5 1.302l1.344-4.865l-.323-.5a13.166 13.166 0 0 1-2.021-7.01c0-7.26 5.943-13.182 13.255-13.182c3.542 0 6.865 1.38 9.365 3.88a13.058 13.058 0 0 1 3.88 9.323C29.328 23.078 23.39 29 16.088 29zM27.359 4.599C24.317 1.661 20.317 0 16.062 0C7.286 0 .14 7.115.135 15.859c0 2.792.729 5.516 2.125 7.927L0 32l8.448-2.203a16.13 16.13 0 0 0 7.615 1.932h.005c8.781 0 15.927-7.115 15.932-15.865c0-4.234-1.651-8.219-4.661-11.214z"
                  />
                </svg>
                <span>Chat Customer Service Sekarang</span>
              </a>
              <div className="mt-3 text-xs sm:text-sm text-red-200 font-medium">⚡ Respons Cepat dalam hitungan menit</div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Contact Section & Footer */}
      <footer id="kontak-kami" className="relative z-10 w-full bg-white/90 backdrop-blur-md border-t border-gray-100 py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pb-10 border-b border-gray-100">
            {/* Brand column */}
            <div className="sm:col-span-2 md:col-span-1 flex flex-col items-start space-y-4">
              <div className="relative w-36 sm:w-44 h-12 sm:h-14">
                <Image
                  src="/logo-red.png"
                  alt="Humani Catering Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Solusi katering lezat, higienis, dan terpercaya untuk segala acara Anda di seluruh wilayah Jabodetabek.
              </p>
            </div>

            {/* Layanan Pelanggan */}
            <div className="space-y-2 sm:space-y-3">
              <div className="text-sm sm:text-base font-bold uppercase tracking-wider text-[#88171d]">
                Layanan Pelanggan
              </div>
              <div className="text-xs sm:text-sm text-gray-600">Whatsapp Resmi</div>
              <div className="text-lg sm:text-xl font-black text-[#88171d] hover:underline">
                <Link
                  href={`https://wa.me/${customerService.wa}?text=${customerService.content}`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  0812 9006 767
                </Link>
              </div>
            </div>

            {/* Waktu Pelayanan */}
            <div className="space-y-2 sm:space-y-3">
              <div className="text-sm sm:text-base font-bold uppercase tracking-wider text-[#88171d]">
                Waktu Pelayanan
              </div>
              <div className="text-xs sm:text-sm text-gray-600">Senin - Sabtu</div>
              <div className="text-base sm:text-lg font-bold text-[#2d2d2d]">
                08.00 - 17.00
              </div>
              <div className="text-xs sm:text-sm text-gray-500 font-medium">Pengantaran katering siap 24 jam</div>
            </div>

            {/* Alamat Dapur */}
            <div className="space-y-2 sm:space-y-3">
              <div className="text-sm sm:text-base font-bold uppercase tracking-wider text-[#88171d]">
                Sentra Dapur
              </div>
              <div className="text-xs sm:text-sm text-gray-600 leading-relaxed font-medium">
                Jalan Anggrek No. 57C <br />
                Cimanggis Depok <br />
                Jawa Barat - 16453
              </div>
            </div>
          </div>

          <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-gray-500 text-center sm:text-left">
            <div>&#169; {new Date().getFullYear()} Humani Catering Service. All rights reserved.</div>
            <div className="flex items-center space-x-4 sm:space-x-6 text-gray-600 font-semibold text-xs sm:text-sm">
              <span>Halal MUI</span>
              <span>•</span>
              <span>ISO 22000</span>
              <span>•</span>
              <span>SLHS Kemenkes</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Help Widget */}
      <section id="help" className="relative">
        <OpenCloseCS
          no={customerService.wa}
          content={customerService.content}
          isFull={false}
        />
      </section>
    </main>
  );
}
