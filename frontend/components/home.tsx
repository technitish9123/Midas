"use client";
import { HeroImage, Red, Community } from "@/public";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Props = {
  className?: string;
};

const Hero = (props: Props) => {
  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-18  top-0 z-0 px-24 py-16">
      {" "}
      <div
        className={`bg-inherit h-[70vh] text-8xl font-extrabold text-secondary-BLACKWOOD pt-24 w-full flex justify-between leading-tight ${props.className} flex-row `}
      >
        <div>
          Empower <br />
          Your <br />
          Community <br />
          <button
            className="rounded-xl bg-secondary-DarkForest w-52 text-xl flex py-3 my-4 text-center items-center justify-center text-primary-LightForest font-semibold"
            onClick={() => router.push("/get-started")}
          >
            Get Started
          </button>
        </div>
        <div className="h-1/2 flex rounded-3xl mx-12">
          <Image src={HeroImage} alt="Hero Image" />
        </div>
      </div>
      <div className="bg-secondary-DarkAzalea flex-col p-16 gap-y-12 rounded-3xl  my-2 w-full flex items-center justify-between h-full py-1">
        <div className=" rounded-3xl  my-1 h-[60vh] w-full flex items-center justify-between">
          <div className="bg-[#FFD0BE] w-1/3 flex rounded-3xl ml-20 mx-12 h-5/6">
            <Image src={Red} alt="Hero Image" />
          </div>
          <div
            className={`font-extrabold w-1/3 text-primary-LightAzalea text-7xl leading-tight ${props.className}`}
          >
            Send <br />
            Surprises <br />
            & <br />
            More <br />
            <br />
          </div>
        </div>
        <div className="rounded-3xl my-1 h-full w-full p-20  flex items-center justify-end">
          <Image className="rounded-3xl" src={Community} alt="comm" />
        </div>
      </div>
      <div
        className={`m-20 px-80 ${props.className} text-center gap-x-12 flex-row font-extrabold text-primary-LightSKY bg-secondary-DarkSky rounded-3xl h-[7vh] flex justify-center items-center`}
      >
        Midas &#169; 2023 <br />
        Built in Unfold2023
      </div>
    </main>
  );
};

export default Hero;
