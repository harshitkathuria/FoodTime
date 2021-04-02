import React, { useContext } from "react";
import RestaurantItem from "./RestaurantItem";
import Spinner from "../layout/Spinner";

import ResContext from "../../context/restaurant/resContext";

const Restaurants = () => {
  const resContext = useContext(ResContext);
  const { restaurants, loading } = resContext;

  if (loading) {
    return <Spinner />;
  } else if (restaurants !== null && restaurants.length === 0 && !loading) {
    return <h4>Please add restaurant/(s)</h4>;
  } else {
    return (
      <div className="section-grid-2" style={RestaurantStyle}>
        {restaurants &&
          restaurants.length > 0 &&
          restaurants.map(restaurant => (
            <RestaurantItem key={restaurant._id} restaurant={restaurant} />
          ))}
      </div>
    );
  }
};

const RestaurantStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gridGap: "1rem"
};

export default Restaurants;
