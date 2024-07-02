import React from "react";

const Meal = () => {
  return (
    <div className="text-left h-fit  p-[20px] rounded-[5px] mb-8 boxfood">
      <div class="ms-card-img">
        <img src="http://localhost:3000/food.jpg" alt="card_img" />
      </div>
      <div class="ms-card-body" className="p-4 text-[14px] font-bold">
        <div
          class="new"
          className="flex justify-between text-[16px] mb-[15px] items-center "
        >
          <h6 class="mb-0">Veggies </h6>
          <h6 class="ms-text-primary text-secondary  mb-0">$45.50</h6>
        </div>

        <p className="text-[#878793] mb-[15px] ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, dolor sit
          amet, consectetur adipiscing
        </p>
        <button
          type="button"
          className="bg-[#28a745] text-white rounded-sm px-6 py-2"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Meal;
