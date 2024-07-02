import React from "react";
import Logo from "../UI/Header/logo";
import Cart from "../UI/Header/Cart";

const Head = () => {
  return (
    <nav
      className={`bg-[#fff] px-[30px] flex items-center justify-between h-[4.5rem] duration-500 `}
    >
      <Logo />
      <Cart />
    </nav>
  );
};

export default Head;
