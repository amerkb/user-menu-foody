import React from "react";
import Meal from "../UI/Meals/Meal";

const Meals = () => {
  return (
    <div className="w-full bg-[#f0f0fa]   min-h-[calc(100vh-(6rem+58px))] grid gap-8 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
      <Meal />
      <Meal />
      <Meal />
    </div>
  );
};

export default Meals;
