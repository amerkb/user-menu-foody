import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const sum = useSelector((state) => state.Meal.sum);
  const navigate = useNavigate();

 function handleclick(){
navigate('/cart')
  }

  return (
   
      <div onClick={handleclick} className="flex justify-center items-center gap-x-3">
        <div className="flex flex-col justify-center  items-center ">
          <span>cart</span>
          <span>${sum}</span>
        </div>
        <FaCartShopping className="text-3xl" />
      </div>
    
  );
};

export default Cart;
