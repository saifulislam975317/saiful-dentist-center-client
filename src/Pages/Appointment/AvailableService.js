import { format } from "date-fns";
import React from "react";

const AvailableService = ({ selectedDate }) => {
  return (
    <div className="text-center">
      <p className="text-2xl text-secondary font-bold">
        Available service on {format(selectedDate, "PP")}
      </p>
      <p className="text-lg">Please select a service</p>
    </div>
  );
};

export default AvailableService;
