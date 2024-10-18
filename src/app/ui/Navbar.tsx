/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { HamburgerMenu } from "@/app/ui/HamburgerMenu";
import { AnimatedSearchbox } from "@/app/ui/Searchbox";

export const Navbar = () => {
  return (
    <div className="w-full md:flex md:w-full md:gap-2 ">
      <div className="flex items-center justify-between md:flex md:w-full md:gap-2 ">
        <div
          className=" 
            flex justify-center items-center
           w-full md:w-[10%] absolute md:relative  md:gap-2 left-0 right-0 md:flex md:z-0 md:justify-start md:items-center"
        >
          <a className="" href="/">
            <img
              className="w-14 h-14 p-0 md:w-18 md:h-18"
              src="/logo.svg"
              alt="Logo"
            ></img>
          </a>

          <div className="md:flex md:justify-end md:items-center hidden">
            <Link href="https://www.facebook.com/profile.php?id=100049702466113">
              <img className="w-6 h-6" src="/facebook.png" />
            </Link>
            <Link href="https://www.instagram.com/biuro_podrozy_glob/">
              <img className="w-6 h-6" src="/insta.png" />
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-end  w-full gap-2 md:flex md:w-full md:z-50 md:justify-end md:items-center ">
          <div className="flex-grow md:w-full md:flex-grow-0">
            <AnimatedSearchbox />
          </div>
          <div className="md:flex md:justify-end md:items-center ">
            <HamburgerMenu />
          </div>
        </div>
      </div>
    </div>
  );
};
