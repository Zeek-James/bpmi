import React from "react";
import styles from "./style";

interface RadioProp {
  id: string;
  name: string;
  context: string;
}

const Radio = ({ context, id, name }: RadioProp) => (
  <div className="form-check flex">
    <input
      className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-primary checked:border-primary focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 sm:mr-5 cursor-pointer "
      type="radio"
      name={name}
      id={id}
    />
    <label
      className={`form-check-label text-start             
            mb-3 sm:mb-6 ${styles.paragraph}`}
      htmlFor={id}
    >
      {context}
    </label>
  </div>
);
export default Radio;
