import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const Cart = () => {
  const sum = useSelector((state) => state.Meal.sum);
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  const restaurantId = queryParams.get("restaurant_id");
  const branchId = queryParams.get("branch_id");
 function handleclick(){
navigate(`/cart?restaurant_id=${restaurantId}&branch_id=${branchId}`)
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
