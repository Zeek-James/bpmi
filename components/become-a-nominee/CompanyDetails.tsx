import React from "react";
import styles from "../style";

const CompanyDetails = () => {
  return (
    <div
      className={`flex flex-col justify-center w-full  max-w-5xl ${styles.paddingX}`}
    >
      <h2 className={"text-center  font-semibold text-3xl py-3 sm:py-6"}>
        Company Details
      </h2>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block  tracking-wide text-lg font-bold mb-2"
            htmlFor="grid-company-name"
          >
            Company Name
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
            className="block  tracking-wide text-lg font-bold mb-2"
            htmlFor="grid-company-email"
          >
            Company Email
          </label>
          <input
            className="appearance-none block w-full   border border-primary rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-company-email"
            type="text"
            placeholder="Placeholder"
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block  tracking-wide text-lg font-bold mb-2"
            htmlFor="grid-company-address"
          >
            Company Address
          </label>
          <input
            className="appearance-none block w-full   border border-primary rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-company-address"
            type="text"
            placeholder="Placeholder"
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block  tracking-wide text-lg font-bold mb-2"
            htmlFor="grid-company-website"
          >
            Company Website
          </label>
          <input
            className="appearance-none block w-full   border border-primary rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-company-website"
            type="text"
            placeholder="Placeholder"
          />
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;
