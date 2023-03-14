import Link from "next/link";
import React from "react";
import Button from "./Button";
import styles from "./style";

const Nominee = () => {
  return (
    <section
      className={`${styles.flexCenter} flex-col bg-primary mt-20 mb-32 py-6 sm:py-14`}
    >
      <h1
        className={`${styles.heading2}  text-center  justify-center flex font-bold text-xl sm:text-4xl leading-10  lg:text-[64px] p-5


        `}
      >
        Want to Become a Nominee
      </h1>

      <Link href="nominee" passHref={true}>
        <Button
          text={"Enter for Nomination Now"}
          styles={
            "mt-4 bg-dim text-darkText font-semibold sm:text-xl  lg:text-[32px] px-5"
          }
        />
      </Link>
    </section>
  );
};

export default Nominee;
