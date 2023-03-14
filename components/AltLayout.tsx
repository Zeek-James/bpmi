import React from "react";
import { Footer, SearchFieldfn, Sidebar } from "./";

interface LayoutProp {
  children: React.ReactNode;
}

const AltLayout = ({ children }: LayoutProp) => {
  return (
    <div className="">
      <div className="flex bg-card ">
        <Sidebar />
        <div className="w-full bg-white p-4 md:p-8">
          <div className="flex flex-col lg:flex-row w-full">
            <h2 className="grow text-primary font-bold text-[32px]">
              Council of Jurist Dashboard
            </h2>
            <SearchFieldfn />
          </div>
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AltLayout;
