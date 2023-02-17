"use client";

import React, { useState } from "react";
import { navLinks } from "../constants";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Button } from "./";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const router = useRouter();

  const route = router.asPath.replace("/", "");

  return (
    <div className="min-h-fit flex z-30 fixed flex-col  w-full">
      <nav className="w-full flex  z-40 top-0 left-0 px-6 py-2 justify-between items-center navbar text-white">
        <Link href="/">
          <Image
            alt=""
            width={100}
            height={100}
            src={`/logo.jpg`}
            className=" w-[50px]  sm:w-[100px]  lg:mr-40 mr-5"
          />
        </Link>
        <ul className="list-none md:flex hidden  items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] p-2 rounded-md               ${
                route === "" && index === 0
                  ? "bg-[#323377]"
                  : route === nav.id
                  ? "bg-[#323377]"
                  : "text-dimWhite"
              }  
          ${index === navLinks.length - 1 ? "mr-0" : "mr-2 lg:mr-5"}
          `}
            >
              <a href={`${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
        <Link href="voting-poll" passHref={true}>
          <Button text={"Vote"} styles={"mr-5 border px-2 md:flex hidden"} />
        </Link>
        <Link href="login" passHref={true}>
          <Button
            text={"Jurist Login"}
            styles={"bg-[#3E4095] md:flex hidden"}
          />
        </Link>{" "}
        <div className="md:hidden flex flex-1 justify-end items-center">
          {toggle ? (
            <AiOutlineClose
              className="mx-2 md:hidden lg:hidden block text:3xl cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
          ) : (
            <AiOutlineMenu
              className="mx-2 md:hidden lg:hidden block text:3xl cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
          )}

          <div
            className={`${!toggle ? "hidden" : ""}
          p-6 bg-black absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar
          `}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`
              font-poppins font-medium cursor-pointer text-[16px] 
              p-2 rounded-md 
              ${
                route === "" && index === 0
                  ? "bg-[#323377]"
                  : route === nav.id
                  ? "bg-[#323377]"
                  : "text-dimWhite"
              }  
              mb-4`}
                >
                  <a href={`${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
            <div className="flex md:hidden">
              <Link href="voting-poll" passHref={true}>
                <Button text={"Vote"} styles={"mr-5 border px-2  "} />
              </Link>
              <Link href="login" passHref={true}>
                <Button text={"Jurist Login"} styles={"bg-[#3E4095] "} />
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div className="bg-black opacity-70 w-full h-full absolute" />
    </div>
  );
};

export default Navbar;
