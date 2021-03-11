import React, { useContext, useEffect } from "react";
import DishCardItem from "./DishCardItem";
import UserDishItem from "./UserDishItem";
import Spinner from "../layout/Spinner";

import ResContext from "../../context/restaurant/resContext";
import AuthContext from "../../context/auth/authContext";

const DishCards = ({ match }) => {
  const resContext = useContext(ResContext);
  const authContext = useContext(AuthContext);
  const { dishes, loading, getDishes } = resContext;
  const { user } = authContext;

  useEffect(() => {
    getDishes(match.params.id);
  }, []);

  if (!loading && dishes) {
    return (
      <div>
        <div style={DishStyle}>
          {user && user.role === "user"
            ? dishes.map(dish => <UserDishItem key={dish._id} dish={dish} />)
            : dishes.map(dish => <DishCardItem key={dish._id} dish={dish} />)}
        </div>
        {user && user.role === "user" && (
          <div className="fixed-action-btn">
            <label htmlFor="add">Add Restaurant</label>
            <a
              id="add"
              className="btn btn-large amber darken-4 modal-trigger"
              href="#restaurant"
            >
              PlaceOrder
              <i className="material-icons right">inventory</i>
            </a>
          </div>
        )}
      </div>
    );
  } else {
    return <Spinner />;
  }
};

const DishStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
  gridGap: "1rem"
};

export default DishCards;
