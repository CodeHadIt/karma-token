"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ReactSVG } from 'react-svg'

const benefitsData = [
  {
    id: "1",
    icon: "flaticon-check-mark",
    title: "Cloud Storage Integration",
    shortText:
      "A task management application provides a centralized platform to organize and track all your tasks in one place.",
  },
  {
    id: "2",
    icon: "flaticon-check-mark",
    title: "Automation and Workflow Integration",
    shortText:
      "A task management application provides a centralized platform to organize and track all your tasks in one place.",
  },
];

const Integrations: React.FC = () => {
  return (
    <>
      <div id="integrations" className="py-[50px] md:py-[70px] lg:py-[100px] xl:py-[120px]">
        <div className="container">
          <div className="grid gap-[25px] items-center grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
            
            <div className="space-y-[30px] md:space-y-[50px]">
              <div
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="600"
                data-aos-once="false"
              >
                <h1 className="text-orange uppercase text-[100px] md:text-[50px] font-medium mb-[5px] leading-[3rem] font-taruno">
                  Community Focused
                </h1>
                <p className = "mt-3 text-l font-semibold">
                  Integrating the leading communities in Ordinals
                </p>
              </div>

              <div
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="600"
                data-aos-once="false"
              >
                <Link
                  href="#"
                  className="py-[15px] px-[30px] inline-block rounded-[20px] border-white border-[2px] bg-transparent text-white font-semibold text-[16px] md:text-[18px] transition duration-500 ease-in-out hover:bg-orange"
                >
                  Apply for your community
                </Link>
              </div>
            </div>

            <div
              className="text-center"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="600"
              data-aos-once="false"
            >
              <ReactSVG src="/images/community/community.svg"/>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Integrations;
