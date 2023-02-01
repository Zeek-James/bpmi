import React from "react";
import { industries } from "../../constants";
import styles from "../style";
import { Radio } from "./";

const AwardCategories = () => {
  return (
    <div
      className={`flex flex-col justify-center w-full  max-w-5xl ${styles.paddingX}`}
    >
      <h2 className={"text-center  font-semibold text-3xl py-3 sm:py-6"}>
        Award Categories
      </h2>
      <div>
        <h3 className={"text-darkText mb-3 md:mb-6 text-2xl font-semibold"}>
          Main Categories:
        </h3>

        <Radio
          name="user-experience"
          id="user-experience"
          context="Best User Experience Based Process of the year Award (Sector Based)
"
        />
        <Radio
          name="optimized-process"
          id="optimized-process"
          context="
            Best optimized Process of the Year (Sector Based)
        "
        />
        <Radio
          name="innovative-process"
          id="innovative-process"
          context="
                    Process Innovative Process of the Year Award Best Process-centric
            Company of the Year (Over-all)
        "
        />
      </div>
      <div>
        <h3 className={"text-darkText mb-3 md:mb-6 text-2xl font-semibold"}>
          Industry of focus:
        </h3>
        <div className=" w-full grid xl:grid-cols-2 gap-2 sm:grid-cols-2 list">
          {industries.map(({ name, text }) => (
            <Radio name={name} id={name} context={text} key={name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AwardCategories;
