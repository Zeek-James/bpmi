import React from "react";
import { questions, questionsfn } from "../../constants/vote";
import Button from "../Button";
import styles from "../style";

interface QProps {
  modal: () => void;
}

const Questionnaire = ({ modal }: QProps) => {
  return (
    <div>
      <p className="text-[32px] my-3 md:my-6  ">
        Please rate your satisfaction with each of the following statement:
      </p>
      <div className="flex justify-between text-[24px] mb-3 md:mb-6">
        <span>1. Dissatisfied</span>
        <span>2. Somewhat dissatisfied</span>
        <span>3. Neutral</span>
        <span>4. Somewhat satisfied</span>
        <span>5. Satisfied</span>
      </div>

      <table className="table-auto  border-separate  w-full my-4">
        <thead>
          <tr>
            <th></th>
            <th className="">1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
          </tr>
        </thead>
        <tbody>
          {questions.map((q) => (
            <tr key={q}>
              <td className={`${padding}`}>
                <p className="text-[28px]">{q}</p>
              </td>
              <td className={`${padding}`}>
                <input
                  id="default-radio-1"
                  type="radio"
                  value=""
                  name={q}
                  className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-primary checked:border-primary focus:outline-none transition duration-200  align-top bg-no-repeat bg-center bg-contain  cursor-pointer"
                />
              </td>
              <td className={`${padding}`}>
                <input
                  id="default-radio-1"
                  type="radio"
                  value=""
                  name={q}
                  className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-primary checked:border-primary focus:outline-none transition duration-200  align-top bg-no-repeat bg-center bg-contain  cursor-pointer"
                />
              </td>
              <td className={`${padding}`}>
                <input
                  id="default-radio-1"
                  type="radio"
                  value=""
                  name={q}
                  className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-primary checked:border-primary focus:outline-none transition duration-200  align-top bg-no-repeat bg-center bg-contain  cursor-pointer"
                />
              </td>
              <td className={`${padding}`}>
                <input
                  id="default-radio-1"
                  type="radio"
                  value=""
                  name={q}
                  className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-primary checked:border-primary focus:outline-none transition duration-200  align-top bg-no-repeat bg-center bg-contain  cursor-pointer"
                />
              </td>
              <td className={`${padding}`}>
                <input
                  id="default-radio-1"
                  type="radio"
                  value=""
                  name={q}
                  className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-primary checked:border-primary focus:outline-none transition duration-200  align-top bg-no-repeat bg-center bg-contain  cursor-pointer"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div
        className={`flex flex-col justify-center w-full   border-t-2 border-b-2 py-3 md:py-8 my-3 md:my-8`}
      >
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block  tracking-wide text-2xl font-bold mb-2"
              htmlFor="grid-company-name"
            >
              How do you feel about the company’s sales process?
            </label>
            <input
              className="appearance-none block w-full   border border-primary rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-company-name"
              type="text"
              placeholder="Placeholder"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block  tracking-wide text-2xl font-bold mb-2"
              htmlFor="grid-company-email"
            >
              How do you feel about the company’s service delivery?
            </label>
            <input
              className="appearance-none block w-full   border border-primary rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-company-email"
              type="text"
              placeholder="Placeholder"
            />
          </div>
        </div>
        <div className="flex   mb-6  ">
          <div className="w-full px-3">
            <label
              className="block  tracking-wide text-2xl font-bold mb-2"
              htmlFor="grid-company-address"
            >
              How do you feel about the customer service of the company?{" "}
            </label>
            <input
              className="appearance-none block w-full   border border-primary rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-company-address"
              type="text"
              placeholder="Placeholder"
            />
          </div>
        </div>
      </div>
      <div
        className={`flex flex-col   justify-center w-full   ${styles.paddingX}`}
      >
        <p className={`text-center mb-3 sm:mb-6 ${styles.paragraph}`}>
          Thank you for filling the voting poll. Once you click{" "}
          <span className="font-bold">SUBMIT</span>, your vote will be complete.
        </p>
        <div className="flex w-full items-center justify-center gap-2 md:gap-6 mb-3 md:mb-10 ">
          <Button
            styles="bg-primary text-white font-semibold 
                  text-xl px-20"
            text="Submit"
            onClick={modal}
          />
        </div>
      </div>
    </div>
  );
};

export const Questionnairefn = ({ modal }: QProps) => {
  return (
    <div>
      <p className="text-[32px] my-3 md:my-6  ">
        Please rate your satisfaction with each of the following statement:
      </p>
      <div className="flex justify-between text-[24px] mb-3 md:mb-6">
        <span>1. Dissatisfied</span>
        <span>2. Somewhat dissatisfied</span>
        <span>3. Neutral</span>
        <span>4. Somewhat satisfied</span>
        <span>5. Satisfied</span>
      </div>

      <table className="table-auto  border-separate  w-full my-4">
        <thead>
          <tr className="border-b-2">
            <th></th>
            <th className="">1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
          </tr>
        </thead>
        <tbody>
          {questionsfn.map((q) => (
            <tr key={q}>
              <td className={`${padding}`}>
                <p className="text-[28px]">{q}</p>
              </td>
              <td className={`${padding}`}>
                <input
                  id="default-radio-1"
                  type="radio"
                  value=""
                  name={q}
                  className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-primary checked:border-primary focus:outline-none transition duration-200  align-top bg-no-repeat bg-center bg-contain  cursor-pointer"
                />
              </td>
              <td className={`${padding}`}>
                <input
                  id="default-radio-1"
                  type="radio"
                  value=""
                  name={q}
                  className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-primary checked:border-primary focus:outline-none transition duration-200  align-top bg-no-repeat bg-center bg-contain  cursor-pointer"
                />
              </td>
              <td className={`${padding}`}>
                <input
                  id="default-radio-1"
                  type="radio"
                  value=""
                  name={q}
                  className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-primary checked:border-primary focus:outline-none transition duration-200  align-top bg-no-repeat bg-center bg-contain  cursor-pointer"
                />
              </td>
              <td className={`${padding}`}>
                <input
                  id="default-radio-1"
                  type="radio"
                  value=""
                  name={q}
                  className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-primary checked:border-primary focus:outline-none transition duration-200  align-top bg-no-repeat bg-center bg-contain  cursor-pointer"
                />
              </td>
              <td className={`${padding}`}>
                <input
                  id="default-radio-1"
                  type="radio"
                  value=""
                  name={q}
                  className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-primary checked:border-primary focus:outline-none transition duration-200  align-top bg-no-repeat bg-center bg-contain  cursor-pointer"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div
        className={`flex flex-col  mt-14 border-t-2  justify-center w-full ${styles.paddingY}  ${styles.paddingX}`}
      >
        <p className={`text-center mb-3 sm:mb-6 ${styles.paragraph}`}>
          Thank you for filling the voting poll. Once you click{" "}
          <span className="font-bold">SUBMIT</span>, your vote will be complete.
        </p>
        <div className="flex w-full items-center justify-center gap-2 md:gap-6 mb-3 md:mb-10 ">
          <Button
            styles="bg-primary text-white font-semibold 
                  text-xl px-20"
            text="Submit"
            onClick={modal}
          />
        </div>
      </div>
    </div>
  );
};

const padding = "  md:p-4 p-2";

export default Questionnaire;
