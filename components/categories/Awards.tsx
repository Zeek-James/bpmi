import Image from "next/image";
import React from "react";
import { awards } from "../../constants/categories";
import styles from "../style";

const Awards = () => {
  return (
    <section
      className={`${styles.flexCenter} ${styles.paddingX} flex-col my-20`}
    >
      <h2 className={`${styles.heading2} text-primary text-center mb-6`}>
        Award Categories
      </h2>
      <div className=" w-full grid xl:grid-cols-4 gap-4 sm:grid-cols-2 mb-12">
        {awards.map((item) => (
          <Image
            width={400}
            height={490}
            src={`/${item}.jpg`}
            alt="category"
            key={item}
            className="cursor-pointer mb-4"
          />
        ))}
      </div>
    </section>
  );
};

export default Awards;
