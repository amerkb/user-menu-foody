import React from "react";

import Menu from "../Page/Menu";
import Cart from "../Page/Cart";

const Content = ({ content }) => {
  return (
    <div>
        {content === "Menu" && <Menu />}
        {content === "Cart" && <Cart />}
    </div>
  );
};

export default Content;
