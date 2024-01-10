'use client'

import Image from 'next/image'
import Carosel from './components/slider/carosel'

export default function Home() {
  const testimoni = [
    `/testimoni/testimoni-1.jpeg`,
    `/testimoni/testimoni-2.jpeg`,
    `/testimoni/testimoni-3.jpeg`,
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section id="wellcome" className='w-full h-screen flex flex-col bg-no-repeat bg-right-bottom 
            after:content-[url("/bg/bg-top-left.png")] after:leading-none after:absolute 
            after:-bottom-1 after:left-0 after:w-full after::h-full' style={{
              backgroundImage: `url(/bg/bg-top-right.png)`,
            }}>
        <div className="z-10 w-full font-mono text-sm justify-center flex py-2 bg-[#88171d]">
          <div className="max-w-5xl w-full flex justify-between">
            <div className=''>
              <Image
                    src="/logo.png"
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
        <div className='flex w-full justify-center'>
          <div className='flex max-w-5xl w-full md:flex-row flex-col md:py-24 py-6'>
            <div className='md:w-1/2 w-full text-[#88171d]'>
              <div className='lg:w-4/5 w-full'>
                <h1 className='md:text-5xl text-2xl font-bold tracking-wide'>
                  Acara Mepet dan 
                  Butuh Catering yang 
                  Satset ? Anda Fokus 
                  Acaranya, Kami Urus 
                  Sajiannya
                </h1>
              </div>
              
              <div className='pt-4'>
                Bebas pilih waktu, menu, harga, jumlah serta pengantarannya <br />
                nammun tetap asik menunya, resik prosesnya, ciamik rasanya, <br />
                cantik penyajiannya dan epik pengalamannya.
              </div>
            </div>
            <div className='md:w-1/2 w-full md:pt-0 pt-4'>
              <Carosel images={testimoni} />
            </div>
          </div>
        </div>
      </section>
      <section id="komitmen-kami" className='flex w-full justify-center bg-no-repeat bg-cover' style={{
              backgroundImage: `url(/bg/bg-menu-service.jpg)`,
            }}>
        <div className='flex max-w-5xl w-full flex-col'>
          <div className='relative w-fit mt-16'>
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
          <h2 className='text-white md:text-5xl text-2xl text-center mt-12'>Komitmen Kami</h2>
          <div>
            <div
                  className="flex items-center justify-between rounded-full px-8 py-2.5 w-full bg-[#88171d] my-4"
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
      </section>
      
      {/* <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div> */}
    </main>
  )
}
