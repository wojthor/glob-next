import { useParams } from "next/navigation";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, User, Mail, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { type Trip2 } from "@/app/api/api";

export default function ContactModal({
  show,
  setShow,
  wycieczka,
}: {
  show: boolean;
  setShow: (show: boolean) => void;
  wycieczka: Trip2;
}) {
  const params = useParams();
  const tripID = Array.isArray(params.tripID)
    ? params.tripID[0]
    : params.tripID;
  console.log("Params:", tripID);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="bg-white w-full max-w-md rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="bg-[#1c59ac] p-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-white">
                  Zapisz się na wycieczkę!
                </h2>
                <Button
                  variant="ghost"
                  onClick={() => setShow(false)}
                  className="text-white hover:bg-white/20"
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>
            </div>

            <div className="p-6 space-y-6 bg-gray-50">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-700">
                  {wycieczka.data.trips[0].tripName}
                </h3>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label
                      htmlFor="firstName"
                      className="text-sm font-medium text-gray-700"
                    >
                      Imię
                    </Label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-[#1c59ac]" />
                      </div>
                      <Input
                        id="firstName"
                        className="pl-10 border-gray-300 focus:border-[#1c59ac] focus:ring-[#1c59ac]"
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div>
                    <Label
                      htmlFor="lastName"
                      className="text-sm font-medium text-gray-700"
                    >
                      Nazwisko
                    </Label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-[#1c59ac]" />
                      </div>
                      <Input
                        id="lastName"
                        className="pl-10 border-gray-300 focus:border-[#1c59ac] focus:ring-[#1c59ac]"
                        placeholder=""
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <Label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-700"
                  >
                    E-mail
                  </Label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-[#1c59ac]" />
                    </div>
                    <Input
                      id="email"
                      type="email"
                      className="pl-10 border-gray-300 focus:border-[#1c59ac] focus:ring-[#1c59ac]"
                      placeholder=""
                    />
                  </div>
                </div>

                <div>
                  <Label
                    htmlFor="phone"
                    className="text-sm font-medium text-gray-700"
                  >
                    Telefon
                  </Label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-[#1c59ac]" />
                    </div>
                    <Input
                      id="phone"
                      type="tel"
                      className="pl-10 border-gray-300 focus:border-[#1c59ac] focus:ring-[#1c59ac]"
                      placeholder=""
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 px-6 py-4 flex justify-end">
              <Button className="bg-[#1c59ac] hover:bg-[#164689] text-white">
                <Send className="mr-2 h-5 w-5" /> Wyślij zgłoszenie
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
