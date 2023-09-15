import { useState, useEffect } from "react";
import axios from "axios";
import JSONPretty from "react-json-pretty";

export default function RequestDisplay({ selectedBin, selectedRequest }) {
  const [requestData, setRequestData] = useState({});
  // let requestData = {
  //   headers: { "user-agent": "bob's burgers" },
  //   method: "GET",
  //   clientIP: "524.651.35.25",
  //   body: { stuff: "this is important stuff" },
  //   path: "/burgersbybob",
  // };

  useEffect(() => {
    const getRequest = async () => {
      const response = await axios.get(
        `api/bins/${selectedBin}/requests/${selectedRequest}`
      );
      setRequestData(response.data);
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

  return (
    <div>
      <JSONPretty id="json-pretty" data={requestData}></JSONPretty>
    </div>
  );
}
