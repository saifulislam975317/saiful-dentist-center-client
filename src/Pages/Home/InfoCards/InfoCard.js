import React from "react";

const InfoCard = ({ card }) => {
  const { name, title, icon, bgColor } = card;
  return (
    <div className={`card p-6 text-white lg:card-side ${bgColor} shadow-xl`}>
      <figure>
        <img src={icon} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default InfoCard;
