import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {
  const { img, isAdmin } = useSelector((state) => state.user);
  const { isAuthenticated, loginWithRedirect, logout, isLoading } = useAuth0();
  const navigate = useNavigate();

  const GoToAdmin = () => {
    navigate("/admin");
  };

  let activeStyle = {
    color: "#5670D7",
  };

  // eslint-disable-next-line no-unused-vars
  let activeClassName = "underline";

  return (
    <nav className="nav container">
      <NavLink to="/" className="nav__logo">
        Techno House <i className="bx bxs-home-smile"></i>
      </NavLink>

      <div className="nav__menu">
        <ul className="nav__list">
          <li className="nav__item">
            <NavLink
              to="/"
              className="nav__link"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <i className="bx bxs-home"></i>
              <span>Home</span>
            </NavLink>
          </li>

          <li className="nav__item">
            <NavLink
              to="/products"
              className="nav__link"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <i className="bx bxs-store"></i>
              <span>Products</span>
            </NavLink>
          </li>
        </ul>
      </div>

      {/* <!-- Theme change button  --> */}
      <i className="bx bx-moon change-theme" id="theme-button"></i>

      {!isAuthenticated && !isLoading ? (
        <a
          href="#home"
          className="button nav__button"
          onClick={() => loginWithRedirect && loginWithRedirect()}
        >
          LOG IN
        </a>
      ) : (
        <div>
          <Link to="/profile">
            <img src={img} alt="" className="nav__profile" />
          </Link>
          {isAdmin && (
            <button className=" nav__buttonn" onClick={GoToAdmin}>
              Admin
            </button>
          )}

          <button className="nav__buttonn" onClick={logout}>
            Logout
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
