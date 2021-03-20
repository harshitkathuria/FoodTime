import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="center" style={{ marginTop: "5rem" }}>
      <h1 style={{ fontWeight: 700, fontSize: "5rem" }}>404</h1>
      <h4 style={{fontWeight: 500}}>Page Not Found</h4>
      <p className="lead">
        The page that you are looking for does not exist...
      </p>
      <Link to="/home" className="btn "> Go to the home page </Link>
    </div>
  );
};

export default NotFound;