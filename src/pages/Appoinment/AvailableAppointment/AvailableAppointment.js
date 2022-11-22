import React, { useState } from "react";
import { format } from "date-fns";
import AppointmentOption from "./AppointmentOption";
import BookingModal from "../BookingModal/BookingModal";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Shared/Loading/Loading";

const AvailableAppointment = ({ selectedDate, setSelectedDate }) => {
  const [treatment, setTreatment] = useState(null);

  const date = format(selectedDate, "PP");

  // const { data: appointmentOptions = [] } = useQuery({
  //   queryKey: ["appointmentOptions"],
  //   queryFn: () =>
  //     fetch("https://doctors-portal-server-sandy.vercel.app/appointmentOptions").then((res) =>
  //       res.json()
  //     ),
  // });
  const {
    data: appointmentOptions = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["appointmentOptions", date],
    queryFn: async () => {
      const res = await fetch(
        `https://doctors-portal-server-sandy.vercel.app/appointmentOptions?date=${date}`
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <section className="my-16 mx-5">
      <p className="text-center font-bold text-secondary mb-4">
        {` Available Appointment on ${format(selectedDate, "PP")}`}
      </p>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6">
        {appointmentOptions.map((option) => (
          <AppointmentOption
            key={option._id}
            appointmentOption={option}
            setTreatment={setTreatment}
          ></AppointmentOption>
        ))}
      </div>
      {treatment && (
        <BookingModal
          treatment={treatment}
          selectedDate={selectedDate}
          setTreatment={setTreatment}
          refetch={refetch}
        />
      )}
    </section>
  );
};

export default AvailableAppointment;
