import Request from "./Request";
import { useState, useEffect } from "react";
import axios from "axios";

export default function RequestNavigation({ selectedBin, handleClick }) {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const getRequests = async () => {
      // const response = await axios.get(`/api/bins/${selectedBin}/requests`);
      // setRequests(response.data.requests);
      const response = await fetch(
        `http://localhost:3000/api/bins/${selectedBin}/requests`,
        {
          method: "get",
          // headers: new Headers({
          //   "ngrok-skip-browser-warning": "485737",
          // }),
        }
      );

      const data = await response.json();
      console.log(data.requests);
      setRequests(data.requests);
    };

    if (selectedBin) {
      getRequests();
    }
  }, [selectedBin]);

  async function handleDelete(event) {
    const ui_id = event.target.parentElement.id;
    // await axios.delete(`/api/bins/${selectedBin}/requests/${ui_id}`)
    // setRequests(requests.filter((request) => request.ui_id !== ui_id));

    await fetch(
      `http://localhost:3000/api/bins/${selectedBin}/requests/${ui_id}`,
      {
        method: "delete",
        // headers: new Headers({
        //   "ngrok-skip-browser-warning": "485737",
        // }),
      }
    );

    setRequests(requests.filter((request) => request.ui_id !== ui_id));
  }

  return (
    <div className="request column">
      <h1 className="request-title">Requests</h1>
      <ul>
        {requests.map(
          ({ http_method, http_path, time_of_request, ui_id }, idx) => {
            return (
              <li key={idx}>
                <Request
                  ui_id={ui_id}
                  path={http_path}
                  method={http_method}
                  timestamp={time_of_request}
                  handleClick={handleClick}
                  handleDelete={handleDelete}
                />
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
}
