import * as React from "react";

const Clock = (props) => (
  <svg
    width={70}
    height={70}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M60.52 38.646c0 14.087-11.433 25.52-25.52 25.52-14.088 0-25.521-11.433-25.521-25.52 0-14.088 11.433-25.521 25.52-25.521 14.088 0 25.521 11.433 25.521 25.52ZM35 23.334v14.583"
      stroke="#3E4095"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M26.25 5.834h17.5"
      stroke="#3E4095"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Clock;
