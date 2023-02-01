import React from "react";
import { Footer, Navbar } from "./";

interface LayoutProp {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProp) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
