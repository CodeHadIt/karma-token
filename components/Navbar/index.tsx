"use client";

import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

import { WalletContext } from "@/contexts/WalletContext";
import { WalletContextInterface } from "@/types/walletTypes";
import WalletConnectDialog from "./WalletConnectDialog";
import WalletDisconnectDialog from "./WalletDisconnectDialog";

import logo from "/public/images/logo3.png";

const Navbar: React.FC = () => {
  const currentRoute = usePathname();

  const { connectedAddress, setConnectedAddress, setWalletDetails } = useContext(
    WalletContext
  ) as WalletContextInterface;
  

  // Sticky Navbar
  useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId?.classList.add("isSticky");
      } else {
        elementId?.classList.remove("isSticky");
      }
    });

    return () => {
      document.removeEventListener("scroll", () => {
        if (window.scrollY > 170) {
          elementId?.classList.add("isSticky");
        } else {
          elementId?.classList.remove("isSticky");
        }
      });
    };
  }, []);

  // Toggle active class
  const [isActive, setActive] = useState<boolean>(false);
  const handleToggleSearchModal = () => {
    setActive(!isActive);
  };

  return (
    <>
      <div
        id="navbar"
        className="navbar-area bg-black relative z-[2] py-[20px] lg:py-[15px] xl:py-0"
      >
        <div className="container mx-auto bg-black max-w-[1760px] xl:px-[30px]">
          <nav
            className={`navbar relative flex flex-wrap bg-black  ${
              isActive ? "active" : ""
            }`}
          >
            <div className="self-center bg-black">
              <Link href="#">
                <Image
                  src={logo}
                  className="inline md:max-w-[110px] lg:max-w-[140px]"
                  alt="logo"
                />
              </Link>
            </div>

            {/* Toggle button */}
            <button
              className="navbar-toggler absolute ml-auto right-0 rtl:right-auto rtl:left-0 top-[2px] md:hidden"
              type="button"
              onClick={handleToggleSearchModal}
            >
              <span className="burger-menu text-black cursor-pointer leading-none text-[30px]">
                <i className="ri-menu-line"></i>
              </span>
            </button>

            <div className="navbar-collapse flex bg-black self-center grow basis-auto md:space-x-[20px] lg:space-x-[50px] xl:space-x-[70px] 2xl:space-x-[100px] rtl:space-x-reverse">
              <ul className="navbar-nav self-center flex-row ml-auto rtl:ml-0 rtl:mr-auto md:flex md:space-x-[15px] lg:space-x-[25px] xl:space-x-[35px] 2xl:space-x-[50px] rtl:space-x-reverse">
                <li className="py-[8px] lg:py-[15px] xl:py-[35px] 2xl:py-[38px] relative group">
                  <Link
                    href="#home"
                    className="text-[16px] md:text-[16px] lg:text-[18px] font-medium transition-all hover:text-orange hover:underline"
                  >
                    About $KARMA
                  </Link>
                </li>

                <li className="py-[8px] lg:py-[15px] xl:py-[35px] 2xl:py-[38px] relative group">
                  <Link
                    href="#claim"
                    className="text-[16px] md:text-[16px] lg:text-[18px] font-medium transition-all hover:text-orange hover:underline"
                  >
                    Distribution/Claim
                  </Link>
                </li>

                <li className="py-[8px] lg:py-[15px] xl:py-[35px] 2xl:py-[38px] relative group">
                  <Link
                    href="#claim"
                    className="text-[16px] md:text-[16px] lg:text-[18px] font-medium  transition-all hover:text-orange hover:underline"
                  >
                    Council
                  </Link>
                </li>

                <li className="py-[8px] lg:py-[15px] xl:py-[35px] 2xl:py-[38px] relative group">
                  <Link
                    href="#faq"
                    className="text-[16px] md:text-[16px] lg:text-[18px] font-medium transition-all hover:text-orange hover:underline"
                  >
                    F.A.Q.
                  </Link>
                </li>
              </ul>

              {/* Other options */}

              {connectedAddress ? (
                <WalletDisconnectDialog connectedAddress={connectedAddress} setConnectedAddress={setConnectedAddress}
                setWalletDetails={setWalletDetails}
                
                />
              ) : (
                <WalletConnectDialog address={connectedAddress} />
              )}
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
