import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const navigate = useNavigate()
  const location = useLocation();
  const { userLogin } = use(AuthContext);
  const [error, setError] = useState("")
  const handleLogInSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    userLogin(email, password)
      .then(() => {
        navigate(`${location.state ? location.state : "/"}`)
      })
      .catch((err) => {
        setError(err.code)
      });
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-base-100 w-full max-w-md shrink-0 shadow-2xl p-14">
        <div className="">
          <h2 className="text-2xl font-semibold text-center mb-8">
            LogIn your Account
          </h2>
          <form onSubmit={handleLogInSubmit} className="fieldset text-base">
            <label className="label">Email</label>
            <input
              name="email"
              required
              type="email"
              className="input w-full"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <input
              type="password"
              className="input w-full"
              placeholder="Password"
              name="password"
              required
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>

            {
              error && <p className="text-red-600 text-xs">{error}</p>
            }
            <button type="submit" className="btn btn-neutral mt-4">
              Login
            </button>
            <p className="font-semibold text-center mt-3">
              Dont’t Have An Account ?{" "}
              <Link className="text-secondary" to="/auth/register">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
