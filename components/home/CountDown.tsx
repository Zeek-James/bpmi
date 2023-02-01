import Image from "next/image";
import React from "react";
import { countDown } from "../../constants/landingPage";
import styles, { layout } from "../style";
import useCountDown from "./hooks/useCountDown";

const CountDown = () => {
  const { days, hours, minutes, seconds } = useCountDown();

  return (
    <section className={`${layout.section} ${styles.paddingX} xl:py-24 `}>
      <div className={`${layout.sectionImgReverse} relative`}>
        <Image
          alt="count"
          className="w-[100%] max-h-[490px] opacity-80"
          height={700}
          width={200}
          src={`/sandtime.jpg`}
        />
        <div className="absolute  text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-full bg-black opacity-50 z-2 flex justify-center items-center flex-col">
          <h1 className="lg:text-5xl text-3xl mb-5">Countdown</h1>
          <div className=" flex border rounded-xl">
            <div className="  px-2 lg:px-6 py-2 flex flex-col items-center">
              <span className="text-medium">Days</span>
              <span className="text-3xl time font-medium">{days}</span>
            </div>
            <div className=" border-x px-2 lg:px-6 py-2 flex flex-col items-center">
              <span className="text-medium">Hours</span>
              <span className="text-3xl time font-medium">{hours}</span>
            </div>
            <div className=" border-r px-2 lg:px-6 py-2 flex flex-col items-center">
              <span className="text-medium">Minutes</span>
              <span className="text-3xl time font-medium">{minutes}</span>
            </div>

            <div className="  px-2 lg:px-6 py-2 flex flex-col items-center">
              <span className="text-medium">Seconds</span>
              <span className="text-3xl time font-medium">{seconds}</span>
            </div>
          </div>
        </div>
      </div>
      <div className={layout.sectionInfo}>
        {countDown.map((item) => (
          <div
            key={item.id}
            className="flex items-center p-2 text-[#3E4095] mb-2 lg:mb-6 xl:text-2xl"
          >
            <>
              <item.icon className=" text-3xl m-2 font-light" />
              <div className="font-medium ">
                {item.title}
                <p className="text-black">{item.content}</p>
              </div>
            </>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CountDown;
