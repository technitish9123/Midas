"use client";
import React, { useEffect, useState } from "react";
import { db } from "@/firebase/firebase";
import { doc, setDoc, getDocs, collection } from "firebase/firestore";
import Papa from "papaparse";
import { useAccount } from "wagmi";

const UserDataUpload = () => {
  const { address } = useAccount();
  const [csvData, setCsvData] = useState<Array<any>>([]);
  const [tableData, setTableData] = useState<Array<any>>([]);
  const [fetchedData, setFetchedData] = useState<Array<any>>([]);
  const [isValidCsv, setIsValidCsv] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      Papa.parse(file, {
        complete: (result: any) => {
          if (
            result.data[0] &&
            "name" in result.data[0] &&
            "address" in result.data[0] &&
            "email" in result.data[0] &&
            "tiers" in result.data[0]
          ) {
            setCsvData(result.data);
            setIsValidCsv(true);
          } else {
            setIsValidCsv(false);
            alert(
              "Invalid CSV format. Make sure it contains columns: name, address, email, and tiers."
            );
          }
        },
        header: true,
      });
    }
  };

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      const dappRef = doc(db, "Dapp_Users", address as string);
      await setDoc(dappRef, { tableData });
      console.log("Data submitted to Firestore");
      setCsvData([]);
      setTableData([]);
    } catch (error) {
      console.error("Error submitting data to Firestore:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFetchData = async () => {
    const dataCollection = collection(db, "Dapp_Users");
    const dataSnapshot = await getDocs(dataCollection);
    const allData = dataSnapshot.docs.map((doc) => doc.data().tableData);
    setFetchedData(allData);
  };

  useEffect(() => {
    if (csvData.length) {
      setTableData(csvData);
    }
  }, [csvData]);

  return (
    <div className="p-4 md:p-8 flex w-full rounded-2xl mt-24 bg-secondary-DarkForest h-full flex-col items-center justify-center gap-y-4">
      <h1 className="text-4xl font-bold py-8 text-primary-LightForest ">
        {" "}
        Upload Your Community Details
      </h1>
      <input
        type="file"
        accept=".csv"
        onChange={handleFileUpload}
        className="mb-4 p-2 w-full md:w-1/2 border border-primary-LightForest rounded-2xl items-center  flex justify-center placeholder:text-primary-LightForest "
      />
      {isValidCsv && tableData.length > 0 && (
        <div className="overflow-x-auto rounded-xl border-neutral-50  ">
          <table className="min-w-full bg-primary-LightForest table-auto">
            <thead className="bg-gray-800 text-primary-LightForest font-semibold">
              <tr>
                {["name", "address", "email", "tiers"].map((key) => (
                  <th key={key} className="py-2 px-4 border">
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className={rowIndex % 2 === 0 ? "bg-gray-100" : ""}
                >
                  {["name", "address", "email", "tiers"].map((key) => (
                    <td key={key} className="py-2 px-4 border">
                      {row[key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <button
        onClick={handleSubmit}
        className="mt-4 bg-primary-LightLavender text-secondary-DarkLavender font-semibold py-2 px-4 rounded-xl w-48"
      >
        Submit
      </button>
      <button
        onClick={handleFetchData}
        className="mt-4 ml-4 bg-primary-LightAzalea text-secondary-DarkAzalea font-semibold  py-2 px-4 rounded-xl w-48"
      >
        Fetch Submitted Data
      </button>
      {fetchedData.length > 0 && (
        <div className="mt-4 overflow-x-auto rounded-xl">
          <table className="min-w-full bg-primary-LightForest table-auto">
            <thead className="bg-gray-800 text-white">
              <tr>
                {["name", "address", "email", "tiers"].map((key) => (
                  <th key={key} className="py-2 px-4 border">
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {fetchedData.map((dataSet, dataSetIndex) =>
                dataSet.map((row: any, rowIndex: any) => (
                  <tr
                    key={rowIndex}
                    className={rowIndex % 2 === 0 ? "bg-gray-100" : ""}
                  >
                    {["name", "address", "email", "tiers"].map((key) => (
                      <td key={key} className="py-2 px-4 border">
                        {row[key]}
                      </td>
                    ))}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default UserDataUpload;
