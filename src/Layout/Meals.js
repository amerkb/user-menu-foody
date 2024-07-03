import React from "react";
import Meal from "../UI/Meals/Meal";

const Meals = () => {
  const data = {
    id:1,
    name: "Spaghetti Bolognese",
    description: "A classic Italian pasta dish with meat sauce.",
    price: "400",
    img: "http://localhost:3000/food.jpg",
  };
  const data2 = {
    id:2,
    name: "Spaghetti Bolognese",
    description: "A classic Italian pasta dish with meat sauce.",
    price: "400",
    img: "http://localhost:3000/food.jpg",
  };
  return (
    <div className="w-full bg-[#f0f0fa]   min-h-[calc(100vh-(6rem+58px))] grid gap-8 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
      <Meal data={data} />
      <Meal data={data2} />
      <Meal data={data} />
    </div>
  );
};

export default Meals;
