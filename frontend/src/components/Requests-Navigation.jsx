import Request from "./Request";
// import { useState, useEffect } from "react";
import axios from "axios";

export default function RequestNavigation({ selectedBin, handleClick }) {
  // const [requests, setRequests] = useState([]);

  const requests = [
    {
      path: "mysite.com/39023",
      timestamp: "09-10-2322",
      method: "GET",
      ui_id: 1,
    },
    {
      path: "mysite.com/39024",
      timestamp: "09-10-2322",
      method: "GET",
      ui_id: 2,
    },
    {
      path: "mysite.com/39025",
      timestamp: "09-10-2322",
      method: "POST",
      ui_id: 3,
    },
  ];

  // useEffect(() => {
  //   const getRequests = async () => {
  //     const response = await axios.get(`api/bins/${selectedBin}/requests`);
  //     setRequests(response.data);
  //   };

  //   getRequests();
  // }, [selectedBin]);

  return (
    <div className="request column">
      <h1 className="request-title">Requests</h1>
      <ul>
        {requests.map(({ method, path, timestamp, ui_id }, idx) => {
          return (
            <li key={idx}>
              <Request
                ui_id={ui_id}
                path={path}
                method={method}
                timestamp={timestamp}
                handleClick={handleClick}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
