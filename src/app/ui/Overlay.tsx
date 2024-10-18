"use client";

import { useRouter } from "next/navigation";

export function Overlay() {
  const router = useRouter();
  return (
    <div
      onClick={() => router.back()}
      className="animation-fade-in fixed inset-0 z-50 bg-white opacity-55 backdrop-blur-md"
    />
  );
}
