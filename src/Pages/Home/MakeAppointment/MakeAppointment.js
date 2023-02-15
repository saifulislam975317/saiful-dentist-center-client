import React from "react";
import doctor from "../../../assets/images/doctor.png";
import appointment from "../../../assets/images/appointment.png";
import PrimaryButton from "../../../PrimaryButton/PrimaryButton";

const MakeAppointment = () => {
  return (
    <section
      style={{ background: `url(${appointment})` }}
      className="mt-24 text-white h-[496px]"
    >
      <div className="hero  ">
        <div className="hero-content flex-col lg:flex-row">
          <img
            className="rounded-lg hidden md:block lg:block w-1/2 -mt-36"
            src={doctor}
            alt=""
          />
          <div>
            <h2 className="text-xl font-bold text-secondary">Appointment</h2>
            <h1 className="text-5xl font-bold">Make an appointment Today</h1>
            <p className="py-6">
              A dental appointment at a hospital is essential for maintaining
              good oral health. The dentist will examine teeth, gums, and mouth,
              take X-rays, or perform a cleaning. Be open about symptoms and ask
              questions. Take control of your oral health and advocate for
              yourself. Good dental health is a crucial aspect of overall
              well-being.
            </p>
            <PrimaryButton>Get Started</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
