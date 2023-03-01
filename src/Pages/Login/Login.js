import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import image from "../../assets/login/login.svg";
import { AuthContext } from "../../contexts/AuthProvider";
import useToken from "../../hooks/useToken";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { logIn, googleSignIn, forgotPassword } = useContext(AuthContext);
  const [logInError, setLogInError] = useState("");
  const [loginUserEmail, setLoginUserEmail] = useState("");
  const [token] = useToken(loginUserEmail);
  const [email, setEmail] = useState("");

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  if (token) {
    navigate(from, { replace: true });
  }

  const handleLogin = (data) => {
    setLogInError("");

    logIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setLoginUserEmail(data.email);
      })
      .catch((error) => {
        setLogInError(error.message);
        console.error(error);
      });
  };

  const handleGoogleLogIn = () => {
    googleSignIn()
      .then((result) => {
        const googleUser = result.user;
        getUserToken(googleUser.email);
        console.log(googleUser);
      })
      .catch((error) => console.error(error));
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

  const handleForgotPassword = () => {
    if (!email) {
      alert("please input your email in input field.");
      return;
    }
    forgotPassword(email)
      .then(() => {
        alert(
          "password reset email has been sent your email. please check your email"
        );
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="hero ">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left mr-10 p-10">
          <img src={image} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl font-bold my-5 text-center ">Login</h1>
          <div className="card-body">
            <form onSubmit={handleSubmit(handleLogin)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  onBlur={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-600">{errors.email.message}</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "password should be at least 8 characters",
                    },
                  })}
                  placeholder="Enter your password"
                  className="input input-bordered"
                />
                {errors.password && (
                  <span className="text-red-600">
                    {errors.password.message}
                  </span>
                )}
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-accent text-white"
                  type="submit"
                  value="Login"
                />
                {logInError && (
                  <p className="text-red-600">Invalid email or password</p>
                )}
              </div>
            </form>
            <button
              onClick={handleForgotPassword}
              className=" text-orange-600 link w-2/5"
            >
              Forgot password?
            </button>
            <p>
              Dont't have an account?
              <Link className="btn-link text-secondary" to="/signup">
                Create a new account
              </Link>
            </p>
            <div className="divider">OR</div>
            <button
              onClick={handleGoogleLogIn}
              className="btn btn-primary w-full"
            >
              Continue with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
