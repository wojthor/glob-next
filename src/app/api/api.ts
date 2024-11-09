const grapqgl = process.env.NEXT_HYGRAPH_ENDPOINT;

export type Trip2 = {
  data: {
    trips: {
      endDate: string;
      startDate: string;
      description: string;
      id: string;
      tripName: string;
      price: number;
      image: { url: string };
      services: string;
      extras: string;
    }[];
  };
};

export async function getPages(): Promise<Trip2> {
  if (!grapqgl) {
    throw new Error("NEXT_HYGRAPH_ENDPOINT is not defined");
  }

  const response = await fetch(grapqgl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-cache",
    },
    body: JSON.stringify({
      query: `query X {
  trips {
    endDate
    startDate
    description
    id
    tripName
    price
    image {
      url
    }
    services 
  }
}`,
    }),
  });

  const data: Trip2 = (await response.json()) as Trip2;

  return data;
}

export async function getTripByID(tripID: string): Promise<Trip2> {
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
  trips(where: {id: "${tripID}"}) {
    tripName
    description
    startDate
    endDate
    price
    image {
      url
    }
    services
    extras
  }
}`,
    }),
  });

  const data: Trip2 = (await response.json()) as Trip2;

  return data;
}
