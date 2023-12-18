import Bin from "./Bin";
import { useState, useEffect } from "react";
import LargeCustomButton from "./LargeButton";

export default function BinNavigation({ handleClick }) {
  const [bins, setBins] = useState([]);

  async function handleCreateNewBin() {
    console.log("trying to create new bin");
    let response = await fetch(`http://localhost:3000/api/`, {
      method: "post",
      // headers: new Headers({
      //   "ngrok-skip-browser-warning": "485737",
      // }),
    });
    let data = await response.json();
    setBins([...bins, { url_path: data.binUrl }]);
  }

  function generateHandleDelete(binUrl) {
    return async () => {
      await fetch(`http://localhost:3000/api/${binUrl}`, {
        method: "delete",
        // headers: new Headers({
        //   "ngrok-skip-browser-warning": "485737",
        // }),
      });

      setBins(bins.filter((bin) => bin.url_path !== binUrl));
    };
  }

  useEffect(() => {
    const getBins = async () => {
      const response = await fetch("http://localhost:3000/api/", {
        method: "get",
        // headers: new Headers({
        //   "ngrok-skip-browser-warning": "485737",
        // }),
      });

      const data = await response.json();
      setBins(data.bin);
    };

    getBins();
  }, []);

  return (
    <div className="w-1/2 p-4 divide-y divide-gray-200 overflow-hidden rounded-lg bg-teal-800 shadow ml-4">
      <div className="px-4 py-5 sm:px-10 text-4xl">
        <h1>Bins</h1>
      </div>
      <div className="px-4 py-5 sm:p-6">
        <ul role="list" className="divide-y divide-gray-800">
          {bins.map(({ url_path, time_creation }, idx) => {
            return (
              <li
                className="flex justify-between gap-x-6 py-5 hover:bg-teal-700"
                key={idx}
                onClick={handleClick}
              >
                <Bin
                  url={url_path}
                  timestamp={time_creation}
                  handleClick={handleClick}
                  handleDelete={generateHandleDelete(url_path)}
                />
              </li>
            );
          })}
        </ul>
        <LargeCustomButton
          handleCreateNewBin={handleCreateNewBin}
          text="New Bin"
        />
      </div>
    </div>
  );
}
