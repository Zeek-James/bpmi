import Image from "next/image";
import React from "react";
import styles, { layout } from "../style";

const Jurist = () => {
  return (
    <section className={`${layout.section} ${styles.paddingX}  `}>
      <div className="w-full">
        <h2 className={`${styles.heading2} text-primary text-center mb-6`}>
          Our Council of Jurist{" "}
        </h2>
        <div className=" w-full grid xl:grid-cols-3 gap-4 md:gap-8 sm:grid-cols-2 mb-12 ">
          {["darkGuy", "bigSmile", "gentleMan"].map((e) => {
            return (
              <div className=" flex justify-center" key={e}>
                <Image
                  width={432}
                  height={388}
                  src={`/${e}.jpg`}
                  alt=""
                  key={e}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Jurist;
