import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import ConfarmationModal from "../../Shared/ConfarmationModal/ConfarmationModal";
import Loading from "../../Shared/Loading/Loading";

const ManageDoctor = () => {
  const [deletingDoctor, setDeletingDoctor] = useState(null);

  const closeModal = () => {
    setDeletingDoctor(null);
  };

  const {
    data: doctors = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      try {
        const res = await fetch(
          "https://doctors-portal-server-sandy.vercel.app/doctors",
          {
            headers: {
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        );
        const data = await res.json();

        return data;
      } catch (error) {}
    },
  });

  const handleDeleteAction = (doctor) => {
    fetch(
      `https://doctors-portal-server-sandy.vercel.app/doctors/${doctor._id}`,
      {
        method: "DELETE",
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          toast.success(`Doctor ${doctor.name} deleted successfully.`);
        }
      });
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h1 className="text-2xl">Manages Doctors:{doctors.length}</h1>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Email</th>
              <th>Specialty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, i) => (
              <tr key={doctor._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-24 rounded-full">
                      <img src={doctor?.image} alt="" />
                    </div>
                  </div>
                </td>
                <td>{doctor.name}</td>
                <td>{doctor.email}</td>
                <td>{doctor.specilty}</td>
                <td>
                  <label
                    onClick={() => setDeletingDoctor(doctor)}
                    htmlFor="confarmation-modal"
                    className="btn btn-xs btn-error"
                  >
                    Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deletingDoctor && (
        <ConfarmationModal
          title={`Are you sure want to delete?`}
          message={`If you delete ${deletingDoctor.name}. It can be undone`}
          closeModal={closeModal}
          successAction={handleDeleteAction}
          modalData={deletingDoctor}
          successButtonName="Delete"
        ></ConfarmationModal>
      )}
    </div>
  );
};

export default ManageDoctor;
