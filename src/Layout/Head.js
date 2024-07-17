import React from "react";
import Logo from "../UI/Header/logo";
import Cart from "../UI/Header/Cart";
import Menu from "../UI/Header/Menu";

const Head = () => {
  return (
    <nav
      className={`bg-[#fff] px-[30px] flex items-center justify-between h-[4.5rem] duration-500 `}
    >
      <div className="flex justify-center items-center gap-x-4">
        <Logo />
        <Menu />
      </div>
      <Cart />
    </nav>
  );
};

export default Head;
