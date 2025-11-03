import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userImage from "../assets/user.png";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        alert(`user Logged Out successfully`);
      })
  };
  return (
    <div className="flex justify-between items-center">
      <div className="w-[150px]">
        <h2>{user && user.email}</h2>
      </div>
      <div className=" flex gap-3 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="flex items-center gap-3">
        <img
          className="w-14 rounded-full"
          src={user ? user.photoURL : userImage}
          alt=""
        />
        {!user ? (
          <Link
            to="/auth/login"
            className="bg-primary text-base-100 px-7 py-2 cursor-pointer"
          >
            Login
          </Link>
        ) : (
          <button
            onClick={handleLogOut}
            className="bg-primary text-base-100 px-7 py-2 cursor-pointer"
          >
            Log Out
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
