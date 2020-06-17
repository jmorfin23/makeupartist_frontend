import React, { Component } from "react";
import about from "../../images/about.jpg";
import service1 from "../../images/service1.jpg";
//logo imports
import logo1 from "../../images/logos/logo1.png";
import logo2 from "../../images/logos/logo2.png";
import logo3 from "../../images/logos/logo3.png";
import logo4 from "../../images/logos/logo4.png";
import logo5 from "../../images/logos/logo5.png";
import logo6 from "../../images/logos/logo6.png";

class About extends Component {
  render() {
    return (
      <div>
        <section
          className="section section-page-title"
          style={{ backgroundImage: `url(${about})` }}
        >
          <div className="overlay">
            <h1>About Me</h1>
          </div>
          {/* overlay*/}
        </section>
        {/* ============== end section page banner ==============*/}
        <section className="section section-about">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-4 col-xs-12">
                <img src={service1} alt="" />{" "}
              </div>
              <div className="col-lg-6 col-md-6 col-sm-8 col-xs-12 pt-30">
                <h1>
                  About <span>me</span>
                </h1>
                <p>
                  Nulla interdum elit a nunc fermentum, quis sodales nibh
                  pulvinar. Etiam rhoncus dui eget nisl laoreet, id scelerisque
                  odio eleifend. Quisque accumsan porta lacinia. Etiam tristique
                  mattis rutrum. Sed vitae laoreet lectus. Donec sed elit felis.
                  Fusce laoreet nec ante sit amet interdum.{" "}
                </p>
                <blockquote>
                  <p>
                    Lorem ipsum dolor sit amet consectetuer adipiscing elit sed
                    diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                    aliquam erat volutpat ut wisi enim ad minim .
                  </p>
                </blockquote>
                <p>
                  Nulla interdum elit a nunc fermentum, quis sodales nibh
                  pulvinar. Etiam rhoncus dui eget nisl laoreet, id scelerisque
                  odio eleifend. Quisque accumsan porta lacinia. Etiam tristique
                  mattis rutrum. Sed vitae laoreet lectus. Donec sed elit felis.
                  Fusce laoreet nec ante sit amet interdum.{" "}
                </p>
                <p>
                  Nulla interdum elit a nunc fermentum, quis sodales nibh
                  pulvinar. Etiam rhoncus dui eget nisl laoreet, id scelerisque
                  odio eleifend. Quisque accumsan porta lacinia. Etiam tristique
                  mattis rutrum. Sed vitae laoreet lectus. Donec sed elit felis.
                  Fusce laoreet nec ante sit amet interdum.{" "}
                </p>
                <a href="/portfolio" className="btn btn-primary">
                  View Portfolio
                </a>{" "}
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
                Japanese nail art design is a trend that increases its
                popularity every year. It plays a major role in trend-setting
                fashion, and is the top choice in nail art competitions.{" "}
              </p>
              <a className="btn btn-primary btn-rounded btn-pink" href="#">
                Book Now!
              </a>{" "}
            </div>
            {/* container*/}
          </div>
          {/* overlay*/}
        </section>
        {/* section-paralax */}
        <section className="section section-logos">
          {/*  section-title */}
          <div className="section-title text-center">
            <h1>Featured on</h1>
          </div>
          {/*  end section-title */}
          <div className="container">
            <div className="row">
              <div className="col-lg-2 col-md-2 col-sm-4 col-xs-6 text-center">
                <div className="cleint-logo">
                  {" "}
                  <img src={logo1} alt="" />
                </div>
              </div>
              {/* end col*/}
              <div className="col-lg-2 col-md-2 col-sm-4 col-xs-6 text-center">
                <div className="cleint-logo">
                  {" "}
                  <img src={logo2} alt="" />{" "}
                </div>
              </div>
              {/* end col*/}
              <div className="col-lg-2 col-md-2 col-sm-4 col-xs-6 text-center">
                <div className="cleint-logo">
                  {" "}
                  <img src={logo3} alt="" />{" "}
                </div>
              </div>
              {/* end col*/}
              <div className="col-lg-2 col-md-2 col-sm-4 col-xs-6 text-center">
                <div className="cleint-logo">
                  {" "}
                  <img src={logo4} alt="" />{" "}
                </div>
              </div>
              {/* end col*/}
              <div className="col-lg-2 col-md-2 col-sm-4 col-xs-6 text-center">
                <div className="cleint-logo">
                  {" "}
                  <img src={logo5} alt="" />{" "}
                </div>
              </div>
              {/* end col*/}
              <div className="col-lg-2 col-md-2 col-sm-4 col-xs-6 text-center">
                <div className="cleint-logo">
                  {" "}
                  <img src={logo6} alt="" />{" "}
                </div>
              </div>
              {/* end col*/}
            </div>
            {/* row*/}
          </div>
          {/* container*/}
        </section>
      </div>
    );
  }
}

export default About;
