/* eslint-disable @next/next/no-img-element */

import { getTripByCategory, type Trip2 } from "@/app/api/api";
import Content from "@/app/ui/Content";

export default async function SchoolTrips() {
  const content: Trip2 = await getTripByCategory("dla-szkol");
  if (!content.data || !content.data.trips) {
    return <div>No trips available</div>;
  }

  return (
    <div className="flex flex-col gap-10 p-4 ">
      <header className="flex text-center justify-center   text-black text-4xl font-light font-['Questrial', 'sans-serif'] ">
        <h1 className=" border-b border-blue-800">Dla szkół</h1>
      </header>
      <Content {...content} />
    </div>
  );
}
