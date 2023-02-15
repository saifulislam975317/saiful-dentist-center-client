import React from "react";
import { Link } from "react-router-dom";
import image from "../../assets/login/login.svg";
const Login = () => {
  return (
    <div className="hero ">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left mr-10 p-10">
          <img src={image} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl font-bold my-5 text-center ">Login</h1>
          <div className="card-body">
            <form action="">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="/" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary text-white"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <p>
              Dont't have an account?
              <Link className="btn-link" to="/signup">
                Create new account
              </Link>
            </p>
            <div className="divider">OR</div>
            <button className="btn btn-accent w-full">
              Continue with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
