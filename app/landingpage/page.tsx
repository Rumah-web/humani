import Image from "next/image";

export default function Page() {
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
              className="rounded-full w-fit text-white px-3 py-1 text-sm"
              style={{ backgroundColor: `#88171d` }}
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
                  className="flex items-center justify-between rounded-full px-8 py-2.5 w-full"
                  style={{ backgroundColor: `#88171d` }}
                >
                  <div className="flex flex-col w-full space-y-1 text-white items-center justify-center">
                    <div
                      style={{ color: `#88171d` }}
                      className="flex bg-white rounded-full h-9 w-9 items-center justify-center"
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
                      style={{ color: `#88171d` }}
                      className="flex bg-white rounded-full h-9 w-9 items-center justify-center"
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
                      style={{ color: `#88171d` }}
                      className="flex bg-white rounded-full h-9 w-9 items-center justify-center"
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
                      style={{ color: `#88171d` }}
                      className="flex bg-white rounded-full h-9 w-9 items-center justify-center"
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
                className="md:text-3xl text-2xl text-center font-bold pt-4 px-2"
                style={{ color: `#88171d` }}
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
                className="text-2xl text-center py-8"
                style={{ color: `#88171d` }}
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
          <section
            id="footer"
            className="flex space-x-12 px-4 py-6"
            style={{ backgroundColor: `#88171d` }}
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
