"use client";
import React, { useState } from "react";

type Props = {};

const CreateCampaign: React.FC<Props> = () => {
  const [campaignType, setCampaignType] = useState<string>("");
  const [campaignName, setCampaignName] = useState<string>("");
  const [theme, setTheme] = useState<string>("");
  const [game, setGame] = useState<string>("");
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [isMaxCapacity, setIsMaxCapacity] = useState<boolean>(false);
  const [totalUser, setTotalUser] = useState<number | null>(null);
  const [premintDays, setPremintDays] = useState<number | null>(null);
  const [premintUsers, setPremintUsers] = useState<number | null>(null);
  const [totalPool, setTotalPool] = useState<any>();

  return (
    <div className="p-8 rounded-2xl bg-secondary-DarkLavender mt-34 w-1/3 text-primary-LightDandelion font-semibold text-lg">
      <h1 className="flex w-full items-center text-3xl pb-4 font-bold text-center justify-center">
        Create Campaign
      </h1>
      <div className="mb-4">
        <label>Type of Campaign?</label>
        <div>
          <input
            type="radio"
            name="campaignType"
            value="firstCome"
            onChange={(e) => {
              setCampaignType(e.target.value);
              setIsMaxCapacity(true);
            }}
          />
          First come first serve campaign
        </div>
        <div>
          <input
            type="radio"
            name="campaignType"
            value="timeBased"
            onChange={(e) => {
              setCampaignType(e.target.value);
              setIsMaxCapacity(false);
            }}
          />
          Time-Based game
        </div>
      </div>
      <div className="mb-4">
        <label>Campaign Name:</label>
        <input
          type="text"
          value={campaignName}
          onChange={(e) => setCampaignName(e.target.value)}
          className="p-2 w-full mt-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label>Campaign Theme:</label>
        <input
          type="text"
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          className="p-2 w-full mt-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label>Game:</label>
        <input
          type="text"
          value={game}
          onChange={(e) => setGame(e.target.value)}
          className="p-2 w-full mt-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label>Total Pool Reward:</label>
        <input
          type="number"
          onChange={(e) => setTotalPool(new Date(e.target.value))}
          className="p-2 w-full mt-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label>Campaign Start Date:</label>
        <input
          type="datetime-local"
          onChange={(e) => setStartDate(new Date(e.target.value))}
          className="p-2 w-full mt-2 border rounded"
        />
      </div>
      {isMaxCapacity && campaignType === "firstCome" && (
        <div className="mb-4">
          <label>Total Users:</label>
          <input
            type="number"
            value={totalUser || ""}
            onChange={(e) => setTotalUser(Number(e.target.value))}
            className="p-2 w-full mt-2 border rounded"
          />
        </div>
      )}
      {campaignType === "timeBased" && (
        <>
          <div className="mb-4">
            <label>Number of Users who can Premint:</label>
            <input
              type="number"
              value={premintUsers || ""}
              onChange={(e) => setPremintUsers(Number(e.target.value))}
              className="p-2 w-full mt-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label>Days of Premint:</label>
            <input
              type="number"
              value={premintDays || ""}
              onChange={(e) => setPremintDays(Number(e.target.value))}
              className="p-2 w-full mt-2 border rounded"
            />
          </div>
        </>
      )}
      <button className="px-4 py-2 bg-primary-LightSKY text-secondary-BLACKWOOD rounded-xl text-lg font-semibold">
        Submit
      </button>
    </div>
  );
};

export default CreateCampaign;
