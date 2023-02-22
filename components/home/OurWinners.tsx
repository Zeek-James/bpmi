import React from "react";
import { Slider } from "..";
import Button from "../Button";
// import Lonet from "../Lonet";
import styles from "../style";

const OurWinners = () => {
  return (
    <section
      className={`${styles.flexCenter} ${styles.paddingX} flex-col my-20`}
    >
      <h2 className={`${styles.heading2} text-primary text-center my-8`}>
        Our Winners
      </h2>
      <div className="text-white grid md:grid-cols-3 w-full gap-8">
        {/* {[1, 2, 3].map((e) => (
          <div
            className="bg-[#D9D9D9]  h-[247px] md:max-w-[432px] px-4 py-6 flex items-center  justify-center "
            key={e}
          >
            <h3 className={` text-darkText xs:text-[32px] text-[28px]`}>
              LOGO
            </h3>
          </div>
        ))} */}
      </div>
      {/* <Products /> */}
      {/* <Slider /> */}

      <Button text="View more" styles={"bg-primary px-10 mt-8 text-white"} />
    </section>
  );
};

export default OurWinners;
