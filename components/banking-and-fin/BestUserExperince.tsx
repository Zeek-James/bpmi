import React from "react";
import { banks } from "../../constants";
import Button from "../Button";

const BestUserExperince = () => {
  return (
    <div className="mb-10 ">
      <table className="table-auto border-separate   w-full">
        <tbody>
          {banks.map((bank, idx) => (
            <tr className=" " key={idx}>
              <td className={`${border} pr-0  md:pr-8`}>
                <p className="text-[24px]">{bank.title}</p>
              </td>
              <td className={`${border}`}>
                <p className="text-[24px]">{bank.vote} votes</p>
              </td>
              <td className={`${border}`}>
                <p className="text-[24px] ">{bank.rating} Ratings</p>
              </td>
              <td className={`${border}  md:pr-0 pr-0`}>
                <Button
                  text={"View Votes"}
                  styles={"text-[20px] bg-primary text-white"}
                />
              </td>
              <td className={`${border} justify-end flex md:pr-0 pr-0`}>
                <Button
                  text={"View Ratings"}
                  styles={"text-[20px] border border-primary text-primary"}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const border = "border-b-2 border-[#E2E2EF]  md:p-4 p-2";

export default BestUserExperince;
