import React, { useState } from "react";
import AppointmentBanner from "./AppointmentBanner";
import AppointmentOptions from "./AppointmentOptions/AppointmentOptions";
import AvailableService from "./AvailableService";

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <div>
      <AppointmentBanner
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      ></AppointmentBanner>
      <AvailableService selectedDate={selectedDate}></AvailableService>
      <AppointmentOptions selectedDate={selectedDate}></AppointmentOptions>
    </div>
  );
};

export default Appointment;
