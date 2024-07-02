import React from "react";
import { FaCartShopping } from "react-icons/fa6";

const Cart = () => {
  return (
    <div className="flex justify-center items-center gap-x-3">
      <div className="flex flex-col justify-center  items-center ">
        <span>cart</span>
        <span>$0.0</span>
      </div>
      <FaCartShopping className="text-3xl" />
    </div>
  );
};

export default Cart;
