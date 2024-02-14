"use client";

import React from "react";

const FaqContent: React.FC = () => {
  return (
    <>
      <div className="py-[50px] md:py-[80px] lg:py-[100px] xl:py-[120px]">
        <div className="container">
          <div className="max-w-[650px] mx-auto text-center mb-[30px] md:mb-[40px] lg:mb-[60px]">
            <h1 className="text-orange uppercase text-[100px] md:text-[50px] font-medium mb-[5px] leading-[3rem] font-taruno">
              F.A.Q.
            </h1>
            
          </div>

          <div className="max-w-[560px] md:max-w-[765px] xl:max-w-[872px] mx-auto">
            <div className="space-y-[25px]">
              <details className="bg-[#F8F6F5] rounded-[20px]" open>
                <summary className="text-[16px] md:text-[20px] text-black font-semibold select-none cursor-pointer py-[15px] px-[30px]">
                What is the $KARMA token?
                </summary>
                <div className="border-t leading-7 py-[30px] px-[30px] space-y-3 text-black">
                  <p>
                  $KARMA is a strategic cryptocurrency initiative by the OnChainMonkey (OCM) community, designed to enhance the ecosystem and foster community engagement. It&apos;s not just a digital asset; it&apos;s a key element in the growth strategy for the bitcoin ordinals movement in general.
                  </p>
                </div>
              </details>

              <details className="bg-[#F8F6F5] rounded-[20px]">
                <summary className="text-[16px] md:text-[20px] text-black font-semibold select-none cursor-pointer py-[15px] px-[30px]">
                  How does $KARMA differ from other cryptocurrencies?
                </summary>
                <div className="border-t leading-7 py-[30px] px-[30px] space-y-3 text-black">
                  <p>
                  $KARMA is unique in its close alignment with the OCM community&apos;s values and its focus on community-driven success. It&apos;s not only a means of transaction but also a tool for community engagement and strategic development within the bitcoin ordinals ecosystem.
                  </p>
                </div>
              </details>

              <details className="bg-[#F8F6F5] rounded-[20px]">
                <summary className="text-[16px] md:text-[20px] text-black font-semibold select-none cursor-pointer py-[15px] px-[30px]">
                Where can I buy $KARMA tokens?
                </summary>
                <div className="border-t leading-7 py-[30px] px-[30px] space-y-3 text-black">
                  <p>
                  Details about the purchase and exchange listings for $KARMA tokens will be announced through our official channels. Stay tuned for updates on our website and social media platforms.
                  </p>
                </div>
              </details>

              <details className="bg-[#F8F6F5] rounded-[20px]">
                <summary className="text-[16px] md:text-[20px] text-black font-semibold select-none cursor-pointer py-[15px] px-[30px]">
                Who is managing the $KARMA initiative?
                </summary>
                <div className="border-t leading-7 py-[30px] px-[30px] space-y-3 text-black">
                  <p>
                  The $KARMA initiative is managed by the $KARMA Council, a group of dedicated individuals from the OCM community and blockchain experts. This council includes members with diverse expertise and experience in blockchain and cryptocurrencies.
                  </p>
                </div>
              </details>

              <details className="bg-[#F8F6F5] rounded-[20px]">
                <summary className="text-[16px] md:text-[20px] text-black font-semibold select-none cursor-pointer py-[15px] px-[30px]">
                Is $KARMA an official project of Metagood or OnChainMonkey?
                </summary>
                <div className="border-t leading-7 py-[30px] px-[30px] space-y-3 text-black">
                  <p>
                  No, the $KARMA token is a community-led initiative and is not an official project of Metagood or OnChainMonkey. It has been developed and conceptualized by members of the OCM community.
                  </p>
                </div>
              </details>

              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqContent;
