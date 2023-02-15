import Image from "next/image";
import React from "react";
import { MENU_ITEMS } from "../constants/menuItems";
import MenuList from "./MenuList";

const Sidebar = () => {
  return (
    <div className="w-1/5 flex flex-col h-fit min-h-screen bg-card">
      <div className="h-[250px] w-full  flex flex-col items-center justify-center border-b-2 border-dim">
        <Image
          alt=""
          width={100}
          height={100}
          src={`/avatar.jpg`}
          className=" w-[100px] h-[100px] rounded-full mb-3"
        />
        <h1 className=" font-semibold text-[24px] text-primary leading-[38.4px]  ">
          Floyd Miles
        </h1>
      </div>
      <div className=" grow p-4 md:p-8 mb-24">
        <MenuList options={MENU_ITEMS} />
      </div>
      <div className="">bottom</div>
    </div>
  );
};

export default Sidebar;
