/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import PhotoOverlay, {
  PhotoOverlay2,
  PhotoOverlay3,
} from "@/app/ui/PhotoOverlay";
import { getPages, type Trip2 } from "@/app/api/api";

function getRandomIndices(max: number, count: number): number[] {
  const indices = new Set<number>();
  while (indices.size < count) {
    const randomIndex = Math.floor(Math.random() * max);
    indices.add(randomIndex);
  }
  return Array.from(indices);
}

export default async function HomePage() {
  const content: Trip2 = await getPages();
  const trips = content.data.trips;

  if (trips.length < 3) {
    throw new Error("Not enough trips available to display.");
  }

  const [index1, index2, index3] = getRandomIndices(trips.length, 3);

  const trip1 = trips[index1];
  const trip2 = trips[index2];
  const trip3 = trips[index3];

  const formatDateRange = (start: string, end: string) => {
    const startDate = new Date(start).toLocaleDateString("pl-PL");
    const endDate = new Date(end).toLocaleDateString("pl-PL");
    return `${startDate} - ${endDate}`;
  };

  return (
    <section className="w-full h-full flex-col p-5 || md:justify-center md:flex md:flex-row md:gap-5 md:w-full md:items-center lg:flex lg:flex-row lg:gap-5">
      <div className="md:w-[590px] md:h-[655px] w-[349px] h-[387px] rounded-[40px] justify-center items-center inline-flex">
        <div className="relative transition-transform">
          <PhotoOverlay
            imageUrl={trip1.image.url}
            name={trip1.tripName}
            price={trip1.price}
            date={formatDateRange(trip1.startDate, trip1.endDate)}
            location={trip1.location}
            description={trip1.description}
          />
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <div className="transition-transform hover:scale-95 md:w-[590px] md:h-[315px] w-[585px] h-[188px] rounded-[40px] shadow flex-col justify-start items-start gap-2.5 inline-flex">
          <div className="relative">
            <PhotoOverlay2
              imageUrl={trip2.image.url}
              name={trip2.tripName}
              price={trip2.price}
              date={formatDateRange(trip2.startDate, trip2.endDate)}
              location={trip2.location}
              description={trip2.description}
            />
          </div>
        </div>
        <div className="w-full h-full flex flex-row gap-2">
          <div className="transition-transform hover:scale-95 md:w-[280px] md:h-[315px] w-[170px] h-[191px] basis-1/2 rounded-[40px] flex-col justify-start items-center inline-flex">
            <div className="relative">
              <PhotoOverlay3
                imageUrl={trip3.image.url}
                name={trip3.tripName}
                price={trip3.price}
                date={formatDateRange(trip3.startDate, trip3.endDate)}
                location={trip3.location}
                description={trip3.description}
              />
            </div>
          </div>
          <Link
            className="hover:scale-95 transition-transform w-auto h-auto basis-1/2 bg-neutral-100 rounded-[40px] shadow border border-blue-800 justify-center items-center flex"
            href="/oferta"
          >
            <div className="flex-col flex gap-2">
              <h1 className="text-zinc-700 gap-5 font-normal font-['Questrial', 'sans-serif'] text-[14px]">
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
