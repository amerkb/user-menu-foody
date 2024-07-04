import React from "react";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import Head from "./Head";
import MealReducer from "../Redux/MealReducer";
import CategoryReducer from "../Redux/CategoryReducer";
import Menu from "../Page/Menu";
import Cart from "../Page/Cart";

const rootReducer = combineReducers({
  Meal: MealReducer,
  Category: CategoryReducer,
});
const store = createStore(rootReducer);
const Content = ({ content }) => {
  return (
    <div>
      <Provider store={store}>
        <Head />
        {content === "Menu" && <Menu />}
        {content === "Cart" && <Cart />}
      </Provider>
    </div>
  );
};

export default Content;
