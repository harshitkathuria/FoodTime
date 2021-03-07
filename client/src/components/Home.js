import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div id="showcase">
      <div className="card-container valign-wrapper white-text center">
        <div className="card transparent">
          <div className="card-content center">
            <h2 className="">FoodTime</h2>
            <p className="flow-text cyan-text">Join us to feed your hunger.</p>
            <p className="lead">
              Order now and get tasty restaurant like food at your home.
            </p>
          </div>
          <div className="card-action">
            <div className="card-links">
              <Link
                to="/register"
                className="btn btn-large waves-effect waves-light teal darken-3"
              >
                Register
              </Link>
              <Link
                to="/login"
                className="btn btn-large waves-effect teal darken-3"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
