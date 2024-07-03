import React from "react";
import Category from "../UI/Categories/Category";

const Categories = () => {
  const data = {
    id: 1,
    name: "Spaghetti Bolognese",
  };
  return (
    <div className="scroll-container overflow-x-auto whitespace-nowrap w-full bg-gray-200 py-3 px-5 ">
      <div className="flex gap-x-3">
        <Category data={data} />
        <Category data={data} />
      </div>
    </div>
  );
};

export default Categories;
