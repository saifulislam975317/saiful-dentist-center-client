import React from "react";
import img from "../../../../assets/images/treatment.png";
import PrimaryButton from "../../../../PrimaryButton/PrimaryButton";
const ExceptionalCare = () => {
  return (
    <div className="hero mt-24">
      <div className="hero-content flex-col lg:flex-row ">
        <img src={img} className="lg:w-2/5 rounded-lg shadow-2xl" alt="" />
        <div className="ml-20">
          <h1 className="text-5xl font-bold">
            Exceptional Dental Care, on Your Terms
          </h1>
          <p className="py-6">
            Exceptional dental care is all about providing personalized and
            high-quality services to ensure that each patient has a healthy and
            radiant smile. This involves using advanced technology, expert
            dentists, and a gentle touch to provide comprehensive dental
            services. Our commitment to our patients means that we are dedicated
            to making sure that their unique dental needs are met with the
            utmost care and professionalism. From routine checkups to complex
            procedures, we have the expertise and technology to help you achieve
            and maintain a healthy and beautiful smile.
          </p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default ExceptionalCare;
