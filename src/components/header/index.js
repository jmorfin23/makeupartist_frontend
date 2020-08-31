import React from "react";
import "./index.css";
import companylogo from "../../images/main-logo2.png";
import { Link, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LOGOUT_ADMIN } from "../../actions/types";

const Header = props => {
  console.log("header component");
  const dispatch = useDispatch();
  const logoutAdmin = () => {
    console.log("inside logout admin");
    //logout admin
    dispatch({ type: LOGOUT_ADMIN, payload: false });

    //remove token from localstorage
    localStorage.removeItem("token");
  };

  return (
    <nav className="navbar navbar-default bootsnav">
      <div className="container">
        {/*  Start Header Navigation */}
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target="#navbar-menu"
          >
            <i className="fa fa-bars"></i>
          </button>
          <Link className="navbar-brand" to="/home">
            <img src={companylogo} className="logo1" alt="" />
          </Link>
        </div>
        {/*  End Header Navigation */}
        {/*  Collect the nav links, forms, and other content for toggling */}
        <div className="collapse navbar-collapse" id="navbar-menu">
          <ul
            className="nav navbar-nav navbar-right"
            data-in="fadeInUp"
            data-out="fadeOutDown"
          >
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            {props.page === "/admin/home" ? (
              <li>
                <a style={{ cursor: "pointer" }} onClick={() => logoutAdmin()}>
                  Logout
                </a>
              </li>
            ) : null}
          </ul>
        </div>
        {/*  /.navbar-collapse */}
      </div>
      {/* container*/}
    </nav>
  );
};

export default Header;
