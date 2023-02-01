import Image from "next/image";
import React from "react";
import { layout } from "../style";

const WinnersJourney = () => {
  return (
    <section className={`flex justify-center bg-primary max-h-fit  `}>
      <Image
        src={`/journey.jpg`}
        width={1400}
        height={200}
        alt=""
        className="px-auto"
      />
    </section>
  );
};

export default WinnersJourney;
