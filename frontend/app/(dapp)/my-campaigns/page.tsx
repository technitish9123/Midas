// import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";
import Table from "@/components/shared/table";

export default function Home() {
  const TABLE_HEAD = ["Name", "Address", "Score",];
  const TABLE_ROWS = [
    {
      name: "John Michael",
      job: "0x4AaEddfb58a9E3f9fA4e0513D6C6A31C5Ae0cE4F",
      date: "140",
    },
    {
      name: "Alexa Liras",
      job: "0x9bB334b44eF1aD5d7043C4165a4939C2c0F5376a",
      date: "50",
    },
    {
      name: "Laurent Perrier",
      job: "0xE1bA458aD12cF3FbC4c2b7D89f85BcE1902A4fEc",
      date: "38",
    },
    {
      name: "Michael Levi",
      job: "0x7cD93E17b4E64Df90D7C5a80c8F6A69D527a45e9",
      date: "35",
    },
    {
      name: "Richard Gran",
      job: "0x3F75D98139b672CC5aCb7f04732A6EF5E6B58AaD7",
      date: "25",
    },
  ];

  return (
    <main className="flex flex-col items-center w-full h-full justify-between p-24 gap-y-20">
      <div className="bg-inherit text-5xl font-extrabold text-secondary-BLACKWOOD w-full flex justify-between leading-tight">
        Manage your campaign and view leaderboard
      </div>
      <div className="bg-secondary-DarkAzalea flex-col p-16 rounded-3xl  my-5 w-full flex items-center justify-between">
        <table className="min-w-full bg-primary-LightSKY table-auto">
          <thead className="bg-secondary-DarkSky text-primary-LightSKY">
          <tr>
              {TABLE_HEAD.map((header, index) => (
                <th key={index} className="py-2 px-4 border">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
          {TABLE_ROWS.map((row, rowIndex) => (
              <tr key={rowIndex} className={rowIndex % 2 === 0 ? "bg-primary-LightSKY" : ""}>
                {Object.values(row).map((value, valueIndex) => (
                  <td key={valueIndex} className="py-2 px-4 border">
                    {value}
                  </td>
                ))}
              </tr>
          ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
