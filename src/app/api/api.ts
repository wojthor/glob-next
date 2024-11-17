const grapqgl = process.env.NEXT_HYGRAPH_ENDPOINT;

export type Trip2 = {
  data: {
    trips: {
      endDate: string;
      startDate: string;
      description: string;
      category: string;
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
    },

    next: { revalidate: 10 },
    body: JSON.stringify({
      query: `query S {
        trips {
          endDate
          category
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

    next: { revalidate: 10 },
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

export async function getTripByCategory(category: string): Promise<Trip2> {
  if (!grapqgl) {
    throw new Error("NEXT_HYGRAPH_ENDPOINT is not defined");
  }

  const response = await fetch(grapqgl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    next: { revalidate: 10 },
    body: JSON.stringify({
      query: `query S {
  trips(where: {category: "${category}"}) {
    price
    tripName
    id
    category
    image{
      url
    }
    services
    extras
    endDate
    startDate
    description
  }
}`,
    }),
  });

  const data: Trip2 = (await response.json()) as Trip2;
  console.log(data);

  return data;
}
