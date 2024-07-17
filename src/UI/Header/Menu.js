import React, { useState } from "react";
import { BiFoodMenu } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";

const Menu = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const restaurantId = queryParams.get("restaurant_id");
  const branchId = queryParams.get("branch_id");
  return (
    <Link
      to={`/menu?restaurant_id=${restaurantId}&branch_id=${branchId}`}
      underline="none"
      color="inherit"
    >
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
