import React, { useEffect, useState } from "react";
import Category from "../UI/Categories/Category";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";
import Loader from "../UI/Loader/Loader";

const Categories = () => {
  const location = useLocation();
  const [loading, setLoader] = useState(true);

  const queryParams = new URLSearchParams(location.search);
  const [Categories, setCategories] = useState([]);

  const restaurantId = queryParams.get("restaurant_id");
  const branchId = queryParams.get("branch_id");
  const data = {
    id: 0,
    name: "All",
  };
  useEffect(() => {
    const categories = JSON.parse(sessionStorage.getItem("categories"));
    if (categories) {
      setCategories(categories);
      setLoader(false);
    }

    axios
      .get(
        `${window.host}/user/category?restaurant_id=${restaurantId}&branch_id=${branchId}`
      )
      .then((response) => {
        console.log(response.data.data);
        setCategories(response.data.data);
        setLoader(false);
        sessionStorage.setItem("categories", JSON.stringify(response.data.data));
      })
      .catch((error) => {
        console.error(error);
        setLoader(false);
      });
  }, []);
  return (
    <div className="scroll-container overflow-x-auto whitespace-nowrap w-full bg-gray-200 py-3 px-5 ">
      <div className="flex gap-x-3">
        {loading ? <Loader /> : ""}
        <Category data={data} />
        {Categories.map((data) => (
          <Category data={data} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
