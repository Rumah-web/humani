'use client'

import Image from 'next/image'
import Link from 'next/link';
import Carosel from '../components/slider/carosel';
import Slickslider from '../components/slider/slickslider';
import { UIEvent, useEffect, useState } from 'react';

export default function Menu() {
  const [showHeaderBg, setShowHeaderBg] = useState(true)
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

  const bestsellers = [
    {
      title: 'Nasi Box',
      imagePath: null
    },
    {
      title: 'Nasi Besek',
      imagePath: null
    },
    {
      title: 'Tumpeng Mini',
      imagePath: null
    },
    {
      title: 'Gift Box',
      imagePath: null
    },
    {
      title: 'Hantaran',
      imagePath: null
    }
  ]

  const handleScroll = (event: Event) => {
    const target = event.currentTarget as Window

    if(target.scrollY > (Math.abs(target.screen.height / 3))) {
      setShowHeaderBg(false)
    } else {
      setShowHeaderBg(true)
    }

  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="flex min-h-screen relative flex-col items-center justify-between" >
      <section id="wellcome" className='relative w-full h-screen flex flex-col'>
        <div className='absolute bottom-0 bg-contain w-full h-full bg-no-repeat bg-right-bottom' style={{
              backgroundImage: `url(/bg/pricelist-header-bottom.png)`,
            }}></div>      
        <div className={`fixed z-20 w-full font-mono text-sm justify-center flex  lg:px-0 px-4 ${showHeaderBg ? `pt-2 lg:pb-12 pb-2 bg-repeat lg:bg-contain lg:bg-[url('/bg/bg-header-menu.png')] lg:bg-transparent bg-[#88171d]` : `py-2 bg-[#88171d]`}`}> 
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
                <h1 className='lg:text-5xl md:text-4xl text-3xl font-bold tracking-wide md:px-0 px-2 md:text-left text-center w-full'>
                  Happiness Series <br />
                  Humani Catering Service
                </h1>
              </div>
              
              <div className='lg:px-0 px-12 lg:pt-10 lg:pr-12 pt-12 w-full md:px-4 px-6 h-1/3 items-end flex md:text-left text-center'>
                Pilihan menu terbaik untuk Sahabat HCS.
                Siap dadakan 1 Jam siap kirim. 
                24 Jam melayani sepenuh hati. 
                Setiap acara setiap saat Humani Catering Service siap menemani
              </div>
            </div>
            <div className='md:w-1/2 w-full lg:pt-0 md:pt-6 pt-4'>
              <Carosel images={testimoni} />
            </div>
          </div>
        </div>
      </section>
      <section id="review-top" className='relative'>
        <div className="bg-[#88171d] opacity-50 absolute w-full h-full" style={{
              filter: `blur(8px)`,WebkitFilter: `blur(8px)`
        }}></div>
        <div className='relative w-screen py-8'>
            <Slickslider images={review} size="cover" centerMode={false} slidesToShow={5} dots={false} className={`mx-4`}></Slickslider>
        </div>
      </section>
      <section id="hcs" className='relative py-8 w-full bg-white text-[#88171d]'>
        <div className='absolute top-0 left-0 bg-contain bg-no-repeat w-full md:h-72 bg-left-top' style={{
              backgroundImage: `url(/bg/hcs-top-left.png)`,
            }}></div>
        <div className='absolute top-0 right-0 bg-contain bg-no-repeat w-full md:h-72 bg-right-top' style={{
              backgroundImage: `url(/bg/hcs-top-right.png)`,
            }}></div> 
        <div>
          <h2 className='text-4xl text-center font-bold'>HCS (Humani Catering Service)</h2>
          <h3 className='text-center font-bold text-3xl'>1 Jam Kirim</h3>
        </div>
        <div className='pt-16'>
          <Carosel images={testimoni} />
        </div>
        <div className='relative w-full md:px-12 px-4 md:mt-36 mt-20 h-full flex flex-col items-center pt-12'>
            <div className='relative w-full h-12 rounded-full bg-[#88171d]'></div>
            <div className='relative md:w-48 md:h-48 w-36 h-36 bg-[#88171d] text-white rounded-full md:bottom-[7.6rem] bottom-[6rem] md:text-3xl text-2xl flex justify-center items-center'>Best Seller</div>
        </div>
        <div className='absolute bottom-64 left-0 bg-contain bg-no-repeat w-full md:h-72 bg-left-bottom' style={{
              backgroundImage: `url(/bg/hcs-bottom-left.png)`,
            }}></div>
        <div className='absolute bottom-64 right-0 bg-contain bg-no-repeat w-full md:h-72 bg-right-bottom' style={{
              backgroundImage: `url(/bg/hcs-bottom-right.png)`,
            }}></div> 
      </section>
      <section id='best-seller' className='flex w-full bg-white relative md:-mt-12 -mt-24 flex-col'>
            <div className='flex md:flex-row flex-col justify-center md:space-x-8 md:space-y-0 space-y-8'>
              {bestsellers.map((item, i) => {
                return <div key={i} className='flex flex-col items-center'>
                  <h3 className='text-center text-[#88171d] pb-2 text-xl'>{item.title}</h3>
                  <div className='bg-[#88171d] w-48 h-48'></div>
                </div>
              })}
            </div>
            <div className='relative w-full md:px-12 px-4 md:mt-36 mt-20 h-full flex flex-col items-center pt-12'>
                <div className='relative w-full h-12 rounded-full bg-[#88171d]'></div>
                <div className='relative md:w-48 md:h-48 w-36 h-36 bg-[#88171d] text-white rounded-full md:bottom-[7.6rem] bottom-[6rem] md:text-3xl text-2xl flex justify-center items-center'>Nasi Box</div>
            </div>
            <div className='absolute bottom-64 left-0 bg-contain bg-no-repeat w-full md:h-72 bg-left-bottom' style={{
              backgroundImage: `url(/bg/hcs-top-left.png)`,
            }}></div>
            <div className='absolute bottom-64 right-0 bg-contain bg-no-repeat w-full md:h-72 bg-right-bottom' style={{
                  backgroundImage: `url(/bg/hcs-top-right.png)`,
            }}></div> 
      </section>
      <section id='best-seller' className='flex w-full bg-white relative -mt-12 flex-col'>
      <div className='flex md:flex-row flex-col justify-center md:space-x-8 md:space-y-0  space-y-8'>
              {[0, 1, 2].map((item, i) => {
                return <div key={i} className='flex flex-col items-center'>
                  <h3 className='text-center text-[#88171d] pb-2 text-xl'>Nasi Box</h3>
                  <div className='bg-[#88171d] w-48 h-48'></div>
                </div>
              })}
            </div>
            <div className='relative w-full md:px-12 px-4 md:mt-36 mt-20 h-full flex flex-col items-center pt-12'>
                <div className='relative w-full h-12 rounded-full bg-[#88171d]'></div>
                <div className='relative md:w-48 md:h-48 w-36 h-36 bg-[#88171d] text-white rounded-full md:bottom-[7.6rem] bottom-[6rem] md:text-3xl text-2xl flex justify-center items-center'>Nasi Besek</div>
            </div>
            <div className='absolute bottom-64 left-0 bg-contain bg-no-repeat w-full md:h-72 bg-left-bottom' style={{
              backgroundImage: `url(/bg/hcs-bottom-left.png)`,
            }}></div>
            <div className='absolute bottom-64 right-0 bg-contain bg-no-repeat w-full md:h-72 bg-right-bottom' style={{
                  backgroundImage: `url(/bg/hcs-bottom-right.png)`,
            }}></div> 
      </section>
      <section id='best-seller' className='flex w-full bg-white relative -mt-12 flex-col'>
        <div className='flex md:flex-row flex-col justify-center md:space-x-8 md:space-y-0  space-y-8'>
              {[0, 1, 2].map((item, i) => {
                return <div key={i} className='flex flex-col items-center'>
                  <h3 className='text-center text-[#88171d] pb-2 text-xl'>Nasi Besek</h3>
                  <div className='bg-[#88171d] w-48 h-48'></div>
                </div>
              })}
            </div>
            <div className='relative w-full md:px-12 px-4 md:mt-36 mt-20 h-full flex flex-col items-center pt-12'>
                <div className='relative w-full h-12 rounded-full bg-[#88171d]'></div>
                <div className='relative md:w-48 md:h-48 w-36 h-36 bg-[#88171d] text-white rounded-full md:bottom-[7.6rem] bottom-[6rem] md:text-3xl text-2xl flex justify-center items-center text-center'>Tumpeng Mini</div>
            </div>
            <div className='absolute bottom-64 left-0 bg-contain bg-no-repeat w-full md:h-72 bg-left-bottom' style={{
              backgroundImage: `url(/bg/hcs-top-left.png)`,
            }}></div>
            <div className='absolute bottom-64 right-0 bg-contain bg-no-repeat w-full md:h-72 bg-right-bottom' style={{
                  backgroundImage: `url(/bg/hcs-top-right.png)`,
            }}></div> 
      </section>
      <section id='best-seller' className='flex w-full bg-white relative -mt-12 flex-col'>
        <div className='flex md:flex-row flex-col justify-center md:space-x-8 md:space-y-0 space-y-8'>
              {[0, 1, 2].map((item, i) => {
                return <div key={i} className='flex flex-col items-center'>
                  <h3 className='text-center text-[#88171d] pb-2 text-xl'>Tumpeng Mini</h3>
                  <div className='bg-[#88171d] w-48 h-48'></div>
                </div>
              })}
            </div>
            <div className='relative w-full md:px-12 px-4 md:mt-36 mt-20 h-full flex flex-col items-center pt-12'>
                <div className='relative w-full h-12 rounded-full bg-[#88171d]'></div>
                <div className='relative md:w-48 md:h-48 w-36 h-36 bg-[#88171d] text-white rounded-full md:bottom-[7.6rem] bottom-[6rem] md:text-3xl text-2xl flex justify-center items-center text-center'>Gift Box</div>
            </div>
            <div className='absolute bottom-64 left-0 bg-contain bg-no-repeat w-full md:h-72 bg-left-bottom' style={{
              backgroundImage: `url(/bg/hcs-bottom-left.png)`,
            }}></div>
            <div className='absolute bottom-64 right-0 bg-contain bg-no-repeat w-full md:h-72 bg-right-bottom' style={{
                  backgroundImage: `url(/bg/hcs-bottom-right.png)`,
            }}></div> 
      </section>
      <section id='best-seller' className='flex w-full bg-white relative -mt-12 flex-col'>
        <div className='flex md:flex-row flex-col justify-center md:space-x-8 md:space-y-0 space-y-8'>
              {[0, 1, 2].map((item, i) => {
                return <div key={i} className='flex flex-col items-center'>
                  <h3 className='text-center text-[#88171d] pb-2 text-xl'>Hantaran</h3>
                  <div className='bg-[#88171d] w-48 h-48'></div>
                </div>
              })}
            </div>
            <div className='relative w-full md:px-12 px-4 md:mt-36 mt-20 h-full flex flex-col items-center pt-12'>
                <div className='relative w-full h-12 rounded-full bg-[#88171d]'></div>
                <div className='relative md:w-48 md:h-48 w-36 h-36 bg-[#88171d] text-white rounded-full md:bottom-[7.6rem] bottom-[6rem] md:text-3xl text-2xl flex justify-center items-center text-center'>Snack Box Series</div>
            </div>
            <div className='absolute bottom-64 left-0 bg-contain bg-no-repeat w-full md:h-72 bg-left-bottom' style={{
              backgroundImage: `url(/bg/hcs-top-left.png)`,
            }}></div>
            <div className='absolute bottom-64 right-0 bg-contain bg-no-repeat w-full md:h-72 bg-right-bottom' style={{
                  backgroundImage: `url(/bg/hcs-top-right.png)`,
            }}></div> 
      </section>
      <section id='best-seller' className='flex w-full bg-white relative -mt-12 flex-col'>
        <div className='flex md:flex-row flex-col justify-center md:space-x-8 md:space-y-0 space-y-8'>
              {[0, 1, 2].map((item, i) => {
                return <div key={i} className='flex flex-col items-center'>
                  <h3 className='text-center text-[#88171d] pb-2 text-xl'>Snack Bpx Series</h3>
                  <div className='bg-[#88171d] w-48 h-48'></div>
                </div>
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
        <div className='flex max-w-5xl w-full md:justify-between items-center  md:flex-row flex-col md:space-x-20 space-y-4'>
          <div className='md:w-1/3 w-1/2 md:py-16 pt-16 pb-8'>
            <h3 className='text-center text-[#88171d] font-bold text-xl pb-2'>Kerupuk Udang</h3>
            <div className='h-72 bg-[#88171d]'></div>
          </div>
          <div className='md:w-1/3 w-1/2 md:py-16 py-4'>
            <h3 className='text-center text-[#88171d] font-bold text-xl pb-2'>Extra</h3>
            <div className='h-72 bg-[#88171d]'></div>
          </div>
          <div className='md:w-1/3 w-1/2 md:py-16 py-4'>
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
        <div className='py-36 flex justify-center'>FORM HERE</div>
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
