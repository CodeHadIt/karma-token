"use client";

import * as THREE from "three";
import React, { useState, useRef, Suspense } from "react";
import Image from "next/image";
import { Canvas, useThree } from "@react-three/fiber";
import { Environment, Center } from "@react-three/drei";

import GLTFModel from "../models/GLTFModel";
import coinLoader from "/public/images/coin-loader.png";

interface ModelWithCameraProps {
  onModelLoaded: () => void;
}

const ModelWithCamera: React.FC<ModelWithCameraProps> = ({ onModelLoaded }) => {
  const { camera } = useThree();

  const handleModelLoaded = () => {
    onModelLoaded();
    camera.position.set(0, 1, -40);
    camera.lookAt(0, 0, 0);

    if ("fov" in camera) {
      (camera as THREE.PerspectiveCamera).fov = 20;
      camera.updateProjectionMatrix();
    }
  };

  return (
    <Suspense fallback={null}>
      <Center>
        <GLTFModel url="/images/coin.gltf" onLoaded={handleModelLoaded} />
      </Center>
      <Environment files="/images/KK_4k.hdr" background={false} />
    </Suspense>
  );
};

const HeroBanner: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <div
        id="home"
        className="relative h-screen overflow-hidden bg-black pt-[50px] pb-[50px] md:pb-[80px] lg:pb-[80px] xl:pb-[120px]"
      >
        <div
          id="home"
          className="container relative bg-black z-[1] h-full pb-20"
        >
          <div className="grid gap-[30px] items-center grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 h-full">
            <div
              className="text-center xl:text-end h-full bg-black"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="600"
              data-aos-once="true"
            >
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src={coinLoader}
                    alt="Loading..."
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              )}

              <Canvas>
                <ModelWithCamera onModelLoaded={() => setIsLoading(false)} />
              </Canvas>
            </div>

            <div className="bg-black space-y-[30px] md:space-y-[40px] sm:max-w-[570px] mx-auto xl:mx-0 text-center lg:text-start relative">
              <div>
                <p
                  className="text-[2rem] leading-[40px] sm:leading-[46px] md:leading-[50px] xl:leading-[50px] 2xl:leading-[64px]"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="600"
                  data-aos-once="true"
                >
                  Introducing
                </p>
                <svg
                  width="376"
                  height="45"
                  viewBox="0 0 376 45"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M269.023 44.8116H248.029C247.426 44.4511 247.276 43.8757 247.066 43.3426C243.37 34.0017 239.677 24.6609 235.986 15.32C235.603 14.3508 235.246 13.3452 233.538 13.9752C233.538 18.9758 233.538 24.0824 233.538 29.1859C233.538 34.2895 233.538 39.4172 233.538 44.4572C231.766 45.0175 220.634 45.1054 218.348 44.648C217.888 42.9064 217.867 3.17449 218.396 0.963462C227.141 0.957404 235.959 0.963462 244.899 0.963462C249.073 11.4401 253.183 21.7563 257.218 31.8907C258.131 32.2783 258.755 32.2056 259.504 31.9088C263.566 21.6926 267.646 11.431 271.754 1.10279H298.448C298.798 5.92466 298.554 10.7314 298.6 15.526C298.645 20.366 298.609 25.2061 298.609 30.0461V44.7631C293.421 45.1023 288.427 44.8358 283.135 44.9388C283.117 42.0917 283.093 39.5202 283.083 36.9457C283.074 34.4167 283.083 31.8906 283.083 29.3616V21.5594C283.083 19.0424 283.083 16.5285 283.083 14.2085C282.45 13.5451 281.957 13.7844 281.336 13.8601C277.234 24.1672 273.13 34.4863 269.019 44.8146L269.023 44.8116Z"
                    fill="white"
                  />
                  <path
                    d="M199.613 30.2702C204.317 32.1026 208.431 34.1047 211.08 38.1239C212.374 40.0896 213.111 42.2552 213.443 44.5632C211.789 45.0175 199.607 45.0781 197.473 44.6601C197.354 44.4965 197.168 44.336 197.11 44.1422C195.959 40.3137 193.003 38.5267 189.395 37.4879C185.443 36.352 181.381 35.9068 177.289 35.8129C172.536 35.7039 167.777 35.7675 163.021 35.7705C162.448 35.7705 161.848 35.6463 161.182 36.0825C160.725 38.8205 161.3 41.713 160.877 44.5117C159.23 45.0235 148.089 45.1053 145.83 44.651C145.382 42.9458 145.346 3.26533 145.817 1.14516C146.978 0.96949 148.183 0.68478 149.401 0.618146C160.286 0.0123841 171.187 -0.199633 182.075 0.215314C187.821 0.433388 193.56 1.21482 199.068 3.07754C201.571 3.92258 203.94 4.99781 206.096 6.55159C211.129 10.1801 212.819 15.9954 210.885 21.5321C209.713 24.891 206.909 26.9567 203.69 28.4499C202.454 29.0223 201.072 29.2889 199.613 30.2763V30.2702ZM161.127 22.6618C162.095 22.6618 162.817 22.6739 163.538 22.6618C169.518 22.5467 175.501 22.886 181.484 22.3135C184.755 22.0016 188 21.6866 191.203 20.9506C192.29 20.7022 193.268 20.2327 194.221 19.7057C195.122 19.209 196.011 18.6214 196.002 17.4402C195.993 16.1983 195.195 15.4714 194.111 15.0353C193.234 14.6839 192.345 14.3538 191.432 14.1115C187.741 13.1302 183.932 13.0302 180.16 12.8667C175.785 12.6789 171.391 12.7758 167.009 12.8545C165.07 12.8879 163.136 13.1786 161.124 13.3573V22.6588L161.127 22.6618Z"
                    fill="white"
                  />
                  <path
                    d="M118.183 1.08464C125.941 15.5624 133.69 30.0189 141.454 44.5057C139.798 45.0115 129.202 45.169 124.906 44.7904C123.679 43.5819 123.371 41.7555 122.147 40.2775H87.9205C86.7178 41.4678 86.456 43.4123 85.0371 44.9146C79.7178 44.8873 74.2737 45.0175 68.3911 44.8116C76.3168 30.0098 84.0566 15.5593 91.8087 1.08464H118.186H118.183ZM94.7165 27.2778H115.372C112.62 22.7194 110.659 18.0763 107.882 13.7118C105.921 13.7844 103.967 13.5179 101.854 13.8965C99.5273 18.258 97.1859 22.6467 94.7135 27.2778H94.7165Z"
                    fill="white"
                  />
                  <path
                    d="M375.503 44.7964H358.963C358.144 43.2911 357.319 41.7827 356.473 40.232H322.133C321.013 41.5828 320.638 43.3668 319.414 44.7843H303.085C303.456 42.9973 325.072 2.5233 326.43 1.05433H352.131C353.751 3.24113 375.095 43.1578 375.506 44.7964H375.503ZM336.42 13.8177C335.421 15.0141 329.882 25.3302 329.219 27.196C331.816 27.5625 347.685 27.4625 349.415 27.0203C346.824 22.6497 344.875 17.9945 342.132 13.7632C340.134 13.6845 338.246 13.6057 336.42 13.8177Z"
                    fill="white"
                  />
                  <path
                    d="M0.0290621 1.06039H15.0521C15.7981 1.78124 15.5454 2.62022 15.5484 3.38349C15.5728 8.15083 15.5515 12.9212 15.5698 17.6916C15.5698 18.3943 15.3901 19.1333 15.8712 19.9208C17.4758 19.8118 19.1444 19.7996 20.7764 19.5664C25.7851 18.8516 30.6659 17.7279 35.2149 15.3836C40.9665 12.4184 45.2475 8.21444 47.4124 2.08715C47.5311 1.74793 47.6286 1.39355 48.0944 1.08159H63.3032C60.6147 12.2125 53.8856 20.0329 43.9352 25.8239C51.261 32.142 58.3615 38.2693 65.4255 44.3603C65.0205 45.0781 64.5333 44.9115 64.1345 44.9115C58.3493 44.9267 52.5642 44.8994 46.779 44.9388C45.6707 44.9448 44.8608 44.5783 44.0387 43.8605C39.6055 39.9867 35.0992 36.1916 30.6751 32.3086C29.8134 31.5545 28.9487 31.2667 27.883 31.4666C23.9369 32.2117 19.9695 32.772 15.7037 32.8144C15.4267 34.7832 15.5941 36.7156 15.5667 38.6298C15.5393 40.5743 15.5606 42.5218 15.5606 44.4027C13.9804 45.0084 3.46969 45.178 0.178255 44.6662C-0.14754 39.914 0.0808172 35.1012 0.0412347 30.2945C-0.00139265 25.4544 0.0321099 20.6114 0.0321099 15.7713V1.05433L0.0290621 1.06039Z"
                    fill="white"
                  />
                </svg>

                <p
                  className="text-[18px] font-bold mt-2"
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="600"
                  data-aos-once="true"
                >
                  Driving innovation and impact <br />
                  through the power of community.
                </p>
                <p
                  className="text-[18px] mr-20 mt-2"
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="600"
                  data-aos-once="true"
                >
                  Embark on an exciting journey with a network of founders,
                  builders, industry leaders and seasoned collectors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
