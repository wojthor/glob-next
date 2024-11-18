"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export type menuItems = {
  name: string;
  href: string;
};

const menuItems: menuItems[] = [
  {
    name: "Start",
    href: "/",
  },
  {
    name: "Wycieczki",
    href: "/wycieczki",
  },
  {
    name: "Kolonie i obozy",
    href: "/kolonie-i-obozy",
  },

  { name: "Dla szkół", href: "/dla-szkol" },
  {
    name: "Dla zakładów pracy",
    href: "/dla-zakladow-pracy",
  },
  {
    name: "O firmie",
    href: "/o-firmie",
  },
  {
    name: "Kontakt",
    href: "/kontakt",
  },
];

export function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      <Button
        variant="glob"
        size="icon"
        className="relative z-50 "
        onClick={toggleMenu}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        <span className="sr-only">Toggle menu</span>
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 right-0 h-full w-64 bg-background z-40 shadow-lg overflow-y-auto"
          >
            <nav className="p-4 space-y-2">
              {menuItems.map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="block px-2 py-2 rounded-lg text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
