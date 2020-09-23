import React from "react";
import { useState } from "react";

export const NewsLetterSignUp = () => {
  const [input, setInput] = useState(null);

  const signUp = async e => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://kathrynsmithmakeup-backend.herokuapp.com/api/sub-newsletter",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(input)
        }
      );

      const res = await response.json();

      res.status === "ok" ? alert(res.message) : alert(res.error);
    } catch (err) {
      alert(err);
    }

    //clear input
    setInput(null);
  };

  return (
    <section className="section footer-primary">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3 text-center">
            <h3>Newsletter Signup</h3>
            <p className="pb-20">
              Get Our special offers and the ultimate hair care tips & tricks!
            </p>
            <form onSubmit={e => signUp(e)} className="pb-40">
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
  );
};
