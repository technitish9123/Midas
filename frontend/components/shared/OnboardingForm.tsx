"use client";
import React, { useState } from "react";
import { db } from "@/firebase/firebase";
import { UserData } from "@/types/interfaces";
import { collection, doc, setDoc, getDoc } from "firebase/firestore";
import { useAccount } from "wagmi";
import { useRouter } from "next/navigation";

const OnboardingForm: React.FC = () => {
  const [name, setName] = useState("");
  const [userSize, setUserSize] = useState("");
  const [otherDetails, setOtherDetails] = useState("");
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();
  const dappRef = collection(db, "Dapp");
  const { address } = useAccount();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !userSize) {
      setError("Name and User Size are required.");
      return;
    }

    const userData: UserData = {
      name,
      userSize,
      otherDetails,
      address: address as string,
    };

    try {
      await setDoc(doc(dappRef, address), userData);

      const docRef = doc(db, "Dapp", address as string);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        router.push("/dapp-profile");
      } else {
        setError("Unexpected error: Document not found after creation.");
      }

      // Clear the form
      setName("");
      setUserSize("");
      setOtherDetails("");
    } catch (error) {
      console.error("Error setting document:", error);
      setError("An error occurred while saving the data. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-primary-LightAzalea w-full">
      <form
        onSubmit={handleSubmit}
        className="bg-secondary-BLACKWOOD p-8 rounded-xl shadow-xl  w-[30vw] space-y-4 gap-y-12"
      >
        <h1 className="text-2xl font-bold mb-4 text-primary-LightSKY">
          Onboarding Form
        </h1>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <div className="flex flex-col space-y-2">
          <label className="font-medium text-primary-LightSKY">Name:</label>
          <input
            type="text"
            placeholder="Enter the name of your community"
            className="p-2 border rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="font-medium text-primary-LightSKY">
            Community Size:
          </label>
          <select
            value={userSize}
            onChange={(e) => setUserSize(e.target.value)}
            className="p-2 border rounded"
            required
          >
            <option value="">Select your community size</option>
            <option value="0-10">0-10</option>
            <option value="10-50">10-50</option>
            <option value="50+">50+</option>
          </select>
        </div>

        <div className="flex flex-col space-y-2">
          <label className="font-medium text-primary-LightSKY">
            Description:
          </label>
          <input
            type="text"
            placeholder="Enter Group Description"
            className="p-2 border rounded"
            value={otherDetails}
            onChange={(e) => setOtherDetails(e.target.value)}
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-primary-LightForest hover:bg-secondary-DarkAzalea hover:text-white text-lg font-semibold text-secondary-DarkForest py-2 px-4 rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default OnboardingForm;
