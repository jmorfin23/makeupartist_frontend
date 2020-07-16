import React, { Component } from "react";
import "./index.css";
import { useSelector, connect } from "react-redux";
// ========= Image imports =========
import placeholder from "../../images/blog/placeholder.jpg";
import slide1 from "../../images/portrait.jpg";
import slide2 from "../../images/slide-img2.jpg";
import service1 from "../../images/bride-01.jpg";
import service2 from "../../images/model-02.jpg";
import service3 from "../../images/model-03.jpg";
import testimonialOne from "../../images/testimonial_woman-01.jpg";
import testimonialTwo from "../../images/testimonial_woman-02.jpg";
import testimonialThree from "../../images/testimonial_woman-03.jpg";
// ========= Component imports ========= //
import Header from "../../components/header";
import Featured from "../../components/featured";
import BlogPosts from "../../components/blogPosts";
import PortfolioImage from "../../components/portfolioImage";
import PropTypes from "prop-types";
import * as $ from "jquery";

//Changes to the application: ?
//============================================

//make application into production mode, same with portfolio.
//connect to styleseat - later
//connect to mailchimp - soon
//secure infomation
//slugify
//RSS for updating blogposts - difficult to figure out.
//blogposts - retrieved all blogposts, I could just query 4 blogposts at a time depending on page number - and add a method
//to query the first 3 blogposts for home page - this would improve time complexity.
//need to make database in POSTGres write all the SQL code for the tables.
//length error - believe this is fixed
//services book section

//Need to accomplish:
//add writing to all pages
//make emailing better
//port photos animation change
//blogposts
//secure information
//mailchimp / RSS
//admin panel length deleting issue with 0 posts.
//remove unecessary photos and data
//.gitignore
//host

class Home extends Component {
  render() {
    return (
      <div className="homepage">
        <div className="preloader">
          <div className="animation circle"></div>
        </div>
        {/* ============== end preloader ============== */}

        <div
          id="mycarousel"
          className="carousel slide carousel-fade"
          data-ride="carousel"
        >
          {/*  Indicators */}
          <ol className="carousel-indicators">
            <li
              data-target="#mycarousel"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#mycarousel" data-slide-to="1"></li>
          </ol>
          {/*  Wrapper for slides */}
          <div className="carousel-inner" role="listbox">
            <div className="item">
              <img src={slide1} alt="First Image" />
              <div className="carousel-caption">
                <div className="carousel-caption-inner">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-5 col-md-offset-7">
                        <h1>
                          Kathryn
                          <br />
                          Stevens
                        </h1>
                        <p>
                          <span className="color-white">
                            No matter the occasion
                          </span>
                          , you will
                          <strong> look great </strong>
                          and{" "}
                          <strong>
                            feel <span className="color-white">great!</span>
                          </strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* carousel-caption-inner*/}
              </div>
              {/* carousel-caption*/}
            </div>
            {/* item 1*/}
            <div className="item">
              <img src={slide2} alt="" />
              <div className="carousel-caption">
                <div className="carousel-caption-inner">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-5">
                        <h1>
                          Professional
                          <br />
                          Makeup Artist
                        </h1>
                        <p>
                          There is no doubt that my{" "}
                          <strong>professional</strong> services will make you{" "}
                          <strong>shine</strong> on your special occasion.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* carousel-caption-inner*/}
              </div>
              {/* carousel-caption*/}
            </div>
            {/* item 2*/}
          </div>
          {/* carousel-inner*/}
          {/*  Controls */}
          <a
            className="left carousel-control"
            href="#mycarousel"
            role="button"
            data-slide="prev"
          >
            <span className="fa fa-angle-left" aria-hidden="true"></span>
          </a>
          <a
            className="right carousel-control"
            href="#mycarousel"
            role="button"
            data-slide="next"
          >
            <span className="fa fa-angle-right" aria-hidden="true"></span>
          </a>
        </div>
        {/* mycarousel*/}
        <section className="section section-services">
          {/*  section-title */}
          <div className="section-title text-center">
            <h1 className="decor">
              Makeup and Hair <span>Stylist Services</span>
            </h1>
          </div>
          {/*  end section-title */}
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-sm-6">
                <div className="service-box service-color-one">
                  <div className="service-img">
                    <img src={service1} alt="" />
                  </div>
                  <div className="service-contents">
                    <h1>Bridal Makeup</h1>
                    <p>
                      My primary focus is to ensure you look your best. I
                      guarentee the quality of my work is unmatched, and will
                      make you feel stunning on your big day.
                    </p>
                    <p className="service-price pb-10">
                      <span className="decor-text">starts from</span>
                      <strong>$146.00</strong>
                    </p>
                    <a className="btn btn-primary" href="/services">
                      Read More
                      <i
                        className="fa fa-angle-double-right"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </div>
                  {/* service-contents*/}
                </div>
                {/* service-box*/}
              </div>
              {/* col-md-4*/}
              <div className="col-md-4 col-sm-6">
                <div className="service-box service-color-two">
                  <div className="service-img">
                    <img src={service2} alt="" />
                  </div>
                  <div className="service-contents">
                    <h1>tv film commercial</h1>
                    <p>
                      The capacity of my work meets the most demanding
                      challenges. Through hundreds of sessions of work, I've
                      gained the skillset to meet any and every need.
                    </p>
                    <p className="service-price pb-10">
                      <span className="decor-text">starts from</span>
                      <strong>$146.00</strong>
                    </p>
                    <a className="btn btn-primary" href="/services">
                      Read More
                      <i
                        className="fa fa-angle-double-right"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </div>
                  {/* service-contents*/}
                </div>
                {/* service-box*/}
              </div>
              {/* col-md-4*/}
              <div className="col-md-4 col-sm-6">
                <div className="service-box service-color-three">
                  <div className="service-img">
                    <img src={service3} alt="" />
                  </div>
                  <div className="service-contents">
                    <h1>Special occasions</h1>
                    <p>
                      Each occasion has the possibilty to be great. No matter
                      the day, I want you to look your best. Feel great and be
                      great.
                    </p>
                    <p className="service-price pb-10">
                      <span className="decor-text">starts from</span>
                      <strong>$146.00</strong>
                    </p>
                    <a className="btn btn-primary" href="/services">
                      Read More
                      <i
                        className="fa fa-angle-double-right"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </div>
                  {/* service-contents*/}
                </div>
                {/* service-box*/}
              </div>
              {/* col-md-4*/}
            </div>
            {/* row*/}
          </div>
          {/* container*/}
        </section>
        {/* section-services*/}
        <section id="gallery" className="section section-gallery pt-zero">
          {/*  section-title */}
          <div className="section-title text-center">
            <h1 className="text-center decor">
              My <span>Portfolio</span>
            </h1>
          </div>
          {/*  end section-title */}
          <div className="container">
            {/*  Portfolio items */}
            <PortfolioImage />
            {/*  END Portfolio items */}
          </div>
          {/* container*/}
        </section>
        {/* section-gallery*/}
        <section className="section section-testimonials">
          {/*  section-title */}
          <div className="section-title text-center">
            <h1>
              Customer <span>saying</span>
            </h1>
          </div>
          {/*  end section-title */}
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2">
                <div
                  id="testimonial-carousel"
                  className="testimonial-carousel owl-carousel owl-theme"
                >
                  <div className="testimonial-item">
                    <div className="client-img text-center">
                      <img src={testimonialOne} alt="" className="img-circle" />
                    </div>
                    <div className="quote-icons">
                      <i className="fa fa-quote-left" aria-hidden="true"></i>
                    </div>
                    <p className="text-center">
                      Kathryn's work is unbelievable! Her work is truly
                      professional, which allowed me to feel great on my wedding
                      day.
                    </p>
                    <div className="client-title text-center">
                      <strong>Amanda S.</strong>
                    </div>
                  </div>
                  {/* testmonial-item 1*/}
                  <div className="testimonial-item">
                    <div className="client-img text-center">
                      <img src={testimonialTwo} alt="" className="img-circle" />
                    </div>
                    <div className="quote-icons">
                      <i className="fa fa-quote-left" aria-hidden="true"></i>
                    </div>
                    <p className="text-center">
                      We hired Kathryn for a special event, she was fantastic,
                      very professional, and a great person to work alongside.
                    </p>
                    <div className="client-title text-center">
                      <strong>Jennifer B.</strong>
                    </div>
                  </div>
                  {/* testmonial-item 2*/}
                  <div className="testimonial-item">
                    <div className="client-img text-center">
                      <img
                        src={testimonialThree}
                        alt=""
                        className="img-circle"
                      />
                    </div>
                    <div className="quote-icons">
                      <i className="fa fa-quote-left" aria-hidden="true"></i>
                    </div>
                    <p className="text-center">
                      Kathry did makeup for a large-scale photoshoot, and
                      everyone looked unbelievable. We will definitely be hiring
                      her again.
                    </p>
                    <div className="client-title text-center">
                      <strong>Miranda D. </strong>
                    </div>
                  </div>
                  {/* testmonial-item 3*/}
                </div>
                {/* testimonial-carousel*/}
              </div>
              {/* end col*/}
            </div>
            {/* row*/}
          </div>
          {/* container*/}
        </section>
        {/* section-testomonial*/}
        <section id="news" className="section section-blog">
          {/*  section-title */}
          <div className="section-title text-center">
            <h1 className="decor">
              See what’s new on <span>my Blog</span>
            </h1>
          </div>
          {/*  end section-title */}
          <div className="container">
            <BlogPosts items={2} />
          </div>
          {/* container*/}
        </section>
        {/* section-blog*/}
        <section className="section section-logos pt-zero">
          <Featured />
        </section>
        {/* section-logo*/}
        {/* footer is here  */}
      </div>
    );
  }
}

//map state to props
const mapStateToProps = state => ({
  images: state.images.items,
  blogposts: state.blogposts.items
});

export default connect(mapStateToProps)(Home);
