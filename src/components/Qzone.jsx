import React from 'react';
import classR from "../assets/class.png"
import play from "../assets/playground.png"
import swim from "../assets/swimming.png"

const Qzone = () => {
    return (
        <div className='bg-base-200 p-3 mt-5'>
            <h2 className="font-semibold mb-5 text-lg">Q-Zone</h2>
            <div className='space-y-5'>
                <img src={classR} alt="" />
                <img src={play} alt="" />
                <img src={swim} alt="" />
            </div>
        </div>
    );
};

export default Qzone;