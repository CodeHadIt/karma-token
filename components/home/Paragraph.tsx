"use client";

import React from "react";
import Link from "next/link";

const Paragraph: React.FC = () => {
  return (
    <>
      <div className="py-[50px] md:py-[80px] lg:py-[100px] xl:py-[120px]">
        <div className="container">
          <div className="max-w-[75%] mx-auto text-center mb-[30px] md:mb-[40px] lg:mb-[60px]">
            <h2 className="text-[20px] font-normal text-orange">
              $KARMA is more than a token; it&apos;s a commitment to growth,
              community, and innovation. Designed as a catalyst to expand the
              OCM and ordinals ecosystems, $KARMA is set to redefine engagement
              and opportunity for the entire ordinals community and beyond.
            </h2>
          </div>
          <div
            className="text-center mt-[20px] md:mt-[20px]"
            data-aos="fade-in"
            data-aos-delay="100"
            data-aos-duration="600"
            data-aos-once="false"
          >
            <Link
              href="#"
              className="py-[15px] px-[30px] inline-block rounded-[20px] border-solid border-[2px] border-white bg-transparent text-white font-semibold text-[16px] md:text-[18px] transition duration-500 ease-in-out hover:bg-orange hover:text-white"
            >
              LEARN MORE
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Paragraph;
