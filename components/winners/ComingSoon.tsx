import React from "react";
import Button from "../Button";
import PLink from "../PLink";
import styles from "../style";

const ComingSoon = () => {
  return (
    <div
      className={`flex flex-col  justify-center w-full   ${styles.paddingX} ${styles.paddingY}`}
    >
      <h2
        className={
          "text-[#323377] text-center  font-bold md:text-6xl text-3xl py-3 sm:pt-6"
        }
      >
        COMING SOON
      </h2>
      <p className={`text-center mb-3 sm:mb-6 ${styles.paragraph}`}>
        Voting is on going, the results will be announced after voting has
        ended. <br />
        You can still vote for the nominees
      </p>
      <div className="flex w-full items-center justify-center gap-2 md:gap-6 mb-3 md:mb-10">
        <PLink
          styles="border border-primary text-primary font-semibold 
                  text-xl 
                  px-20"
          text="Go back"
          href="/"
        />
        <PLink
          styles="bg-primary text-white font-semibold 
                  text-xl px-20"
          text="Vote Now"
          href="voting-poll"
        />
      </div>
    </div>
  );
};

export default ComingSoon;
