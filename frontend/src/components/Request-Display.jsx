import { useState, useEffect } from "react";
import JSONPretty from "react-json-pretty";

export default function RequestDisplay({ selectedBin, selectedRequest }) {
  const [requestData, setRequestData] = useState({});

  useEffect(() => {
    const getRequest = async () => {
      const response = await fetch(
        `http://localhost:3000/api/bins/${selectedBin}/requests/${selectedRequest}`,
        {
          method: "get",
          // headers: new Headers({
          //   "ngrok-skip-browser-warning": "485737",
          // }),
        }
      );

      let data = await response.json();
      setRequestData(data);
    };

    if (selectedRequest) {
      getRequest();
    }
  }, [selectedRequest, selectedBin]);

  if (!selectedBin) {
    return <div>No bin selected</div>;
  }

  if (!selectedRequest) {
    return <div>No request selected</div>;
  }

  console.log(requestData);

  return (
    <div className="w-full p-4">
      <JSONPretty id="json-pretty" data={requestData}></JSONPretty>
    </div>
  );
}
