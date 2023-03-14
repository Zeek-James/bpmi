import React from "react";
import styles, { layout } from "../style";
import { benefits } from "../../constants/about";
import { eligibility } from "../../constants/categories";
import { selection } from "../../constants/judging";
import { ShieldIcon } from "../../assets";
import Image from "next/image";

const Criteria = () => {
  // const { organization, individual } = eligibility;
  const { title, criteria } = selection;
  return (
    <section className={`${layout.section} ${styles.paddingX}  `}>
      <div className={layout.sectionInfo}>
        <h2
          className={`${styles.heading2} text-primary leading-[50px] sm:py-5 py-2`}
        >
          {title}
        </h2>

        {criteria.map((item, i) => (
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
      </div>
      <div className={layout.sectionImg}>
        <Image
          width={400}
          height={490}
          src={`/council.jpg`}
          alt="agree"
          className="w-[100%] max-h-[490px]"
        />
      </div>
    </section>
  );
};

export default Criteria;
