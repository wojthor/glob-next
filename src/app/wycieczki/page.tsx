/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import trips, { type Trip } from "@/app/trips";

export default function TripsPage() {
  const wycieczki: Trip[] = trips;
  return (
    <div className="flex flex-col gap-10 p-4 ">
      <header className="flex text-center justify-center   text-black text-4xl font-light font-['Questrial', 'sans-serif'] ">
        <h1 className=" border-b border-blue-800">Wycieczki</h1>
      </header>
      <section className=" flex flex-wrap justify-center  gap-7 ">
        {wycieczki.map((wycieczka) => (
          <>
            <Link href={`/wycieczki/${wycieczka.id}`}>
              <div className=" w-[160px] h-[266px] flex-col flex justify-center items-center || md:w-[266px] md:h-[360px]  ">
                <div className=" bg-neutral-100 rounded-[20px] justify-center items-center inline-flex md:w-[266px] md:h-[266px] md:rounded-[40px]">
                  <img
                    className="w-[160px] h-[160px] rounded-[20px] ease-in-out md:w-[266px] md:h-[266px] md:rounded-[40px] "
                    src={wycieczka.image}
                    alt={wycieczka.name}
                  />
                </div>

                <div className="flex w-full p-3 h-full rounded-bl-[20px] rounded-br-[20px] border-l border-r border-blue-800 flex-col justify-start items-start ">
                  <div className="flex-grow text-black font-['Questrial', 'sans-serif']">
                    <h1 className="font-semibold  text-xs ">
                      {wycieczka.name}
                    </h1>
                  </div>
                  <div className=" flex basis-1/3  text-black  font-normal  font-['Questrial', 'sans-serif']">
                    <h1 className="font-normal text-[11px]">
                      {wycieczka.date}
                    </h1>
                  </div>
                  <div className="flex basis-1/3  w-full h-full ">
                    <div className="flex w-full h-full  basis-1/2 ">
                      <div className="w-full h-full  bg-orange-400 rounded-[10px]">
                        <div className="w-full h-full flex justify-center items-center  text-white text-[12px] font-normal font-['Questrial', 'sans-serif']">
                          <h1>{wycieczka.price}zł</h1>
                        </div>
                      </div>
                    </div>
                    <div className="flex basis-1/2  justify-end items-center ">
                      <div className="text-center text-blue-800 text-[10px] font-normal font-['Questrial', 'sans-serif']">
                        Czytaj więcej
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </>
        ))}
      </section>
    </div>
  );
}
