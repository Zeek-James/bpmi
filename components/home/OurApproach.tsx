import React from "react";
import { approach } from "../../constants/landingPage";
import { Button, PLink } from "../";
import styles from "../style";

const OurApproach = () => {
  return (
    <section className={`${styles.flexCenter}  flex-col my-20`}>
      <h2 className={`${styles.heading2} text-primary text-center`}>
        OurApproach
      </h2>
      <div className=" w-full grid xl:grid-cols-4 gap-2 sm:grid-cols-2">
        {approach.map((item) => (
          <div
            key={item.id}
            className={` flex-1 shadow-lg sm:min-w-[316px] sm:min-h-fit min-w-[90px] m-5 p-2 rounded-md `}
          >
            <div className="text-dim text-[64px] font-bold leading-[150%]">
              0{item.id}
            </div>
            <div
              className={`${styles.paragraph} md:text-[32px] md:leading-[48px] font-normal px-3`}
            >
              {item.text}
            </div>
          </div>
        ))}
      </div>
      <PLink
        href="/judging"
        text="Find out more"
        styles={"bg-primary px-3 text-white"}
      />
    </section>
  );
};

export default OurApproach;
