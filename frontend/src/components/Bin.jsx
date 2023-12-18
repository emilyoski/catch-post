import { Fragment } from "react";
import CustomButton from "./Button";

export default function Bin({ url, handleDelete }) {
  return (
    <Fragment>
      <div className="flex min-w-0 gap-x-4">
        <div className="min-w-0 flex-auto ml-4">
          <p
            className="text-sm font-semibold leading-6 text-white text-base "
            id={url}
          >
            {`${url}`}
          </p>
        </div>
      </div>
      <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end  px-4">
        <CustomButton handleDelete={handleDelete} text="Delete" />
      </div>
    </Fragment>
  );
}
