import React from "react";
import styles from "../style";

const PonitOfContact = () => {
  return (
    <div
      className={`flex flex-col justify-center w-full  max-w-5xl ${styles.paddingX} `}
    >
      <h2 className={"text-center  font-semibold text-3xl py-3 sm:py-6"}>
        Point of Contact
      </h2>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block  tracking-wide text-lg font-bold mb-2"
            htmlFor="grid-first-name"
          >
            First Name
          </label>
          <input
            className="appearance-none block w-full  border border-primary rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-first-name"
            type="text"
            placeholder="Jane"
          />
          {/* <p className="text-red-500 text-xs italic">
            Please fill out this field.
          </p> */}
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block  tracking-wide text-lg font-bold mb-2"
            htmlFor="grid-last-name"
          >
            Last Name
          </label>
          <input
            className="appearance-none block w-full  border border-primary rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="text"
            placeholder="Doe"
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block tracking-wide text-lg font-bold mb-2"
            htmlFor="grid-email"
          >
            Email
          </label>
          <input
            className="appearance-none block w-full  border border-primary rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-email"
            type="text"
            placeholder="Placeholder"
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block  tracking-wide text-lg font-bold mb-2"
            htmlFor="grid-office-phone-number"
          >
            Office Phone Number{" "}
          </label>
          <input
            className="appearance-none block w-full  border border-primary rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-office-phone-number"
            type="text"
            placeholder="Placeholder"
          />
          {/* <p className="text-red-500 text-xs italic">
            Please fill out this field.
          </p> */}
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block  tracking-wide text-lg font-bold mb-2"
            htmlFor="grid-mobile-number"
          >
            Mobile Number
          </label>
          <input
            className="appearance-none block w-full  border border-primary rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-mobile-number"
            type="text"
            placeholder="Doe"
          />
        </div>
      </div>
    </div>
  );
};

export default PonitOfContact;
