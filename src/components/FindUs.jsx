import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-semibold  my-5">Find Us On</h2>
      <div className="join join-vertical w-full">
        <button className="btn bg-base-100 justify-start py-6 join-item"><FaFacebook size={24}></FaFacebook> Facebook</button>
        <button className="btn bg-base-100 justify-start py-6  join-item"><FaTwitter size={24}></FaTwitter> Twitter</button>
        <button className="btn bg-base-100 justify-start py-6 join-item"><FaInstagram size={24}></FaInstagram> Instagram</button>
      </div>
    </div>
  );
};

export default FindUs;
