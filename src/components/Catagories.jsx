import React, { use } from "react";
import { NavLink } from "react-router";

const CatagoryPromise = fetch("/categories.json").then((res) => res.json());
const Catagories = () => {
  const categorys = use(CatagoryPromise);
  return (
    <div>
      <h2 className="font-semibold text-lg">All Catagories</h2>
      <div className="flex flex-col mt-5">
        {categorys.map((category) => (
          <NavLink to={`/category/${category.id}`} className={"text-neutral-content flex justify-center font-medium py-2 gap-2 "} key={category.id}>{category.name}</NavLink>
        ))}
      </div>
    </div>
  );
};

export default Catagories;
