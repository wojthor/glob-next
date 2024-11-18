"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function AnimatedSearchbox() {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setIsTyping(true);
  };

  useEffect(() => {
    if (!isTyping) return;

    const typingTimeout = setTimeout(() => {
      if (searchValue.trim() !== "") {
        router.replace(
          `/search?query=${encodeURIComponent(searchValue.trim())}`
        );
      }
      setIsTyping(false);
    }, 500);

    return () => clearTimeout(typingTimeout);
  }, [searchValue, isTyping, router]);

  return (
    <div className="relative flex items-center justify-end w-full md:w-full">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "100%", opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute right-0 z-10 w-full"
          >
            <form action="/search">
              <Input
                onChange={handleChange}
                type="search"
                name="query"
                placeholder="Szukaj..."
                className="flex h-9 w-full bg-[#D9D9D9] rounded-[20px]   px-3 py-1 text-sm  transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none  focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                autoFocus
                aria-label="Szukaj"
              />
            </form>
          </motion.div>
        )}
      </AnimatePresence>
      <Button
        variant="glob"
        size="icon"
        className="relative z-20"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <X className="mr-2 h-4 w-4" />
        ) : (
          <Search className="h-6 w-6" />
        )}
      </Button>
    </div>
  );
}
