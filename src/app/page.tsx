/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import PhotoOverlay, {
  PhotoOverlay2,
  PhotoOverlay3,
} from "@/app/ui/PhotoOverlay";
import { getPages, type Trip2 } from "@/app/api/api";

export default async function HomePage() {
  const content: Trip2 = await getPages();
  const startDate = new Date(
    content.data.trips[0].startDate
  ).toLocaleDateString("pl-PL");
  const endDate = new Date(content.data.trips[0].endDate).toLocaleDateString(
    "pl-PL"
  );
  const date = `${startDate} - ${endDate}`;

  return (
    <section className="w-full h-full flex-col p-5 || md:justify-center md:flex md:flex-row md:gap-5  md:w-full md:items-center lg:flex lg:flex-row lg:gap-5  ">
      <div className="  md:w-[590px] md:h-[655px] w-[349px] h-[387px]   rounded-[40px]  justify-center items-center inline-flex">
        <div className="relative transition-transform ">
          <PhotoOverlay
            imageUrl={content.data.trips[0].image.url}
            name={content.data.trips[0].tripName}
            price={content.data.trips[0].price}
            date={date}
            location={"Paryż, Francja"}
            description={content.data.trips[0].description}
          />
        </div>
      </div>

      <div className="flex flex-col gap-5 ">
        <div className=" transition-transform hover:scale-95 md:w-[590px] md:h-[315px] w-[585px] h-[188px] rounded-[40px] shadow flex-col justify-start items-start gap-2.5 inline-flex">
          <div className="relative">
            <PhotoOverlay2
              imageUrl={content.data.trips[1].image.url}
              name={"Turcja"}
              price={2137}
              date={"29.06 - 07.06.2024"}
              location="Stambuł, Turcja"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed"
            />
          </div>
        </div>
        <div className=" w-full h-full flex flex-row gap-2">
          <div className=" transition-transform hover:scale-95 md:w-[280px] md:h-[315px] w-[170px] h-[191px] basis-1/2  rounded-[40px] flex-col justify-start items-center  inline-flex">
            <div className="relative ">
              <PhotoOverlay3
                imageUrl={content.data.trips[2].image.url}
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
            href="/oferta"
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
