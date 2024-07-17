import React, { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import { createStore, combineReducers } from "redux";
import Head from "../Layout/Head";
import Categories from "../Layout/Categories";
import Meals from "../Layout/Meals";
import MealPop from "../UI/Meals/MealPop";
import MealReducer, { setCart, setSum } from "../Redux/MealReducer";
import CategoryReducer from "../Redux/CategoryReducer";
import SuccessAlert from "../UI/Alert/SuccessAlert";

const rootReducer = combineReducers({
  Meal: MealReducer,
  Category: CategoryReducer,
});
const store = createStore(rootReducer);
const Menu = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (sessionStorage.getItem("sum")) {
      dispatch(setSum(sessionStorage.getItem("sum")));
      dispatch(setCart(JSON.parse(sessionStorage.getItem("cart"))));
    }
  }, []);
  return (
    <div>
      <Categories />
      <MealPop />
      <Meals />
    </div>
  );
};

export default Menu;
