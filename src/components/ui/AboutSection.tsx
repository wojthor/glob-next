import React from "react";
import { Calendar, MapPin, Bus } from "lucide-react";
import { InfoCard } from "@/components/ui/InfoCard";

export function AboutSection() {
  return (
    <section className="mb-20">
      <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
        O firmie
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <InfoCard icon={Calendar} title="30 lat doświadczenia">
          Działamy na polskim rynku turystycznym od 1990 roku, oferując
          najwyższej jakości usługi turystyczne.
        </InfoCard>
        <InfoCard icon={MapPin} title="Lokalizacja">
          Nasza siedziba główna mieści się w Opolu przy ul. Reymonta 30, gdzie
          służymy Państwu profesjonalnym doradztwem.
        </InfoCard>
        <InfoCard icon={Bus} title="Własny transport">
          Dysponujemy własnym, komfortowym autokarem, zapewniając najwyższy
          standard podróży.
        </InfoCard>
      </div>
    </section>
  );
}
