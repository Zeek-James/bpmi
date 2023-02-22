import Image from "next/image";
import React from "react";
import OctIcon from "../../assets/OctIcon";
import { objectives } from "../../constants/about";
import styles, { layout } from "../style";

const AimsAndObj = () => {
  return (
    <section
      className={`${layout.sectionReverse} ${styles.paddingX} xl:py-24 `}
    >
      <div className={`${layout.sectionImgReverse} relative`}>
        <Image
          alt=""
          width={400}
          height={490}
          src={`/class.jpg`}
          className="w-[100%] max-h-[490px]"
        />
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2} text-primary leading-[50px] `}>
          Our Aims and <br /> Objectives
        </h2>
        <p
          className={` sm:py-5 py-2 font-poppins font-semibold text-dimWhite text-[18px]`}
        >
          The Aims and Objectives of the BMP Excellence Award <br /> are:
        </p>
        {objectives.map((item, i) => (
          <div
            key={i}
            className="flex items-center p-2 text-[#3E4095] mb-2 lg:mb-6 xl:text-2xl gap-3 md:gap-6"
          >
            <OctIcon />
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
    </section>
  );
};

export default AimsAndObj;
