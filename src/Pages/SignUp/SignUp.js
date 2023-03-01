import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import image from "../../assets/login/login.svg";
import { AuthContext } from "../../contexts/AuthProvider";
import useToken from "../../hooks/useToken";

const SignUp = () => {
  const [errorEmail, setErrorEmail] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors: error },
  } = useForm();

  const { createUser, updateUser, googleSignIn } = useContext(AuthContext);

  const [createUserEmail, setCreateUserEmail] = useState("");

  const navigate = useNavigate();
  const [token] = useToken(createUserEmail);
  if (token) {
    navigate("/");
    window.location.reload();
  }

  const handleSignUp = (data) => {
    setErrorEmail("");
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("User created successfully");

        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then(() => {
            saveUser(data.name, data.email);
          })
          .catch((error) => console.error(error));
      })
      .catch((error) => {
        setErrorEmail(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const googleUser = result.user;

        saveUser(googleUser.displayName, googleUser.email);
        console.log("google user", googleUser.email, googleUser.displayName);
      })
      .catch((error) => console.error(error));
  };

  const saveUser = (name, email) => {
    const user = { name, email };

    fetch("https://saiful-dentist-center-server.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("new user", data);
        setCreateUserEmail(email);
        getUserToken(email);
      });
  };

  const getUserToken = (email) => {
    fetch(`https://saiful-dentist-center-server.vercel.app/jwt?email=${email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.accessToken) {
          localStorage.setItem("access-token", data.accessToken);
          navigate("/");
          window.location.reload();
        }
      });
  };

  return (
    <div className="hero ">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left mr-10 p-10">
          <img src={image} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl font-bold my-5 text-center ">Sign up</h1>
          <div className="card-body">
            <form onSubmit={handleSubmit(handleSignUp)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Enter Your Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: "Name is required" })}
                  placeholder="exp: Saiful Islam"
                  className="input input-bordered"
                />
                {error.name && (
                  <span className="text-red-600">{error.name.message}</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Enter Your Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", {
                    required: true,
                  })}
                  placeholder="exp: saiful.islam93@gmail.com"
                  className="input input-bordered"
                />
                {errorEmail && (
                  <span className="text-red-600">
                    This email already used. please try another email.
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Enter Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "password should be at least 8 characters",
                    },
                    pattern: {
                      value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                      message:
                        "Password must be Uppercase,lowercase, special characters, and numbers ",
                    },
                  })}
                  placeholder="************"
                  className="input input-bordered"
                />
                {error.password && (
                  <span className="text-red-600">{error.password.message}</span>
                )}
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-secondary text-white"
                  type="submit"
                  value="Sign up"
                />
              </div>
            </form>
            <p>
              Already have an account?
              <Link className="btn-link" to="/login">
                Please login
              </Link>
            </p>
            <div className="divider">OR</div>
            <button
              onClick={handleGoogleSignIn}
              className="btn btn-accent w-full"
            >
              Continue with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
