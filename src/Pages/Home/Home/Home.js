import React from "react";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import InfoCards from "../InfoCards/InfoCards";
import MakeAppointment from "../MakeAppointment/MakeAppointment";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";
import ExceptionalCare from "./ExceptionalCare/ExceptionalCare";

const Home = () => {
  return (
    <div className="mx-5">
      <Banner></Banner>
      <InfoCards></InfoCards>
      <Services></Services>
      <ExceptionalCare></ExceptionalCare>
      <MakeAppointment></MakeAppointment>
      <Testimonials></Testimonials>
      <Contact></Contact>
    </div>
  );
};

export default Home;
