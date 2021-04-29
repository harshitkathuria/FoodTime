import React, { useState, useEffect, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import Dishes from "./Restaurant&Dishes/Dishes";
import CreateRes from "./Restaurant&Dishes/CreateRes";

import ResContext from "../context/restaurant/resContext";
import AuthContext from "../context/auth/authContext";
import Restaurants from "./Restaurant&Dishes/Restaurants";
import Orders from "./Orders/Orders";

const AuthHome = props => {
  const resContext = useContext(ResContext);
  const authContext = useContext(AuthContext);
  const { user, loadUser, isAuthenticated } = authContext;
  const { createRes, getMyRes, clearRestaurant } = resContext;

  useEffect(() => {
    const M = window.M;
    M.Modal.init(document.querySelectorAll(".modal"), {
      opacity: 0.8,
      inDuration: 450,
      outDuration: 400
      // dismissible: false
    });
    loadUser();
    getMyRes();
  }, []);

  useEffect(() => {
    if (isAuthenticated === false) {
      props.history.push("/login");
    }

    if (resData.dishes) {
      submitResData();
    }
  });

  const [resData, setResData] = useState({});

  const addResData = data => {
    setResData({ ...resData, ...data });
  };

  const submitResData = () => {
    const data = Object.assign(resData.res, {
      dishes: resData.dishes
    });
    createRes(data);
    setResData({});
  };

  const onHover = () => {
    document.querySelector('label[for="add"]').style.opacity = "1";
    document.querySelector('label[for="add"]').style.display = "inline-block";
  };

  const onMouseLeave = () => {
    document.querySelector('label[for="add"]').style.opacity = "0";
    document.querySelector('label[for="add"]').style.display = "none";
  };

  const onClear = () => {
    clearRestaurant();
  };

  const forRestaurant = (
    <>
      <Restaurants />
      <div className="fixed-action-btn">
        <label htmlFor="add">Add Restaurant</label>
        <a
          id="add"
          onMouseOver={onHover}
          onMouseLeave={onMouseLeave}
          className="btn btn-floating btn-large amber darken-4 modal-trigger"
          href="#restaurant"
          onClick={onClear}
        >
          <i className="large material-icons">add</i>
        </a>
      </div>
      <CreateRes addResData={addResData} />
      <Dishes addResData={addResData} />
    </>
  );

  const forUser = (
    <>
      <Orders />
      <div className="fixed-action-btn">
        <label htmlFor="add">Place Order</label>
        <Link
          id="add"
          onMouseOver={onHover}
          onMouseLeave={onMouseLeave}
          className="btn btn-floating btn-large amber darken-4"
          to="/res/all"
        >
          <i className="large material-icons">add_shopping_cart</i>
        </Link>
      </div>
    </>
  );

  return <div>{user && user.role === "user" ? forUser : forRestaurant}</div>;
};

export default AuthHome;
