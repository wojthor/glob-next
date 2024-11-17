/* eslint-disable @next/next/no-img-element */

import { type Trip2, getTripByCategory } from "@/app/api/api";

/*
const grapqgl = process.env.NEXT_HYGRAPH_ENDPOINT;

export type Trip2 = {
  data: {
    trips: {
      date: string;
      description: string;
      id: string;
      tripName: string;
      price: number;
      image: { url: string };
    }[];
  };
};

async function getPages(): Promise<Trip2> {
  if (!grapqgl) {
    throw new Error("NEXT_HYGRAPH_ENDPOINT is not defined");
  }

  const response = await fetch(grapqgl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `query MyQuery {
  trips {
    date
    description
    id
    tripName
    price
    image {
      url
    }
  }
}`,
    }),
  });

  const data: Trip2 = (await response.json()) as Trip2;
  console.log(data.data.trips);
  return data;
}

export default async function Page() {
  const content = await getPages();

  return (
    <>
      <div className="flex flex-col">
        {content.data.trips.map((trip) => (
          <div key={trip.id}>
            <img
              className="w-1/2 h-auto"
              src={trip.image.url}
              alt={trip.tripName}
            />
            <h2>{trip.tripName}</h2>
            <p>{trip.description}</p>
            <p>{trip.date}</p>
            <p>{trip.price}$</p>
          </div>
        ))}
      </div>
    </>
  );
}

/*
export default function Page() {
  return (
    
  );
} */

export default async function Test() {
  const content: Trip2 = await getTripByCategory("dlaZakladowPracy");
  const trip = content.data.trips[1];
  return (
    <div>
      <img className="w-1/2 h-auto" src={trip.image.url} alt={trip.tripName} />
      <h2>{trip.tripName}</h2>
      <p>{trip.description}</p>
      <p>
        {trip.startDate} - {trip.endDate}
      </p>
      <p>{trip.price}$</p>
      <p>{trip.services}</p>
      <p>{trip.extras}</p>
    </div>
  );
}
