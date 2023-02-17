import * as React from "react";

// export type SidebarProp = {
//   color: string;
// };

// const HomeIcon = ({ color }: SidebarProp) => (
const HomeIcon = () => (
  <svg
    width={32}
    height={33}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    // {...props}
  >
    <path
      d="M16 24.836v-4M13.426 4.596l-9.24 7.4c-1.04.827-1.706 2.574-1.48 3.88L4.48 26.49c.32 1.893 2.133 3.426 4.053 3.426h14.933c1.907 0 3.734-1.546 4.054-3.426l1.773-10.614c.213-1.306-.453-3.053-1.48-3.88l-9.24-7.386c-1.427-1.147-3.733-1.147-5.147-.014Z"
      // stroke={color}
      stroke="#3E4095"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default HomeIcon;
