import React, { useState } from "react";
import { useSelector } from "react-redux";

const Footer = () => {
  const [input, setInput] = useState(null);
  console.log("footer");

  const newsletterSignUp = async e => {
    e.preventDefault();

    let response = await fetch("http://127.0.0.1:5000/api/sub-newsletter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        email: input
      }
    });

    let data = await response.json();

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
                  {" "}
                  <a href="#" target="_blank">
                    <i className="fa fa-facebook"></i>
                  </a>{" "}
                  <a href="#" target="_blank">
                    <i className="fa fa-twitter"></i>
                  </a>{" "}
                  <a href="#" target="_blank">
                    <i className="fa fa-linkedin"></i>
                  </a>{" "}
                  <a href="#" target="_blank">
                    <i className="fa fa-instagram"></i>
                  </a>{" "}
                  <a href="#" target="_blank">
                    <i className="fa fa-google-plus"></i>
                  </a>{" "}
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
                <a href="/home">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/portfolio">Portfolio</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
              <li>
                <a href="/admin">Admin</a>
              </li>
            </ul>
            <p>2020 Jerlicia Jordan. All Rights reserved.</p>
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
