import React from "react";
import portrait from "../../images/portrait.jpg";

export const AboutSection = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-4 col-xs-12">
          <img src={portrait} alt="" />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-8 col-xs-12 pt-30">
          <h1>
            About <span>me</span>
          </h1>
          <p>
            Hi everyone! My name is Kathryn Stevens. If your reading this then
            you must be interested in who I am and what I do. I've been a
            professional makeup artist for the past 6 years and love every
            minute of it. I am originally from Seattle, but moved to Chicago for
            my studies and have been here ever since! In 2013, my mentor told
            me:
          </p>
          <blockquote className="add-quote">
            <p>
              Take care of your clients, everything else will work itself out.
            </p>
          </blockquote>
          <p>
            Since then I've done my best to manage each and every client to the
            fullest. From weddings to special events, tv &#38; film, I handle
            all your makeup needs. If you would like to schedule a consultation
            or set up a call, you can contact me
            <a className="about-contact-link" href="/contact">
              here
            </a>
            .
          </p>
          <a href="/portfolio" className="btn btn-primary">
            View Portfolio
          </a>
        </div>
      </div>
    </div>
  );
};
