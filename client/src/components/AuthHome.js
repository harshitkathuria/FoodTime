import React, { useState, useEffect, useContext } from "react";
import { Route, Switch } from "react-router-dom";
import Dishes from "./Restaurant&Dishes/Dishes";
import CreateRes from "./Restaurant&Dishes/CreateRes";

import ResContext from "../context/restaurant/resContext";
import Restaurants from "./Restaurant&Dishes/Restaurants";
import DishCards from "./Restaurant&Dishes/DishCards";

const AuthHome = () => {
  useEffect(() => {
    const M = window.M;
    M.Modal.init(document.querySelectorAll(".modal"), {
      opacity: 0.8,
      inDuration: 450,
      outDuration: 400,
      dismissible: false
    });
    getMyRes();
  }, []);

  useEffect(() => {
    if (resData.dishes) {
      submitResData();
    }
  });

  const resContext = useContext(ResContext);
  const { createRes, getMyRes } = resContext;

  const [resData, setResData] = useState({});

  const addResData = data => {
    setResData({ ...resData, ...data });
  };

  const submitResData = () => {
    console.log("before", resData);
    const data = Object.assign(resData.res, {
      dishes: resData.dishes
    });
    console.log("after", data);
    createRes(data);
    setResData({});
  };

  const onHover = () => {
    document.querySelector('label[for="add"]').style.opacity = "1";
  };

  const onMouseLeave = () => {
    document.querySelector('label[for="add"]').style.opacity = "0";
  };

  return (
    <div style={{ margin: "0 1rem" }}>
      <Switch>
        <Route
          exact
          path="/home"
          render={() => (
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
                >
                  <i className="large material-icons">add</i>
                </a>
              </div>
              <CreateRes addResData={addResData} />
              <Dishes add ResData={addResData} submitResData={submitResData} />
            </>
          )}
        />
        <Route exact path="/res/:id" component={DishCards} />
      </Switch>
    </div>
  );
};

export default AuthHome;
