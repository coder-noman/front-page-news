import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";

const NewsDetailsCard = ({ news }) => {
  return (
    <div className="border border-gray-200 p-5">
      <img
        className="w-full h-[350px] object-fill"
        src={news.image_url}
        alt=""
      />
      <h1 className="font-semibold my-8 text-3xl text-primary">{news.title}</h1>
      <p className="text-accent">{news.details}</p>

      <div className="inline-block">
        <Link
          to={"/"}
          className="flex items-center gap-3 py-2 px-5 bg-secondary  mt-5 text-white"
        >
          <FaArrowLeft size={19} />
          All News in This Category
        </Link>
      </div>
    </div>
  );
};

export default NewsDetailsCard;
