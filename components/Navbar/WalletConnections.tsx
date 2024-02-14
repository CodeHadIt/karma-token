'use client'

import { useContext } from 'react'
import Image from 'next/image';

import Unisat from "/public/images/wallets-icons/unisat_logo.png"
import Leather from "/public/images/wallets-icons/leather_logo.png"
import Xverse from "/public/images/wallets-icons/xverse_logo.png"

import { WalletContext } from '@/contexts/WalletContext';
import { WalletContextInterface } from '@/types/walletTypes';

const WalletConnections = () => {

  const { connectedAddress, getConnectedAddress } = useContext(
    WalletContext
  ) as WalletContextInterface;

  return (
    <div className="space-y-5 text-center">
      <div
        className="border flex items-center gap-10 shadow-[0px_1px_1px_rgba(0,1,2,0.2)] hover:border-white cursor-pointer rounded-xl p-3 transition duration-300 ease-in"
        onClick={() => getConnectedAddress("unisat")}
      >
        <Image
          src={Unisat}
          width={50}
          height={50}
          alt="unisat_logo"
          className=""
        />
        <h4 className="">Unisat Wallet</h4>
      </div>

      <div
        className="border flex items-center gap-10 shadow-[0px_1px_1px_rgba(0,1,2,0.2)] hover:border-white cursor-pointer rounded-xl p-3 transition duration-300 ease-in"
        onClick={() => getConnectedAddress("leather")}
      >
        <Image
          src={Leather}
          width={50}
          height={50}
          alt="unisat-logo"
          className=""
        />
        <h4 className="">Leather Wallet</h4>
      </div>

      <div
        className="border flex items-center gap-10 shadow-[0px_1px_1px_rgba(0,1,2,0.2)] hover:border-white cursor-pointer rounded-xl p-3 transition duration-300 ease-in"
        onClick={() => {
          getConnectedAddress("xverse");
        }}
      >
        <Image
          src={Xverse}
          width={50}
          height={50}
          alt="xverse_logo"
          className=""
        />
        <h4 className="">Xverse Wallet</h4>
      </div>
    </div>
  );
}

export default WalletConnections