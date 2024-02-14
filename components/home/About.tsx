"use client";

import React from "react";
import Link from "next/link";
import Banana from "../svgs/InteractiveSVG"

const About: React.FC = () => {
  return (
    <>
      <div id="about" className="overflow-hidden py-[50px] md:py-[70px] lg:py-[100px] xl:py-[120px]">
        <div className="container">
          <div className="grid gap-[40px] items-center grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2">
            <div
              className="text-center"
              data-aos="fade-left"
              data-aos-delay="400"
              data-aos-duration="600"
              data-aos-once="false"
            >

              <Banana />
            
            </div>

            <div className="space-y-[30px] md:space-y-[50px] lg:max-w-[630px] lg:mr-auto xl:mr-0 lg:ml-auto rtl:lg:mr-auto">
              <div
                data-aos="fade-right"
                data-aos-delay="100"
                data-aos-duration="600"
                data-aos-once="false"
              >
                <h1 className="text-orange uppercase text-[100px] md:text-[50px] font-medium mb-1 font-taruno">
                  DISTRIBUTION
                </h1>

                <p className = "mt-3 text-l font-semibold">
                  Be a part of our exciting journey with the $KARMA token. Learn how you can be eligible for the $KARMA airdrop.
                </p>
              </div>

              <div
                data-aos="fade-right"
                data-aos-delay="100"
                data-aos-duration="600"
                data-aos-once="false"
              >
                Eligibility Criteria:

                Holders of OnChainMonkey NFTs who have migrated their assets to Bitcoin.
                Members of the OCM community who own specific NFTs such as Genesis, Celestial, Dimensions 300, Karma 1, and Karma 2.
                Holders of $TRAC and $PIPE tokens – specific snapshot dates and conditions apply.

                Make sure your assets are migrated before the specified deadline to ensure eligibility for the airdrop.
              </div>


              <div
                className="space-y-[15px] sm:space-y-[0] space-x-[15px] md:space-x-[30px] rtl:space-x-reverse"
                data-aos="fade-right"
                data-aos-delay="300"
                data-aos-duration="600"
                data-aos-once="false"
              >
                <Link
                  href="#"
                  className="py-[15px] px-[30px] inline-block border-white border-[2px] rounded-[20px] bg-transparent text-white font-semibold text-[16px] md:text-[18px] transition duration-500 ease-in-out hover:bg-orange hover:text-white"
                >
                  Check Your Address
                </Link>

                <Link
                  href="#"
                  className="inline-block text-white font-semibold text-[16px] md:text-[18px] underline underline-offset-1 transition duration-500 ease-in-out hover:text-orange"
                >
                  More Info
                </Link>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
