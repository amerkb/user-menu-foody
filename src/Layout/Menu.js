import React from "react";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import Head from "./Head";
import Categories from "./Categories";
import Meals from "./Meals";

const rootReducer = combineReducers({});
const store = createStore(rootReducer);
const Menu = () => {
  return (
    <div>
      <Provider store={store}>
        <Head />
        <Categories />
        <Meals />
      </Provider>
    </div>
  );
};

export default Menu;
