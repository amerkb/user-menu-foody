import React, { useEffect } from "react";
import Table from "../UI/Cart/Table";
import Submit from "../UI/Form/Submit/Submit";
import SuccessAlert from "../UI/Alert/SuccessAlert";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCart, setSum } from "../Redux/MealReducer";
import { setSuccessRestaurant } from "../Redux/AlertReducer";

const Cart = () => {
  const cart = useSelector((state) => state.Meal.cart);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const restaurantId = queryParams.get("restaurant_id");
  const branchId = queryParams.get("branch_id");
  const dispatch = useDispatch();
  useEffect(() => {
    if (sessionStorage.getItem("sum")) {
      dispatch(setSum(sessionStorage.getItem("sum")));
      dispatch(setCart(JSON.parse(sessionStorage.getItem("cart"))));
    }
  }, []);
  const handleClick = async () => {
    const meals = cart.map((item) => ({
      qty: item.quantity,
      meal_id: item.id,
      note: item.note,
    }));
    const data = {
      restaurant_id: restaurantId,
      branch_id: branchId,
      table_id: 1,
      meals: meals,
    };
    console.log(data);

    axios
      .post(`${window.host}/user/makeOrder`, data)
      .then((response) => {
        console.log(response.data);
        dispatch(setCart([]));
        sessionStorage.setItem("cart", JSON.stringify([]));
        sessionStorage.setItem("sum", 0);
        dispatch(setSum(0));
        dispatch(setSuccessRestaurant(true));

      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="px-[15px] xl:px-[100px] py-[25px]  bg-[#f0f0fa] min-h-[calc(100vh-4.5rem)]">
      <SuccessAlert />

      <Table />
      {cart.length !== 0 && <Submit value="Check out" onClick={handleClick} />}
      {cart.length === 0 && (
        <div className="text-3xl w-full font-bold text-[#333333] mb-12">
          SHOPPING CART
          <p className="mt-4 font-normal text-lg">
            select item for check out .
          </p>
        </div>
      )}
    </div>
  );
};

export default Cart;
