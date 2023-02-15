import React, { useEffect, useState } from "react";
import BookingModal from "../BookingModal/BookingModal";
import AppointmentOption from "./AppointmentOption";

const AppointmentOptions = ({ selectedDate }) => {
  const [appointmentOptions, setAppointmentOptions] = useState([]);
  const [bookingAppointment, setBookingAppointment] = useState(null);

  useEffect(() => {
    fetch("appointmentOptions.json")
      .then((res) => res.json())
      .then((data) => setAppointmentOptions(data));
  }, []);
  return (
    <section>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-20">
        {appointmentOptions.map((option) => (
          <AppointmentOption
            key={option._id}
            option={option}
            setBookingAppointment={setBookingAppointment}
          ></AppointmentOption>
        ))}
        {bookingAppointment && (
          <BookingModal
            selectedDate={selectedDate}
            bookingAppointment={bookingAppointment}
            setBookingAppointment={setBookingAppointment}
          ></BookingModal>
        )}
      </div>
    </section>
  );
};

export default AppointmentOptions;
