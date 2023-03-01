import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
  const booking = useLoaderData();
  const { serviceName, appointmentDate, time } = booking;

  return (
    <div className="p-10">
      <h1 className="text-3xl text-accent">Payment for {serviceName}</h1>
      <h2 className="text-xl">
        Appointment on {appointmentDate} at {time}
      </h2>
      <h2 className="text-3xl text-green-600 ">
        Payment by Visa Card,Debit Card,Master Card and so on.
      </h2>
      <div className="w-96 p-10">
        <Elements stripe={stripePromise}>
          <CheckoutForm booking={booking} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
