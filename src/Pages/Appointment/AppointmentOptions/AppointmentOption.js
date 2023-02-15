import React from "react";

const AppointmentOption = ({ option, setBookingAppointment }) => {
  const { name, slots } = option;
  return (
    <div className="card mt-5 shadow-xl">
      <div className="card-body text-center">
        <h2 className="text-2xl text-secondary">{name}</h2>
        <p>{slots.length > 0 ? slots[0] : "Try another date"}</p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </p>
        <div className="card-actions justify-center">
          <label
            onClick={() => setBookingAppointment(option)}
            htmlFor="booking-modal"
            disabled={slots.length === 0}
            className="btn btn-primary text-white"
          >
            BOOK APPOINTMENT
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;
