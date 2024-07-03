import React, { useEffect, useState } from "react";
import Field from "../Form/Input/Field";
import TextArea from "../Form/Input/TextArea";
import Submit from "../Form/Submit/Submit";
import { useDispatch, useSelector } from "react-redux";
import { setCart, setShow, setSum } from "../../Redux/MealReducer";

const FormBranch = () => {
  const dispatch = useDispatch();
  var data = useSelector((state) => state.Meal.data);
  const cart = useSelector((state) => state.Meal.cart);
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    data = {
      ...data,
      quantity: parseInt(formData.get("quantity"), 10),
      note: formData.get("note"),
    };
    const updatedCart = cart.map((item) => {
      if (item.id === data.id) {
        return { ...item, ...data };
      }
      return item;
    });

    if (!updatedCart.find((item) => item.id === data.id)) {
      updatedCart.push(data);
    }
    const total = updatedCart.reduce((acc, current) => {
      return acc + current.quantity * current.price;
    }, 0);
    console.log(updatedCart)
    dispatch(setSum(total));
    dispatch(setCart(updatedCart));
    dispatch(setShow(false));
  }

  return (
    <form onSubmit={handleSubmit} className="relative">
      <Field
        label="Quantity"
        type="number"
        placeholder=" quantity"
        name="quantity"
        value="1"
      />
      <TextArea label="Note" placeholder="Note" name="note" value="" />
      <Submit />
    </form>
  );
};

export default FormBranch;
