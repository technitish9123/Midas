"use client";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase/firebase";
import { useAccount } from "wagmi";
import CreateCampaign from "@/components/CampaignForm";

type Props = {};

const CreateCampaignPage = (props: Props) => {
  const { isConnected, address } = useAccount();
  const [isVisible, setIsVisible] = useState(false);

  const checkFirestore = async () => {
    if (isConnected && address) {
      try {
        const docRef = doc(db, "Dapp", address as string);
        const docSnap = await getDoc(docRef);
        setIsVisible(docSnap.exists());
        if (!docSnap.exists()) {
          toast.error("No data found for the provided dapp_id.");
        }
      } catch (error) {
        console.error("Error checking Firestore:", error);
        toast.error(
          "An error occurred while checking Firestore. Please try again."
        );
      }
    } else {
      toast.error("Please connect your wallet.");
      setIsVisible(false);
    }
  };

  useEffect(() => {
    checkFirestore();
  }, [address]);

  return (
    <div className=" px-40 flex justify-center items-center flex-col    ">
      <div className="bg-inherit text-5xl mt-10 pt-5 pb-5 font-extrabold text-secondary-BLACKWOOD w-full flex justify-between leading-tight">
        Create powerful campaigns, <br /> 
        Powered by red envelopes, <br /> 
      </div>
      <CreateCampaign />
    </div>
  );
};

export default CreateCampaignPage;
