import { format } from "date-fns";
import React from "react";

const BookingModal = ({
  bookingAppointment,
  setBookingAppointment,
  selectedDate,
}) => {
  const { name, slots } = bookingAppointment;
  const date = format(selectedDate, "PP");

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const name = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const booking = {
      appointmentDate: date,
      serviceName: bookingAppointment.name,
      patientName: name,
      slot,
      email,
      phone,
    };
    console.log(booking);
    setBookingAppointment(null);
  };
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form
            onSubmit={handleBooking}
            className="grid gap-2 grid-cols-1 mt-5"
          >
            <input
              type="text"
              disabled
              value={date}
              className="input input-bordered w-full "
            />
            <select name="slot" className="select select-bordered w-full">
              {slots.map((slot, i) => (
                <option value={slot} key={i}>
                  {slot}
                </option>
              ))}
            </select>

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered w-full "
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered w-full "
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Enter your phone"
              className="input input-bordered w-full "
              required
            />

            <br />
            <input
              className="btn btn-accent w-full"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
