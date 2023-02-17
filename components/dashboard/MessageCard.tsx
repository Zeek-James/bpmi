import Image from "next/image";
import React from "react";
import Button from "../Button";

const MessageCard = () => {
  return (
    <div className="bg-card max-w-[500px] p-3 rounded-2xl my-4 md:my-16">
      <div className="flex items-center mx-4 my-6 ">
        <Image
          alt=""
          width={55}
          height={55}
          src={`/msgAvatar.jpg`}
          className=" w-[55px] h-[55px] rounded-full "
        />
        <h4 className="text-[20px] md:text-[28px] ml-3 font-semibold">
          Message from Mrs.Rose
        </h4>
      </div>
      <p className="mx-4 mb-6 ">
        Good morning Mr. Mile, you are working on transportation, am I right
      </p>
      <div className=" flex">
        <div className="grow" />
        <Button text="View message" styles="border border-primary ml" />
      </div>
    </div>
  );
};

export default MessageCard;
