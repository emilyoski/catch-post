import { Fragment } from "react";
import CustomButton from "./Button";

export default function Request({
  method,
  timestamp,
  ui_id,
  handleClick,
  handleDelete,
}) {
  return (
    <Fragment>
      <div className="flex min-w-0 gap-x-4">
        <div className="min-w-0 flex-auto ml-4 text-sm font-semibold leading-6 text-white text-base">
          <div onClick={handleClick} id={ui_id}>
            Method: {method}; TimeStamp: {timestamp}
          </div>
        </div>
      </div>
      <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end  px-4">
        <CustomButton handleDelete={handleDelete} text="Delete" />
      </div>
    </Fragment>
  );
}
