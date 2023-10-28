"use client";
import ConnectButton from "@/app/_providers/ConnectButtonProvider";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import Image from "next/image";
import { Logo } from "@/public";
import Link from "next/link";
import router from "next/router";
type NavbarProps = {
  bg?: string;
  buttonText?: string;
  buttColor?: string;
  url?: string;
};

const Navbar: React.FC<NavbarProps> = ({
  bg = "bg-secondary-DarkForest",
  buttonText,
  buttColor,
  url,
}) => {
  const containerClasses = [bg].join(" ");

  const pathname = usePathname();

  return (
    <div className="w-full flex items-center justify-center fixed top-6 z-50">
      <div className="flex rounded-3xl gap-x-5 w-1/2 justify-center items-center text-lg text-primary-LightSKY font-bold bg-secondary-DarkForest flex-row">
        <Link href={"/"}>
          <Image
            className="h-[60px] w-[60px]"
            src={Logo}
            alt="logo"
            onClick={() => router.push("/gamification")}
          />
        </Link>
        <Link href={"/dapp-profile"}>Community</Link>
        <Link href={"/create-campaign"}>Campaign</Link>
        <Link href={"/user"}>Users</Link>
        <Link href={"/my-campaigns"}>Leaderboard</Link>
      </div>
      <div className="fixed right-6  flex items-center justify-center gap-x-4">
        {pathname !== "/" ? <ConnectButton /> : ""}
      </div>
    </div>
  );
};

export default Navbar;
