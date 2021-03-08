import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";

const Navbar = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
  }, []);

  const onLogout = () => {
    authContext.logout();
  };

  const guestLinks = (
    <>
      <li>
        <a href="/register">Register</a>
      </li>
      <li>
        <a href="/login">Login</a>
      </li>
    </>
  );

  const userLinks = (
    <>
      <li>
        <Link to="/">Add your restaurants</Link>
      </li>
      <li>
        <Link to="/">Restaurants</Link>
      </li>
      <li>
        <Link to="/">
          My{" "}
          {authContext.user && authContext.user.role === "user"
            ? "Orders"
            : "Restaurants"}
        </Link>
      </li>
      <li>
        <a to="/" onClick={onLogout}>
          Logout
        </a>
      </li>
    </>
  );

  return (
    <nav className="teal darken-3">
      <div className="nav-wrapper">
        <div className="container">
          <a href="/" className="brand-logo">
            FoodTime
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {authContext.isAuthenticated ? userLinks : guestLinks}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
