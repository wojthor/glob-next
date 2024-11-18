"use client";
import { motion } from "framer-motion";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { SearchTrips, type Trip2 } from "@/app/api/api";

import Content from "@/app/ui/Content";

export type Trip3 = {
  id: string;
  tripName: string;
  description: string;
  startDate: string;
  endDate: string;
  price: number;
  image: { url: string };
  services: string[];
  extras: string[];
};

export default function SearchPage() {
  const searchParams = useSearchParams();
  const search = searchParams.get("query");
  const [query, setQuery] = useState<string | null>(null);
  const [data, setData] = useState<Trip2>({ data: { trips: [] } });

  useEffect(() => {
    const timer = setTimeout(() => {
      setQuery(search);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  useEffect(() => {
    if (query) {
      const fetchTrips = async () => {
        const content: Trip2 = await SearchTrips({ query });
        setData(content);
      };
      void fetchTrips();
    }
  }, [query]);

  if (!query) {
    return (
      <div className="bg-gradient-to-r rom-blue-50 to-indigo-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="py-12 sm:py-16">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
                Wyszukiwanie...
              </h1>
              <motion.div
                className="mt-8 flex justify-center"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [1, 0.5, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <svg
                  className="w-12 h-12 text-[#1c59ac]"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col">
      <div className="bg-gradient-to-r ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="py-12 sm:py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
                Wyniki wyszukiwania
              </h1>
              <p className="mt-3 text-xl text-gray-500 sm:mt-4">
                Znaleziono{" "}
                <span className="font-semibold text-[#1c59ac]">
                  {data.data.trips.length}
                </span>{" "}
                wyników dla:{" "}
                <span className="font-semibold  text-[#1c59ac]">
                  &quot;{query}&quot;
                </span>
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      <section className="md:p-4">
        <Content {...data} />
      </section>
    </div>
  );
}
