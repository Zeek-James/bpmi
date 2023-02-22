import Image from "next/image";
import React from "react";
import PLink from "./PLink";
import styles from "./style";

interface MProps {
  isvisible: boolean;
  onClose: () => void;
  context: string;
}

const Modal = ({ isvisible, onClose, context }: MProps) => {
  if (!isvisible) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
      id="wrapper"
      onClick={() => onClose()}
    >
      <div className="w-fit md:min-w-[700px] flex flex-col ">
        <div className="bg-white p-4 md:p-10 rounded  flex flex-col justify-center items-center">
          <Image
            src={"/good.jpg"}
            width={200}
            height={200}
            alt=""
            className="mb-2 md:mb-12"
          />

          <h3
            className={`"open-sans font-bold xs:text-[32px] text-[28px]  xs:leading-[76.8px] leading-[40.8px] m-2 w-full",
 text-darkText text-center `}
          >
            {context}
          </h3>
          <PLink
            styles="bg-primary text-white font-semibold 
                  text-xl mt-10"
            text="Go Home"
            href={"/"}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
