"use client";
import React, { useState } from "react";

interface Props {
  name: string;
}

const MyComponent: React.FC<Props> = ({ name }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="flex min-h-screen flex-row items-center justify-center p-24">
      <div className="bg-secondary-DarkForest flex justify-center items-center h-[60vh] w-[60vw] rounded-3xl p-8">
        <div
          style={{
            backgroundImage: "url(/y.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
          className={`bg-primary-LightForest text-3xl font-extrabold h-[40vh] w-[40vw] rounded-2xl flex justify-center items-end pb-4`}
        >
          <button className="bg-secondary-DarkForest text-2xl text-primary-LightForest rounded-2xl px-16 py-4">
            CLAIM
          </button>
        </div>
      </div>
    </main>
  );
};

export default MyComponent;
