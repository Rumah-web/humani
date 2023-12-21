'use client'

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion"
import Carosel from "../components/slider/carosel";

export default function Page() {
  const ourCustomer = [1,2,3,4,5,6,7,8,9]
  const transitionValues = {
    duration: 0.8,
    yoyo: Infinity,
    ease: "easeOut"
  };

  const testimoni = [
    `/testimoni/testimoni-1.jpeg`,
    `/testimoni/testimoni-2.jpeg`,
    `/testimoni/testimoni-3.jpeg`,
  ];

  const menufavorit = [
    `/menu/menu-1.jpeg`,
    `/menu/menu-2.jpeg`,
    `/menu/menu-3.jpeg`,
    `/menu/menu-4.jpeg`,
    `/menu/menu-5.jpeg`,
  ];

  const review = [
    `/review/review-1.jpeg`,
    `/review/review-2.jpeg`,
    `/review/review-3.png`,
  ];
  

  return (
    <main className="flex flex-col items-center justify-between md:px-24 px-0">
      <div
        style={{ maxWidth: `500px` }}
        className="overflow-hidden w-full shadow-2xl"
      >
        <section
          id="introduction"
          className="h-screen bg-contain relative"
          style={{
            backgroundImage: `url(/bg/bg-top-food.jpg)`,
          }}
        >
          <div className="bg-black opacity-25 absolute w-full h-full"></div>
          <div className="md:px-10 px-6 md:py-8 py-6 space-y-2 relative">
            <h1 className="font-bold text-3xl text-white">
              Pesan Dadakan <br />
              Mulai dari 5 Porsi <br />
              Sampai Ribuan Porsi
            </h1>
            <h2
              className="rounded-full w-fit text-white px-3 py-1 text-sm bg-[#88171d]"
            >
              2 Jam Siap Kirim dengan Selamat
            </h2>
          </div>
        </section>
        <div
          className="relative -top-64 -mb-64 bg-contain bg-no-repeat"
          style={{
            backgroundImage: `url(/bg/bg-circle-top.png)`,
          }}
        >
          <section id="about-us" className="relative">
            <div className="flex flex-col md:px-10 px-0 pt-8 space-y-2 relative">
              <div className="flex justify-center">
                <Image
                  src="/logo.png"
                  alt="Humani Food Logo"
                  style={{
                    filter: `invert(85%) sepia(30%) saturate(3460%) hue-rotate(321deg) brightness(98%) contrast(100%)`,
                  }}
                  width={100}
                  height={24}
                  priority
                />
              </div>
              <div className="flex justify-center pt-4 md:px-0 px-4">
                <div
                  className="flex items-center justify-between rounded-full px-8 py-2.5 w-full bg-[#88171d]"
                >
                  <div className="flex flex-col w-full space-y-1 text-white items-center justify-center">
                    <div
                      className="flex bg-white rounded-full h-9 w-9 items-center justify-center text-[#88171d]"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill="currentColor"
                          d="M7 5v10c0 1.11-.89 2-2 2H4c-.55 0-1-.45-1-1v-3H1v3c0 1.66 1.34 3 3 3h1c2.21 0 4-1.79 4-4V5m14 8.38l-1.23-1.23A3.905 3.905 0 0 0 19 11h-2v2h2c.5 0 1 .2 1.35.56l.35.35l-1.2.69c-.46.26-.97.4-1.5.4h-1c-.56 0-1-.44-1-1V6h-2v3.81l-.62-.69C12.7 8.37 11.6 8 10.59 8H10v2h.59c.64 0 1.25.25 1.7.71l1.71 1.7V14c0 1.12-.88 2-2 2h-2v2h2c1.37 0 2.5-.7 3.17-1.76A2.5 2.5 0 0 0 17 17h1c.88 0 1.74-.23 2.5-.67l2.5-1.44Z"
                        />
                      </svg>
                    </div>
                    <h3
                      style={{ fontSize: `0.5rem` }}
                      className="flex text-center md:h-6 h-6 items-center"
                    >
                      Halal
                    </h3>
                  </div>
                  <div className="flex flex-col w-full space-y-1 text-white items-center justify-center">
                    <div
                      className="flex bg-white rounded-full h-9 w-9 items-center justify-center text-[#88171d]"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill="currentColor"
                          d="M7 4.5c-.3 0-.5.3-.5.5v2.5h-1V5c0-.3-.2-.5-.5-.5s-.5.3-.5.5v2.5h-1V5c0-.3-.2-.5-.5-.5s-.5.3-.5.5v3.3c0 .9.7 1.6 1.5 1.7v7c0 .6.4 1 1 1s1-.4 1-1v-7c.8-.1 1.5-.8 1.5-1.7V5c0-.2-.2-.5-.5-.5M9 5v6h1v6c0 .6.4 1 1 1s1-.4 1-1V2c-1.7 0-3 1.3-3 3m7-1c-1.4 0-2.5 1.5-2.5 3.3c-.1 1.2.5 2.3 1.5 3V17c0 .6.4 1 1 1s1-.4 1-1v-6.7c1-.7 1.6-1.8 1.5-3C18.5 5.5 17.4 4 16 4"
                        />
                      </svg>
                    </div>
                    <h3
                      style={{ fontSize: `0.5rem` }}
                      className="flex text-center md:h-6 h-6 items-center"
                    >
                      Tim Profesional
                    </h3>
                  </div>
                  <div className="flex flex-col w-full space-y-1 text-white items-center justify-center">
                    <div
                      className="flex bg-white rounded-full h-9 w-9 items-center justify-center text-[#88171d]"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 28 28"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill="currentColor"
                          d="m12.167 17.802l-.006-.014a7.798 7.798 0 0 1-.36-.094l-.009-.003A7.985 7.985 0 0 1 8.708 16a8 8 0 1 1 13.257-6.75c.039.413-.3.75-.715.75c-.414 0-.745-.337-.793-.749A6.5 6.5 0 1 0 11.496 16l.04.017c.2.082.406.154.616.217A2 2 0 0 1 16 17a2 2 0 0 1-3.833.802m-.986 1.272a9.514 9.514 0 0 1-4.53-3.054A3 3 0 0 0 4 19v.715C4 23.433 8.21 26 14 26s10-2.708 10-6.285V19a3 3 0 0 0-3-3h-3.645a3.5 3.5 0 0 1-6.174 3.074M19 10c0-1.512-.67-2.867-1.731-3.784a5 5 0 1 0-5.624 8.195A3.486 3.486 0 0 1 14 13.5a3.49 3.49 0 0 1 2.356.911A5 5 0 0 0 19 10"
                        />
                      </svg>
                    </div>
                    <h3
                      style={{ fontSize: `0.5rem` }}
                      className="flex text-center md:h-6 h-6 items-center"
                    >
                      Admin Fast Response
                    </h3>
                  </div>
                  <div className="flex flex-col w-full space-y-1 text-white items-center justify-center">
                    <div
                      className="flex bg-white rounded-full h-9 w-9 items-center justify-center text-[#88171d]"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill="currentColor"
                          d="M104 224H24c-13.255 0-24 10.745-24 24v240c0 13.255 10.745 24 24 24h80c13.255 0 24-10.745 24-24V248c0-13.255-10.745-24-24-24M64 472c-13.255 0-24-10.745-24-24s10.745-24 24-24s24 10.745 24 24s-10.745 24-24 24M384 81.452c0 42.416-25.97 66.208-33.277 94.548h101.723c33.397 0 59.397 27.746 59.553 58.098c.084 17.938-7.546 37.249-19.439 49.197l-.11.11c9.836 23.337 8.237 56.037-9.308 79.469c8.681 25.895-.069 57.704-16.382 74.757c4.298 17.598 2.244 32.575-6.148 44.632C440.202 511.587 389.616 512 346.839 512l-2.845-.001c-48.287-.017-87.806-17.598-119.56-31.725c-15.957-7.099-36.821-15.887-52.651-16.178c-6.54-.12-11.783-5.457-11.783-11.998v-213.77c0-3.2 1.282-6.271 3.558-8.521c39.614-39.144 56.648-80.587 89.117-113.111c14.804-14.832 20.188-37.236 25.393-58.902C282.515 39.293 291.817 0 312 0c24 0 72 8 72 81.452"
                        />
                      </svg>
                    </div>
                    <h3
                      style={{ fontSize: `0.5rem` }}
                      className="flex text-center md:h-6 h-6 items-center"
                    >
                      Baik Bersih Cantik
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white md:px-10 px-2.5 py-2">
              <h4
                className="md:text-3xl text-2xl text-center font-bold md:pt-8 md:pb-6 pt-4 px-2 text-[#88171d]"
              >
                Cari konsumsi dan catering <br /> untuk acara dadakan!
              </h4>

              <div className="flex justify-between pt-2">
                <div
                  className="h-52 w-52 bg-contain bg-left bg-no-repeat"
                  style={{
                    backgroundImage: `url(/bg/bg-about-us-left.png)`,
                  }}
                ></div>
                <div
                  className="h-52 w-52 bg-contain bg-right bg-no-repeat"
                  style={{
                    backgroundImage: `url(/bg/bg-about-us-right.png)`,
                  }}
                ></div>
              </div>
              <h5
                className="md:text-2xl text-xl text-center py-8 text-[#88171d]"
              >
                OK! <span className="font-bold">Humani Catering Service</span>
                <br />
                selalu siap mari merapat!
                <br />
                2 Jam langsung kirim.
                <br />
                <span className="font-bold">24 Jam Delivery Service</span>
                <br />
                Ready ribuan porsi setiap harinya
              </h5>
            </div>
          </section>
          <section id="service" className="bg-white">
            <div className="relative top-1">
              <Image
                src="/bg/wave.png"
                alt="Wave Background"
                style={{ width: `100%` }}
                width={100}
                height={50}
                priority
              />
            </div>

            <div
              className="flex justify-center py-4 bg-[#88171d]"
            >
              <Image
                src="/icon/24-jam-service.png"
                alt="24 Jam Service"
                width={200}
                height={80}
                priority
              />
            </div>

            <div className="relative rotate-180 -top-1 z-20">
              <Image
                src="/bg/wave.png"
                alt="Wave Background"
                style={{ width: `100%` }}
                width={200}
                height={80}
                priority
              />
            </div>
            <div
              className="md:h-80 h-64 w-full bg-cover bg-no-repeat relative md:-top-10 -top-8 md:-mb-10 -mb-8 z-10"
              style={{
                backgroundImage: `url(/bg/bg-menu-service.jpg)`,
              }}
            >
              <div className="bg-black opacity-25 absolute w-full h-full"></div>
            </div>
            <div className="relative md:-top-9 -top-7 md:-mb-10 -mb-8 z-20">
              <Image
                src="/bg/wave.png"
                alt="Wave Background"
                style={{ width: `100%` }}
                width={200}
                height={80}
                priority
              />
            </div>
          </section>
          <section
            id="why-us"
            className="text-white text-2xl font-bold pb-36 bg-[#88171d]"
          >
            <h2 className="text-center py-8">Kenapa Harus</h2>
            <div className="flex justify-center pb-12">
              <Image
                src="/logo.png"
                alt="Humani Food Logo"
                width={150}
                height={50}
                priority
              />
            </div>
            <div className="flex flex-col space-y-8">
              <div className="text-center space-y-2">
                <div className="flex justify-center">
                  <h3
                    className="bg-white px-6 py-1 rounded-full text-[#88171d]"
                  >
                    10+ Tahun
                  </h3>
                </div>
                <h4 className="text-lg">melayani jabodetabek</h4>
              </div>
              <div className="text-center space-y-2">
                <div className="flex justify-center">
                  <h3
                    className="bg-white px-6 py-1 rounded-full text-[#88171d]"
                  >
                    25.000
                  </h3>
                </div>
                <h4 className="text-lg">acara telah kami dampingi</h4>
              </div>
              <div className="text-center space-y-2">
                <div className="flex justify-center">
                  <h3
                    className="bg-white px-6 py-1 rounded-full text-[#88171d]"
                  >
                    +2.000.000
                  </h3>
                </div>
                <h4 className="text-lg">
                  porsi telah dinikmati Sahabat <br />
                  Humani Catering Service
                </h4>
              </div>
            </div>

            <div className="flex justify-center  pt-12">
              <div className="flex w-1/2 text-center justify-between">
                <div>
                  <svg
                    width="52"
                    height="52"
                    viewBox="0 0 769 1024"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="currentColor"
                      d="m673 384l96 103l-135 42l32 137l-127-29l102 325q0 33-28 52l-52-52l-62 62q-22-5-36-22.5T449 962l-65-206l-64 206q0 22-14 39.5t-36 22.5l-62-62l-52 52q-28-19-28-52l102-325l-127 29l32-137L0 487l96-103L0 281l135-41l-32-137l137 32L281 0l103 96L487 0l42 135l137-32l-32 137l135 41zM384.5 192q-79.5 0-136 56.5t-56.5 136t56.5 136t136 56.5t136-56.5t56.5-136t-56.5-136t-136-56.5"
                    />
                  </svg>
                </div>
                <div>
                  <svg
                    width="52"
                    height="52"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="currentColor"
                      d="M7 5v10c0 1.11-.89 2-2 2H4c-.55 0-1-.45-1-1v-3H1v3c0 1.66 1.34 3 3 3h1c2.21 0 4-1.79 4-4V5m14 8.38l-1.23-1.23A3.905 3.905 0 0 0 19 11h-2v2h2c.5 0 1 .2 1.35.56l.35.35l-1.2.69c-.46.26-.97.4-1.5.4h-1c-.56 0-1-.44-1-1V6h-2v3.81l-.62-.69C12.7 8.37 11.6 8 10.59 8H10v2h.59c.64 0 1.25.25 1.7.71l1.71 1.7V14c0 1.12-.88 2-2 2h-2v2h2c1.37 0 2.5-.7 3.17-1.76A2.5 2.5 0 0 0 17 17h1c.88 0 1.74-.23 2.5-.67l2.5-1.44Z"
                    />
                  </svg>
                </div>
                <div>
                  <svg
                    width="52"
                    height="52"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="currentColor"
                      d="M4.75 3A2.75 2.75 0 0 0 2 5.75V11a5 5 0 0 1 8 6v1h9.25A2.75 2.75 0 0 0 22 15.25v-9.5A2.75 2.75 0 0 0 19.25 3zm2 4h10.5a.75.75 0 0 1 0 1.5H6.75a.75.75 0 0 1 0-1.5M12 12.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75M6 10a4 4 0 1 0 0 8.001A4 4 0 0 0 6 10m3 8.001c-.835.628-1.874 1-3 1a4.978 4.978 0 0 1-3-.998v3.246c0 .57.605.92 1.09.669l.09-.055L6 20.592l1.82 1.272a.75.75 0 0 0 1.172-.51L9 21.249z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </section>
          <div
            className="relative bg-cover -top-28 -mb-28 bg-no-repeat"
            style={{
              backgroundImage: `url(/bg/bg-circle-top.png)`,
            }}
          >
            <section id="artis">
              <div className="flex justify-center pt-8">
                <Image
                  src="/logo.png"
                  alt="Humani Food Logo"
                  style={{
                    filter: `invert(85%) sepia(30%) saturate(3460%) hue-rotate(321deg) brightness(98%) contrast(100%)`,
                  }}
                  width={100}
                  height={24}
                  priority
                />
              </div>
              <h2
                className="text-3xl font-bold text-center py-8 text-[#88171d]"
              >
                Catering Favorit <br /> Para Artis
              </h2>
            </section>
          </div>
          <section id="slider-artis">
            <Carosel images={testimoni} />
            <h2 className="text-2xl text-white bg-[#88171d] text-center font-bold py-6">
              Kalau Nikmat Emang <br />
              Ga Bisa Bohong !
            </h2>
          </section>
          <section id="menu-favorit" className="bg-[#88171d]">
            <div className="py-6 text-center relative" style={{backgroundImage: `url(/bg/bg-menu-service.jpg)`}}>
              <div className="bg-black opacity-50 absolute w-full h-full top-0"></div>
              <div className="relative">
                <h2 className="text-3xl font-bold text-white">
                  Berbagai Pilihan <br />
                  Menu Favorit
                </h2>
              </div>
            </div>
            <Carosel images={menufavorit} size="contain" />
          </section>
          <section id="our-customer" className="bg-white px-4 py-6 text-[#88171d]">
            <h2 className="text-3xl font-bold text-center py-8">
              Tidak hanya jadi <br />
              andalan Para Artis!
            </h2>
            <div className="text-center text-xl">
              Humani Catering Service juga 
              telah dipercaya melayani sederet
              instansi ternama seperti...
            </div>
            <div className="flex flex-col justify-center pt-6 space-y-2 items-center">
              {ourCustomer.map((customer, i) => {
                return <div key={i} className="w-96 md:px-0 px-4">
                <Image
                  src={`/client/client-${customer}.png`}
                  alt="Humani Food Customer"
                  width={100}
                  height={24}
                  priority
                  style={{ width: `100%` }}
                /></div>
              })}
            </div>
            <h2 className="text-3xl font-bold text-center pt-8">
              Yang suka cari catering dadakan mari kemari merapat
            </h2>
          </section>
          <section id="delivery">
              <div className="flex space-x-4 md:px-8 px-4 py-4 items-center justify-between bg-[#88171d]">
                <h2 className="text-white uppercase md:text-3xl text-2xl"><b>2 jam </b>siap kirim <br /> <b>dengan selamat</b></h2>
                <Image
                  src="/icon/delivery.png"
                  alt="24 Jam siap kirim dengan selamat"
                  width={120}
                  height={50}
                  priority
                />
            </div>
            <div className="flex flex-col space-y-4 item-center text-center py-4 text-[#88171d]">  
              <h2 className="text-xl">
                Dapatkan Potongan Ongkir <br /> mulai dari 50rb* Hari ini
              </h2>
              <div className="flex justify-between md:px-24 px-16">
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
              <div className="flex justify-center">
                <div className="md:w-2/3 w-4/5 border border-[#88171d] py-1.5 px-1.5 rounded-full">
                  <div className="flex pl-6 pr-4 py-2.5 rounded-full items-center text-white bg-gradient-to-r from-[#88171d] to-[#d83831]">
                    <svg width="40" height="40" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                          <path fill="currentColor" d="M23.328 19.177c-.401-.203-2.354-1.156-2.719-1.292c-.365-.13-.63-.198-.896.203c-.26.391-1.026 1.286-1.26 1.547s-.464.281-.859.104c-.401-.203-1.682-.62-3.203-1.984c-1.188-1.057-1.979-2.359-2.214-2.76c-.234-.396-.026-.62.172-.818c.182-.182.401-.458.604-.698c.193-.24.255-.401.396-.661c.13-.281.063-.5-.036-.698s-.896-2.161-1.229-2.943c-.318-.776-.651-.677-.896-.677c-.229-.021-.495-.021-.76-.021s-.698.099-1.063.479c-.365.401-1.396 1.359-1.396 3.297c0 1.943 1.427 3.823 1.625 4.104c.203.26 2.807 4.26 6.802 5.979c.953.401 1.693.641 2.271.839c.953.302 1.823.26 2.51.161c.76-.125 2.354-.964 2.688-1.901c.339-.943.339-1.724.24-1.901c-.099-.182-.359-.281-.76-.458zM16.083 29h-.021c-2.365 0-4.703-.641-6.745-1.839l-.479-.286l-5 1.302l1.344-4.865l-.323-.5a13.166 13.166 0 0 1-2.021-7.01c0-7.26 5.943-13.182 13.255-13.182c3.542 0 6.865 1.38 9.365 3.88a13.058 13.058 0 0 1 3.88 9.323C29.328 23.078 23.39 29 16.088 29zM27.359 4.599C24.317 1.661 20.317 0 16.062 0C7.286 0 .14 7.115.135 15.859c0 2.792.729 5.516 2.125 7.927L0 32l8.448-2.203a16.13 16.13 0 0 0 7.615 1.932h.005c8.781 0 15.927-7.115 15.932-15.865c0-4.234-1.651-8.219-4.661-11.214z"/>
                    </svg>
                    <div className="text-xl pl-2">Chat Admin Disini Yaa!</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="review" className="bg-[#88171d] mt-4">
            <Carosel images={review} />
          </section>
          <section
            id="footer"
            className="flex space-x-12 px-4 py-6 bg-[#88171d]"
          >
            <div className="">
              <Image
                src="/logo.png"
                alt="Humani Food Logo"
                width={100}
                height={24}
                priority
              />
            </div>
            <div className="text-white space-y-6">
              <div id="workshop">
                <h4 className="text-lg font-bold">Workshop</h4>
                <div>
                  Jalan Anggrek No. 57C <br />
                  Kel. Curug, Kec. Cimanggis <br />
                  Kota Depok - Jawa Barat
                </div>
              </div>
              <div id="customer-care">
                <h4 className="text-lg font-bold">Customer Care</h4>
                <div>
                  Admin Official - 0859 7317 3321 <br />
                  Email - xxxx@sample.com
                </div>
              </div>
              <div id="service-hour">
                <h4 className="text-lg font-bold">Service Hour</h4>
                <div>
                  Senin - Minggu <br />
                  Fast Response Chat <br />
                  07.00 - 22.00 <br />
                  Pengiriman 24 Jam
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
