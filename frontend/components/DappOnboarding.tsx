"use client";
import OnboardingForm from "@/components/shared/OnboardingForm";
import React from "react";
import { useAccount } from "wagmi";

type Props = {};

const DappOnboarding = (props: Props) => {
  const { isConnected } = useAccount();

  return (
    <div className="flex w-full justify-center items-center ">
      {isConnected ? (
        <div className="bg-primary-LightAzalea flex h-full rounded-2xl py-8 px-4">
          <OnboardingForm />
        </div>
      ) : (
        // "Please connect your wallet"
        <div>
          <p className="flex w-full items-center justify-center text-5xl font-extrabold text-secondary-DarkSky pb-16">
            Please connect your wallet
          </p>
        </div>
      )}
    </div>
  );
};

export default DappOnboarding;
