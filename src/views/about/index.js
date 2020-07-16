import React, { Component } from "react";
import "./index.css";
import about from "../../images/dogs.jpg";
import makeup from "../../images/makeup.jpg";
import portrait from "../../images/portrait.jpg";
import Featured from "../../components/featured";

class About extends Component {
  render() {
    const styles = {
      header: {
        backgroundImage: `url(` + about + `)`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed"
      },
      content: {
        backgroundColor: "rgba(0, 0, 0, 0.3)"
      }
    };
    return (
      <div>
        <section className="section section-page-title" style={styles.header}>
          <div className="overlay" style={styles.content}>
            <h1>About Me</h1>
          </div>
          {/* overlay*/}
        </section>
        {/* ============== end section page banner ==============*/}
        <section className="section section-about">
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
                  Hi everyone! My name is Kathryn Stevens. If your reading this
                  then you must be interested in who I am and what I do. I've
                  been a professional makeup artist for the past 6 years and
                  love every minute of it. I am originally from Seattle, but
                  moved to Chicago for my studies and have been here ever since!
                  In 2013, my mentor told me:
                </p>
                <blockquote>
                  <p>
                    Take care of your clients, everything else will work itself
                    out.
                  </p>
                </blockquote>
                <p>
                  Since then I've done my best to manage each and every client
                  to the fullest. From weddings to special events, tv &#38;
                  film, I handle all your makeup needs. If you would like to
                  schedule a consultation or set up a call, you can contact me{" "}
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
        </section>
        {/* section_about*/}
        <section className="section parallax">
          <div className="overlay">
            <div className="container">
              <h1 className="pb-20">
                Offering Makeup and Hair Stylist Services
              </h1>
              <p className="max-500 intro pb-20">
                If you would like to book a consultation or contact me regarding
                my services click the link below!
              </p>
              <a
                className="btn btn-primary btn-rounded btn-pink"
                href="/contact"
              >
                Book Now!
              </a>
            </div>
            {/* container*/}
          </div>
          {/* overlay*/}
        </section>
        {/* section-paralax */}
        <section className="section section-logos">
          <Featured />
        </section>
      </div>
    );
  }
}

export default About;
