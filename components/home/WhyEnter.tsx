import Image from "next/image";
import React from "react";
import { entryInfo } from "../../constants/landingPage";
import styles from "../style";

const WhyEnter = () => {
  return (
    <section
      className={`${styles.flexCenter} ${styles.paddingX} flex-col my-20`}
    >
      <h2 className={`${styles.heading2} text-primary text-center my-8`}>
        Why You Should Enter
      </h2>
      <div className="text-white grid  lg:grid-cols-3 sm:grid-cols-2 gap-4 bg-[#C3C4DE]">
        {entryInfo.map((e) =>
          e?.pic ? (
            <Image
              src={`/${e?.pic}.jpg`}
              alt=""
              height={300}
              width={300}
              className="px-auto h-[300px] w-[300px] "
              key={e?.pic}
            />
          ) : (
            <div
              className="bg-primary  h-[300px] w-[300px] px-4 py-6 flex flex-col  justify-center"
              key={e.id}
            >
              <h3 className={`${styles.heading3} `}>{e?.title}</h3>
              <div className={`${styles.paragraph}  font-normal`}>
                {e?.content}
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default WhyEnter;
