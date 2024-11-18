"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

type PhotoOverlayProps = {
  imageUrl: string;
  name: string;
  price: number;
  date: string;
  description: string;
  location: string;
};

export default function PhotoOverlay({
  imageUrl,
  name,
  price,
  date,
  description,
  location,
}: PhotoOverlayProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleHoverToggle = () => {
    setIsHovered((prev) => !prev); // Toggle for click events on mobile
  };

  return (
    <div className="text-black">
      <motion.div
        className="relative   w-[349px] h-[387px] md:w-[590px] md:h-[655px] rounded-[30px] border-blue-800 border-opacity-10 border-[1px] overflow-hidden"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onClick={handleHoverToggle} // Add onClick for mobile
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover ease-in-out"
          initial={{ scale: 1 }}
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.3 }}
        />
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-white to-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-x-0 bottom-0 p-6">
                <motion.h3
                  className="text-3xl font-bold mb-2 font-['Montserrat', sans-serif]"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                >
                  {name}
                </motion.h3>
                <motion.div
                  className="flex items-center mb-2 text-sm"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="font-['Roboto', sans-serif]">{date}</span>
                </motion.div>
                <motion.div
                  className="flex items-center mb-3 text-sm"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="font-['Roboto', sans-serif]">
                    {location}
                  </span>
                </motion.div>
                <motion.p
                  className="mb-4 text-sm font-['Roboto', sans-serif] line-clamp-2"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.3 }}
                >
                  {description}
                </motion.p>
                <motion.div
                  className="flex justify-between items-center gap-2"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                >
                  <motion.button
                    className="px-4 py-2 rounded-full font-semibold text-sm bg-orange-400 text-white"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-xl font-bold font-['Montserrat', sans-serif]">
                      {price.toLocaleString("pl-PL", {
                        style: "currency",
                        currency: "PLN",
                      })}
                    </span>
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export function PhotoOverlay2({
  imageUrl,
  name,
  price,
  date,
  description,
  location,
}: PhotoOverlayProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleHoverToggle = () => {
    setIsHovered((prev) => !prev); // Toggle for click events on mobile
  };

  return (
    <div className="text-black">
      <motion.div
        className="relative md:w-[590px] md:h-[315px] w-[349px] h-[188px] rounded-[30px] border-blue-800 border-opacity-10 border-[1px] overflow-hidden"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onClick={handleHoverToggle} // Add onClick for mobile
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover ease-in-out"
          initial={{ scale: 1 }}
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.3 }}
        />
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-white to-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute md:inset-x-0 md:bottom-0 md:p-6 p-6">
                <motion.h3
                  className="text-3xl font-bold mb-2 font-['Montserrat', sans-serif]"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                >
                  {name}
                </motion.h3>
                <motion.div
                  className="flex items-center mb-2 text-sm"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="font-['Roboto', sans-serif]">{date}</span>
                </motion.div>
                <motion.div
                  className="flex items-center mb-3 text-sm"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="font-['Roboto', sans-serif]">
                    {location}
                  </span>
                </motion.div>
                <motion.p
                  className="md:mb-4 md:text-sm md:font-['Roboto', sans-serif] md:line-clamp-2 hidden"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.3 }}
                >
                  {description}
                </motion.p>
                <motion.div
                  className="flex justify-between items-center gap-2"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                >
                  <motion.button
                    className="px-4 py-2 rounded-full font-semibold text-sm bg-orange-400 text-white"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-xl font-bold font-['Montserrat', sans-serif]">
                      {price.toLocaleString("pl-PL", {
                        style: "currency",
                        currency: "PLN",
                      })}
                    </span>
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export function PhotoOverlay3({
  imageUrl,
  name,
  price,
  date,
  description,
  location,
}: PhotoOverlayProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleHoverToggle = () => {
    setIsHovered((prev) => !prev); // Toggle for click events on mobile
  };

  return (
    <div className="text-black">
      <motion.div
        className="relative md:w-[280px] md:h-[315px] w-[170px] h-[191px] rounded-[30px] border-blue-800 border-opacity-10 border-[1px] overflow-hidden"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onClick={handleHoverToggle} // Add onClick for mobile
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover ease-in-out"
          initial={{ scale: 1 }}
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.3 }}
        />
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-white to-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute md:inset-x-0 md:bottom-0 md:p-6 p-5">
                <motion.h3
                  className="md:text-3xl text-xl font-bold mb-2 font-['Montserrat', sans-serif]"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                >
                  {name}
                </motion.h3>
                <motion.div
                  className="flex items-center mb-2 text-[12px] md:text-sm"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="font-['Roboto', sans-serif]">{date}</span>
                </motion.div>
                <motion.div
                  className="flex items-center mb-3 text-sm"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                >
                  <MapPin className="w-4 h-4 mr-2 text-[11px] md:text-sm" />
                  <span className="font-['Roboto', sans-serif]">
                    {location}
                  </span>
                </motion.div>
                <motion.p
                  className="md:mb-4 md:text-sm md:font-['Roboto', sans-serif] md:line-clamp-2 hidden"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.3 }}
                >
                  {description}
                </motion.p>
                <motion.div
                  className="flex justify-between items-center gap-2"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                >
                  <motion.button
                    className="px-4 py-2 rounded-full font-semibold text-sm bg-orange-400 text-white"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-xl font-bold font-['Montserrat', sans-serif]">
                      {price.toLocaleString("pl-PL", {
                        style: "currency",
                        currency: "PLN",
                      })}
                    </span>
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
