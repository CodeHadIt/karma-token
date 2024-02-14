"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import shapeImg1 from "/public/images/coin-side.png";
import shapeImg2 from "/public/images/coin-side.png";

interface TitleProps {
  title: string;
  homeText: string;
  homeUrl: string;
}

const TitlePage: React.FC<TitleProps> = ({
  title,
  homeText,
  homeUrl,
}) => {
  return (
    <div className="bg-black relative py-5">
      <div className="container mx-auto relative">
        <div className="relative text-center">
          <h2 className="font-neon text-[4rem]">{title}</h2>
        </div>
      </div>

      {/* Shape Images */}
      <Image
        src={shapeImg2}
        alt="shape"
        className="absolute top-0 right-0 max-w-[70px] md:max-w-[150px] xl:max-w-[200px] animate-pulse"
      />
    </div>
  );
};

export default TitlePage;
