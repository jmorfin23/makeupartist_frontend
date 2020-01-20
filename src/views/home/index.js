import React, { Component } from "react";
import Header from "../../components/header";
import Featured from "../../components/featured";
// ========= image imports =========
import clientphoto from "../../images/client.jpg";
import placeholder from "../../images/blog/placeholder.jpg";

import slide1 from "../../images/slide1.jpg";
import slide2 from "../../images/slide2.jpg";

import service1 from "../../images/service1.jpg";

import PortfolioImage from "../../components/portfolioImage";

// ==================================

//Questions:
//imports is there another way for image imports;
//2 image folders issue;
//JQuery
//ads
//mail servers
//adding onclick events is it more efficient just to use //normal javascript or should i have an onClick eventfor each ?
//should i use refs or e.target.element.value?
//arrow functions explain more(thisbindthis), async functions explain more.
//if i have a global state management system like redux should i utilize local state at all or should i keep it compact. ?
//react event listeners? yes or no
//component unmounting.
//with in mail.py backend
//how would we make the site if she wanted to be able to update things on a weekly basis.
//api call for images in top component to send to home page and portfolio page.

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
              {" "}
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
                          Whatever the occasion is, be sure that my{" "}
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
              {" "}
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
                          Whatever the occasion is, be sure that{" "}
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
            {" "}
            <span className="fa fa-angle-left" aria-hidden="true"></span>{" "}
          </a>{" "}
          <a
            className="right carousel-control"
            href="#mycarousel"
            role="button"
            data-slide="next"
          >
            {" "}
            <span className="fa fa-angle-right" aria-hidden="true"></span>{" "}
          </a>{" "}
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
                      <span className="decor-text">starts from</span>{" "}
                      <strong>$156.00</strong>
                    </p>
                    <a className="btn btn-primary" href="#">
                      Read More{" "}
                      <i
                        className="fa fa-angle-double-right"
                        aria-hidden="true"
                      ></i>{" "}
                    </a>{" "}
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
                      <span className="decor-text">starts from</span>{" "}
                      <strong>$156.00</strong>
                    </p>
                    <a className="btn btn-primary" href="#">
                      Read More{" "}
                      <i
                        className="fa fa-angle-double-right"
                        aria-hidden="true"
                      ></i>{" "}
                    </a>{" "}
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
                      <span className="decor-text">starts from</span>{" "}
                      <strong>$156.00</strong>
                    </p>
                    <a className="btn btn-primary" href="#">
                      Read More{" "}
                      <i
                        className="fa fa-angle-double-right"
                        aria-hidden="true"
                      ></i>{" "}
                    </a>{" "}
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
            <ul className="portfolio-filter list-inline text-center">
              <li className="current">
                <a href="" data-filter="*">
                  All Works
                </a>
              </li>
              <li className="">
                <a href="" data-filter=".wedding">
                  Wedding
                </a>
              </li>
              <li className="">
                <a href="" data-filter=".fashion">
                  Hairstyle
                </a>
              </li>
              <li className="">
                <a href="" data-filter=".nature">
                  Commercial
                </a>
              </li>
              <li className="">
                <a href="" data-filter=".studio">
                  Studio
                </a>
              </li>
            </ul>
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
                      <img src={clientphoto} alt="" className="img-circle" />
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
                      <img src={clientphoto} alt="" className="img-circle" />
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
                      <img src={clientphoto} alt="" className="img-circle" />
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
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <div className="post-entry">
                  <div className="post-thumbnail">
                    {" "}
                    <img src={placeholder} alt="" />{" "}
                    <a href="#">
                      {" "}
                      <i className="fa fa-link"></i>{" "}
                    </a>{" "}
                  </div>
                  {/* post-thumbnial*/}
                  <h2>
                    {" "}
                    <a href="#">How to wash and style curly hair</a>{" "}
                  </h2>
                  <ul className="entry-meta">
                    <li>
                      {" "}
                      <i className="fa fa-calendar"></i>07 June 2014{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fa fa-comments"></i>{" "}
                      <a href="#">7 Comments</a>{" "}
                    </li>
                  </ul>
                  <p>
                    In recent years, an increasingly big number of African
                    American women take a fashion decision to return to their
                    natural...
                  </p>
                  <a className="btn btn-primary" href="post.html">
                    Read More{" "}
                  </a>{" "}
                </div>
                {/* post-entry*/}
              </div>
              {/* end col*/}
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <div className="post-entry">
                  <div className="post-thumbnail">
                    {" "}
                    <img src={placeholder} alt="" />{" "}
                    <a href="#">
                      {" "}
                      <i className="fa fa-link"></i>{" "}
                    </a>{" "}
                  </div>
                  {/* post-thumbnial*/}
                  <h2>
                    {" "}
                    <a href="#">Returning to a natural hair texture</a>{" "}
                  </h2>
                  <ul className="entry-meta">
                    <li>
                      {" "}
                      <i className="fa fa-calendar"></i>07 June 2014{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fa fa-comments"></i>{" "}
                      <a href="#">9 Comments</a>{" "}
                    </li>
                  </ul>
                  <p>
                    In recent years, an increasingly big number of African
                    American women take a fashion decision to return to their
                    natural...
                  </p>
                  <a className="btn btn-primary" href="post.html">
                    Read More{" "}
                  </a>{" "}
                </div>
                {/* post-entry*/}
              </div>
              {/* end col*/}
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <div className="post-entry">
                  <div className="post-thumbnail">
                    {" "}
                    <img src={placeholder} alt="" />{" "}
                    <a href="#">
                      {" "}
                      <i className="fa fa-link"></i>{" "}
                    </a>{" "}
                  </div>
                  {/* post-thumbnial*/}
                  <h2>
                    {" "}
                    <a href="#">Winterish version of rainbow hair?</a>{" "}
                  </h2>
                  <ul className="entry-meta">
                    <li>
                      {" "}
                      <i className="fa fa-calendar"></i>07 June 2014{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fa fa-comments"></i>{" "}
                      <a href="#">3 Comments</a>{" "}
                    </li>
                  </ul>
                  <p>
                    In recent years, an increasingly big number of African
                    American women take a fashion decision to return to their
                    natural...{" "}
                  </p>
                  <a className="btn btn-primary" href="post.html">
                    Read More{" "}
                  </a>{" "}
                </div>
                {/* post-entry*/}
              </div>
              {/* end col*/}
            </div>
            {/* row*/}
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

export default Home;
