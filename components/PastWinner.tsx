import Image from "next/image";
import React from "react";
import { SearchField, SelectField } from ".";
import styles from "./style";

const PastWinner = () => {
  return (
    <section
      className={`${styles.flexCenter} ${styles.paddingX} flex-col my-20`}
    >
      <h2 className={`${styles.heading2} text-primary text-center mb-6`}>
        Past Winners
      </h2>
      <div className="flex w-full mb-16">
        <div className="flex  w-full">
          <SelectField />
          <SelectField />
          <SelectField />
        </div>
        <SearchField />
      </div>
      <div className=" w-full grid xl:grid-cols-4 gap-4 md:gap-8 sm:grid-cols-2 mb-12">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((e) => {
          const pic: number = e;
          return !pic ? (
            <Image width={432} height={388} src="" alt="" key={e} />
          ) : (
            <div className="flex bg-[#D9D9D9] w-full h-[388px] items-center justify-center">
              <h4 className="font-bold text-[28px]">Logo</h4>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PastWinner;
