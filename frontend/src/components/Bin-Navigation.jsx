import Bin from "./Bin";
// import { useState, useEffect } from "react";
// import axios from "axios";

export default function BinNavigation({ handleClick }) {
  // const [bins, setBins] = useState([]);
  // setBins([{ url: "mysite.com/39023", timestamp: "09-10-2322" }]);
  const bins = [
    { url: "mysite.com/39023", timestamp: "09-10-2322" },
    { url: "mysite.com/39024", timestamp: "09-10-2322" },
    { url: "mysite.com/39025", timestamp: "09-10-2322" },
  ];
  // useEffect(() => {
  //   const getBins = async () => {
  //     const response = await axios.get(
  //       "https://buffalo-set-gull.ngrok-free.app/api/binstmp"
  //     );
  //     // const response = await axios.get("api/bins/");
  //     setBins(response.data);
  //   };

  //   getBins();
  // }, []);

  return (
    <div className="bin-column">
      <h1 className="bin-title">Bins</h1>
      <ul>
        {bins.map(({ url, timestamp }, idx) => {
          return (
            <li key={idx}>
              <Bin url={url} timestamp={timestamp} handleClick={handleClick} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
