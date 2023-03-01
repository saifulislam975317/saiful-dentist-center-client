import { async } from "@firebase/util";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { json, useNavigate } from "react-router-dom";
import Loading from "../../../Shared/Loading/Loading";

const AddDoctor = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const imageBbKey = process.env.REACT_APP_imagebb;
  const navigate = useNavigate();

  const { data: specialties, isLoading } = useQuery({
    queryKey: "specialty",
    queryFn: async () => {
      const res = await fetch(
        "https://saiful-dentist-center-server.vercel.app/appointmentSpecialty"
      );
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Loading></Loading>;
  }
  const handleAddDoctor = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageBbKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          console.log(imgData.data.url);
          const doctorDoc = {
            name: data.name,
            email: data.email,
            image: imgData.data.url,
            specialty: data.specialty,
          };
          fetch("https://saiful-dentist-center-server.vercel.app/doctors", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("access-token")}`,
            },
            body: JSON.stringify(doctorDoc),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              toast.success(`${data.name} is successfully added`);
              navigate("/dashboard/manageDoctors");
            });
        }
      });
  };

  return (
    <div className="w-96">
      <h1 className="text-xl">Add a Doctor</h1>
      <form onSubmit={handleSubmit(handleAddDoctor)}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            placeholder="Enter your name"
            className="input input-bordered"
          />
          {errors.name && (
            <span className="text-red-600">{errors.name.message}</span>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            {...register("email", { required: true })}
            placeholder="Enter your email"
            className="input input-bordered"
          />
          {errors.email && (
            <span className="text-red-600">{errors.email.message}</span>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Select specialty</span>
          </label>

          <select
            {...register("specialty")}
            className="select select-bordered w-full "
          >
            {specialties.map((specialty) => (
              <option key={specialty._id} value={specialty.name}>
                {specialty.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo upload</span>
          </label>
          <input
            type="file"
            {...register("image", { required: "photo is required" })}
            placeholder="upload doctor photo"
            className="input input-bordered"
          />
          {errors.photo && (
            <span className="text-red-600">{errors.photo.message}</span>
          )}
        </div>
        <div className="form-control mt-6">
          <input
            className="btn btn-secondary text-white"
            type="submit"
            value="Add Doctor"
          />
        </div>
      </form>
    </div>
  );
};

export default AddDoctor;
