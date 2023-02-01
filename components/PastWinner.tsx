import React from "react";
import styles from "./style";

const PastWinner = () => {
  return (
    <section
      className={`${styles.flexCenter} ${styles.paddingX} flex-col my-20`}
    >
      <h2 className={`${styles.heading2} text-primary text-center mb-6`}>
        Past Winners{" "}
      </h2>
      <div className=" w-full grid xl:grid-cols-4 gap-4 sm:grid-cols-2 mb-12"></div>
    </section>
  );
};

export default PastWinner;
