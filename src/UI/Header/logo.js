import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Loader from "../Loader/Loader";
import LazyLoad from "react-lazyload";

const Logo = () => {
  const location = useLocation();
  const [loading, setLoader] = useState(true);

  const queryParams = new URLSearchParams(location.search);
  const [logo, setlogo] = useState("");

  const restaurantId = queryParams.get("restaurant_id");
  const branchId = queryParams.get("branch_id");
  useEffect(() => {
    axios
      .get(`${window.host}/branch/${branchId}`)
      .then((response) => {
        console.log(response.data.data);
        setlogo(response.data.data.logo);
        setLoader(false);
      })
      .catch((error) => {
        console.error(error);
        setLoader(false);
      });
  }, []);
  return (
    <div className="w-full ">
      {loading ? <Loader /> : ""}

      <div className="py-[17px] text-center block">
        <LazyLoad>
          <img className="max-w-[180px] h-[4rem] rounded-full " src={logo} />
        </LazyLoad>
      </div>
    </div>
  );
};

export default Logo;
