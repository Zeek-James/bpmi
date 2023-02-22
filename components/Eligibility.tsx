import React from "react";
import styles, { layout } from "./style";
import { eligibility } from "../constants/categories";
import { ShieldIcon } from "../assets";
import Image from "next/image";

const Eligibility = () => {
  const { organization, individual } = eligibility;

  return (
    <section className={`${layout.section} ${styles.paddingX}  `}>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2} text-primary leading-[50px] `}>
          Eligibility
        </h2>
        <p
          className={` sm:py-5 py-2 font-poppins font-semibold text-dimWhite text-[18px]`}
        >
          {organization.brief}
        </p>
        {organization.eligibilities.map((item, i) => (
          <div
            key={i}
            className="flex items-center p-2 text-[#3E4095] mb-2 lg:mb-6 xl:text-2xl gap-3 md:gap-6"
          >
            <ShieldIcon />
            <p
              className={`
            ${styles.paragraph}
            text-black`}
            >
              {item}
            </p>
          </div>
        ))}
        <p
          className={` sm:py-5 py-2 font-poppins font-semibold text-dimWhite text-[18px]`}
        >
          {individual.brief}
        </p>
        <div className="flex items-center p-2 text-[#3E4095] mb-2 lg:mb-6 xl:text-2xl gap-3 md:gap-6">
          <ShieldIcon />
          <p
            className={`
            ${styles.paragraph}
            text-black`}
          >
            {individual.eligibility}
          </p>
        </div>
      </div>
      <div className={layout.sectionImg}>
        <Image
          width={400}
          height={490}
          src={`/work.jpg`}
          alt="agree"
          className="w-[100%] max-h-[490px]"
        />
      </div>
    </section>
  );
};

export default Eligibility;
