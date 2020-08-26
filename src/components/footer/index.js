import React, { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [input, setInput] = useState(null);

  const newsletterSignUp = async e => {
    e.preventDefault();

    const response = await fetch("http://127.0.0.1:5000/api/sub-newsletter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        email: input
      }
    });

    const data = await response.json();

    data.success ? alert(data.success.message) : alert(data.error.message);
  };

  return (
    <div>
      <footer>
        <section className="section footer-primary">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 text-center">
                <h3>Newsletter Signup</h3>
                <p className="pb-20">
                  Get Our special offers and the ultimate hair care tips &
                  tricks!
                </p>
                <form onSubmit={newsletterSignUp} className="pb-40">
                  <div className="input-group">
                    <input
                      onChange={e => setInput(e.target.value)}
                      type="email"
                      className="form-control"
                      required="required"
                      name="nemail"
                      id="nemail"
                      placeholder="Email address"
                    />
                    <div className="input-group-btn">
                      <button type="submit" className="btn btn-primary">
                        Subscribe
                      </button>
                    </div>
                    {/*  /btn-group */}
                  </div>
                  {/*  /input-group */}
                </form>
                <h3 className="pb-10">Let's Stay Connected</h3>
                <div className="footer-social-icons">
                  <a href="/" target="_blank">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="/" target="_blank">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a href="/" target="_blank">
                    <i className="fa fa-linkedin"></i>
                  </a>
                  <a href="/" target="_blank">
                    <i className="fa fa-instagram"></i>
                  </a>
                  <a href="/" target="_blank">
                    <i className="fa fa-google-plus"></i>
                  </a>
                </div>
              </div>
              {/* col*/}
            </div>
            {/* row*/}
          </div>
          {/* container*/}
        </section>
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
      <a className="goto-top">
        <i className="fa fa-angle-double-up" aria-hidden="true"></i>
      </a>
    </div> //end of footer div
  );
};

export default Footer;
