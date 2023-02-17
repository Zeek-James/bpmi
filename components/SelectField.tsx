import React from "react";

const SelectField = () => {
  return (
    <div className="mr-6">
      <label
        htmlFor="countries"
        className="block mb-2 text-[20px] font-bold text-darkText "
      >
        Category
      </label>
      <select
        id="countries"
        className="border border-primary rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[250px] p-2  text-[20px] text-dim"
      >
        <option selected>Choose a country</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
      </select>
    </div>
  );
};

export default SelectField;
