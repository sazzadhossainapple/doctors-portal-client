import React from "react";
import chair from "../../../assets/images/chair.png";
import BgImage from "../../../assets/images/bg.png";
import { DayPicker } from "react-day-picker";

const AppoinmentBanner = ({ selectedDate, setSelectedDate }) => {
  return (
    <header>
      <div
        className="hero py-8 md:12 lg:py-20"
        style={{ backgroundImage: `url(${BgImage})` }}
      >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={chair} className=" lg:w-1/2 rounded-lg shadow-2xl" alt="" />
          <div className="mr-6">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppoinmentBanner;
