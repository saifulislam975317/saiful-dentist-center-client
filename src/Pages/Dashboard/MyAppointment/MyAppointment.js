import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const MyAppointment = () => {
  const { user } = useContext(AuthContext);
  console.log("my appointment", user.email);

  const url = `https://saiful-dentist-center-server.vercel.app/bookings?email=${user?.email}`;

  const { data: bookings = [], refetch } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("access-token")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });
  refetch();

  return (
    <div>
      <h1 className="text-3xl mb-10">My Appointment</h1>
      <div className="overflow-x-auto ">
        <table className="table    w-full">
          <thead>
            <tr>
              <th>SL No.</th>
              <th>Patient Name</th>
              <th>Service Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {bookings &&
              bookings?.map((booking, i) => (
                <tr key={booking._id} className="hover">
                  <th>{i + 1}</th>
                  <td>{booking.patientName}</td>
                  <td>{booking.serviceName}</td>
                  <td>{booking.appointmentDate}</td>
                  <td>{booking.time}</td>
                  {booking.price && !booking.paid && (
                    <Link to={`/dashboard/payment/${booking._id}`}>
                      <button className="btn btn-primary btn-sm">Pay</button>
                    </Link>
                  )}
                  {booking.price && booking.paid && (
                    <span className="text-green-500">paid</span>
                  )}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
