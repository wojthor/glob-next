import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./ui/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-full h-full flex-col flex md:gap-5">
          <header className=" flex p-4 justify-items-center h-[75px] sticky top-0 z-20 border-b bg-white ">
            <Navbar />
          </header>
          <div className="p-5 overflow-x-hidden || md:w-full md:h-full md:p-0   ">
            {" "}
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
