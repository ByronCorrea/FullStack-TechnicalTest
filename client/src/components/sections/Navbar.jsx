import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  let activeStyle = {
    color: "#5670D7",
  };

  // eslint-disable-next-line no-unused-vars
  let activeClassName = "underline";

  return (
    <nav className="nav container">
      <NavLink to="/home" className="nav__logo">
        Holux <i className="bx bxs-home-alt-2"></i>
      </NavLink>

      <div className="nav__menu">
        <ul className="nav__list">
          <li className="nav__item">
            <NavLink
              to="/home"
              className="nav__link"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <i className="bx bx-home-alt-2"></i>
              <span>Home</span>
            </NavLink>
          </li>

          <li className="nav__item">
            <NavLink
              to="/products"
              className="nav__link"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <i className="bx bx-building-house"></i>
              <span>Products</span>
            </NavLink>
          </li>
        </ul>
      </div>

      {/* <!-- Theme change button  --> */}
      <i className="bx bx-moon change-theme" id="theme-button"></i>

      <a href="#home" className="button nav__button">
        Suscribe
      </a>
    </nav>
  );
}

export default Navbar;
