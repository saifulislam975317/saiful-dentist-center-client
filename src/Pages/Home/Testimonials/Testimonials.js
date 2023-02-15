import React from "react";
import quote from "../../../assets/icons/quote.svg";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.jpg";
import people3 from "../../../assets/images/people3.png";
import Testimonial from "./Testimonial";
const Testimonials = () => {
  const reviewsData = [
    {
      _id: 1,
      name: "Winson Herry",
      location: "California",
      patentReview:
        "Fantastic experience at the dental hospital. Clean, modern facilities and friendly, professional staff. Highly recommend for quality dental care. Exceptional care, friendly staff, and top-notch facilities. Highly recommend this dental hospital.",
      icon: people1,
    },
    {
      _id: 2,
      name: "Mr. Saiful Islam",
      location: "Dhaka",
      patentReview:
        "I recently visited this dental hospital and was thoroughly impressed by the level of care I received. The staff was friendly and knowledgeable, and the facilities were state-of-the-art. I would highly recommend this hospital to anyone in need of dental care.",
      icon: people2,
    },
    {
      _id: 3,
      name: "Amelia",
      location: "New York",
      patentReview:
        "The dental hospital exceeded my expectations. The staff was friendly, accommodating, and knowledgeable. The facilities were spotless and state-of-the-art. Overall, I had an excellent experience and would highly recommend this hospital to anyone in need of dental care.",
      icon: people3,
    },
  ];
  return (
    <section className="mt-10">
      <div className="flex justify-between">
        <div>
          <h1 className="text-3xl font-bold text-primary">Testimonial</h1>
          <h1 className="text-4xl">What Our Patients Says</h1>
        </div>
        <figure>
          <img className="w-24 lg:w-48" src={quote} alt="" />
        </figure>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviewsData.map((review) => (
          <Testimonial key={review._id} review={review}></Testimonial>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
