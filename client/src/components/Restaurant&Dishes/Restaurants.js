import React, { useContext } from "react";
import RestaurantItem from "./RestaurantItem";

import ResContext from "../../context/restaurant/resContext";

const Restaurants = () => {
  const resContext = useContext(ResContext);
  const { restaurants, loading } = resContext;

  if (restaurants !== null && restaurants.length === 0 && !loading) {
    return <h4>Please add restaurant/(s)</h4>;
  }

  return (
    <div style={RestaurantStyle}>
      {restaurants &&
        restaurants.length > 0 &&
        restaurants.map(restaurant => (
          <RestaurantItem key={restaurant._id} restaurant={restaurant} />
        ))}
    </div>
  );
};

const RestaurantStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gridGap: "1rem"
};

export default Restaurants;
