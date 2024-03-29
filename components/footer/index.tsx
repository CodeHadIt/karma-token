"use client";

import React from "react";
import Link from "next/link";

const navLinkData = [
  {
    id: "1",
    text: "Features",
    link: "#features",
  },
  {
    id: "2",
    text: "Privacy Policy",
    link: "/privacy-policy",
  },
  {
    id: "3",
    text: "FAQ’s",
    link: "/faq",
  },
  {
    id: "4",
    text: "Pricing",
    link: "#pricing",
  },
  {
    id: "5",
    text: "Contact",
    link: "/contact",
  },
];

// Social Links
const socialLinksData = [
  {
    id: "1",
    icon: "flaticon-twitter",
    link: "https://twitter.com/realkarmacoin",
  },
];

const Footer: React.FC = () => {
  return (
    <>
      <footer className="bg-black py-[50px] md:py-[80px] lg:py-[100px] xl:py-[120px]">
        <div className="container">
          <div className="grid gap-[20px] items-center grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
            <div
              className="text-center lg:text-start"
              data-aos="fade-in"
              data-aos-delay="100"
              data-aos-duration="600"
              data-aos-once="false"
            >
              <Link href="#">
                <svg
                  width="583"
                  height="71"
                  viewBox="0 0 583 71"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1_6)">
                    <path
                      d="M417.677 70.7037H385.082C384.146 70.1351 383.914 69.2273 383.588 68.3863C377.849 53.6502 372.115 38.914 366.385 24.1779C365.79 22.6489 365.237 21.0625 362.585 22.0564C362.585 29.9453 362.585 38.0014 362.585 46.0527C362.585 54.1041 362.585 62.1937 362.585 70.1447C359.833 71.0287 342.55 71.1672 339 70.4457C338.286 67.6982 338.253 5.01715 339.076 1.52903C352.652 1.51947 366.343 1.52903 380.222 1.52903C386.703 18.057 393.085 34.3317 399.349 50.3197C400.767 50.9313 401.736 50.8167 402.899 50.3484C409.205 34.2314 415.54 18.0427 421.917 1.74883H463.361C463.905 9.3558 463.527 16.9389 463.598 24.5028C463.669 32.1385 463.612 39.7741 463.612 47.4098V70.6273C455.557 71.1624 447.804 70.742 439.588 70.9044C439.559 66.4129 439.521 62.3561 439.507 58.2946C439.493 54.3048 439.507 50.3197 439.507 46.3299V34.0211C439.507 30.0504 439.507 26.0844 439.507 22.4243C438.524 21.3779 437.758 21.7554 436.794 21.8748C430.426 38.1352 424.054 54.4147 417.672 70.7085L417.677 70.7037Z"
                      fill="white"
                    />
                    <path
                      d="M309.918 47.7586C317.221 50.6494 323.608 53.8079 327.721 60.1486C329.73 63.2497 330.874 66.6661 331.389 70.3072C328.822 71.0239 309.908 71.1195 306.594 70.4601C306.41 70.202 306.122 69.9488 306.032 69.643C304.245 63.6033 299.655 60.7841 294.053 59.1452C287.917 57.3533 281.611 56.6509 275.257 56.5028C267.878 56.3308 260.489 56.4311 253.105 56.4359C252.216 56.4359 251.285 56.24 250.25 56.9281C249.54 61.2476 250.434 65.8108 249.777 70.2259C247.219 71.0335 229.922 71.1625 226.414 70.4457C225.72 67.7556 225.663 5.15574 226.396 1.81097C228.197 1.53383 230.069 1.08467 231.96 0.979551C248.86 0.0239007 265.783 -0.310577 282.688 0.344043C291.609 0.688077 300.52 1.92087 309.071 4.85949C312.957 6.19262 316.635 7.8889 319.982 10.3401C327.796 16.0645 330.42 25.2387 327.418 33.9734C325.598 39.2724 321.244 42.5312 316.247 44.8869C314.328 45.79 312.182 46.2105 309.918 47.7682V47.7586ZM250.164 35.7556C251.668 35.7556 252.788 35.7748 253.908 35.7556C263.193 35.5741 272.482 36.1092 281.771 35.2062C286.848 34.714 291.888 34.2171 296.861 33.0559C298.548 32.6641 300.066 31.9235 301.546 31.0921C302.945 30.3084 304.325 29.3815 304.311 27.5179C304.297 25.5589 303.058 24.4121 301.375 23.724C300.014 23.1697 298.634 22.6489 297.215 22.2667C291.486 20.7185 285.572 20.5608 279.715 20.3028C272.922 20.0065 266.1 20.1594 259.298 20.2837C256.286 20.3362 253.284 20.795 250.16 21.0769V35.7509L250.164 35.7556Z"
                      fill="white"
                    />
                    <path
                      d="M183.486 1.72018C195.531 24.5602 207.562 47.3668 219.617 70.2212C217.045 71.0191 200.594 71.2676 193.924 70.6703C192.019 68.7638 191.541 65.8825 189.641 63.5507H136.501C134.634 65.4286 134.227 68.4962 132.024 70.8662C123.766 70.8232 115.313 71.0287 106.18 70.7038C118.485 47.3525 130.502 24.5554 142.538 1.72018H183.49H183.486ZM147.052 43.0425H179.122C174.849 35.8512 171.805 28.5262 167.493 21.6407C164.449 21.7554 161.414 21.3349 158.133 21.9322C154.522 28.8129 150.886 35.7365 147.048 43.0425H147.052Z"
                      fill="white"
                    />
                    <path
                      d="M583 70.6799H557.321C556.05 68.3051 554.769 65.9255 553.454 63.479H500.14C498.4 65.6101 497.819 68.4245 495.918 70.6608H470.566C471.142 67.8416 504.702 3.98984 506.81 1.67239H546.713C549.228 5.12229 582.367 68.0948 583.005 70.6799H583ZM522.32 21.8079C520.77 23.6953 512.171 39.9701 511.14 42.9135C515.173 43.4916 539.811 43.334 542.496 42.6363C538.473 35.7413 535.448 28.3971 531.189 21.7219C528.088 21.5977 525.157 21.4735 522.32 21.8079Z"
                      fill="white"
                    />
                    <path
                      d="M0.0473116 1.68195H23.3718C24.53 2.81917 24.1377 4.14274 24.1424 5.34686C24.1802 12.8678 24.1471 20.3936 24.1755 27.9193C24.1755 29.0279 23.8966 30.1938 24.6435 31.4361C27.1348 31.2641 29.7253 31.245 32.2592 30.877C40.0356 29.7494 47.6135 27.9766 54.6761 24.2783C63.606 19.6004 70.2526 12.9682 73.6137 3.30177C73.798 2.76661 73.9493 2.20755 74.6726 1.71539H98.2855C94.1113 19.2755 83.6639 31.6129 68.2151 40.7489C79.589 50.7163 90.6131 60.3827 101.58 69.9918C100.952 71.1242 100.195 70.8614 99.576 70.8614C90.5942 70.8853 81.6123 70.8423 72.6304 70.9044C70.9097 70.914 69.6522 70.3358 68.3758 69.2034C61.4929 63.092 54.4964 57.1049 47.6277 50.9791C46.2898 49.7894 44.9473 49.3354 43.2927 49.6508C37.1661 50.8262 31.0065 51.7102 24.3835 51.7771C23.9533 54.883 24.2133 57.9315 24.1708 60.9513C24.1282 64.019 24.1613 67.0914 24.1613 70.0587C21.7078 71.0143 5.38917 71.2819 0.27895 70.4744C-0.226872 62.9773 0.127676 55.3847 0.0662208 47.8016C3.85379e-05 40.166 0.0520389 32.5255 0.0520389 24.8899V1.68195H0.0473116Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_6">
                      <rect width="583" height="71" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
            </div>

            {/* <div className="lg:col-span-2 text-center lg:text-end">
              {navLinkData && (
                <ul 
                  className="space-y-[10px] space-x-[30px] md:space-x-[50px] xl:space-x-[80px] 2xl:space-x-[100px] rtl:space-x-reverse"
                  data-aos="fade-in"
                  data-aos-delay="200"
                  data-aos-duration="600"
                  data-aos-once="false"
                >
                  {navLinkData &&
                    navLinkData.map((value, i) => (
                      <li
                        className="inline-block font-semibold text-[#BFC3E1] hover:text-primary-color"
                        key={i}
                      >
                        <Link href={value.link}>{value.text}</Link>
                      </li>
                    ))}
                </ul>
              )}
            </div> */}

            <div className="lg:col-span-2 text-center lg:text-end">
              {socialLinksData && (
                <ul
                  className="space-x-[10px] rtl:space-x-reverse"
                  data-aos="fade-in"
                  data-aos-delay="300"
                  data-aos-duration="600"
                  data-aos-once="false"
                >
                  {socialLinksData &&
                    socialLinksData.map((value, i) => (
                      <li className="inline-block" key={i}>
                        <a
                          href={value.link}
                          target="_blank"
                          className="
                              bg-white
                              w-[30px]
                              h-[30px]
                              leading-[30px]
                              text-center
                              rounded-full
                              text-[14px]
                              text-black
                              inline-block
                              transition duration-500 ease-in-out
                              hover:bg-primary-color
                              hover:text-white
                            "
                        >
                          <i className={value.icon}></i>
                        </a>
                      </li>
                    ))}
                </ul>
              )}
            </div>
          </div>

          <hr className="border-white my-[30px] md:my-[50px]" />
        </div>
      </footer>
    </>
  );
};

export default Footer;
