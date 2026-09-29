"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { OpenCloseCS } from "./components/help/openCloseCS";
import { iconHalal } from "./components/icon/halal/halal";
import { iconConsult } from "./components/icon/consult/consult";
import { iconRight, iconSatSetService, iconSuperTeam } from "./components/icon";
import Typewriter from "typewriter-effect";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const listInnerRef = useRef(null);
  const [lastPosition, setLastPosition] = useState(0);
  const [opacity, setOpacity] = useState(0);
  const [scrollDirection, setScrollDirection] = useState(
    "down" as "down" | "up" | "end"
  );
  const controlsService = useAnimation();
  const controlsServiceStat = useAnimation();
  const controlsPelanggan = useAnimation();
  const [refService, inViewService, entryService] = useInView();
  const [refServiceStat, inViewServiceStat, entryServiceStat] = useInView();
  const [refPelanggan, inViewPelanggan] = useInView();

  const customerService = {
    wa: `+628129006767`,
    content: `Halo, saya ingin mendapatkan informasi terkait layanan ini`,
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
    if (entryService) {
      controlsService.start("visible");
    }
  }, [controlsService, entryService]);

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
    <main
      className="flex md:h-screen h-screen flex-col items-center justify-between relative overflow-y-scroll"
      ref={listInnerRef}
      onScroll={onScroll}
    >
      <section
        id="wellcome"
        className="relative w-full md:h-screen h-screen flex flex-col bg-white"
      >
        <div
          className={`w-full cover-video md:h-full h-screen bg-cover bg-center`}
          style={{
            backgroundImage: `url(/bg/bg-menu-service.jpg)`,
          }}
        ></div>
        <div className="fixed z-20 w-full font-mono text-sm justify-center flex md:py-0 py-0 lg:px-0 px-4">
          <div className={`bg-header`} style={{ opacity }}></div>
          <div className="max-w-5xl w-full flex justify-between relative py-2">
            <div className="">
              <Image
                src="/logo-white.png"
                alt="Humani Food Logo"
                width={70}
                height={30}
                priority
              />
            </div>
            <div className="flex items-center">
              <div className="md:w-16 w-12 flex justify-center">
                <Image
                  src="/icon/iso.png"
                  alt="Humani Food ISO 22000"
                  width={70}
                  height={24}
                  priority
                />
              </div>
              <div className="md:w-16 w-12 flex justify-center">
                <Image
                  src="/icon/halal.png"
                  alt="Humani Food Sertifikat HALAL"
                  width={70}
                  height={24}
                  priority
                />
              </div>
              <div className="md:w-16 w-12 flex justify-center">
                <Image
                  src="/icon/slhs.png"
                  alt="Humani Food Sertifikat SLHS"
                  width={70}
                  height={24}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute w-full h-full bg-black opacity-50"></div>
        <div className="flex w-full justify-center md:mt-0 mt-16 absolute md:top-36 top-24 cover-slide">
          <div className="flex max-w-5xl w-full md:flex-row flex-col lg:py-24 md:py-16 py-0">
            <div className="md:w-full w-full text-[#ffffff] lg:pt-0 pt-4 flex flex-col ">
              <div className="w-full lg:pr-10 lg:px-0 md:px-4 px-4">
                <h1
                  className="min-h-8 lg:text-5xl md:text-4xl text-3xl font-extrabold tracking-tight md:px-0 px-2 flex flex-col flex-nowrap space-y-2"
                >
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
                    }}
                  />
                </h1>
              </div>

              <div
                className="w-full space-y-4 lg:px-0 px-12 md:pt-10 pt-4 md:px-4 px-6 text-sm md:pb-0 pb-4"
              >
                <div className="text-base">
                  Humani Catering Service (HCS) selalu siap untuk solusi sajian
                  Anda. <br />
                  Konsultasikan dengan Catering Consultant HCS untuk mendapatkan{" "}
                  <br />
                  solusi masalah catering atau konsumsi acara Anda.
                </div>
                <div
                  className="text-[white] hover:underline py-2 rounded-full cursor-pointer"
                  onClick={() => {
                    window.open(
                      `https://wa.me/${customerService.wa}?text=${customerService.content}`,
                      "_blank"
                    );
                  }}
                >
                  <div className="bg-white items-center flex w-fit px-6 py-2 rounded-full bg-button">
                    More Info {iconRight}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="komitmen-kami" className="relative flex w-full">
        <div
          className="absolute top-0 bg-contain w-full h-12 md:bg-repeat bg-no-repeat"
          style={{
            backgroundImage: `url(/bg/wave-xl.png)`,
          }}
        ></div>
        <div
          className="absolute bottom-0 bg-contain w-full h-12 md:bg-repeat bg-no-repeat rotate-180"
          style={{
            backgroundImage: `url(/bg/wave-xl.png)`,
          }}
        ></div>
        <div className="flex w-full">
          <div className="bg-black opacity-50 absolute w-full h-full"></div>
          <div
            className="flex w-full justify-center bg-no-repeat bg-cover md:bg-fixed bg-local"
            style={{
              backgroundImage: `url(/bg/bg-menu-service.jpg)`,
            }}
          >
            <div className="flex max-w-5xl w-full flex-col">
              <div className="flex md:flex-row flex-col  justify-between space-x-4">
                <motion.div
                  ref={refService}
                  animate={controlsService}
                  initial="hidden"
                  variants={squareVariants}
                  className="flex relative w-fit md:mt-28 mt-20 md:mr-0 mr-4 md:mb-20"
                >
                  <div className="absolute bg-[#88171d] opacity-70 w-full h-full md:rounded-[1rem] rounded-tr-[1rem] rounded-br-[1rem]"></div>
                  <div
                    className="relative text-base md:text-lg flex flex-col text-left text-white px-12 py-10 gap-4 leading-relaxed font-normal"
                  >
                    <p>
                      Humani Catering Service berdiri sejak bulan Oktober 2012
                      di Jakarta dan saat ini kami berdomisili usaha di Depok
                      Jawa Barat.
                    </p>
                    <p>
                      Dengan bendera Humanifood kami melayani perusahaan dari
                      berbagai industri dari pertelevisian, energi, telko,
                      farmasi dan sebagainya.
                    </p>
                    <p>
                      Dengan dukungan tim yang terdiri dari tenaga profesional,
                      kami selalu siap melayani kebutuhan katering dalam
                      kapasitas kecil maupun besar.
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  ref={refServiceStat}
                  animate={controlsServiceStat}
                  initial="hidden"
                  variants={squareVariants}
                  className="relative w-fit md:mt-28 mt-10 md:mb-20 mb-10"
                >
                  <div className="absolute bg-[#88171d] opacity-70 w-full h-full md:rounded-[1rem] rounded-tl-[1rem] rounded-bl-[1rem]"></div>
                  <div
                    className="relative flex flex-col text-right text-white px-12 py-10 gap-4"
                  >
                    <div>
                      <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight">+12 tahun</h3>
                      <h4 className="text-lg md:text-xl font-medium">melayani jabodetabek</h4>
                    </div>
                    <div>
                      <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight">+25.000</h3>
                      <h4 className="text-lg md:text-xl font-medium">acara telah kami dampingi</h4>
                    </div>
                    <div>
                      <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight">+20.000.000</h3>
                      <h4 className="text-lg md:text-xl font-medium">
                        porsi telah dinikmati Sahabat Humani Catering Service
                      </h4>
                    </div>
                  </div>
                </motion.div>
              </div>
              <div
                className="z-10 flex justify-center md:px-0 px-4"
              >
                <div className="border border-white flex items-center justify-between rounded-full px-8 md:pt-4 pt-2 pb-2.5 md:w-4/5 w-full bg-[#e7e8ea] my-4">
                  <div className="flex flex-col w-full md:space-y-3 space-y-1 text-white items-center justify-center">
                    <div className="flex bg-[#88171d] rounded-full md:h-12 md:w-12 h-10 w-10 items-center justify-center text-white">
                      {iconConsult}
                    </div>
                    <h3 className="flex md:text-sm text-[0.6rem] text-center md:h-6 h-6 items-center font-bold text-[#88171d] leading-none">
                      Catering Consultant
                    </h3>
                  </div>
                  <div className="flex flex-col w-full md:space-y-3 space-y-1 text-white items-center justify-center">
                    <div className="flex bg-[#88171d] rounded-full md:h-12 md:w-12 h-10 w-10 items-center justify-center text-white">
                      {iconSuperTeam}
                    </div>
                    <h3 className="flex md:text-sm text-[0.6rem] text-center md:h-6 h-6 items-center font-bold text-[#88171d] leading-none">
                      Super Team
                    </h3>
                  </div>
                  <div className="flex flex-col w-full md:space-y-3 space-y-1 text-white items-center justify-center">
                    <div className="flex bg-[#88171d] rounded-full md:h-12 md:w-12 h-10 w-10 items-center justify-center text-white">
                      {iconSatSetService}
                    </div>
                    <h3 className="flex md:text-sm text-[0.6rem] text-center md:h-6 h-6 items-center font-bold text-[#88171d] leading-none">
                      SatSet Service
                    </h3>
                  </div>
                  <div className="flex flex-col w-full md:space-y-3 space-y-1 text-white items-center justify-center">
                    <div className="flex bg-[#88171d] rounded-full md:h-12 md:w-12 h-10 w-10 items-center justify-center text-white">
                      {iconHalal}
                    </div>
                    <h3 className="flex md:text-sm text-[0.6rem] text-center md:h-6 h-6 items-center font-bold text-[#88171d] leading-none">
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
        id="menu"
        className="w-full relative bg-white flex justify-center pb-4"
      >
        <div
          className="absolute top-0 left-0 bg-contain bg-no-repeat w-full md:h-52 h-36 bg-left-top"
          style={{
            backgroundImage: `url(/bg/bg-ragam-menu-left-top.png)`,
          }}
        ></div>
        <div
          className="absolute top-0 right-0 bg-contain bg-no-repeat w-full md:h-52 h-36 bg-right-top"
          style={{
            backgroundImage: `url(/bg/bg-ragam-menu-right-top.png)`,
          }}
        ></div>
        <div className="flex max-w-5xl w-full flex-col">

          <h3
            className="text-center text-[#88171d] text-base md:text-xl my-8 md:px-12 px-6 leading-relaxed"
          >
            Dari acara keluarga hingga pelayanan perusahaan, beragam pilihan
            <br />
            menu eksotik lokal, satu setengah jam siap kirim dengan SatSet
            Service,
            <br />
            pemesanan mulai 10 porsi hingga ribuan porsi, siap 24 jam
            <br />
            waktu pengantaran dan fleksibel tentukan biaya.
          </h3>

          <h2
            className="text-center text-[#88171d] text-xl md:text-2xl my-8 px-12 font-extrabold tracking-tight"
          >
            Anda Fokus Acaranya, Kami Urus Sajiannya.
          </h2>
        </div>
        <div
          className="absolute bottom-0 left-0 bg-contain bg-no-repeat w-full md:h-1/3 h-48 bg-left-bottom"
          style={{
            backgroundImage: `url(/bg/bg-ragam-menu-left-bottom.png)`,
          }}
        ></div>
        <div
          className="absolute bottom-0 right-0 bg-contain bg-no-repeat w-full md:h-1/3 h-48 bg-right-bottom"
          style={{
            backgroundImage: `url(/bg/bg-ragam-menu-right-bottom.png)`,
          }}
        ></div>
      </section>
      <section
        id="chat-admin"
        className="relative flex w-full bg-white justify-center overflow-hidden"
      >
        <div
          className="absolute -bottom-36 -left-36 bg-contain bg-no-repeat w-full h-72 bg-left-bottom"
          style={{
            filter: `blur(8px) invert(85%) sepia(30%) saturate(3460%) hue-rotate(321deg) brightness(98%) contrast(100%)`,
            WebkitFilter: `blur(8px)`,
            backgroundImage: `url(/logo-white.png)`,
          }}
        ></div>
        <div
          className="absolute top-0 -right-72 bg-contain bg-no-repeat w-full h-[36rem] bg-right-top"
          style={{
            filter: `blur(8px) invert(85%) sepia(30%) saturate(3460%) hue-rotate(321deg) brightness(98%) contrast(100%)`,
            WebkitFilter: `blur(8px)`,
            backgroundImage: `url(/logo-white.png)`,
          }}
        ></div>
        <div className="bg-white opacity-90 absolute w-full h-full"></div>
        <div className="relative flex flex-col space-y-4 item-center text-center py-4 text-[#88171d]">
          <div className="flex justify-between md:px-24 px-16 py-8">
            <div className="animate-bounce">
              <Image
                src="/icon/arrow-cs.png"
                alt="Humani Food CS"
                className="-rotate-45"
                width={60}
                height={20}
                priority
              />
            </div>
            <div className="animate-bounce">
              <Image
                src="/icon/arrow-cs.png"
                alt="Humani Food CS"
                width={60}
                height={20}
                priority
              />
            </div>
            <div className="animate-bounce">
              <Image
                src="/icon/arrow-cs.png"
                alt="Humani Food CS"
                className="rotate-45"
                width={60}
                height={20}
                priority
              />
            </div>
          </div>
          <div
            className="flex justify-center pb-4 cursor-pointer"
            onClick={() => {
              window.open(
                `https://wa.me/${customerService.wa}?text=${customerService.content}`,
                "_blank"
              );
            }}
          >
            <div className="border border-[#88171d] py-1.5 px-1.5 rounded-full">
              <div className="flex pl-6 pr-4 py-2.5 rounded-full items-center text-white bg-gradient-to-r from-[#88171d] to-[#d83831]">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    d="M23.328 19.177c-.401-.203-2.354-1.156-2.719-1.292c-.365-.13-.63-.198-.896.203c-.26.391-1.026 1.286-1.26 1.547s-.464.281-.859.104c-.401-.203-1.682-.62-3.203-1.984c-1.188-1.057-1.979-2.359-2.214-2.76c-.234-.396-.026-.62.172-.818c.182-.182.401-.458.604-.698c.193-.24.255-.401.396-.661c.13-.281.063-.5-.036-.698s-.896-2.161-1.229-2.943c-.318-.776-.651-.677-.896-.677c-.229-.021-.495-.021-.76-.021s-.698.099-1.063.479c-.365.401-1.396 1.359-1.396 3.297c0 1.943 1.427 3.823 1.625 4.104c.203.26 2.807 4.26 6.802 5.979c.953.401 1.693.641 2.271.839c.953.302 1.823.26 2.51.161c.76-.125 2.354-.964 2.688-1.901c.339-.943.339-1.724.24-1.901c-.099-.182-.359-.281-.76-.458zM16.083 29h-.021c-2.365 0-4.703-.641-6.745-1.839l-.479-.286l-5 1.302l1.344-4.865l-.323-.5a13.166 13.166 0 0 1-2.021-7.01c0-7.26 5.943-13.182 13.255-13.182c3.542 0 6.865 1.38 9.365 3.88a13.058 13.058 0 0 1 3.88 9.323C29.328 23.078 23.39 29 16.088 29zM27.359 4.599C24.317 1.661 20.317 0 16.062 0C7.286 0 .14 7.115.135 15.859c0 2.792.729 5.516 2.125 7.927L0 32l8.448-2.203a16.13 16.13 0 0 0 7.615 1.932h.005c8.781 0 15.927-7.115 15.932-15.865c0-4.234-1.651-8.219-4.661-11.214z"
                  />
                </svg>
                <div className="text-xl pl-2">Chat Aja Dulu Yuuk</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="customer" className="w-full bg-white">
        <div
          ref={refPelanggan}
          className="text-[#88171d] md:text-5xl text-3xl text-center mt-12 font-extrabold tracking-tight"
        >
          Pelanggan Setia Kami
        </div>
        <div className="flex flex-col justify-center pt-6 space-y-2 items-center">
          <div className="w-full flex justify-center md:h-[30rem] h-[15rem]">
            <motion.div
              animate={controlsPelanggan}
              initial="hidden"
              variants={squareVariants}
              className={`md:w-1/2 w-full md:px-0 px-4 bg-contain bg-no-repeat bg-[url('/client/pelanggan-kami.jpg')]`}
            ></motion.div>
          </div>
        </div>
      </section>
      <section
        id="chat-wa"
        className="py-8 bg-white w-full flex justify-center"
      >
        <div
          className="w-fit cursor-pointer"
          onClick={() => {
            window.open(
              `https://wa.me/${customerService.wa}?text=${customerService.content}`,
              "_blank"
            );
          }}
        >
          <div className="border border-[#88171d] py-1.5 px-1.5 rounded-full">
            <div className="flex pl-6 pr-4 py-2.5 rounded-full items-center text-white bg-gradient-to-r from-[#88171d] to-[#d83831]">
              <svg
                width="40"
                height="40"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  d="M23.328 19.177c-.401-.203-2.354-1.156-2.719-1.292c-.365-.13-.63-.198-.896.203c-.26.391-1.026 1.286-1.26 1.547s-.464.281-.859.104c-.401-.203-1.682-.62-3.203-1.984c-1.188-1.057-1.979-2.359-2.214-2.76c-.234-.396-.026-.62.172-.818c.182-.182.401-.458.604-.698c.193-.24.255-.401.396-.661c.13-.281.063-.5-.036-.698s-.896-2.161-1.229-2.943c-.318-.776-.651-.677-.896-.677c-.229-.021-.495-.021-.76-.021s-.698.099-1.063.479c-.365.401-1.396 1.359-1.396 3.297c0 1.943 1.427 3.823 1.625 4.104c.203.26 2.807 4.26 6.802 5.979c.953.401 1.693.641 2.271.839c.953.302 1.823.26 2.51.161c.76-.125 2.354-.964 2.688-1.901c.339-.943.339-1.724.24-1.901c-.099-.182-.359-.281-.76-.458zM16.083 29h-.021c-2.365 0-4.703-.641-6.745-1.839l-.479-.286l-5 1.302l1.344-4.865l-.323-.5a13.166 13.166 0 0 1-2.021-7.01c0-7.26 5.943-13.182 13.255-13.182c3.542 0 6.865 1.38 9.365 3.88a13.058 13.058 0 0 1 3.88 9.323C29.328 23.078 23.39 29 16.088 29zM27.359 4.599C24.317 1.661 20.317 0 16.062 0C7.286 0 .14 7.115.135 15.859c0 2.792.729 5.516 2.125 7.927L0 32l8.448-2.203a16.13 16.13 0 0 0 7.615 1.932h.005c8.781 0 15.927-7.115 15.932-15.865c0-4.234-1.651-8.219-4.661-11.214z"
                />
              </svg>
              <div className="text-xl pl-2">Chat Aja Dulu Yuuk</div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="kontak-kami"
        className="bg-[#88171d] flex md:flex-row flex-col w-full py-8"
      >
        <div className="md:w-1/6 w-full px-8 flex md:justify-start justify-center">
          <div>
            <Image
              src="/logo-white.png"
              alt="Humani Food Logo"
              width={100}
              height={50}
              priority
            />
          </div>
        </div>
        <div className="flex md:flex-row flex-col justify-between md:w-5/6 w-full text-white md:pt-0 pt-8 md:gap-0 gap-8">
          <div className="w-full md:items-start items-center flex flex-col">
            <div className="text-2xl font-bold pb-2">
              Layanan Pelanggan
            </div>
            <div>Whatsapp</div>
            <div className="font-bold cursor-pointer">
              <Link
                href={`https://wa.me/${customerService.wa}?text=${customerService.content}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                0812 9006 767
              </Link>
            </div>
          </div>
          <div className="w-full md:items-start items-center flex flex-col">
            <div className="text-2xl font-bold pb-2">
              Waktu Pelayanan
            </div>
            <div>Senin - Sabtu</div>
            <div className="font-bold">
              08.00 - 17.00
            </div>
          </div>
          <div className="w-full md:items-start items-center flex flex-col">
            <div className="text-2xl font-bold pb-2">
              Alamat Dapur
            </div>
            <div className="md:text-left text-center">
              Cimanggis Depok <br />
              Jawa Barat - 16453
            </div>
          </div>
        </div>
      </section>
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
