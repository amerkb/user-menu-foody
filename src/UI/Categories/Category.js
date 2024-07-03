import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActive } from "../../Redux/CategoryReducer";

const Category = ({ data }) => {
  const Active = useSelector((state) => state.Category.Active);
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(setActive(data));
  }
  return (
    <div
      onClick={handleClick}
      className={`w-fit h-[58px] duration-300  
        ${
          Active.id !== data.id
            ? " bg-blue-500 hover:bg-blue-700 hover:text-white  text-white"
            : "text-blue-500 bg-white"
        }
         px-[20px] font-bold text-center flex items-center justify-center rounded-full`}
    >
      {data.name}
    </div>
  );
};

export default Category;
