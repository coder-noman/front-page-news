import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <div>
      <h2 className="font-semibold text-lg mb-5">Login With</h2>

      <div>
        <button className="btn btn-outline btn-info hover:text-white w-full mb-3">
        <FcGoogle size={24} />
          Login with Google
        </button>
        <button className="btn btn-outline hover:bg-black hover:text-white w-full mb-3">
            <FaGithub size={24} />
          Login with GitHub
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
