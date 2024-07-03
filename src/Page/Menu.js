import React from "react";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import Head from "../Layout/Head";
import Categories from "../Layout/Categories";
import Meals from "../Layout/Meals";
import MealPop from "../UI/Meals/MealPop";
import MealReducer from "../Redux/MealReducer";
import CategoryReducer from "../Redux/CategoryReducer";

const rootReducer = combineReducers({
  Meal: MealReducer,
  Category: CategoryReducer,
});
const store = createStore(rootReducer);
const Menu = () => {
  return (
    <div>
      <Provider store={store}>
        <Categories />
        <MealPop />
        <Meals />
      </Provider>
    </div>
  );
};

export default Menu;
