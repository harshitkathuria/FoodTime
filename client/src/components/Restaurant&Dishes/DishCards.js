import React, { useContext, useEffect } from "react";
import DishCardItem from "./DishCardItem";
import Spinner from "../layout/Spinner";

import ResContext from "../../context/restaurant/resContext";

const DishCards = ({ match }) => {
  const resContext = useContext(ResContext);
  const { dishes, loading, getDishes } = resContext;

  useEffect(() => {
    getDishes(match.params.id);
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div style={DishStyle}>
      {dishes &&
        dishes.map(dish => <DishCardItem key={dish._id} dish={dish} />)}
    </div>
  );
};

const DishStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
  gridGap: "1rem"
};

export default DishCards;
