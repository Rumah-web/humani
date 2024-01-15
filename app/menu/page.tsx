'use client'

import Image from 'next/image'
import Link from 'next/link';
import Carosel from '../components/slider/carosel';
import Slickslider from '../components/slider/slickslider';

export default function Menu() {
  const testimoni = [
    `/testimoni/testimoni-1.jpeg`,
    `/testimoni/testimoni-2.jpeg`,
    `/testimoni/testimoni-3.jpeg`,
  ];

  const review = [
    `/review/review-1.jpeg`,
    `/review/review-2.jpeg`,
    `/review/review-3.png`,
    `/review/review-1.jpeg`,
    `/review/review-2.jpeg`,
    `/review/review-3.png`,
  ];

  const ourCustomer = [1,2,3,4,5,6,7,8]

  const menus = [
    {
      title: 'Nasi Box',
      description: 'Dikemas nuansa klasik cantik, dan hangat yang cocok untuk acara keluarga dan corporate.',
      imagePath: null
    },
    {
      title: 'Gift Box',
      description: 'Dikemas nuansa klasik cantik, dan hangat yang cocok untuk acara keluarga dan corporate.',
      imagePath: null
    },
    {
      title: 'Nasi Bebek',
      description: 'Dikemas nuansa klasik cantik, dan hangat yang cocok untuk acara keluarga dan corporate.',
      imagePath: null
    },
    {
      title: 'Hantaran',
      description: 'Dikemas nuansa klasik cantik, dan hangat yang cocok untuk acara keluarga dan corporate.',
      imagePath: null
    },
    {
      title: 'Tumpeng Mini',
      description: 'Dikemas nuansa klasik cantik, dan hangat yang cocok untuk acara keluarga dan corporate.',
      imagePath: null
    },
    {
      title: 'Snack Box',
      description: 'Dikemas nuansa klasik cantik, dan hangat yang cocok untuk acara keluarga dan corporate.',
      imagePath: null
    }
  ]

  return (
    <main className="flex min-h-screen relative flex-col items-center justify-between">
      <section id="wellcome" className='relative w-full h-screen flex flex-col'>
        <div className='absolute bottom-0 left-0 bg-contain w-28 h-full bg-no-repeat bg-left-bottom md:flex hidden' style={{
              backgroundImage: `url(/bg/bg-top-left.png)`,
            }}></div>
        <div className='absolute bottom-0 right-0 bg-contain w-28 h-full bg-no-repeat bg-right-bottom md:flex hidden' style={{
              backgroundImage: `url(/bg/bg-top-right.png)`,
            }}></div>      
        <div className="fixed z-20 w-full font-mono text-sm justify-center flex py-2 bg-[#88171d] lg:px-0 px-4">
          <div className="max-w-5xl w-full flex justify-between">
            <div className=''>
              <Image
                    src="/logo-white.png"
                    alt="Humani Food Logo"
                    width={70}
                    height={30}
                    priority
                  />
            </div>
            <div className='flex items-center'>
              <div className=''>
                <Image
                      src="/icon/iso.png"
                      alt="Humani Food ISO 22000"
                      width={70}
                      height={24}
                      priority
                    />
              </div>
              <div className=''>
                <Image
                      src="/icon/halal.png"
                      alt="Humani Food Sertifikat HALAL"
                      width={70}
                      height={24}
                      priority
                    />
              </div>
              <div className=''>
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
        <div className='flex w-full justify-center mt-16'>
          <div className='flex max-w-5xl w-full md:flex-row flex-col lg:py-24 md:py-16 py-6'>
            <div className='md:w-1/2 w-full text-[#88171d] lg:pt-0 pt-4'>
              <div className='w-full lg:pr-10 lg:px-0 md:px-4 px-4 h-2/3 flex items-center'>
                <h1 className='lg:text-5xl md:text-4xl text-2xl font-bold tracking-wide md:px-0 px-2'>
                  Happiness Series <br />
                  Humani Catering Service
                </h1>
              </div>
              
              <div className='lg:px-0 px-12 md:pt-10 pt-4 w-full md:px-4 px-6 h-1/3 items-end flex'>
                Pilihan menu terbaik untuk Sahabat HCS. <br />
                Siap dadakan 1 Jam siap kirim. <br />
                24 Jam melayani sepenuh hati. <br />
                Setiap acara setiap saat Humani Catering Service siap menemani
              </div>
            </div>
            <div className='md:w-1/2 w-full lg:pt-0 md:pt-6 pt-4'>
              <Carosel images={testimoni} />
            </div>
          </div>
        </div>
      </section>
      <section id="komitmen-kami" className='relative flex w-full'>
        <div className='absolute top-0 bg-contain w-full h-12 md:bg-repeat bg-no-repeat' style={{
              backgroundImage: `url(/bg/wave-xl.png)`,
            }}></div>
        <div className='absolute bottom-0 bg-contain w-full h-12 md:bg-repeat bg-no-repeat rotate-180' style={{
              backgroundImage: `url(/bg/wave-xl.png)`,
            }}></div>
        <div className='flex w-full'>
          <div className="bg-black opacity-50 absolute w-full h-full"></div>
          <div className='flex w-full justify-center bg-no-repeat bg-cover' style={{
              backgroundImage: `url(/bg/bg-menu-service.jpg)`,
            }}>
            <div className='flex max-w-5xl w-full flex-col'>
              <div className='relative w-fit mt-36'>
                <div className='absolute bg-[#88171d] opacity-80 w-full h-full rounded-[1rem]'></div>
                <div className='relative flex flex-col text-right text-white px-12 py-10 gap-2'>
                  <div>
                    <h3 className='text-2xl'>+10 tahun</h3>
                    <h4>melayani jabodetabek</h4>
                  </div>
                  <div>
                    <h3 className='text-2xl'>+25.000</h3>
                    <h4>acara telah kami dampingi</h4>
                  </div>
                  <div>
                    <h3 className='text-2xl'>+2.000.000</h3>
                    <h4>porsi telah dinikmati Sahabat Humani Catering Service</h4>
                  </div>
                </div>
              </div>
              <div className='relative'>
                <h2 className='text-white md:text-4xl text-2xl text-center mt-12 font-bold'>Komitmen Kami</h2>
              </div>
              <div className='z-10 flex justify-center'>
                <div
                      className="border border-white flex items-center justify-between rounded-full px-8 py-2.5 md:w-4/5 w-full bg-[#e7e8ea] my-4"
                    >
                      <div className="flex flex-col w-full space-y-3 text-white items-center justify-center">
                        <div
                          className="flex bg-[#88171d] rounded-full h-9 w-9 items-center justify-center text-white"
                        >
                          <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5">
                                  <path strokeLinejoin="round" strokeMiterlimit="1.5" d="M8 19a2 2 0 1 0 0-4a2 2 0 0 0 0 4m10 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4"/>
                                  <path d="M10.05 17H15V6.6a.6.6 0 0 0-.6-.6H1m4.65 11H3.6a.6.6 0 0 1-.6-.6v-4.9"/>
                                  <path strokeLinejoin="round" d="M2 9h4"/>
                                  <path d="M15 9h5.61a.6.6 0 0 1 .548.356l1.79 4.028a.6.6 0 0 1 .052.243V16.4a.6.6 0 0 1-.6.6h-1.9M15 17h1"/>
                              </g>
                          </svg>
                        </div>
                        <h3
                          className="flex md:text-xs text-[0.6rem] text-center md:h-6 h-6 items-center font-bold text-[#88171d] leading-none"
                        >
                          Layanan 1,5 Jam <br />
                          (SatSet Service)
                        </h3>
                      </div>
                      <div className="flex flex-col w-full space-y-3 text-white items-center justify-center">
                        <div
                          className="flex bg-[#88171d] rounded-full h-9 w-9 items-center justify-center text-white"
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
                          className="flex md:text-xs text-[0.6rem] text-center md:h-6 h-6 items-center font-bold text-[#88171d] leading-none"
                        >
                          Tim Berpengalaman <br /> (Super Team)
                        </h3>
                      </div>
                      <div className="flex flex-col w-full space-y-3 text-white items-center justify-center">
                        <div
                          className="flex bg-[#88171d] rounded-full h-9 w-9 items-center justify-center text-white"
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
                          className="flex md:text-xs text-[0.6rem] text-center md:h-6 h-6 items-center font-bold text-[#88171d] leading-none"
                        >
                          Asik Resik Ciamik <br />
                          Cantik dan Epik
                        </h3>
                      </div>
                      <div className="flex flex-col w-full space-y-3 text-white items-center justify-center">
                        <div
                          className="flex bg-[#88171d] rounded-full h-9 w-9 items-center justify-center text-white"
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
                          className="flex md:text-xs text-[0.6rem] text-center md:h-6 h-6 items-center font-bold text-[#88171d] leading-none"
                        >
                          Responsive <br /> Catering Consultant
                        </h3>
                      </div>
                      <div className="flex flex-col w-full space-y-3 text-white items-center justify-center">
                        <div
                          className="flex bg-[#88171d] rounded-full h-9 w-9 items-center justify-center text-white"
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
                          className="flex md:text-xs text-[0.6rem] text-center md:h-6 h-6 items-center font-bold text-[#88171d] leading-none"
                        >
                          Segar, Baik dan <br /> Halal
                        </h3>
                      </div>
                    </div>
                  </div>
            </div>
          </div>
        </div>
      </section>
      <section id="menu" className='w-full relative bg-white flex justify-center pb-4'>
        <div className='absolute top-0 left-0 bg-contain bg-no-repeat w-full md:h-52 h-36 bg-left-top' style={{
              backgroundImage: `url(/bg/bg-ragam-menu-left-top.png)`,
            }}></div>
        <div className='absolute top-0 right-0 bg-contain bg-no-repeat w-full md:h-52 h-36 bg-right-top' style={{
              backgroundImage: `url(/bg/bg-ragam-menu-right-top.png)`,
            }}></div>
        <div className='flex max-w-5xl w-full flex-col'>
          <h2 className='text-[#88171d] md:text-4xl text-2xl text-center mt-12 font-bold'>Ragam Menu</h2>
          <div className='pt-16 pb-8 md:grid md:grid-rows-2 md:grid-flow-col flex flex-col gap-12 text-[#88171d] md:px-0 px-24'>
            {menus.map((menu, i) => {
              return <div key={i} className='flex flex-col items-center'>
                <h3 className='font-bold text-xl text-center pb-2'>{menu.title}</h3>
                <div className='w-full bg-[#88171d] my-2 h-72 bg-cover bg-no-repeat bg-center' style={{
                      backgroundImage: `url(/menu/menu-tumpeng-mini.png)`}}>
                </div>
                <div className='pt-2 text-center'>{menu.description}</div>
              </div>
            })}
          </div>
          <h3 className='text-center text-[#88171d] text-xl my-8 px-12'>
            Acara mepet waktu kepepet, butuh katering yang satset? <br />
            Segera hub Admin SatSet untuk mendapatkan <br />
            solusi masalah konsumsi. Satu Setengah Jam Siap Antar <br /> 
            kemanapun dan kapanpun dengan minimum 10 porsi.
          </h3>
        </div>
        <div className='absolute bottom-0 left-0 bg-contain bg-no-repeat w-full md:h-1/3 h-48 bg-left-bottom' style={{
              backgroundImage: `url(/bg/bg-ragam-menu-left-bottom.png)`,
            }}></div>
        <div className='absolute bottom-0 right-0 bg-contain bg-no-repeat w-full md:h-1/3 h-48 bg-right-bottom' style={{
              backgroundImage: `url(/bg/bg-ragam-menu-right-bottom.png)`,
            }}></div>
      </section>
      <section id="chat-admin" className='relative flex w-full bg-white justify-center overflow-hidden'>
        <div className='absolute -bottom-36 -left-36 bg-contain bg-no-repeat w-full h-72 bg-left-bottom' style={{
                filter: `blur(8px)`,WebkitFilter: `blur(8px)`,backgroundImage: `url(/logo-red.png)`,
              }}></div>
        <div className='absolute top-0 -right-72 bg-contain bg-no-repeat w-full h-[36rem] bg-right-top' style={{
                filter: `blur(8px)`,WebkitFilter: `blur(8px)`,backgroundImage: `url(/logo-red.png)`,
              }}></div>
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
            <div className="flex justify-center pb-4">
              <div className="border border-[#88171d] py-1.5 px-1.5 rounded-full">
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
      <section id="review-slider" className='relative w-full flex justify-center bg-no-repeat bg-cover' >
        <div className="bg-[#dfdfdf] opacity-90 absolute w-full h-full" style={{
              backgroundImage: `url(/bg/bg-menu-service.jpg)`, filter: `blur(8px)`,WebkitFilter: `blur(8px)`
        }}></div>
        <div className='py-24 text-white'>
          <div className='relative  w-screen'>
            <Slickslider images={review}></Slickslider>
          </div>
        </div>
      </section>
      <section id="customer" className='w-full bg-white'>
        <h2 className='text-[#88171d] md:text-4xl text-2xl text-center mt-12 font-bold'>Pelanggan Setia Kami</h2>
        <div className="flex flex-col justify-center pt-6 space-y-2 items-center">
              {ourCustomer.map((customer, i) => {
                return <div key={i} className="w-96 md:px-0 px-4">
                <Image
                  src={`/client/customer-${customer}.png`}
                  alt="Humani Food Customer"
                  width={100}
                  height={24}
                  priority
                  style={{ width: `100%` }}
                /></div>
              })}
            </div>
      </section>
      <section id="chat-wa" className='relative py-8 bg-white w-full'>
        <div className='absolute top-0 left-0 bg-contain bg-no-repeat w-full md:h-52 h-36 bg-left-top' style={{
              backgroundImage: `url(/bg/pricelist-left.png)`,
            }}></div>
        <div className='absolute top-0 right-0 bg-contain bg-no-repeat w-full md:h-52 h-36 bg-right-top' style={{
              backgroundImage: `url(/bg/pricelist-right.png)`,
            }}></div>
        <div className='flex items-center flex-col pt-24'>
          <h2 className='text-[#88171d] md:text-4xl text-2xl text-center font-bold uppercase'>Price List</h2>
          <h3 className='text-[#88171d] md:text-2xl text-xl text-center font-bold mt-2'>Humani Catering Service</h3>
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
          <div className='w-fit'>
            <div className="border border-[#88171d] py-1.5 px-1.5 rounded-full">
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
      <section id='extra' className='w-full flex flex-col items-center'>
        <div className='w-full bg-gradient-to-r from-[#88171d] to-[#d83831] h-6'></div>
        <div className='flex max-w-5xl w-full justify-between space-x-20'>
          <div className='w-1/3 py-16'>
            <h3 className='text-center text-[#88171d] font-bold text-xl pb-2'>Kerupuk Udang</h3>
            <div className='h-72 bg-[#88171d]'></div>
          </div>
          <div className='w-1/3 py-16'>
            <h3 className='text-center text-[#88171d] font-bold text-xl pb-2'>Extra</h3>
            <div className='h-72 bg-[#88171d]'></div>
          </div>
          <div className='w-1/3 py-16'>
            <h3 className='text-center text-[#88171d] font-bold text-xl pb-2'>Paper Bag</h3>
            <div className='h-72 bg-[#88171d]'></div>
          </div>
        </div>
      </section>
      <section id="form-pemesanan" className='w-full'>
        <div className='w-full text-white flex justify-center py-4 bg-gradient-to-r from-[#88171d] to-[#d83831]'>
          <h3 className='md:text-3xl text-2xl font-bold'>Form Pemesanan</h3>
        </div>
        <form action="#" className='py-8'>

        <div className='w-full flex justify-center'>
          <div className='w-fit'>
            <div className="border border-[#88171d] py-1.5 px-1.5 rounded-full">
              <div className="flex px-16 py-2.5 rounded-full items-center text-white bg-gradient-to-r from-[#88171d] to-[#d83831]">
                <div className="text-xl pl-2">Kirim Pesanan</div>
              </div>
            </div>
          </div>
        </div>
        </form>
      </section>
      <section id="review-bottom" className='w-full bg-[#88171d]'>
        <div className='pt-8 pb-2'>
          <Carosel images={testimoni} />
        </div>
      </section>
      <section id="kontak-kami" className='bg-[#88171d] flex md:flex-row flex-col w-full py-8'>
          <div className='md:w-1/6 w-full px-8 flex md:justify-start justify-center'>
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
          <div className='flex md:flex-row flex-col justify-between md:w-5/6 w-full text-white md:pt-0 pt-8 md:gap-0 gap-8'>
            <div className='w-full md:items-start items-center flex flex-col'>
              <h3 className='text-2xl pb-2'>Workshop</h3>
              <div>
                Jalan Anggrek No. 57C <br /> 
                Kel. Curug, Kec. Cimanggis <br />
                Kota Depok - Jawa Barat
              </div>
            </div>
            <div className='w-full md:items-start items-center flex flex-col'>
              <h3 className='text-2xl pb-2'>Customer Care</h3>
              <div>Admin Official</div>
              <div className='font-bold cursor-pointer'>
                <Link href="https://wa.me/+6287888111778?text=Saya%20ingin%20mendapatkan%20informasi%20katering%20terbaru" rel="noopener noreferrer" target="_blank">0811 9119 200</Link>
              </div>
              <div className='pt-4'>Email</div>
              <div className='font-bold cursor-pointer'>
                <Link href="mailto:info@humanifood.com" rel="noopener noreferrer" target="_blank">info@humanifood.com</Link>
              </div>
            </div>
            <div className='w-full md:items-start items-center flex flex-col'>
              <h3 className='text-2xl pb-2'>Service Hour</h3>
              <div>Senin - Minggu</div>
              <div>Fast Response Chat</div>
              <div className='font-bold'>07.00 - 22.00</div>
              <div className='font-bold'>Pengiriman 24 Jam</div>
            </div>
            
          </div>
      </section>
      
    </main>
  )
}
