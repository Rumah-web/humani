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
      <div className='w-full h-screen flex flex-col bg-no-repeat bg-right-bottom 
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
          <div className='flex max-w-5xl w-full md:flex-row flex-col flex md:py-24 py-6'>
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
      </div>
      
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
