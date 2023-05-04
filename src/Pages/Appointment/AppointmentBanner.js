import banner from "../../assets/images/pictures/b-5.jpg";
import { DayPicker } from "react-day-picker";
import bgImage from "../../assets/images/bg.png";

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
  return (
    <header
      className="bg-cover  bg-center my-24 "
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={banner}
            alt="doctor chair"
            className="lg:w-[35%] rounded-lg shadow-2xl"
          />
          <div className="mr-32">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
            ></DayPicker>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppointmentBanner;
