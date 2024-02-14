"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const blogData = [
  {
    id: "1",
    image: "/images/blog/banana-token.webp", // Recommended image size 1270x900
    category: "Time management",
    title: "Introduction: $KARMA Token — Elevating OCM’s Journey",
    previewLink: "https://medium.com/@realkarmacoin/introduction-karma-token-elevating-ocms-journey-50f562e57cf5",
    author: "Admin",
    date: "January 24, 2024",
    aosDelay: "100",
  },
  {
    id: "2",
    image: "/images/blog/banana-token.webp", // Recommended image size 1270x900
    category: "Time management",
    title: "$KARMA代币 — 提升OCM的征程 OnChainMonkey",
    previewLink: "https://medium.com/@realkarmacoin/karma%E4%BB%A3%E5%B8%81-%E6%8F%90%E5%8D%87ocm%E7%9A%84%E5%BE%81%E7%A8%8B-onchainmonkey-a824a8177304",
    author: "Admin",
    date: "January 25, 2024",
    aosDelay: "200",
  }
];

const LatestBlog: React.FC = () => {
  return (
    <>
      <div id="blog" className="py-[50px] md:py-[80px] lg:py-[100px] xl:py-[120px]">
        <div className="container">
          <div
            className="max-w-[650px] mx-auto text-center mb-[30px] md:mb-[40px]"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="600"
            data-aos-once="false"
          >
            <h6 className="uppercase text-[16px] md:text-[18px] font-medium mb-[5px]">
              
            </h6>
            <h2 className="text-[100px] md:text-[50px] text-orange font-taruno">
              LATEST NEWS
            </h2>
          </div>

          {blogData && (
            <div className="grid gap-[25px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-black">
              {blogData &&
                blogData.slice(0, 3).map((value, i) => (
                  <div 
                    className="bg-white rounded-[20px] group"
                    data-aos="fade-up"
                    data-aos-delay={value.aosDelay}
                    data-aos-duration="600"
                    data-aos-once="false"
                    key={i}
                  >
                    <Link href={value.previewLink} target="_blank">
                      <Image
                        src={value.image}
                        alt="blog"
                        className="rounded-t-[20px]"
                        width={1270}
                        height={900}
                      />
                    </Link>

                    <div className="bg-white rounded-[20px] py-[40px] px-[30px] relative mt-[-16px] transition duration-500 ease-in-out group-hover:bg-[#82b7ea]">
                      <h3 className="text-[20px] xl:text-[22px] leading-[32px] mb-[15px]">
                        <Link
                          href={value.previewLink}
                          className="transition duration-500 ease-in-out text-black"
                          target="_blank"
                        >
                          {value.title}
                        </Link>
                      </h3>

                      <div className="flex items-center space-x-[15px] md:space-x-[30px] rtl:space-x-reverse">
                        <div className="flex items-center space-x-[8px] rtl:space-x-reverse">
                          <i className="flaticon-calendar"></i>
                          <p>{value.date}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default LatestBlog;
