import React from "react";
import Image from "../../../assets/images/treatment.png";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const Exceptional = () => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:w-3/4 mx-auto gap-16 my-24">
      <div>
        <img className="rounded-lg" src={Image} alt="" />
      </div>
      <div className=" flex items-center">
        <div>
          <h1 className="text-4xl font-bold text-[#3A4256]">
            Exceptional Dental Care, on Your Terms
          </h1>
          <p className="my-7">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <PrimaryButton> Get Started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Exceptional;
