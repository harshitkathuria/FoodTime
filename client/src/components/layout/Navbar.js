import React from "react";

const Navbar = () => {
  return (
    <nav className="teal darken-3">
      <div className="nav-wrapper">
        <div className="container">
          <a href="/" className="brand-logo center">
            FoodTime
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="/register">Register</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
            {/* <li>
              <a href="/">Add your restaurants</a>
            </li>
            <li>
              <a href="/">Restaurants</a>
            </li>
            <li>
              <a href="/">My Orders</a>
            </li> */}
            {/* <li>
              <a href="/">Logout</a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
