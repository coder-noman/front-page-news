import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div className="flex justify-center ">
      <div className="bg-base-100 w-full max-w-md shrink-0 shadow-2xl p-14 my-10">
        <div className="">
          <h2 className="text-2xl font-semibold text-center mb-8">
            Register your Account
          </h2>
          <fieldset className="fieldset text-base">
            <label className="label">Your Name</label>
            <input type="text" className="input w-full" placeholder="Your Name" />
            <label className="label">Email</label>
            <input type="email" className="input w-full" placeholder="Email" />
            <label className="label">Your Photo URL</label>
            <input type="text" className="input w-full" placeholder="url link" />
            <label className="label">Password</label>
            <input
              type="password"
              className="input w-full"
              placeholder="Password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Register</button>
            <p className="font-semibold text-center mt-3">
              Already Have An Account ? <Link className="text-secondary" to="/auth/login">LogIn</Link>
            </p>
          </fieldset>
        </div>
      </div>
    </div>
    );
};

export default Register;