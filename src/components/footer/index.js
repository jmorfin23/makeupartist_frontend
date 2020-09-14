import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NewsLetterSignUp } from "../newslettersignup";

const Footer = () => {
  return (
    <div>
      <footer>
        <NewsLetterSignUp />
        {/* footer-primary*/}
        <section className="section footer-copyright">
          <div className="container">
            <ul className="footer-nav">
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
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="/admin/home">Admin</Link>
              </li>
            </ul>
            <p>Jerlicia Jordan © 2020, All Rights Reserved.</p>
          </div>
          {/* container*/}
        </section>
        {/* footer-primary*/}
      </footer>
      <button className="goto-top">
        <i className="fa fa-angle-double-up" aria-hidden="true"></i>
      </button>
    </div> //end of footer div
  );
};

export default Footer;
