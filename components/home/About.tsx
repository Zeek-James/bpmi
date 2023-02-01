import React from "react";
import styles, { layout } from "../style";
import Button from "../Button";
import Image from "next/image";

const About = () => {
  return (
    <section className={`${layout.section} ${styles.paddingX}  `}>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2} text-primary `}>
          About BPM Excellence <br /> Awards
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 `}>
          The BPM Excellence Awards is the premiere business process awards
          which focuses on recognizing and celebrating innovative business
          processes from chosen sectors towards encouraging effective when it
          comes to service delivery and customers expectation management.{" "}
        </p>

        <Button
          text={"Find out more"}
          styles={`mt-5 px-7 bg-primary text-white`}
        />
      </div>
      <div className={layout.sectionImg}>
        <Image
          src={`/glass-award.jpg`}
          alt="billing"
          className="w-[100%] max-h-[490px]"
          width={400}
          height={490}
        />
      </div>{" "}
    </section>
  );
};

export default About;
