import React, { Component } from "react";
import Header from "../../components/header";
import Featured from "../../components/featured";
import { useSelector, connect } from "react-redux";
// ========= Image imports =========
import placeholder from "../../images/blog/placeholder.jpg";
import slide1 from "../../images/slide1.jpg";
import slide2 from "../../images/slide2.jpg";
import service1 from "../../images/service1.jpg";
import clientPhoto from "../../images/client.jpg";
// ========= Component imports =========
// import PortfolioImage from "../../components/portfolioImage";
import BlogPosts from "../../components/blogPosts";
import * as $ from "jquery";
import "./index.css";

// import 'bootstrap';
//import jQuery from 'jquery';

//Questions:
//============================================
//putting my api requests in app.js, that gets called everytime i click
//on a  new page.
//try setting state in local state with redux states
//try and catch where are good places.
//should i delete images based on index or value?
//when adding and deleting images should i return the whole image list ////from backend? or splice it.
//should i use tokens?

//https://developers.redhat.com/blog/2016/01/07/react-js-with-isotope-and-flux/

// issues:
//pagination stuck on how to start, frontend or backend pagination
//the jquery issue, 2 versions??
class Home extends Component {
  filterMe(c, e) {
    e.preventDefault();
    console.log(c);

    console.log("test1");
    //call filterSelection
    this.filterSelection(c);
    console.log("test2");

    // Add active class to the current control button (highlight it)
    var btnContainer = document.getElementById("portfolio-filter");
    var btns = btnContainer.getElementsByClassName("filter-buttons");

    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("current");
        current[0].className = current[0].className.replace(" current", "");
        this.className += " current";
      });
    }
  }
  filterSelection = c => {
    var x, i;
    x = document.getElementsByClassName("portfolio-item");
    if (c == "all") c = "";
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
      this.w3RemoveClass(x[i], "hide");
      console.log(x[i].className.indexOf(c) > -1);
      if (x[i].className.indexOf(c) > -1) {
        continue;
      } else {
        this.w3AddClass(x[i], "hide");
      }
    }
  };

  // Show filtered elements
  w3AddClass = (element, name) => {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) {
        element.className += " " + arr2[i];
      }
    }
  };

  // Hide elements that are not selected
  w3RemoveClass = (element, name) => {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);
      }
    }
    element.className = arr1.join(" ");
  };

  render() {
    console.log(this.props.images.data);
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
                          Professional
                          <br />
                          Makeup Artist
                        </h1>
                        <p>
                          Whatever the occasion is, be sure that my
                          <strong>professional makeup</strong> work and products
                          will make you <strong>shine</strong> and stand out!
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
                          Whatever the occasion is, be sure that
                          <strong>my professional</strong> makeup work and
                          products will make you <strong>shine </strong>and
                          stand out!
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
                      Considering just how important the makeup arts are for
                      these industries, the quality of my work was required to
                      match the className. After hundreds of sessions it seems
                      it did!
                    </p>
                    <p className="service-price pb-10">
                      <span className="decor-text">starts from</span>
                      <strong>$156.00</strong>
                    </p>
                    <a className="btn btn-primary" href="#">
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
                    <img src={service1} alt="" />
                  </div>
                  <div className="service-contents">
                    <h1>tv film commercial</h1>
                    <p>
                      Considering just how important the makeup arts are for
                      these industries, the quality of my work was required to
                      match the className. After hundreds of sessions it seems
                      it did!
                    </p>
                    <p className="service-price pb-10">
                      <span className="decor-text">starts from</span>
                      <strong>$156.00</strong>
                    </p>
                    <a className="btn btn-primary" href="#">
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
                    <img src={service1} alt="" />
                  </div>
                  <div className="service-contents">
                    <h1>Special occasions</h1>
                    <p>
                      Considering just how important the makeup arts are for
                      these industries, the quality of my work was required to
                      match the className. After hundreds of sessions it seems
                      it did!
                    </p>
                    <p className="service-price pb-10">
                      <span className="decor-text">starts from</span>
                      <strong>$156.00</strong>
                    </p>
                    <a className="btn btn-primary" href="#">
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
              My Awesome <span>Portfolio</span>
            </h1>
          </div>
          {/*  end section-title */}
          <div className="container">
            {/*  Portfolio items */}
            <ul
              id="portfolio-filter"
              className="portfolio-filter list-inline text-center"
            >
              <li className="filter-buttons current">
                <a
                  href=""
                  data-filter="*"
                  onClick={e => this.filterMe("all", e)}
                >
                  All Works
                </a>
              </li>
              <li className="filter-buttons">
                <a
                  href=""
                  data-filter=".wedding"
                  onClick={e => this.filterMe("wedding", e)}
                >
                  Wedding
                </a>
              </li>
              <li className="filter-buttons">
                <a
                  href=""
                  data-filter=".fashion"
                  onClick={e => this.filterMe("fashion", e)}
                >
                  Hairstyle
                </a>
              </li>
              <li className="filter-buttons">
                <a
                  href=""
                  data-filter=".nature"
                  onClick={e => this.filterMe("nature", e)}
                >
                  Commercial
                </a>
              </li>
              <li className="filter-buttons">
                <a
                  href=""
                  data-filter=".studio"
                  onClick={e => this.filterMe("studio", e)}
                >
                  Studio
                </a>
              </li>
            </ul>
            <div className="portfolio-items row">
              {this.props.images.data &&
                this.props.images.data.map((image, index) => (
                  <div
                    key={index}
                    className={
                      `portfolio-item item ` +
                      image.type +
                      ` wedding col-xs-12 col-sm-6 col-md-4`
                    }
                  >
                    <div
                      className="a-img"
                      style={{ backgroundImage: `url(` + image.url + `)` }}
                    ></div>
                    <a href={image.url} className="mfp-image">
                      <i className="fa fa-search"></i>
                    </a>
                  </div>
                ))}
            </div>
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
                      <img src={clientPhoto} alt="" className="img-circle" />
                    </div>
                    <div className="quote-icons">
                      <i className="fa fa-quote-left" aria-hidden="true"></i>
                    </div>
                    <p className="text-center">
                      Finding the shampoo that is both healthy and nice for your
                      hair is not easy for any woman… So when I found how many
                      hair care products are offered here I was hooked once and
                      for all!
                    </p>
                    <div className="client-title text-center">
                      <strong>Amanda Pool</strong>
                    </div>
                  </div>
                  {/* testmonial-item 1*/}
                  <div className="testimonial-item">
                    <div className="client-img text-center">
                      <img src={clientPhoto} alt="" className="img-circle" />
                    </div>
                    <div className="quote-icons">
                      <i className="fa fa-quote-left" aria-hidden="true"></i>
                    </div>
                    <p className="text-center">
                      Finding the shampoo that is both healthy and nice for your
                      hair is not easy for any woman… So when I found how many
                      hair care products are offered here I was hooked once and
                      for all!
                    </p>
                    <div className="client-title text-center">
                      <strong>Amanda Pool</strong>
                    </div>
                  </div>
                  {/* testmonial-item 2*/}
                  <div className="testimonial-item">
                    <div className="client-img text-center">
                      <img src={clientPhoto} alt="" className="img-circle" />
                    </div>
                    <div className="quote-icons">
                      <i className="fa fa-quote-left" aria-hidden="true"></i>
                    </div>
                    <p className="text-center">
                      Finding the shampoo that is both healthy and nice for your
                      hair is not easy for any woman… So when I found how many
                      hair care products are offered here I was hooked once and
                      for all!
                    </p>
                    <div className="client-title text-center">
                      <strong>Amanda Pool</strong>
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
        <Featured />
        {/* section-logo*/}
        {/* footer is here  */}
      </div>
    );
  }
}

//map state to props
const mapStateToProps = state => ({
  images: state.images.items
});

export default connect(mapStateToProps)(Home);
