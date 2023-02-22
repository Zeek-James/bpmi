import React, { useState } from "react";
import { awardCategories, nominees } from "../../constants/vote";
import { Button, Radio } from "../";
import { industries } from "../../constants";

interface CProps {
  next: () => void;
}

const Choice = ({ next }: CProps) => {
  const [category, setCategory] = useState("");
  const [nominee, setNominee] = useState("");
  const [sector, setSector] = useState("");
  const [reset, reSetter] = useState("");

  const handleCategory = (e: any) => {
    setCategory(e.target.id);
  };

  const handleSector = (e: any) => {
    setSector(e.target.id);
  };
  const handleNominee = (e: any) => {
    setNominee(e.target.id);
  };

  const resetHandler = () => {
    reSetter("true");
    console.log(reset);
  };
  return (
    <div>
      {" "}
      <div>
        <h3 className={"text-darkText mb-3 md:mb-6 text-2xl font-semibold"}>
          Choose award category:
        </h3>
        <div
          className=" w-full grid  gap-2  list"
          onChange={(e) => handleCategory(e)}
        >
          {awardCategories.map(({ text }, i) => (
            <Radio name={"category"} id={text} context={text} key={i} />
          ))}
        </div>
      </div>
      <div>
        <h3 className={"text-darkText mb-3 md:mb-6 text-2xl font-semibold"}>
          Choose Nominee’s industry sector:
        </h3>
        <div
          className=" w-full grid  gap-2  list"
          onChange={(e) => handleSector(e)}
        >
          {industries.map(({ text, name }, i) => (
            <Radio name={"sector"} id={text} context={text} key={i} />
          ))}
        </div>
      </div>
      {category && sector && (
        <>
          <div className="my-3">
            <h3 className={"text-darkText mb-3 md:mb-6 text-2xl font-semibold"}>
              Choose Nominee:
            </h3>
            <div
              className=" w-full grid  gap-2  list"
              onChange={(e) => handleNominee(e)}
            >
              {nominees.map(({ text }, i) => (
                <Radio name={"nominee"} id={text} context={text} key={i} />
              ))}
            </div>
          </div>
          <div className="my-3 ">
            <label
              htmlFor="exampleFormControlTextarea1"
              className="form-label text-darkText mb-3 md:mb-6 text-2xl font-semibold"
            >
              Tell us why you chose this nominee
            </label>
            <textarea
              className="
        form-control
        block
        w-full
mt-3
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
min-h-[200px]
        focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none
      "
              id="exampleFormControlTextarea1"
              placeholder="Your message"
            ></textarea>
            <p className=" text-xs my-2">
              Please make sure the you enter not more than 500 words in this
              field.
            </p>
          </div>
        </>
      )}
      <div className="border  w-full mb-3 md:my-10" />
      <div className="flex justify-between">
        <Button
          styles="border border-primary text-primary font-semibold 
                  text-xl 
                  px-20"
          text="Reset"
          onClick={resetHandler}
        />
        <Button
          styles="bg-primary text-white font-semibold 
                  text-xl px-20"
          text="Next"
          onClick={next}
        />
      </div>
    </div>
  );
};

export default Choice;
