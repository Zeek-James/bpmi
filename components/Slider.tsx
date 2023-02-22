import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Image from "next/image";
// import styles from "./style";

interface ArrowProps {
  className?: string;
  style?: object;
  onClick?: () => void;
}

function NextArrow({ className, style, onClick }: ArrowProps) {
  return (
    <AiOutlineRight
      className={className}
      style={{ ...style, color: "black" }}
      onClick={onClick}
    />
  );
}

function PrevArrow({ className, style, onClick }: ArrowProps) {
  return (
    <AiOutlineLeft
      className={className}
      style={{ ...style, color: "black" }}
      onClick={onClick}
    />
  );
}

const Products = () => {
  //   const productImages = [
  //     "bigSmile",
  //     "bigSmile",
  //     "bigSmile",
  //     "bigSmile",
  //     "bigSmile",
  //   ];

  //   const settings = {
  //     infinite: true,
  //     speed: 500,
  //     slidesToShow: 4,
  //     autoPlay: true,
  //     slidesToScroll: 1,
  //     initialSlide: 0,
  //     // nextArrow: <NextArrow />,
  //     // prevArrow: <PrevArrow />,
  //     responsive: [
  //       {
  //         breakpoint: 1024,
  //         settings: {
  //           slidesToShow: 2,
  //           slidesToScroll: 2,
  //           infinite: true,
  //         },
  //       },
  //       {
  //         breakpoint: 600,
  //         settings: {
  //           slidesToShow: 2,
  //           slidesToScroll: 2,
  //           initialSlide: 2,
  //         },
  //       },
  //       {
  //         breakpoint: 480,
  //         settings: {
  //           slidesToShow: 1,
  //           slidesToScroll: 1,
  //         },
  //       },
  //     ],
  //   };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="p-5" id="products">
      <div className="mx-auto my-8 w-4/5 bg-blue-900 h-[300px]"></div>
    </div>
  );
};

export default Products;
