import React from 'react'
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


const WalletConnectDialog = ({ address }: { address: String | null }) => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button variant="outline">
          Connect Wallet
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <h3 className="text-2xl">Choose Wallet</h3>
          </DialogTitle>
          <DialogDescription>
            <p className="text-sm text-muted-foreground">
              Choose Bitcoin wallet to connect.
            </p>
          </DialogDescription>
        </DialogHeader>
        <WalletConnections />
      </DialogContent>
    </Dialog>
  );
};

export default WalletConnectDialog