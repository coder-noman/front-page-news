import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-base-100 w-full max-w-md shrink-0 shadow-2xl p-14">
        <div className="">
          <h2 className="text-2xl font-semibold text-center mb-8">
            LogIn your Account
          </h2>
          <fieldset className="fieldset text-base">
            <label className="label">Email</label>
            <input type="email" className="input w-full" placeholder="Email" />
            <label className="label">Password</label>
            <input
              type="password"
              className="input w-full"
              placeholder="Password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
            <p className="font-semibold text-center mt-3">
              Dont’t Have An Account ? <Link className="text-secondary" to="/auth/register">Register</Link>
            </p>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Login;
