/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Calendar, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import ContactForm from "@/app/ui/Modal";
import { type Trip2 } from "@/app/api/api";

function calculateDaysAndNights(start: string, end: string): string {
  const startDate = new Date(start);
  const endDate = new Date(end);

  const timeDifference = endDate.getTime() - startDate.getTime();
  const totalDays = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

  if (totalDays <= 0) {
    return "0 dni, 0 nocy";
  }

  const nights = totalDays - 1;
  return `${totalDays} dni, ${nights} ${nights === 1 ? "noc" : "noce"}`;
}

export default function Component(wycieczka: Trip2) {
  const [isHovered, setIsHovered] = useState(false);
  const [show, setShow] = useState(false);

  const dateRange = calculateDaysAndNights(
    wycieczka.data.trips[0].startDate,
    wycieczka.data.trips[0].endDate
  );

  return (
    <div
      className="relative w-full h-[80vh] overflow-hidden  shadow-2xl group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: isHovered ? 1.05 : 1 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0"
      >
        <Image
          src={wycieczka.data.trips[0].image.url}
          alt="Tropical beach paradise"
          fill={true}
          style={{ objectFit: "cover" }}
          priority
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent" />
      <Link href="/oferta" className="absolute top-4 left-4 p-2 m-2">
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 left-4 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/30 z-10"
          aria-label="Go back"
        >
          <ArrowLeft className="w-12 h-6 text-white" />
        </Button>
      </Link>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="absolute bottom-0 left-0 right-0 p-8 md:p-12"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {wycieczka.data.trips[0].tripName}
          </motion.h1>

          <motion.div
            className="flex flex-wrap gap-4 mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex items-center bg-white/20 backdrop-blur-md rounded-full px-4 py-2">
              <Calendar className="w-5 h-5 text-white mr-2" />
              <span className="text-white">{dateRange}</span>
            </div>
            <div className="flex items-center bg-white/20 backdrop-blur-md rounded-full px-4 py-2">
              <MapPin className="w-5 h-5 text-white mr-2" />
              <span className="text-white">
                {wycieczka.data.trips[0].location}
              </span>
            </div>
          </motion.div>

          <motion.div
            className="flex items-center justify-between"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="flex items-center bg-emerald-500 rounded-full px-3 py-3 shadow-lg">
              <span className="text-xl md:text-3xl font-bold text-white">
                {wycieczka.data.trips[0].price} zł/os
              </span>
            </div>
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 20, opacity: 0 }}
                >
                  <button
                    onClick={() => setShow(true)}
                    className="relative items-end transition-transform hover:scale-95 "
                  >
                    <div className="flex items-center gap-2 bg-[#1c59ac] rounded-full px-3 py-3 shadow-lg">
                      <span className="text-xl md:text-xl font-bold text-white">
                        ZAPISZ SIĘ
                      </span>
                      <img
                        className="size-auto p-1 md:size-auto"
                        src="/Arrow 1.svg"
                        alt="arrow"
                      />
                    </div>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.div>
      {show && (
        <div className="fixed p-2 inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <ContactForm wycieczka={wycieczka} show={show} setShow={setShow} />
        </div>
      )}
    </div>
  );
}
