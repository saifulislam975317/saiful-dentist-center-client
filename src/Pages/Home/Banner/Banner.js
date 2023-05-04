import React from "react";
import img from "../../../assets/images/pictures/banner-3.jpg";
import background from "../../../assets/images/bg.png";
import "./Banner.css";
import PrimaryButton from "../../../PrimaryButton/PrimaryButton";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      style={{ backgroundImage: `url(${background})` }}
      className="hero banner"
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={img} className="lg:w-1/2 rounded-lg shadow-2xl" alt="" />
        <div>
          <h1 className="text-5xl font-bold text-green-400">
            Your New Smile Starts Here
          </h1>
          <p className="py-6">
            Welcome to our SAIFUL Dental hospital, where we provide exceptional
            dental care to patients of all ages. Our highly trained team
            utilizes cutting-edge technology to ensure the best possible
            results. Whether you need a routine check-up, a complex procedure,
            or anything in between, we will work with you to create a
            personalized treatment plan. Our goal is to help you achieve optimal
            oral health and a confident, beautiful smile. Book your appointment
            today and experience the difference in dental care at our hospital.
          </p>
          <Link to="/appointment">
            <PrimaryButton>Get Appointment</PrimaryButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
