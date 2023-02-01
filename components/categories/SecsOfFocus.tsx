import React from "react";
import { sectors } from "../../constants/categories";
import { approach } from "../../constants/landingPage";
import styles from "../style";

const SecsOfFocus = () => {
  return (
    <section
      className={`${styles.flexCenter} ${styles.paddingX}  flex-col my-20`}
    >
      <h2 className={`${styles.heading2} text-primary text-center mb-4`}>
        Sectors Of Focus{" "}
      </h2>

      <ul className=" w-full grid xl:grid-cols-2 gap-2 sm:grid-cols-2 list">
        {sectors.map((s) => (
          <li key={s} className={"sm:py-2"}>
            <p className="text-base sm:text-3xl">{s}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SecsOfFocus;
