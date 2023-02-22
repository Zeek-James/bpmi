import React from "react";
import styles, { layout } from "../style";
import Button from "../Button";
import Image from "next/image";

const About = () => {
  return (
    <section className={`${layout.section} ${styles.paddingX}  `}>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2} text-primary `}>About Us</h2>
        <p className={`${styles.paragraph} max-w-full mt-5 `}>
          The BPM Excellence Awards is the premiere business process awards
          which focuses on recognizing and celebrating innovative business
          processes from chosen sectors towards encouraging effective when it
          comes to service delivery and customers expectation management. The
          awards shall recognize and celebrate innovative processes well as all
          related processes that takes off burden off the customers during
          patronage.
        </p>
        <p className={`${styles.paragraph} max-w-full mt-5 `}>
          The BPM Excellence Awards is powered by SPNS Consulting, the leading
          business process and performance management consulting firm in
          Nigeria. With over a decade of functional practice in the areas of
          business process and performance management across various sectors,
          SPNS is poised to aid organizations raise the bar when it comes to
          business process improvement and innovation.
        </p>
        <p className={`${styles.paragraph} max-w-full mt-5 `}>
          This can be done by showcasing to the nation and Africa at large the
          best rated organizations in the areas of easy to use processes and
          process innovativeness. And the end result of all of these is to
          ensure that the organizations with the best processes are well
          celebrated while the customers are treated as the king.
        </p>
      </div>
      <div className={layout.sectionImg}>
        <Image
          width={400}
          height={490}
          src={`/glass-award.jpg`}
          alt="billing"
          className="w-[100%] max-h-[490px]"
        />
      </div>{" "}
    </section>
  );
};

export default About;
