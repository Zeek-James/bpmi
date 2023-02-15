import React from "react";
import { banks } from "../../constants";
import Button from "../Button";

const BestUserExperince = () => {
  return (
    <div>
      <table className="table-auto border-separate  ">
        <tbody>
          {banks.map((banK) => (
            <tr className=" ">
              <td className={`${border} md:pl-0  md:pr-8`}>
                <p className="text-[24px]">{banK.title}</p>
              </td>
              <td className={`${border}`}>
                <p className="text-[24px]">{banK.vote} votes</p>
              </td>
              <td className={`${border}`}>
                <p className="text-[24px]">{banK.rating} Ratings</p>
              </td>
              <td className={`${border}`}>
                <Button
                  text={"View Votes"}
                  styles={"text-[20px] bg-primary text-white"}
                />
              </td>
              <td className={`${border}`}>
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
