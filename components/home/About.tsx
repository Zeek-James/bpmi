import React from "react";
import styles, { layout } from "../style";
import Button from "../Button";
import Image from "next/image";
import Link from "next/link";
import PLink from "../PLink";

const About = () => {
  return (
    <section className={`${layout.section} ${styles.paddingX}  `}>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2} text-primary `}>
          About BPM Excellence <br /> Awards
        </h2>
        <p className={`${styles.paragraph}  my-5  mx-2`}>
          The BPM Excellence Awards is the premiere business process awards
          which focuses on recognizing and celebrating innovative business
          processes from chosen sectors towards encouraging effective when it
          comes to service delivery and customers expectation management.{" "}
        </p>
        <PLink
          href="/about"
          text="Find out more"
          styles={"bg-primary px-3 text-white"}
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
      </div>
    </section>
  );
};

export default About;
