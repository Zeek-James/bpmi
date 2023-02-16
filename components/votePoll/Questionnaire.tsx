import React from "react";
import { questions } from "../../constants/vote";

const Questionnaire = () => {
  return (
    <div>
      <p className="text-[32px] mb-3 md:mb-6  ">
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
                  name="default-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />{" "}
              </td>
              <td className={`${padding}`}>
                <input
                  id="default-radio-1"
                  type="radio"
                  value=""
                  name="default-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
              </td>
              <td className={`${padding}`}>
                <input
                  id="default-radio-1"
                  type="radio"
                  value=""
                  name="default-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
              </td>
              <td className={`${padding}`}>
                <input
                  id="default-radio-1"
                  type="radio"
                  value=""
                  name="default-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
              </td>
              <td className={`${padding}`}>
                <input
                  id="default-radio-1"
                  type="radio"
                  value=""
                  name="default-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const padding = "  md:p-4 p-2";

export default Questionnaire;
