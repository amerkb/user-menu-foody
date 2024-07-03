import React from "react";
import ContainerPop from "../Pops/ContainerPop";
import PanelHead from "../Panel/PanelHead";
import PanelBody from "../Panel/PanelBody";
import FormMeal from "./FormMeal";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { setShow } from "../../Redux/MealReducer";

const MealPop = () => {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.Meal.show);
  const name = useSelector((state) => state.Meal.data.name);

  return (
    <div className={`${show ? "visible" : "hidden"}`}>
      <ContainerPop>
        <div className="swals-show w-[32em] max-w-full">
          <div className="flex justify-center items-center ">
            <PanelHead Class="flex-1" title={`Add  ${name}`} />

            <PanelHead
              onClick={() => dispatch(setShow(false))}
              title={<IoIosCloseCircleOutline className="text-[24px]" />}
            />
          </div>
          <PanelBody content={<FormMeal />} />
        </div>
      </ContainerPop>
    </div>
  );
};

export default MealPop;
