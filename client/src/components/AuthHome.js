import React, { useState, useEffect } from "react";
import Dishes from "./Restaurant&Dishes/Dishes";
import CreateRes from "./Restaurant&Dishes/CreateRes";

const AuthHome = () => {
  useEffect(() => {
    const M = window.M;
    M.Modal.init(document.querySelectorAll(".modal"), {
      opacity: 0.8,
      inDuration: 450,
      outDuration: 400,
      dismissible: false
    });
  }, []);

  const [resData, setResData] = useState({});

  const addResData = data => {
    setResData({ ...resData, ...data });
  };

  const onHover = () => {
    document.querySelector('label[for="add"]').style.opacity = "1";
  };

  const onMouseLeave = () => {
    document.querySelector('label[for="add"]').style.opacity = "0";
  };

  return (
    <div>
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
      <Dishes addResData={addResData} />
    </div>
  );
};

export default AuthHome;
