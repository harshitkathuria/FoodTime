import React, { useEffect, useContext } from "react";
import Restaurants from "./Restaurants";

import ResContext from "../../context/restaurant/resContext";

const AllRestaurants = () => {
  const resContext = useContext(ResContext);

  useEffect(() => {
    resContext.getAllRes();
  }, []);

  return <Restaurants />;
};

export default AllRestaurants;
