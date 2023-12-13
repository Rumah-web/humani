import Image from "next/image";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24">
      <div style={{ minWidth: `500px` }} className="bg-white">
        <section
          id="introduction"
          className="h-screen bg-cover relative"
          style={{
            backgroundImage: `url(/bg/bg-top-food.jpg)`,
          }}
        >
          <div className="bg-black opacity-25 absolute w-full h-full"></div>
          <div className="px-10 py-8 space-y-2 relative">
            <h1 className="font-bold text-3xl text-white">
              Pesan Dadakan <br />
              Mulai dari 5 Porsi <br />
              Sampai Ribuan Porsi
            </h1>
            <div
              className="rounded-full w-fit text-white px-3 py-1 text-sm"
              style={{ backgroundColor: `#88171d` }}
            >
              2 Jam Siap Kirim dengan Selamat
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
