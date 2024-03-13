"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";

//components
import NavMobile from "./NavMobile";
import Nav from "./Nav";
import MenuBtn from "./MenuBtn";
import Socials from "./Socials";

const Header = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      /* detect scroll */
      setActive(window.scrollY > 100);
    };

    /* add event listener */
    window.addEventListener("scroll", handleScroll);

    /* clear even listener */
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed z-50 w-full transition-all ${
        active ? "py-6 bg-transparent/70" : "bg-transparent py-8"
      }`}
    >
      <div className="container mx-auto flex flex-col xl:flex-row items-center justify-between">
        {/* logo */}
        <Link
          href={"#"}
          className="relative flex w-[226px] h-[100px] transition-all mb-4 mt-[-30px] xl:mb-0"
        >
          <Image
            src={"/assets/header/logo9.png"}
            fill
            className="object-contain mt-2"
          />
        </Link>
        {/* nav */}
        <Nav containerStyles={"hidden xl:flex items-center gap-x-8"} />
        {/* nav mobile */}
        <NavMobile />
        {/* menu btn */}
        <div className="absolute right-7 top-9 z-10 xl:hidden">
          <MenuBtn />
        </div>
        {/* socials */}
        <Socials
          containerStyles="flex text-[24px] gap-x-4"
          iconStyles="hover:text-accent transition-all"
        />
      </div>
    </header>
  );
};

export default Header;
