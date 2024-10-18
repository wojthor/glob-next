/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import trips from "@/app/trips";
import TravelInfoComponent from "@/app/ui/TravelInfoComponent";
import Component from "@/app/ui/TripConcept";

export default function Page() {
  const params = useParams();
  const tripID = Array.isArray(params.tripID)
    ? params.tripID[0]
    : params.tripID;
  console.log("Params:", tripID);

  const wycieczka = trips.find((trip) => trip.id === parseInt(tripID));
  if (!wycieczka) {
    return <div>Wycieczka nie została znaleziona</div>;
  }

  return (
    <>
      <Component {...wycieczka} />
      <div className="flex flex-col gap-4 p-5 md:p-0">
        <div className="flex flex-col gap-7 md:p-10">
          <TravelInfoComponent
            description={wycieczka.description}
            services={wycieczka.services}
          />
          <button className="transition-transform hover:scale-95 text-center items-center flex-col flex gap-2 text-black text-xl font-semibold font-['Questrial''sans-serif]">
            <Link href="/kontakt">
              <p className="">Masz pytania?</p>
              <div className="w-[161px] h-6 relative shadow flex-col justify-start items-start inline-flex">
                <div className="w-[161px] h-6 bg-[#1c59ac]/40 rounded-[10px] border border-[#656565]">
                  <div className="w-[161px] h-6 text-center text-white text-base font-semibold items-center justify-center  font-['Questrial, 'sans-serif']">
                    <h6>Napisz do nas </h6>
                  </div>
                </div>
              </div>
            </Link>
          </button>{" "}
        </div>
      </div>
    </>
  );
}

/*
 <div className="relative w-full h-auto md:w-full md:h-[500px] bg-neutral-100 ">
        <img
          className="border-[#1c59ac] z-0 md:w-full md:h-full w-full h-full  "
          src={wycieczka.image}
          alt={wycieczka.name}
        />
        <div>
          <Link href="/wycieczki" className="absolute top-0 left-0 p-2 m-2">
            <img src="/frame.svg" alt="back" />
          </Link>
        </div>

        <div className="z-10 md:p-6  p-5 flex flex-col md:gap-4 absolute bottom-0 left-8  w-1/2 h-1/2 md:w-[587px] md:h-[261px] bg-white md:rounded-tl-[40px] rounded-tl-[20px] rounded-tr-[20px] md:rounded-tr-[40px] border-l border-r border-t border-[#1c59ac] border-b-[#fff]">
          <div className="flex flex-1/3 w-100 text-[#434648] md:text-[35px] font-semibold uppercase font-['Questrial', 'normal']">
            {wycieczka.name}
          </div>
          <div className="flex-1/3 w-100 flex text-[#434648] md:text-2xl font-normal font-['Questrial', 'sans-serif']">
            {wycieczka.date}
          </div>
          <div className="flex-1/3 w-3/4 h-1/2 flex bg-[#d28135] rounded-[30px] shadow items-center justify-center">
            <div className="text-center text-white md:text-[70px] font-normal font-['Questrial', 'sans-serif']">
              {wycieczka.price} zł
            </div>
          </div>
        </div>
      </div>
*/
