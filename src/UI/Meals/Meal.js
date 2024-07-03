import React from "react";
import { useDispatch } from "react-redux";
import { setData, setShow } from "../../Redux/MealReducer";
import Submit from "../Form/Submit/Submit";

const Meal = ({ data }) => {
  const dispatch = useDispatch();

  function handleOpen() {
    dispatch(setShow(true));
    dispatch(setData(data));
  }
  return (
    <div className="text-left h-fit  p-[20px] rounded-[5px] mb-8 boxfood">
      <div class="ms-card-img">
        <img src={data.img} alt="card_img" />
      </div>
      <div class="ms-card-body" className="p-4 text-[14px] font-bold">
        <div
          class="new"
          className="flex justify-between text-[16px] whitespace-nowrap mb-[15px] items-center "
        >
          <h6 class="mb-0 ">{data.name} </h6>
          <h6 class="ms-text-primary text-secondary  mb-0">${data.price}</h6>
        </div>

        <p className="text-[#878793] mb-[15px] ">{data.description}</p>

        <Submit onClick={() => handleOpen()} value="Add" />
      </div>
    </div>
  );
};

export default Meal;
