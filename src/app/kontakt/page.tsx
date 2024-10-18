"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", { name, email, message });
  };

  return (
    <div className="w-full bg-gradient-to-b from-[#1c59ac] to-white py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-4xl font-extrabold text-white text-center mb-8">
          Kontakt
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <div className="p-6">
              <h2 className="text-2xl font-bold text-[#1c59ac] mb-4">
                Napisz do nas
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Imię i nazwisko
                  </label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="mt-1 w-full h-[30px] border-gray-300 bg-gray-100 rounded-xl  focus:border-[#1c59ac] focus:ring-[#1c59ac]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="mt-1 w-full h-[30px] border-gray-300 bg-gray-100 rounded-xl focus:border-[#1c59ac] focus:ring-[#1c59ac]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Wiadomość
                  </label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="mt-1 border-gray-300  bg-gray-100 rounded-xl focus:border-[#1c59ac] focus:ring-[#1c59ac]"
                    rows={4}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full text-white bg-[#1c59ac] hover:bg-[#1c59ac]/90"
                >
                  Wyślij wiadomość
                </Button>
              </form>
            </div>
          </motion.div>
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <div className="p-6">
                <h2 className="text-2xl font-bold text-[#1c59ac] mb-4">
                  Informacje
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-6 w-6 text-[#1c59ac] mr-2" />
                    <span className="text-gray-700">bpglob@bpglob.pl</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-6 w-6 text-[#1c59ac] mr-2" />
                    <span className="text-gray-700">77 454 33 89</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-6 w-6 text-[#1c59ac] mr-2" />
                    <span className="text-gray-700">Opole ul. Reymonta 30</span>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <div className="p-6">
                <h2 className="text-2xl font-bold text-[#1c59ac] mb-4">
                  Znajdź nas
                </h2>
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2999.938803165978!2d17.92730797683925!3d50.6635675719957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4710530fb80b0d55%3A0xf290eb4abf273547!2sBP%20GLOB%20Opole!5e1!3m2!1spl!2spl!4v1729189772588!5m2!1spl!2spl"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
