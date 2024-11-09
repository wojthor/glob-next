/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import React from "react";

type InfoComponentProps = {
  description?: string;
  services: string;
  extras: string;
};

export default function TravelInfoComponent({
  description,
  services,
  extras,
}: InfoComponentProps) {
  return (
    <div className="w-full max-w-4xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">
      <div className="p-6 space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-[#1c59ac] mb-4">
            Plan wycieczki
          </h2>
          {description ? (
            <p className="text-gray-700 text-base">{description}</p>
          ) : (
            <p className="text-gray-500 italic">
              Brak dostępnego opisu wycieczki.
            </p>
          )}
        </div>

        <div>
          <h2 className="text-2xl font-bold text-[#1c59ac] mb-4">
            Świadczenia w cenie
          </h2>

          <ul className="list-disc list-inside space-y-3">{services}</ul>

          <p className="mt-4 font-bold text-blue-600">{extras}</p>
        </div>
      </div>
    </div>
  );
}
