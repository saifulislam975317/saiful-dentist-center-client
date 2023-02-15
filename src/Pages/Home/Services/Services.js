import React from "react";
import fluoride from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import whitening from "../../../assets/images/whitening.png";
import Service from "./Service";

const Services = () => {
  const servicesData = [
    {
      id: 1,
      img: fluoride,
      name: "Fluoride Treatment",
      desc: "Fluoride treatment helps to strengthen tooth enamel and prevent tooth decay by adding extra fluoride to the teeth to improve their resistance to acid attacks.",
    },
    {
      id: 2,
      img: cavity,
      name: "Cavity Filling",
      desc: "A cavity filling is a dental procedure that involves removing decay from a tooth and filling the area with a material, such as resin or metal, to restore its shape and function.",
    },
    {
      id: 3,
      img: whitening,
      name: "Teeth Whitening",
      desc: "Teeth whitening is a cosmetic dental procedure that involves lightening the color of natural teeth by removing external stains or discoloration.",
    },
  ];
  return (
    <div className="mt-24">
      <div className="text-center ">
        <h1 className="text-3xl text-primary font-bold">OUR SERVICES</h1>
        <h2 className="text-4xl mt-3">Services We Provide</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesData.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
