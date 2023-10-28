"use client";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase/firebase";
import { useAccount } from "wagmi";
import { ethers } from "ethers";
import { getRedPacketContract } from "@/helper/midas";

const CreateEnvelope: React.FC = () => {
  const { isConnected, address } = useAccount();

  // State variables
  const [tokenType, setTokenType] = useState("ETH");
  const [tokenAddress, setTokenAddress] = useState(
    "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
  );
  const [tokenAmount, setTokenAmount] = useState("1000000000000000000");
  const [total, setTotal] = useState("1");
  const [bonusType, setBonusType] = useState("0");
  const [password, setPassword] = useState("");
  const [conditionAddress, setConditionAddress] = useState(
    "0x0000000000000000000000000000000000000000"
  );
  const [isVisible, setIsVisible] = useState(false);
  const [value, setValue] = useState("1000000000000000000");

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
      setIsVisible(false); // Hide form if wallet is not connected
    }
  };
  const handleCreateEnvelope = async () => {
    const passcodeHash = {
      type: "BigNumber",
      hex: "0x1081e79538dff74e5b654de5af29293bf3360e15d4124c91cf077a064202d81f",
    };
    try {
      const redPacket = await getRedPacketContract();
      if (redPacket) {
        const tx = await redPacket.create(
          tokenAddress,
          {
            type: "BigNumber",
            hex: "0x2386f26fc10000",
          },
          1,
          0,
          {
            type: "BigNumber",
            hex: "0x2798ed9d408c3ea33a61138b5736f366fe6792772a2bfafa758363611747d0e4",
          },
          {
            type: "BigNumber",
            hex: "0x0000000000000000000000000000000000000000",
          },
          {
            value: {
              type: "BigNumber",
              hex: "0x2386f26fc10000",
            },
          }
        );

        console.log(tx);
      }
      console.log(redPacket);
    } catch (error) {
      console.log(error);
    }
  };

  const handleOpenEnvelope = async () => {
    const passcodeHash =
      "7466527175116458436231402327727563638391315652581621661486248406114688489503";
    try {
      const redPacket = await getRedPacketContract();
      const id = 3;
      const proof = [
        0x27934cd1a38e6ec0a80400193890f2efdb181fa1e80dd0510bb02fccb7e38592,
        0x139321c6424a248078128ddef66cf276ff6f5bfa258a64f05834041a58c766c8,
        0x2830582804bb2970aedd7219205c34ff523b273774e2cd5bd2081f7c017fd754,
        0x2a094176b40d1249399533125465dfc72d0e76d7c243b83a942f4e95461456dd,
        0x1a5b39ce7ac121d1e36fd1e5f234f440c7c93b4b25bad6bd7ded082801051b25,
        0x13ded6872376fddf6f16df8f94bd0c12206936a298e47358a7b1c8b905e333fd,
        0x04ba44d8a8d14294645c1e85907132e558d6d8d612e1cae38ef9553279eea3ca,
        0x15b62002d505cc955c79612a44c6b5833aa82261c3b53bec507702382081b193,
      ];
      if (redPacket) {
        const tx = await redPacket.open(2, proof);
        console.log(tx);
      }
      console.log(redPacket);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center w-full h-[90vh] px-6">
      <button onClick={handleCreateEnvelope}> testting</button>

      <div>
        <button className="btn btn-primary mb-3 " onClick={handleOpenEnvelope}>
          oprn Envelop
        </button>
      </div>
      <div className="p-6 bg-primary-LightForest rounded-xl shadow-md">
        <button className="btn btn-primary mb-3" onClick={checkFirestore}>
          Create Envelop
        </button>

        {isVisible && isConnected ? (
          <form onSubmit={handleCreateEnvelope}>
            {/* Token Type */}
            <div className="mb-3">
              <label className="form-label">Bonus:</label>
              {/* ETH Option */}
              <div className="form-check">
                <label className="form-check-label">
                  <input
                    type="radio"
                    name="tokenType"
                    value="ETH"
                    checked={tokenType === "ETH"}
                    onChange={() => setTokenType("ETH")}
                  />
                  ETH
                </label>
              </div>
              {/* ERC20 Option */}
              <div className="form-check">
                <label className="form-check-label">
                  <input
                    type="radio"
                    name="tokenType"
                    value="ERC"
                    checked={tokenType === "ERC"}
                    onChange={() => setTokenType("ERC")}
                  />
                  ERC20
                </label>
              </div>
            </div>

            {/* Token Address */}
            <div className="mb-3 ms-4">
              <label htmlFor="bonus-token" className="form-label">
                Token Address:
              </label>
              <div className="input-group">
                <input
                  id="bonus-token"
                  type="text"
                  className="form-control"
                  placeholder="0x"
                  value={tokenAddress}
                  onChange={(e) => setTokenAddress(e.target.value)}
                  disabled={tokenType === "ETH"}
                />
                <button
                  className="btn btn-outline-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  disabled={tokenType === "ETH"}
                >
                  Token
                </button>
                {/* Dropdown menu for popular tokens */}
              </div>
              <div className="form-text">The token you want to send.</div>
            </div>

            {/* Bonus Amount */}
            <div className="mb-3">
              <label htmlFor="bonus-amount" className="form-label">
                Bonus Amount:
              </label>
              <input
                id="bonus-amount"
                type="text"
                className="form-control"
                value={tokenAmount}
                onChange={(e) => setTokenAmount(e.target.value)}
              />
              <div className="form-text">
                The amount of bonus you want to send.
              </div>
            </div>

            {/* Max Participates */}
            <div className="mb-3">
              <label htmlFor="max-participates" className="form-label">
                Max Participates:
              </label>
              <input
                id="max-participates"
                type="number"
                min="1"
                max="100000"
                className="form-control"
                value={total}
                // onChange={(e) => setTotal(Number(e.target.value))}
              />
              <div className="form-text">
                The max participates who can get the bonus.
              </div>
            </div>

            {/* Bonus Mode */}
            <div className="mb-3">
              <label className="form-label">Bonus Mode:</label>
              <select
                className="form-select"
                value={bonusType}
                onChange={(e) => setBonusType(e.target.value)}
              >
                <option value="0">Random Bonus</option>
                <option value="1">Same Bonus</option>
              </select>
              <div className="form-text">
                Random means every participate will get different bonus, and
                same means every participate will get the same bonus.
              </div>
            </div>

            {/* Password */}
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password:
              </label>
              <input
                id="password"
                type="text"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="form-text">
                A password for this envelope. Please remember it.
              </div>
            </div>

            {/* Other necessary inputs and the submit button */}
            <button type="submit" className="btn btn-primary">
              Create Envelope
            </button>
          </form>
        ) : !isConnected ? (
          <p>
            Please connect your wallet and ensure your address exists in
            Firestore.
          </p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default CreateEnvelope;
