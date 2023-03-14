import React from "react";

type SelectProp = {
  title: string;
  holder: string;
};

const SelectField = ({ title, holder }: SelectProp) => {
  return (
    <div className="mr-6">
      <label
        htmlFor="countries"
        className="block mb-2 text-[20px] font-bold text-darkText "
      >
        {title}
      </label>
      <select
        id="countries"
        className="border border-primary rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[250px] p-2  text-[20px] text-dim"
      >
        <option selected>{holder}</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
      </select>
    </div>
  );
};

export default SelectField;
