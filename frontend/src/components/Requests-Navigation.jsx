import Request from "./Request";
import { useState, useEffect } from "react";

export default function RequestNavigation({ selectedBin, handleClick }) {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const getRequests = async () => {
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

  function generateHandleDelete(ui_id) {
    return async () => {
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
    };
  }

  return (
    <div className="w-1/2 p-4 divide-y divide-gray-200 overflow-hidden rounded-lg bg-teal-800 shadow ml-4">
      <div className="px-4 py-5 sm:px-10 text-2xl">
        <h1 className="">Requests for: {selectedBin}</h1>
      </div>
      <div className="px-4 py-5 sm:p-6">
        <ul role="list" className="divide-y divide-gray-800">
          {requests.map(
            ({ http_method, http_path, time_of_request, ui_id }, idx) => {
              return (
                <li
                  key={idx}
                  className="flex justify-between gap-x-6 py-5 hover:bg-teal-700"
                >
                  <Request
                    ui_id={ui_id}
                    path={http_path}
                    method={http_method}
                    timestamp={time_of_request}
                    handleClick={handleClick}
                    handleDelete={generateHandleDelete(ui_id)}
                  />
                </li>
              );
            }
          )}
        </ul>
      </div>
    </div>
  );
}
