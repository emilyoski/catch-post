import { useState } from "react";
import BinNavigation from "./components/Bin-Navigation";
import RequestNavigation from "./components/Requests-Navigation";
import RequestDisplay from "./components/Request-Display";

export default function App() {
  const [selectedBin, setSelectedBin] = useState("");
  const [selectedRequest, setSelectedRequest] = useState("");

  function handleBinRequest(event) {
    const binPath = event.target.id;
    setSelectedBin(binPath);
    setSelectedRequest("");
  }

  function handleSelectedRequest(event) {
    const requestPath = event.target.id;
    setSelectedRequest(requestPath);
  }

  return (
    <main>
      <div className="m-9 flex">
        <BinNavigation handleClick={handleBinRequest} />
        <RequestNavigation
          selectedBin={selectedBin}
          handleClick={handleSelectedRequest}
        />
      </div>
      <div className="m-9 flex">
        <RequestDisplay
          selectedBin={selectedBin}
          selectedRequest={selectedRequest}
        />
      </div>
    </main>
  );
}
