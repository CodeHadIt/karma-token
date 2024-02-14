"use client";

import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

const testimonialsData = [
  {
    id: "1",
    feedbackText:
      "I was amazed by the AI content writing services provided by Alvi. As a busy entrepreneur, I often struggled to find the time to create quality content for my website. However, with their AI-powered solution, I was able to generate engaging and well-written articles in a matter of minutes.",
    image: "/images/users/heref.jpeg", // Recommended image size 100x100
    name: "heref.eth",
    designation: "DrHeref",
  },
  {
    id: "2",
    feedbackText:
      "I was amazed by the AI content writing services provided by Alvi. As a busy entrepreneur, I often struggled to find the time to create quality content for my website. However, with their AI-powered solution, I was able to generate engaging and well-written articles in a matter of minutes.",
    image: "/images/users/soldman.jpeg", // Recommended image size 100x100
    name: "Soldman Gachs",
    designation: "DrSoldmanGachs",
  },
  {
    id: "3",
    feedbackText:
      "I was amazed by the AI content writing services provided by Alvi. As a busy entrepreneur, I often struggled to find the time to create quality content for my website. However, with their AI-powered solution, I was able to generate engaging and well-written articles in a matter of minutes.",
    image: "/images/users/fitzy.jpeg", // Recommended image size 100x100
    name: "FITZY",
    designation: "fitzyOG",
  },
  {
    id: "4",
    feedbackText:
      "I was amazed by the AI content writing services provided by Alvi. As a busy entrepreneur, I often struggled to find the time to create quality content for my website. However, with their AI-powered solution, I was able to generate engaging and well-written articles in a matter of minutes.",
    image: "/images/users/jason.jpeg", // Recommended image size 100x100
    name: "Jason Fang",
    designation: "JasonSoraVC",
  },
  {
    id: "5",
    feedbackText:
      "I was amazed by the AI content writing services provided by Alvi. As a busy entrepreneur, I often struggled to find the time to create quality content for my website. However, with their AI-powered solution, I was able to generate engaging and well-written articles in a matter of minutes.",
    image: "/images/users/rabbi.jpeg", // Recommended image size 100x100
    name: "RabbiGains",
    designation: "RabbiGains",
  },
  {
    id: "6",
    feedbackText:
      "I was amazed by the AI content writing services provided by Alvi. As a busy entrepreneur, I often struggled to find the time to create quality content for my website. However, with their AI-powered solution, I was able to generate engaging and well-written articles in a matter of minutes.",
    image: "/images/users/benny.jpeg", // Recommended image size 100x100
    name: "BennyTheDev",
    designation: "Rarity_garden",
  },
  {
    id: "7",
    feedbackText:
      "I was amazed by the AI content writing services provided by Alvi. As a busy entrepreneur, I often struggled to find the time to create quality content for my website. However, with their AI-powered solution, I was able to generate engaging and well-written articles in a matter of minutes.",
    image: "/images/users/sky.jpeg", // Recommended image size 100x100
    name: "Alex Philippine",
    designation: "Skrylabs",
  },
];

const Team: React.FC = () => {
  return (
    <>
      <div id="team" className="py-[50px] md:py-[70px] lg:py-[100px] xl:py-[120px] overflow-hidden">
        <div className="container xl:p-0 xl:max-w-[1920px] relative left-55">
          <div className="grid gap-[30px] items-center grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
            <div
              className="max-w-[500px] text-center lg:text-start mx-auto lg:mx-0 lg:ml-auto rtl:lg:ml-0 rtl:lg:mr-auto xl:max-w-[356px]"
              data-aos="fade-down"
              data-aos-delay="100"
              data-aos-duration="600"
              data-aos-once="false"
            >
  
                <h1 className="text-orange uppercase text-[100px] md:text-[50px] leading-[3rem] font-medium mb-[5px] font-taruno">
                  $KARMA COUNCIL
                </h1>
              <p>
                Meet the founding $KARMA Council, which includes representatives from the OCM community and the TRAC ecosystem.
              </p>
            </div>

            <div
              className="lg:col-span-2"
              data-aos="fade-down"
              data-aos-delay="200"
              data-aos-duration="600"
              data-aos-once="false"
            >
              {testimonialsData && (
                <Swiper
                  spaceBetween={24}
                  pagination={{
                    clickable: true,
                  }}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: true,
                    pauseOnMouseEnter: true,
                  }}
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 2,
                    },
                    992: {
                      slidesPerView: 2,
                    },
                    1300: {
                      slidesPerView: 3,
                    },
                    1650: {
                      slidesPerView: 3,
                    },
                  }}
                  modules={[Autoplay, Pagination]}
                  className="mt-testimonials-slider"
                >
                  {testimonialsData &&
                    testimonialsData.map((value, i) => (
                      <SwiperSlide
                        key={i}
                        className="even:bg-[#FF9900] odd:bg-[#21A8F4] rounded-[20px] py-[50px] md:py-[60px] px-[30px] md:px-[50px]"
                      >
                        

                        <div className="flex items-center space-x-[15px] rtl:space-x-reverse mt-[20px] md:mt-[30px]">
                          <div>
                            <Link href={`https://x.com/${value.designation}`} target="_blank">
                              <Image
                                src={value.image}
                                alt="user"
                                width={150}
                                height={150}
                                className="rounded-full cursor-pointer"
                              /> 
                            </Link>
                          </div>
                        </div>

                        <div className="flex items-center space-x-[15px] rtl:space-x-reverse mt-[20px] md:mt-[30px]">
                          <div>
                            <h3 className="font-semibold text-[18px] md:text-[20px]">
                              {value.name}
                            </h3>
                            <p className="text-[15px]">
                            <Link href={`https://x.com/${value.designation}`} target="_blank" className="cursor-pointer">
                              @{value.designation}
                            </Link>
                            </p>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                </Swiper>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
