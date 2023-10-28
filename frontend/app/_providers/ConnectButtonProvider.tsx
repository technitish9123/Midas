//@ts-nocheck
"use client";
import { useWeb3Modal } from "@web3modal/react";
import { useAccount } from "wagmi";

export default function ConnectButton() {
  const { open } = useWeb3Modal();
  const {
    connector: activeConnector,
    isConnected,
    address,
    isConnecting,
    isDisconnected,
  } = useAccount();

  return (
    <>
      {!address && !isConnected ? <w3m-connect-button /> : ""}
      {address ? <w3m-account-button /> : ""}
    </>
  );
}
