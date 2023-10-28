"use client";
import { Red } from "@/public";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-row items-center justify-between p-24">
      <div className="w-1/2 flex justify-center items-center">
        <div className="bg-secondary-DarkLavender h-[50vh] rounded-3xl w-2/3">
          <div className="text-primary-LightLavender font-extrabold text-3xl flex justify-center items-center pt-8">
            JOIN COMMUNITY
          </div>
          <div className="ml-5">
            <div className="flex justify-center items-center mt-5 ml-4">
              <div className="text-primary-LightLavender font-extrabold text-xl flex justify-center mt-4">
                Chat ID
              </div>
              <input
                className="rounded-3xl border-2  bg-secondary-DarkLavender border-none outline-none text-primary-LightLavender px-8 font-extrabold text-xl flex justify-center mt-4"
                type="text"
                id="chatID"
                placeholder="Type Here ..."
                name="chatID"
              />
            </div>
            <div className="flex justify-center items-center">
              <div className="text-primary-LightLavender font-extrabold text-xl flex justify-center mt-4">
                Name
              </div>
              <input
                className="rounded-3xl bg-secondary-DarkLavender border-none outline-none text-primary-LightLavender px-8 font-extrabold text-xl flex justify-center mt-4"
                type="text"
                id="name"
                placeholder="John"
                name="name"
              />
            </div>
            <div className="flex justify-center items-center">
              <button className="rounded-3xl bg-primary-LightLavender text-secondary-DarkLavender font-extrabold text-2xl px-20 items-center  py-2 flex justify-center relative -bottom-20">
                Join
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 flex justify-center items-center">
        <div className="bg-secondary-DarkForest h-[50vh] rounded-3xl w-2/3 px-6 flex-col flex">
          <div className="text-primary-LightSKY font-extrabold text-3xl flex justify-center items-center pt-8">
            Claim Your Envelope
          </div>
          <div className="flex justify-center">
            <Image className="h-2/3 w-2/3 " src={Red} alt="" />
          </div>
          <div className="flex justify-center items-center gap-x-6 -mt-10 ">
            <button className="rounded-3xl text-secondary-DarkDandelion w-1/2 h-[60px] bg-primary-LIGHTSUNFLOWER font-extrabold text-xl px-10 flex justify-center items-center mb-8">
              Claim
            </button>
            <button
              className="rounded-3xl text-secondary-DarkDandelion w-1/2 h-[60px]  bg-primary-LIGHTSUNFLOWER font-extrabold text-xl px-10 flex justify-center items-center mb-8"
              onClick={() => router.push("/gamification")}
            >
              Increase Chances
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
