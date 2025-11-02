import React from 'react';
import { NavLink } from 'react-router';
import userImage from "../assets/user.png"

const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>
            <div className="w-[150px]"></div>
            <div className=" flex gap-3 text-accent">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>
            </div>
            <div className="flex gap-3">
                <img src={userImage} alt="" width={"38px"}/>
                <button className='bg-primary text-base-100 px-10'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;