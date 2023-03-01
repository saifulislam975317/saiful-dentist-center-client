import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React, { useState } from "react";
import BookingModal from "../BookingModal/BookingModal";
import AppointmentOption from "./AppointmentOption";

const AppointmentOptions = ({ selectedDate }) => {
  const [bookingAppointment, setBookingAppointment] = useState(null);
  const date = format(selectedDate, "PP");

  const { data: appointmentOptions = [], refetch } = useQuery({
    queryKey: ["appointmentOptions", date],
    queryFn: async () => {
      const res = await fetch(
        `https://saiful-dentist-center-server.vercel.app/appointmentOptions?date=${date}`
      );
      const data = await res.json();
      return data;
    },
  });
  refetch();

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
            refetch={refetch}
          ></BookingModal>
        )}
      </div>
    </section>
  );
};

export default AppointmentOptions;
