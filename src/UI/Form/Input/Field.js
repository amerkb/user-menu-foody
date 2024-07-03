import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Field = ({ label, type = "text", placeholder, name, value, min = 1 }) => {
  const [defaultValue, SetdefaultValue] = useState(value);
  var data = useSelector((state) => state.Meal.data);
  const show = useSelector((state) => state.Meal.show);
  const cart = useSelector((state) => state.Meal.cart);
  useEffect(() => {
    const item = cart.find((item) => item.id === data.id);
    if (item) {
      SetdefaultValue(item[name]);
    } else {
      SetdefaultValue(value);
    }
  }, [show]);
  const handlevalueChange = (event) => {
    SetdefaultValue(event.target.value);
  };
  return (
    <div
      className={`px-[5px] mb-5 text-[rgb(73,80,87)] text-[14px] w-full  grid col-span-full ${
        type === "hidden" ? "hidden" : "visible"
      }`}
    >
      <label className="mb-2 text-start">{label}</label>
      <input
        placeholder={placeholder}
        type={type}
        name={name}
        autoComplete="off"
        required
        min={min}
        value={defaultValue}
        onChange={handlevalueChange}
        className="border-[#0000001a]  duration-200 focus:border-[#80bdff] input-box
         border-[1px] h-[calc(1.5em + .75rem + 2px)] rounded-[0.25rem] py-[0.375rem] px-[0.75rem] outline-none"
      />
    </div>
  );
};

export default Field;
