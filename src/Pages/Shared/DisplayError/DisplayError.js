import React, { useContext } from "react";
import { useNavigate, useRouteError } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const DisplayError = () => {
  const error = useRouteError();
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/login");
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="text-center">
      <h1 className="text-2xl text-red-600">Something went wrong!</h1>
      <p className="text-red-600">{error.statusText || error.message}</p>
      <button onClick={handleLogOut} className=" btn btn-primary">
        Logout
      </button>
    </div>
  );
};

export default DisplayError;
