import React, { useState } from "react";
import AppoinmentBanner from "../AppoinmentBanner/AppoinmentBanner";
import AvailableAppointment from "../AvailableAppointment/AvailableAppointment";

const Appoinment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <div>
      <AppoinmentBanner
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <AvailableAppointment
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
    </div>
  );
};

export default Appoinment;
