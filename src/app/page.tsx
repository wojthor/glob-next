/* eslint-disable jsx-a11y/alt-text */

import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function HomePage() {
  return (
    <section className="w-full h-full flex-col || md:justify-center md:flex md:flex-row md:gap-5  md:w-full md:items-center lg:flex lg:flex-row lg:gap-5  ">
      <div className=" transition-transform hover:scale-95 w-auto h-auto bg-neutral-100 rounded-[40px] shadow  justify-center items-center inline-flex">
        <div className="relative">
          <img
            className="w-auto h-auto rounded-[40px] ease-in-out"
            src="image 1.png"
          />

          <div className="overlay  justify-center  absolute top-0 left-0 w-full h-full flex items-end text-xl font-bold opacity-0 transition-opacity duration-300 hover:opacity-100">
            <div className="w-full rounded-b-[40px]  h-auto  relative bg-white bg-opacity-70 || md:h-1/3">
              <div className="flex flex-row gap-4 p-3 ">
                <div className=" basis-1/2 justify-items-start text-zinc-700 text-3xl font-normal font-['Questrial', 'sans-serif'] uppercase">
                  Grecja
                </div>
                <div className=" basis-1/2  justify-items-end text-[15px] text-zinc-700  font-normal font-['Questrial', 'sans-serif']">
                  <h1 className="flex pt-1  items-center">
                    29.06 - 07.06.2024
                  </h1>
                </div>
              </div>
              <div className=" flex flex-col gap-3 w-full h-auto p-3">
                <div className=" flex justify-start items-center ">
                  <div className=" text-black text-[20px] font-normal font-['Questrial', 'sans-serif']">
                    <h1>Wycieczka objazdowa po pięknej Grecji</h1>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="flex  w-[200px] h-[50px]   bg-orange-400 rounded-[20px] shadow justify-center items-center ">
                    <div className="text-center text-white text-[40px] font-normal font-['Questrial', 'sans-serif']">
                      <h1>3940 zł</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5 ">
        <div className=" transition-transform hover:scale-95  w-full h-auto rounded-[40px] shadow flex-col justify-start items-start gap-2.5 inline-flex">
          <div className="relative">
            <img
              className="w-auto h-auto ease-in-out rounded-[40px]"
              src="image_2.png"
            />
            <div className="overlay  justify-center  absolute top-0 left-0 w-full h-full flex items-end text-xl font-bold opacity-0 transition-opacity duration-300 hover:opacity-100">
              <div className="w-full h-3/4  relative rounded-b-[40px] bg-white bg-opacity-70">
                <div className="flex flex-row gap-4 p-3 ">
                  <div className=" basis-1/2 justify-items-start text-zinc-700 text-3xl font-normal font-['Questrial', 'sans-serif'] uppercase">
                    Turcja
                  </div>
                  <div className=" basis-1/2  justify-items-end text-[15px] text-zinc-700  font-normal font-['Questrial', 'sans-serif']">
                    <h1 className="flex pt-1  items-center">
                      29.06 - 07.06.2024
                    </h1>
                  </div>
                </div>
                <div className=" flex flex-row  w-full h-auto px-3">
                  <div className=" flex justify-start items-center ">
                    <div className=" text-black text-[15px] font-normal font-['Questrial', 'sans-serif']">
                      <h1>Wycieczka objazdowa po pięknej Grecji</h1>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="flex  w-[130px] h-[40px]   bg-orange-400 rounded-[20px] shadow justify-center items-center ">
                      <div className="text-center text-white text-[30px] font-normal font-['Questrial', 'sans-serif']">
                        <h1>3940 zł</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full h-full flex flex-row gap-2">
          <div className=" transition-transform hover:scale-95 w-full h-full basis-1/2  rounded-[40px] flex-col justify-start items-center  inline-flex">
            <div className="relative ">
              <img
                className=" w-full h-full rounded-[40px]  transition duration-500 ease-in-out"
                src="image_3.png"
              />

              <div className="overlay absolute top-0 left-0 w-full h-full flex items-end text-xl font-bold opacity-0 transition-opacity duration-300 hover:opacity-100">
                <div className="w-full h-3/4 bg-white rounded-b-[40px] bg-opacity-70 flex-col justify-start items-center  ">
                  <div className="flex p-3 flex-col gap-3 items-center justify-center">
                    <div className=" basis-1/3  text-zinc-700 text-[25px] font-normal ">
                      Meksyk
                    </div>
                    <div className="basis-1/3  text-zinc-700 text-[15px] font-normal ">
                      29.06 - 07.06.2024
                    </div>
                    <div className="flex h-11   w-3/4  bg-orange-400 rounded-[20px] shadow flex-col items-center justify-center">
                      <div className=" text-center text-white text-[25px] font-normal ">
                        3940 zł
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Link
            className="hover:scale-95 transition-transform w-auto h-auto basis-1/2  bg-neutral-100 rounded-[40px] shadow border border-blue-800  justify-center items-center flex"
            href="/wycieczki"
          >
            <div className=" flex-col flex gap-2">
              <h1 className=" text-zinc-700 gap-5   font-normal font-['Questrial', 'sans-serif']    text-[14px] ">
                Wyświetl więcej
              </h1>
              <img className="px-5" src="arrow.svg" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
