import React, { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const navigate = useNavigate();
  const { createUser, setUser, updateUser } = use(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    createUser(email, password).then((res) => {
      const user = res.user;
      updateUser({ displayName: name, photoURL: photo })
        .then(() => {
          setUser({ ...user, displayName: name, photoURL: photo });
          navigate("/");
        })
        .catch(() => {
          setUser(user);
        });
    });
  };

  return (
    <div className="flex justify-center ">
      <div className="bg-base-100 w-full max-w-md shrink-0 shadow-2xl p-14 my-10">
        <div className="">
          <h2 className="text-2xl font-semibold text-center mb-8">
            Register your Account
          </h2>
          <form onSubmit={handleSubmit} className="fieldset text-base">
            <label className="label">Your Name</label>
            <input
              name="name"
              type="text"
              className="input w-full"
              placeholder="Your Name"
              required
            />
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input w-full"
              placeholder="Email"
              required
            />
            <label className="label">Your Photo URL</label>
            <input
              name="photo"
              type="text"
              className="input w-full"
              placeholder="url link"
              required
            />
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input w-full"
              placeholder="Password"
              required
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>
            <p className="font-semibold text-center mt-3">
              Already Have An Account ?{" "}
              <Link className="text-secondary" to="/auth/login">
                LogIn
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
