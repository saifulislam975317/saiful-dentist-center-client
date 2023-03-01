import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import ConfirmModal from "../../Shared/ConfirmModal/ConfirmModal";
import Loading from "../../Shared/Loading/Loading";

const ManageDoctors = () => {
  const [confirmDelete, setConfirmDelete] = useState(null);
  const cancelModal = () => {
    setConfirmDelete(null);
  };

  const {
    data: doctors,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      try {
        const res = await fetch(
          "https://saiful-dentist-center-server.vercel.app/doctors",
          {
            headers: {
              authorization: `bearer ${localStorage.getItem("access-token")}`,
            },
          }
        );
        const data = await res.json();
        return data;
      } catch (error) {}
    },
  });

  const handleDeleteDoctor = (doctor) => {
    fetch(
      `https://saiful-dentist-center-server.vercel.app/doctors/${doctor._id}`,
      {
        method: "DELETE",
        headers: {
          authorization: `bearer ${localStorage.getItem("access-token")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          toast.success(`Doctor ${doctor.name} deleted successfully`);
        }
      });
  };
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h1 className="text-3xl mb-10">Manage Doctors</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>SL No.</th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Email</th>
              <th>Specialty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors &&
              doctors?.map((doctor, i) => (
                <tr key={doctor._id} className="hover">
                  <th>{i + 1}</th>
                  <td>
                    <div className="avatar">
                      <div className="w-12 rounded-full">
                        <img src={doctor.image} alt="/" />
                      </div>
                    </div>
                  </td>
                  <td>{doctor.name}</td>
                  <td>{doctor.email}</td>
                  <td>{doctor.specialty}</td>
                  <td>
                    <label
                      onClick={() => setConfirmDelete(doctor)}
                      htmlFor="confirm-modal"
                      className="btn btn-sm btn-error"
                    >
                      Delete
                    </label>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {confirmDelete && (
        <ConfirmModal
          cancelModal={cancelModal}
          handleDeleteDoctor={handleDeleteDoctor}
          doctorInfo={confirmDelete}
        ></ConfirmModal>
      )}
    </div>
  );
};

export default ManageDoctors;
