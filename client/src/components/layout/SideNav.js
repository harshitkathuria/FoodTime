import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import ResContext from "../../context/restaurant/resContext";

const SideNav = () => {
  useEffect(() => {
    window.M.Sidenav.init(document.querySelector(".sidenav"));
  }, []);

  const authContext = useContext(AuthContext);
  const resContext = useContext(ResContext);

  const onLogout = () => {
    authContext.logout();
    resContext.clearRes();
  };

  return (
    <ul id="slide-out" class="sidenav sidenav-close">
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
        <div class="divider"></div>
      </li>
      <li>
        <a href="/" onClick={onLogout}>
          Logout
        </a>
      </li>
    </ul>
  );
};

export default SideNav;
