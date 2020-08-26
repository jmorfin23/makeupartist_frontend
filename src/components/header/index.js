import React from "react";
import "./index.css";
import companylogo from "../../images/main-logo2.png";
import { Link } from "react-router-dom";

const Header = props => {
  console.log("header component");

  const logoutAdmin = () => {
    console.log("inside logout admin");
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
              <Link to="/home">Home</Link>
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
                <a onClick={() => logoutAdmin()}>Logout</a>
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
