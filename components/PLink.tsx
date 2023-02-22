import Link from "next/link";
import React, { ReactNode } from "react";

type ButtonProp = {
  text: ReactNode;
  onClick?: () => void;
  styles: string;
  href: string;
};

const PLink = ({ href, styles, text }: ButtonProp): JSX.Element => (
  <Link
    href={href}
    type="button"
    className={`p-2 font-poppins transition ease-in-out  hover:scale-105  duration-300   hover:opacity-80  rounded-md outline-none ${styles}`}
  >
    {text}
  </Link>
);

export default PLink;
