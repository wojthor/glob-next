/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import React from "react";

type InfoComponentProps = {
  description?: string;
  services?: string[];
};

export default function TravelInfoComponent({
  description,
  services,
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

          <ul className="list-disc list-inside space-y-3">
            {services?.length ? (
              services.map((service, index) => (
                <li key={index} className="text-gray-700">
                  {service}
                </li>
              ))
            ) : (
              <p className="text-gray-500 italic">Brak dostępnych świadczeń.</p>
            )}
          </ul>

          <p className="mt-4 font-bold text-blue-600">
            Dla chętnych za dopłatą 180 zł transfer w 2 strony autokarem z
            miejscowości: Opole, Katowice, Rzeszów, Łańcut.
          </p>
        </div>
      </div>
    </div>
  );
}
