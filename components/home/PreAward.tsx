import Image from "next/image";
import React from "react";
import { preAward } from "../../constants/landingPage";
import styles, { layout } from "../style";

const PreAward = () => {
  return (
    <section className={` ${styles.paddingX} xl:py-8 `}>
      <h2 className={`${styles.heading2} text-primary text-center my-2`}>
        Pre-Award Events
      </h2>
      <div className={`${layout.section} `}>
        <div className={`${layout.sectionImgReverse} relative`}>
          <Image
            alt=""
            width={400}
            height={400}
            src={`/award.jpg`}
            className="w-[100%] "
          />
        </div>
        <div className={layout.sectionInfo}>
          <h2 className={`${styles.heading3} text-primary  my-8`}>
            Unveiling of BPM Excellence Awards and Press Conference
          </h2>
          {preAward.map((item) => (
            <div
              key={item.id}
              className="flex items-center p-2 text-[#3E4095] mb-2 lg:mb-6 xl:text-2xl"
            >
              <>
                <item.icon className=" text-3xl mr-2 font-light" />
                <div className="font-medium ">
                  {item.title}
                  <p className="text-black">{item.content}</p>
                </div>
              </>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PreAward;
