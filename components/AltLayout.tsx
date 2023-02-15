import React from "react";
import { Footer, Navbar, Sidebar } from "./";

interface LayoutProp {
  children: React.ReactNode;
}

const AltLayout = ({ children }: LayoutProp) => {
  return (
    <div>
      <div className="flex">
        <Sidebar />
        <div className="">
          <div className="flex ">
            <h2 className="grow text-primary font-bold text-[32px]">
              Council of Jurist Dashboard
            </h2>
            search
          </div>

          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AltLayout;
