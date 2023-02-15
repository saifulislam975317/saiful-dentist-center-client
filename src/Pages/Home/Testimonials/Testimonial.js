import React from "react";

const Testimonial = ({ review }) => {
  const { name, patentReview, location, icon } = review;
  return (
    <div className="card  shadow-xl">
      <div className="card-body">
        <p>{patentReview}</p>
        <div className="flex items-center mt-5">
          <div className="avatar mr-5">
            <div className="w-16  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={icon} alt="" />
            </div>
          </div>
          <div>
            <h2 className="card-title">{name}</h2>
            <h3 className="text-xl">{location}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
