import React from "react";
import { BiFoodMenu } from "react-icons/bi";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <Link to="/menu" underline="none" color="inherit" >
      <div className="flex flex-col justify-center font-bold text-gray-600 items-center ">
        <span>Menu</span>
        <span>
          <BiFoodMenu className="text-3xl" />
        </span>
      </div>
    </Link>
  );
};

export default Menu;
