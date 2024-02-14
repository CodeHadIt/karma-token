import {
  ReactNode,
  FC,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";



export type walletContextProviderProps = {
    children : ReactNode;
}

export type WalletDetails = {
  id: string;
  address: string,
  tracBalance: string;
}

export interface WalletContextInterface {
  connectedAddress: String | null;
  getConnectedAddress: (wallet: string) => void;
  setConnectedAddress: Dispatch<SetStateAction<String | null>>;
  walletDetails: WalletDetails | null;
  setWalletDetails: Dispatch<SetStateAction<WalletDetails | null>>;
};

export interface AddressFormat {
  symbol: string;
  type: string;
  address: string;
  publicKey: string;
  derivationPath: string;
}