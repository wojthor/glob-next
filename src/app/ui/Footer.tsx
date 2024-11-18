import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t-2 border-[#e6e6e6]  text-black md:p-12 p-5">
      <div className="container  mx-auto px-4">
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex flex-col gap-5 items-center md:items-start">
            <div className="mb-4">
              <Image
                src="/logo.svg"
                alt="Wanderlust Travels Logo"
                width={200}
                height={80}
                className="rounded-md "
              />
            </div>

            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/profile.php?id=100049702466113"
                className="hover:text-blue-400 transition-colors"
              >
                <Facebook size={24} />
              </Link>
              <Link
                href="https://www.instagram.com/biuro_podrozy_glob/"
                className="hover:text-pink-400 transition-colors"
              >
                <Instagram size={24} />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Oferta</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/wycieczki"
                  className="hover:text-gray-300 transition-colors"
                >
                  Wycieczki
                </Link>
              </li>
              <li>
                <Link
                  href="/dla-szkol"
                  className="hover:text-gray-300 transition-colors"
                >
                  Dla szkół
                </Link>
              </li>
              <li>
                <Link
                  href="/kolonie-i-obozy"
                  className="hover:text-gray-300 transition-colors"
                >
                  Kolonie i obozy
                </Link>
              </li>
              <li>
                <Link
                  href="/dla-zakladow-pracy"
                  className="hover:text-gray-300 transition-colors"
                >
                  Dla zakładów pracy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail size={18} className="mr-2" />
                <a
                  href="mailto:bpglob@bpglob.pl"
                  className="hover:text-gray-300 transition-colors"
                >
                  bpglob@bpglob.pl
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2" />
                <a
                  href="tel:+1234567890"
                  className="hover:text-gray-300 transition-colors"
                >
                  77 454 33 89
                </a>
              </li>
              <li className="flex items-center">
                <MapPin size={18} className="mr-2" />
                <span>Opole ul. Reymonta 30</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">O nas</h4>
            <p className="mb-4">
              Biuro Podróży GLOB działa na polskim rynku turystycznym od 1990
              roku. Jesteśmy organizatorem i pośrednikiem imprez turystycznych w
              kraju i za granicą. Siedziba główna naszego biura mieści się w
              Opolu przy ul. Reymonta 30. Biuro posiada własny autokar.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white text-center">
          <p>&copy; 2024 BP GLOB Opole Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
}
