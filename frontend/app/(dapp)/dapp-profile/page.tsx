"use client";
import DappProfile from "@/components/DappProfile";
import CreateUserTest from "@/components/PushCreateUser";
import UserDataUpload from "@/components/userDataUpload";
import { useAccount } from "wagmi";
import Image from "next/image";
import { Walletconnect } from "@/public";

const DappProfilePage = () => {
  const { isConnected, address } = useAccount();

  return (
    <div className="px-14 flex w-full flex-col min-h-[100vh] pt-36 pb-12">
      {isConnected ? (
        <>
          <DappProfile />
          <CreateUserTest />
          <UserDataUpload />
        </>
      ) : (
        <div className="flex w-full justify-center flex-col">
          <div className="text-secondary-DarkForest flex w-full justify-end py-64 text-5xl font-bold z-10">
            Please connect your wallet{" "}
          </div>

          <Image
            src={Walletconnect}
            alt="image"
            width={1000}
            height={400}
            className=" fixed top-40 rounded-2xl"
          />
        </div>
      )}
    </div>
  );
};

export default DappProfilePage;
