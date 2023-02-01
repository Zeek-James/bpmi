import React from "react";
import { footer } from "../constants";

const Footer = () => {
  const { logo, links, copyRight } = footer;
  return (
    <section
      className={
        "bg-[#E2E2EF] px-3 pt-6 sm:pt-16 pb-6 flex flex-col sm:flex-row sm:items-center"
      }
    >
      <a href="home">
        <img
          src={`/${logo}.jpg`}
          className="max-w-[100px] sm:ml-10 mr-2 hidden sm:flex"
        />
      </a>
      <div className="sm:flex w-full items-center">
        <div className=" flex grow  items-center mb-4 sm:mb-0">
          <img
            src={`/${logo}.jpg`}
            className="max-w-[100px] object-contain sm:ml-10 mr-2 sm:hidden"
          />
          <div className=" justify-center w-full   flex flex-wrap  ">
            {links.map((f) => (
              <p
                key={f?.id}
                className="px-2  mb-2 text-base hover:text-primary"
              >
                <a href={`${f.id}`}>{f.title}</a>
              </p>
            ))}
          </div>
        </div>
        <p className="text-sm whitespace-nowrap text-center">{copyRight}</p>
      </div>
    </section>
  );
};

export default Footer;