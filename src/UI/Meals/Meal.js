import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCart, setData, setShow, setSum } from "../../Redux/MealReducer";
import Add from "../Buton/Add";
import Update from "../Buton/Update";
import Delete from "../Buton/Delete";

const Meal = ({ data }) => {
  const [update, SetUpdate] = useState(false);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.Meal.cart);
  const show = useSelector((state) => state.Meal.show);

  useEffect(() => {
    const item = cart.find((item) => item.id === data.id);
    if (item) {
      SetUpdate(true);
    } else {
      SetUpdate(false);
    }
  }, [show]);
  function handleOpen() {
    dispatch(setShow(true));
    dispatch(setData(data));
  }
  function handleRemove() {
    const updatedCart = cart.filter((item) => item.id !== data.id);
    console.log(updatedCart)
    const total = updatedCart.reduce((acc, current) => {
      return acc + current.quantity * current.price;
    }, 0);
    dispatch(setSum(total));
    dispatch(setCart(updatedCart));
          SetUpdate(false);

  }
  return (
    <div className="text-left h-fit  py-[20px] px-[15px] rounded-[5px] mb-8 boxfood">
      <div class="ms-card-img">
        <img src={data.img} alt="card_img" />
      </div>
      <div class="ms-card-body" className="p-4 text-[14px] font-bold">
        <div
          class="new"
          className="flex justify-between text-[16px] whitespace-nowrap mb-[15px] items-center "
        >
          <h6 class="mb-0 ">{data.name} </h6>
          <h6 class="ms-text-primary text-secondary  mb-0">${data.price}</h6>
        </div>

        <p className="text-[#878793] mb-[15px] ">{data.description}</p>
        <div className="flex justify-between items-center">
          {update ? (
            <Update onClick={() => handleOpen()} value="update" />
          ) : (
            <Add onClick={() => handleOpen()} value="Add" />
          )}
          {update ? (
            <Delete onClick={() => handleRemove()} value="remove" />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Meal;
