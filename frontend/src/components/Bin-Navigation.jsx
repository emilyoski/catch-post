import Bin from "./Bin";
import { useState, useEffect } from "react";
// import axios from "axios";

export default function BinNavigation({ handleClick }) {
  const [bins, setBins] = useState([]);

  async function createNewBin() {
    let response = await fetch(`https://buffalo-set-gull.ngrok-free.app/api`, {
      method: "post",
      headers: new Headers({
        "ngrok-skip-browser-warning": "485737",
      }),
    });
    let data = await response.json();
    console.log(response.data);
    setBins([...bins, { url_path: data.binUrl }]);
    // let response = await axios.post("/api");
    // setBins([...bins, {url_path: response.data.binUrl}]);
  }

  async function handleDelete(event) {
    const binUrl = event.target.parentElement.id;
    // await axios.delete(`/api/${binUrl}`)
    // setBins(bins.filter((bin) => bin.url_path !== binUrl));

    await fetch(`https://buffalo-set-gull.ngrok-free.app/api/${binUrl}`, {
      method: "delete",
      headers: new Headers({
        "ngrok-skip-browser-warning": "485737",
      }),
    });

    setBins(bins.filter((bin) => bin.url_path !== binUrl));
  }

  useEffect(() => {
    const getBins = async () => {
      const response = await fetch(
        "https://buffalo-set-gull.ngrok-free.app/api",
        {
          method: "get",
          headers: new Headers({
            "ngrok-skip-browser-warning": "485737",
          }),
        }
      );

      const data = await response.json();
      console.log(data.bin);
      setBins(data.bin);
      // const response = await axios.get("/api");
      // setBins(response.data.bin);
    };

    getBins();
  }, []);

  return (
    <div className="bin-column">
      <h1 className="bin-title">Bins</h1>
      <ul>
        {bins.map(({ url_path, time_creation }, idx) => {
          return (
            <li key={idx}>
              <Bin
                url={url_path}
                timestamp={time_creation}
                handleClick={handleClick}
                handleDelete={handleDelete}
              />
            </li>
          );
        })}
      </ul>
      <button onClick={createNewBin}>Create New Bin</button>
    </div>
  );
}
