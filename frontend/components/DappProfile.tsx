"use client";
import React, { useState, useEffect } from "react";
import { db } from "@/firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useAccount } from "wagmi";
import Loader from "./shared/Loader";

interface DappData {
  name: string;
  userSize: string;
  otherDetails: string;
  address: string;
}

const DappProfile: React.FC = () => {
  const { address } = useAccount();
  const [DappData, setDappData] = useState<DappData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchDappData = async () => {
    try {
      if (address) {
        setIsLoading(true);
        const getdocref = doc(db, "Dapp", address as string);
        const docSnap = await getDoc(getdocref);
        if (docSnap.exists()) {
          const data = docSnap.data() as DappData;
          setDappData(data);
        } else {
          setDappData(null);
        }
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchDappData();
    }, 3000);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="mt-12">
      <h1 className="text-3xl text-secondary-BLACKWOOD font-bold mb-5">
        Your Dapp Details:
      </h1>
      {isLoading ? (
        <div>Loading...</div>
      ) : DappData ? (
        <div className=" flex w-full flex-col py-6">
          <h1 className="text-2xl font-bold text-secondary-BLACKWOOD">
            {DappData.name}
          </h1>
          <p className="text-xl font-semibold">
            User Size: {DappData?.userSize}
          </p>
          <p className="text-xl font-semibold">
            Other Details: {DappData?.otherDetails}
          </p>
          <p className="text-xl font-semibold">Address: {DappData?.address}</p>
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default DappProfile;
