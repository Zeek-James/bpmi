import React from "react";

type InputProps = {
  id: string;
  title: string;
  type: string;
  placeholder?: string;
};

const Input = ({ id, title, type, placeholder }: InputProps) => {
  return (
    <>
      <label
        className="block  tracking-wide text-lg font-bold mb-2"
        htmlFor={id}
      >
        {title}
      </label>
      <input
        className="appearance-none block w-full  border border-primary rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id={id}
        type={type}
        placeholder={placeholder}
      />
    </>
  );
};

export default Input;
