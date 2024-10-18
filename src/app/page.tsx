"use client";
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import PhotoOverlay, { PhotoOverlay2 } from "@/app/ui/PhotoOverlay";

export default function HomePage() {
  return (
    <section className="w-full h-full flex-col p-5 || md:justify-center md:flex md:flex-row md:gap-5  md:w-full md:items-center lg:flex lg:flex-row lg:gap-5  ">
      <div className="  w-auto h-auto  rounded-[40px]  justify-center items-center inline-flex">
        <div className="relative transition-transform ">
          <PhotoOverlay
            imageUrl={"/image 1.png"}
            name={"Wycieczka po Paryżu"}
            price={1000}
            date={"29.06 - 07.06.2024"}
            location={"Paryż, Francja"}
            description="Odkryj najpiękniejsze zakątki Paryża, od wieży Eiffla po Luwr. Zobacz Montmartre i zasmakuj w prawdziwym francuskim croissancie."
          />
        </div>
      </div>

      <div className="flex flex-col gap-5 ">
        <div className=" transition-transform hover:scale-95  w-full h-auto rounded-[40px] shadow flex-col justify-start items-start gap-2.5 inline-flex">
          <div className="relative">
            <PhotoOverlay2
              imageUrl={"/image_2.png"}
              name={"Turcja"}
              price={2137}
              date={"29.06 - 07.06.2024"}
              location="Stambuł, Turcja"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed"
            />
          </div>
        </div>
        <div className=" w-full h-full flex flex-row gap-2">
          <div className=" transition-transform hover:scale-95 w-full h-full basis-1/2  rounded-[40px] flex-col justify-start items-center  inline-flex">
            <div className="relative ">
              <PhotoOverlay
                imageUrl={"/image_3.png"}
                name={"Meksyk"}
                price={2123}
                date={"29.06 - 07.06.2024"}
                location="Montevideo, Meksyk"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed"
              />
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
