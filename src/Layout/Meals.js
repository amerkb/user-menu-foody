import React, { useEffect, useState } from "react";
import Meal from "../UI/Meals/Meal";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Loader from "../UI/Loader/Loader";
import { useSelector } from "react-redux";

const Meals = () => {
  const location = useLocation();
  const [loading, setLoader] = useState(true);
  const queryParams = new URLSearchParams(location.search);
  const [products, setProducts] = useState([]);
  const restaurantId = queryParams.get("restaurant_id");
  const branchId = queryParams.get("branch_id");
  const category = useSelector((state) => state.Category.Active);

  useEffect(() => {
    const products = JSON.parse(sessionStorage.getItem("products"));
    if (products) {
      setProducts(products);
      setLoader(false);
    }
    axios
      .get(
        `${window.host}/user/product?restaurant_id=${restaurantId}&branch_id=${branchId}`
      )
      .then((response) => {
        console.log(response.data.data);
        setProducts(response.data.data);
        setLoader(false);
        sessionStorage.setItem("products", JSON.stringify(response.data.data));

        
      })
      .catch((error) => {
        console.error(error);
        setLoader(false);
      });
  }, []);

  return (
    <div className="w-full bg-[#f0f0fa] pt-4 px-3  min-h-[calc(100vh-(6rem+58px))] grid gap-8 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
      {loading ? <Loader /> : ""}

      {products.map(
        (data) =>
          (category.id === 0 || category.id === data.category_id) && (
            <Meal data={data} />
          )
      )}
    </div>
  );
};

export default Meals;
