import React from "react";
import { Users } from "lucide-react";

export function TeamSection() {
  return (
    <section>
      <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
        Nasz zespół
      </h2>
      <div className="bg-white rounded-xl shadow-lg p-8 text-center max-w-3xl mx-auto">
        <Users className="w-16 h-16 text-blue-600 mx-auto mb-6" />
        <p className="text-gray-600 leading-relaxed mb-6">
          Nasi pracownicy tworzą zgrany i kompetentny zespół. Powierzają nam
          Państwo swój wolny czas, szanujemy to i doceniamy starając się spełnić
          Państwa oczekiwania.
        </p>
        <div className="h-px bg-gray-200 w-1/2 mx-auto mb-6" />
        <p className="text-gray-600 leading-relaxed">
          30 lat doświadczenia w branży turystycznej pozwala nam oferować usługi
          najwyższej jakości, spełniające wszystkie wymogi Ustawy o Turystyce.
        </p>
      </div>
    </section>
  );
}
