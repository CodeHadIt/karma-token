'use client'
import { FC, createContext, useEffect, useState } from "react";
import { walletContextProviderProps, WalletContextInterface, AddressFormat, WalletDetails } from "@/types/walletTypes";
import { AddressPurpose, BitcoinNetworkType, GetAddressOptions, getAddress } from "sats-connect";


export const WalletContext = createContext<WalletContextInterface>(
  {} as WalletContextInterface
);

const WalletContextProvider: FC<walletContextProviderProps> = ({
  children,
}) => {
    const [connectedAddress, setConnectedAddress] = useState<String | null>(null);
    const [walletDetails, setWalletDetails] = useState<WalletDetails | null>(null);

    const getTRACBalance = async (address: string) => {
        const response = await fetch(`/api/balance/${address}`);
        const details = await response.json();
        console.log(details)
        setWalletDetails(details)
    }

    const getConnectedAddress = (wallet: string) => {
        if (wallet === "unisat") {
            getUnisatAddress();
        } else if (wallet === "leather") {
            getLeatherAddress();
        } else if (wallet === "xverse") {
            getXverseAddress();
        }
    };

    const getUnisatAddress = async () => {
        if (typeof window.unisat !== "undefined") {
            try {
            let accounts = await window.unisat.requestAccounts();
            setConnectedAddress(accounts[0]);
            getTRACBalance(accounts[0]);
            } catch (e) {
            console.log("connect failed");
            }
        } else {
            alert("Please Install Unisat Wallet");
        }
    };

    const getLeatherAddress = async () => {
      if (typeof window.btc !== "undefined") {
        try {
          const response = await window.btc?.request("getAddresses");
          console.log(response)
          const addresses = response.result.addresses;
          const tapRootAddress: AddressFormat = addresses.find(
            (address: AddressFormat) => address.type === "p2tr"
          );
          setConnectedAddress(tapRootAddress.address);
          getTRACBalance(tapRootAddress.address);
        } catch (error) {
          console.log(error);
        }
      } else {
        alert("Please install Leather Wallet");
      }
    };

    const getAddressOptions: GetAddressOptions = {
        payload: {
        purposes: [AddressPurpose.Ordinals, AddressPurpose.Payment],
        message: "Address for interracting with Karma",
        network: {
            type: BitcoinNetworkType.Mainnet
        },
        },
        onFinish: (response: any) => {
        const addresses = {
            ordinal: response.addresses[0].address,
            payment: response.addresses[1].address,
        };
        setConnectedAddress(addresses.ordinal);
        getTRACBalance(addresses.ordinal);
        },
        onCancel: () => alert("User canceled request"),
    };

    const getXverseAddress = async () => {
        try {
            await getAddress(getAddressOptions);
        } catch (error: any) {
            alert(`${error.message}`);
        }
    };

    return (
      <WalletContext.Provider
        value={{
          connectedAddress,
          getConnectedAddress,
          setConnectedAddress,
          walletDetails,
          setWalletDetails,
        }}
      >
        <div>{children}</div>
      </WalletContext.Provider>
    );
};


export default WalletContextProvider;