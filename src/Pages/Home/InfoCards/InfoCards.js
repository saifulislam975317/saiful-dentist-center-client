import React from "react";
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";
import InfoCard from "./InfoCard";

const InfoCards = () => {
  const InfoCardData = [
    {
      id: 1,
      icon: clock,
      name: "Opening Hours",
      title: "9.00 AM to 5.00 PM Everyday",
      bgColor: "bg-gradient-to-r from-primary to-secondary",
    },
    {
      id: 2,
      icon: marker,
      name: "Visit our location",
      title: "Mirpur-1, Tolarbag,Dhaka-1216",
      bgColor: "bg-accent",
    },
    {
      id: 3,
      icon: phone,
      name: "Contact us Now",
      title: +8800123456789,
      bgColor: "bg-gradient-to-r from-secondary to-primary",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {InfoCardData.map((card) => (
        <InfoCard key={card.id} card={card}></InfoCard>
      ))}
    </div>
  );
};

export default InfoCards;
