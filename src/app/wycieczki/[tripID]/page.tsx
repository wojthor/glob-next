/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */

import Link from "next/link";

import TravelInfoComponent from "@/app/ui/TravelInfoComponent";
import Component from "@/app/ui/TripConcept";
import { getTripByID } from "@/app/api/api";

export default async function Page({ params }: { params: { tripID: string } }) {
  const tripID = params.tripID;
  const wycieczka = await getTripByID(tripID);

  return (
    <>
      <Component {...wycieczka} />
      <div className="flex flex-col gap-4 p-5 md:p-0">
        <div className="flex flex-col gap-7 md:p-10">
          <TravelInfoComponent
            description={wycieczka.data.trips[0].description}
            services={wycieczka.data.trips[0].services}
            extras={wycieczka.data.trips[0].extras}
          />
          <button className="transition-transform hover:scale-95 text-center items-center flex-col flex gap-2 text-black text-xl font-semibold font-['Questrial''sans-serif]">
            <Link href="/kontakt">
              <p className="">Masz pytania?</p>
              <div className="w-[161px] h-6 relative  flex-col justify-start items-start inline-flex">
                <div className="w-[161px] h-6 bg-[#1c59ac] rounded-[10px] border ">
                  <div className="w-[161px]  h-6 text-center text-white text-base font-semibold items-center justify-center  font-['Questrial, 'sans-serif']">
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
