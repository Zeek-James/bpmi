import Image from "next/image";
import React from "react";

interface HeroProp {
  img?: string;
  children: React.ReactNode;
}

const Hero = ({ img, children }: HeroProp) => {
  return (
    <div className="relative flex  items-center justify-center min-h-[400px] md:min-h-[500px]">
      <Image
        src={`/${img}.jpg`}
        className="w-[100%]  
     h-[100%] 
      absolute
      "
        alt=""
        height={500}
        width={2000}
      />
      {children}
    </div>
  );
};

export const Herofn = ({ children }: HeroProp) => {
  return (
    <div className="relative flex  items-center justify-center h-[300px] md:h-[400px] bg-primary">
      {children}
    </div>
  );
};

export default Hero;
