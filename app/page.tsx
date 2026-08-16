"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { poppins } from "./font";

export default function Home() {
  const whatsappUrl =
    "https://wa.me/628129006767?text=Halo%2C%20saya%20ingin%20mendapatkan%20informasi%20terkait%20layanan%20ini";

  return (
    <main
      className={`relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#faf8f5] via-white to-[#fdf7f4] p-4 sm:p-8 md:p-24 ${poppins.className}`}
    >
      {/* Premium Catering Corner Backgrounds */}
      
      {/* Top Left Image */}
      <motion.div 
        initial={{ opacity: 0, x: -50, y: -50 }}
        animate={{ opacity: 0.8, x: 0, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-0 left-0 w-[70vw] h-[70vw] sm:w-[50vw] sm:h-[50vw] md:w-[40vw] md:h-[40vw] max-w-[600px] max-h-[600px] pointer-events-none"
      >
        <div className="relative w-full h-full [mask-image:radial-gradient(circle_at_top_left,black_20%,transparent_70%)] -webkit-[mask-image:radial-gradient(circle_at_top_left,black_20%,transparent_70%)]">
          <Image
            src="/catering_top_left.jpg"
            alt="Catering Ingredients"
            fill
            className="object-cover mix-blend-multiply opacity-50 md:opacity-60"
            priority
          />
        </div>
      </motion.div>

      {/* Bottom Right Image */}
      <motion.div 
        initial={{ opacity: 0, x: 50, y: 50 }}
        animate={{ opacity: 0.8, x: 0, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
        className="absolute bottom-0 right-0 w-[80vw] h-[80vw] sm:w-[60vw] sm:h-[60vw] md:w-[50vw] md:h-[50vw] max-w-[800px] max-h-[800px] pointer-events-none"
      >
        <div className="relative w-full h-full [mask-image:radial-gradient(circle_at_bottom_right,black_20%,transparent_70%)] -webkit-[mask-image:radial-gradient(circle_at_bottom_right,black_20%,transparent_70%)]">
          <Image
            src="/catering_bottom_right.jpg"
            alt="Catering Spread"
            fill
            className="object-cover mix-blend-multiply opacity-50 md:opacity-60"
            priority
          />
        </div>
      </motion.div>

      {/* Decorative Blobs (Soft Glows) */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-red-100/30 rounded-full filter blur-[80px] md:blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-orange-100/30 rounded-full filter blur-[80px] md:blur-[100px] pointer-events-none" />

      {/* Main Glassmorphism Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="relative z-10 flex flex-col items-center justify-center w-full max-w-3xl text-center space-y-6 md:space-y-10 bg-white/70 backdrop-blur-2xl border border-white/80 p-8 sm:p-12 md:p-16 rounded-[2rem] md:rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)]"
      >
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="relative w-56 h-20 md:w-80 md:h-32 mb-2 md:mb-4"
        >
          <Image
            src="/logo-red.png"
            alt="Humani Logo"
            fill
            className="object-contain"
            priority
          />
        </motion.div>

        {/* Text Content */}
        <div className="space-y-4 md:space-y-6 px-2">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#2d2d2d] tracking-tight leading-tight"
          >
            Sedang Dalam Perbaikan
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-lg sm:text-xl md:text-2xl text-[#4a4a4a] font-medium"
          >
            Kami sedang melakukan upgrade terhadap layanan kami.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="text-sm sm:text-base md:text-lg text-[#6b6b6b] leading-relaxed max-w-xl mx-auto"
          >
            Kami memohon maaf atas ketidaknyamanan ini. Untuk informasi lebih lanjut atau bantuan, silakan hubungi Customer Service kami.
          </motion.p>
        </div>

        {/* Call to Action Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.5, type: "spring", stiffness: 200 }}
          className="pt-4 md:pt-6 w-full sm:w-auto"
        >
          <Link
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex sm:inline-flex items-center justify-center w-full sm:w-auto px-6 py-4 md:px-10 md:py-5 text-base md:text-lg font-semibold text-white transition-all duration-300 bg-[#c42828] rounded-full hover:bg-[#a62020] focus:outline-none focus:ring-4 focus:ring-red-200 shadow-xl hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
          >
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-full group-hover:h-56 opacity-10"></span>
            <span className="relative flex items-center justify-center gap-3 w-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="md:w-[24px] md:h-[24px] shrink-0" fill="currentColor" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
              </svg>
              <span className="block sm:hidden tracking-wide">Hubungi CS Kami</span>
              <span className="hidden sm:block">Hubungi Customer Service</span>
            </span>
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
}
