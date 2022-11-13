import React from "react";
import Banner from "../Banner/Banner";
import Exceptional from "../Exceptional/Exceptional";
import InfoCards from "../InfoCards/InfoCards";
import MakeAppoinment from "../MakeAppoinment/MakeAppoinment";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div className="mx-5">
      <Banner />
      <InfoCards />
      <Services />
      <Exceptional />
      <MakeAppoinment />
      <Testimonial />
    </div>
  );
};

export default Home;
