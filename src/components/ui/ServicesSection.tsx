import React from "react";
import { Plane, Users, Award, Calendar, MapPin } from "lucide-react";

export function ServicesSection() {
  return (
    <section className="mb-20">
      <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
        Co robimy
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Kompleksowa obsługa
          </h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-center gap-2">
              <Plane className="w-5 h-5 text-blue-600" />
              Bilety lotnicze i autokarowe
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-blue-600" />
              Wycieczki krajowe i zagraniczne
            </li>
            <li className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-blue-600" />
              Kolonie i zimowiska dla dzieci
            </li>
          </ul>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Gwarancja jakości
          </h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-center gap-2">
              <Award className="w-5 h-5 text-blue-600" />
              Koncesja Organizatora Nr 027
            </li>
            <li className="flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-600" />
              Obsługa grup i klientów indywidualnych
            </li>
            <li className="flex items-center gap-2">
              <Award className="w-5 h-5 text-blue-600" />
              Polisa Ubezpieczeniowa SIGNAL IDUNA
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
