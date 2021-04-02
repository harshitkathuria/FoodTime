import React, { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import ResContext from "../../context/restaurant/resContext";

const Navbar = () => {
  const authContext = useContext(AuthContext);
  const resContext = useContext(ResContext);

  useEffect(() => {
    authContext.loadUser();
  }, []);

  const onLogout = () => {
    authContext.logout();
    resContext.clearRes();
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
        <Link to="/res/all">All Restaurants</Link>
      </li>
      <li>
        <Link to="/home">
          My{" "}
          {authContext.user && authContext.user.role === "user"
            ? "Orders"
            : "Restaurants"}
        </Link>
      </li>
      <li>
        <a href="/" onClick={onLogout}>
          Logout
        </a>
      </li>
    </>
  );

  return (
    <nav className="teal darken-3">
      <div className="nav-wrapper">
        <div className="container">
          {authContext.isAuthenticated === true && (
            <a href="#" data-target="slide-out" class="sidenav-trigger">
              <i class="material-icons">menu</i>
            </a>
          )}
          <Link to="/" className="brand-logo">
            FoodTime
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {useLocation().pathname !== "/"
              ? authContext.isAuthenticated
                ? userLinks
                : guestLinks
              : ""}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
