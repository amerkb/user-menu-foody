import React from "react";

const Category = ({name}) => {
  return (
    <div className="w-fit h-[58px] bg-blue-500  text-white px-[20px] font-bold text-center flex items-center justify-center rounded-full">
      {name}
    </div>
  );
};

export default Category;
