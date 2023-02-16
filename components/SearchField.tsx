import React from "react";
import { CiSearch } from "react-icons/ci";

const SearchField = () => {
  return (
    <div className="w-[350px] border border-primary rounded-lg h-max p-2 flex items-center">
      <CiSearch className="text-[20px] mr-2 text-dim" />
      <input placeholder="Search" className="text-[20px] text-dim" />
    </div>
  );
};

export const SearchFieldfn = () => {
  return (
    <div className="w-[350px] border border-primary rounded-lg h-max p-2 flex items-center">
      <input placeholder="Search" className="text-[20px] text-dim grow" />
      <CiSearch className="text-[25px] mr-2 text-darkText" />
    </div>
  );
};
export default SearchField;
