import React, { Dispatch, SetStateAction } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import WalletConnections from "./WalletConnections";
import { Power } from "lucide-react";
import { WalletDetails } from "@/types/walletTypes";



interface IProps {
  connectedAddress: String | null;
  setConnectedAddress: Dispatch<SetStateAction<String | null>>;
  setWalletDetails: Dispatch<SetStateAction<WalletDetails | null>>;
}

const WalletDisconnectDialog = ({
  connectedAddress,
  setConnectedAddress,
  setWalletDetails,
}: IProps) => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button variant="outline">
          {" "}
          {connectedAddress?.slice(0, 5) +
            "...." +
            connectedAddress?.slice(
              connectedAddress?.length - 5,
              connectedAddress?.length
            )}{" "}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <h3 className="text-2xl">Disconnect Your Wallet</h3>
          </DialogTitle>
          <DialogDescription>
            <p className="text-sm text-muted-foreground">
              Disconnect your wallet from the app.
            </p>
          </DialogDescription>
        </DialogHeader>
        <div
          className="border flex items-center gap-10 shadow-[0px_1px_1px_rgba(0,1,2,0.2)] hover:border-white cursor-pointer rounded-xl p-3 transition duration-300 ease-in"
          onClick={() => {
            setConnectedAddress(null);
            setWalletDetails(null);
          }}
        >
          <Power />
          <h4 className="">Disconnect Wallet</h4>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WalletDisconnectDialog;
