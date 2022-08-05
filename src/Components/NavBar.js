// import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav
      className={`navbar navbar-expand-lg bg-${
        props.mode === "light" ? "grey" : "darkBlack"
      } fixed-top `}
    >
      <div className="container-fluid ">
        <Link
          className={` navbar-brand text-${
            props.mode === "light" ? "dark" : "light"
          }`}
          to="/"
        >
          DailyNews
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link text-${
                  props.mode === "light" ? "dark" : "light"
                }`}
                to="/about"
              >
                About
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav me-auto  ">
            <li className="nav-item">
              <Link
                className={`nav-link text-${
                  props.mode === "light" ? "dark" : "light"
                }`}
                to="/automobile"
              >
                Automobile
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link text-${
                  props.mode === "light" ? "dark" : "light"
                }`}
                to="/business"
              >
                Business
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link text-${
                  props.mode === "light" ? "dark" : "light"
                }`}
                to="/entertainment"
              >
                Enterntainment
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link text-${
                  props.mode === "light" ? "dark" : "light"
                }`}
                to="/health"
              >
                Health
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link text-${
                  props.mode === "light" ? "dark" : "light"
                }`}
                to="/hatke"
              >
                Hatke
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link text-${
                  props.mode === "light" ? "dark" : "light"
                }`}
                to="/miscellaneous"
              >
                Miscellaneous
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link text-${
                  props.mode === "light" ? "dark" : "light"
                }`}
                to="/national"
              >
                National
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link text-${
                  props.mode === "light" ? "dark" : "light"
                }`}
                to="/politics"
              >
                Poilitics
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link text-${
                  props.mode === "light" ? "dark" : "light"
                }`}
                to="/science"
              >
                Science
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link text-${
                  props.mode === "light" ? "dark" : "light"
                }`}
                to="/sports"
              >
                Sports
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link text-${
                  props.mode === "light" ? "dark" : "light"
                }`}
                to="/startup"
              >
                Startup
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link text-${
                  props.mode === "light" ? "dark" : "light"
                }`}
                to="/technology"
              >
                Technology
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link text-${
                  props.mode === "light" ? "dark" : "light"
                }`}
                to="/world"
              >
                World
              </Link>
            </li>
          </ul>
        </div>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheck"
            onClick={props.toggleMode}
          />
          <label
            className={`nav-link form-check-label text-${
              props.mode === "light" ? "dark" : "light"
            }`}
            htmlFor="flexSwitchCheckChecked"
          >
            Switch Mode
          </label>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
