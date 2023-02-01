import Image from "next/image";
import React from "react";
import { ShieldIcon } from "../../assets";
import { focus } from "../../constants/judging";
import styles, { layout } from "../style";

const RatingFocus = () => {
  const { title, content } = focus;

  return (
    <section
      className={`${layout.sectionReverse} ${styles.paddingX} xl:py-24 `}
    >
      <div className={`${layout.sectionImgReverse} relative`}>
        <Image
          width={400}
          height={490}
          alt=""
          src={`/class.jpg`}
          className="w-[100%] max-h-[490px]"
        />
      </div>
      <div className={layout.sectionInfo}>
        <h2
          className={`${styles.heading2} text-primary leading-[50px] sm:py-5 py-2`}
        >
          {title}
        </h2>

        {content.map((item, i) => (
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
    </section>
  );
};

export default RatingFocus;
