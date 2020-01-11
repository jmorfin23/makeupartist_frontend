import React, { Component } from 'react';
import Header from '../../components/header';
import Featured from '../../components/featured';
// ========= image imports =========
import clientphoto from '../../images/client.jpg';
import placeholder from '../../images/blog/placeholder.jpg';

import ph1 from '../../images/gallery/1.jpg';
import ph2 from '../../images/gallery/2.jpg';
import ph3 from '../../images/gallery/3.jpg';
import ph4 from '../../images/gallery/4.jpg';
import ph5 from '../../images/gallery/5.jpg';
import ph6 from '../../images/gallery/6.jpg';
import ph7 from '../../images/gallery/7.jpg';
import ph8 from '../../images/gallery/8.jpg';
import ph9 from '../../images/gallery/9.jpg';

import slide1 from '../../images/slide1.jpg';
import slide2 from '../../images/slide2.jpg';

import service1 from '../../images/service1.jpg';

// ==================================

//Questions:
//imports is there another way for image imports;
//2 image folders issue;
//JQuery
//ads






class Home extends Component {
  render() {
    return (
      <div className="homepage">
      <div className="preloader">
        <div className="animation circle"></div>
      </div>
      {/* ============== end preloader ============== */}

      <div id="mycarousel" className="carousel slide carousel-fade" data-ride="carousel">
        {/*  Indicators */}
        <ol className="carousel-indicators">
          <li data-target="#mycarousel" data-slide-to="0" className="active"></li>
          <li data-target="#mycarousel" data-slide-to="1"></li>
        </ol>
        {/*  Wrapper for slides */}
        <div className="carousel-inner" role="listbox">
          <div className="item"> <img src={slide1} alt="First Image" />
            <div className="carousel-caption">
              <div className="carousel-caption-inner">
                <div className="container">
                  <div className="row">
                    <div className="col-md-5 col-md-offset-7">
                      <h1>Professional<br/>
                        Makeup Artist</h1>
                      <p>Whatever the occasion is, be sure that my <strong>professional makeup</strong> work and products will make you <strong>shine</strong> and stand out!</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* carousel-caption-inner*/}
            </div>
            {/* carousel-caption*/}
          </div>
          {/* item 1*/}
          <div className="item"> <img src={slide2} alt="" />
            <div className="carousel-caption">
              <div className="carousel-caption-inner">
                <div className="container">
                  <div className="row">
                    <div className="col-md-5">
                      <h1>Professional<br/>
                        Makeup Artist</h1>
                      <p>Whatever the occasion is, be sure that <strong>my professional</strong> makeup work and products will make you <strong>shine </strong>and stand out!</p>
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
        <a className="left carousel-control" href="#mycarousel" role="button" data-slide="prev"> <span className="fa fa-angle-left" aria-hidden="true"></span> </a> <a className="right carousel-control" href="#mycarousel" role="button" data-slide="next"> <span className="fa fa-angle-right" aria-hidden="true"></span> </a> </div>
      {/* mycarousel*/}
      <section className="section section-services">
        {/*  section-title */}
        <div className="section-title text-center">
          <h1 className="decor">Makeup and Hair <span>Stylist Services</span></h1>
        </div>
        {/*  end section-title */}
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <div className="service-box service-color-one">
                <div className="service-img"><img src={service1} alt=""/></div>
                <div className="service-contents">
                  <h1>Bridal Makeup</h1>
                  <p>Considering just how important the makeup arts are for these industries, the quality of my work was required to match the className. After hundreds of sessions it seems it did!</p>
                  <p className="service-price pb-10"><span className="decor-text">starts from</span> <strong>$156.00</strong></p>
                  <a className="btn btn-primary" href="#">Read More <i className="fa fa-angle-double-right" aria-hidden="true"></i> </a> </div>
                {/* service-contents*/}
              </div>
              {/* service-box*/}
            </div>
            {/* col-md-4*/}
            <div className="col-md-4 col-sm-6">
              <div className="service-box service-color-two">
                <div className="service-img"><img src={service1} alt=""/></div>
                <div className="service-contents">
                  <h1>tv film commercial</h1>
                  <p>Considering just how important the makeup arts are for these industries, the quality of my work was required to match the className. After hundreds of sessions it seems it did!</p>
                  <p className="service-price pb-10"><span className="decor-text">starts from</span> <strong>$156.00</strong></p>
                  <a className="btn btn-primary" href="#">Read More <i className="fa fa-angle-double-right" aria-hidden="true"></i> </a> </div>
                {/* service-contents*/}
              </div>
              {/* service-box*/}
            </div>
            {/* col-md-4*/}
            <div className="col-md-4 col-sm-6">
              <div className="service-box service-color-three">
                <div className="service-img"><img src={service1} alt=""/></div>
                <div className="service-contents">
                  <h1>Special occasions</h1>
                  <p>Considering just how important the makeup arts are for these industries, the quality of my work was required to match the className. After hundreds of sessions it seems it did!</p>
                  <p className="service-price pb-10"><span className="decor-text">starts from</span> <strong>$156.00</strong></p>
                  <a className="btn btn-primary" href="#">Read More <i className="fa fa-angle-double-right" aria-hidden="true"></i> </a> </div>
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
          <h1 className="text-center decor">My Awesome <span>Portfolio</span></h1>
        </div>
        {/*  end section-title */}
        <div className="container">
          {/*  Portfolio items */}
          <ul className="portfolio-filter list-inline text-center">
            <li className="current"><a href="" data-filter="*">All Works</a></li>
            <li className=""><a href="" data-filter=".wedding">Wedding</a></li>
            <li className=""><a href="" data-filter=".fashion">Hairstyle</a></li>
            <li className=""><a href="" data-filter=".nature">Commercial</a></li>
            <li className=""><a href="" data-filter=".studio">Studio</a></li>
          </ul>
          <div className="portfolio-items row">
            <div className="portfolio-item item height-2x fashion col-xs-12 col-sm-6 col-md-4">
              <div className="a-img" style={{ backgroundImage: `url( ${ph1})` }}></div>
              <a href={ph1} className="mfp-image"><i className="fa fa-search"></i></a> </div>
            <div className="portfolio-item item wedding col-xs-12 col-sm-6 col-md-4">
              <div className="a-img" style={{ backgroundImage: `url( ${ph2})`}}></div>
              <a href={ph2} className="mfp-image"><i className="fa fa-search"></i></a> </div>
            <div className="portfolio-item item nature col-xs-12 col-sm-6 col-md-4">
              <div className="a-img" style={{ backgroundImage: `url( ${ph3})`}}></div>
              <a href={ph3} className="mfp-image"><i className="fa fa-search"></i></a> </div>
            <div className="portfolio-item item studio col-xs-12 col-sm-6 col-md-4">
              <div className="a-img" style={{backgroundImage: `url( ${ph4})` }}></div>
              <a href={ph4} className="mfp-image"><i className="fa fa-search"></i></a> </div>
            <div className="portfolio-item item fashion col-xs-12 col-sm-6 col-md-4">
              <div className="a-img" style={{backgroundImage: `url( ${ph5})`}}></div>
              <a href={ph5} className="mfp-image"><i className="fa fa-search"></i></a> </div>
            <div className="portfolio-item item width-2x wedding col-xs-12 col-sm-6 col-md-8">
              <div className="a-img" style={{backgroundImage: `url( ${ph6})` }}></div>
              <a href={ph6} className="mfp-image"><i className="fa fa-search"></i></a> </div>
            <div className="portfolio-item item height-2x nature col-xs-12 col-sm-6 col-md-4">
              <div className="a-img" style={{backgroundImage: `url( ${ph7})` }}></div>
              <a href={ph7} className="mfp-image"><i className="fa fa-search"></i></a> </div>
            <div className="portfolio-item item studio col-xs-12 col-sm-6 col-md-4">
              <div className="a-img" style={{backgroundImage: `url( ${ph8})` }}></div>
              <a href={ph8} className="mfp-image"><i className="fa fa-search"></i></a> </div>
            <div className="portfolio-item item fashion col-xs-12 col-sm-6 col-md-4">
              <div className="a-img" style={{backgroundImage: `url( ${ph9})` }}></div>
              <a href={ph9} className="mfp-image"><i className="fa fa-search"></i></a> </div>
          </div>
          {/*  END Portfolio items */}
        </div>
        {/* container*/}
      </section>
      {/* section-gallery*/}
      <section className="section section-testimonials">
        {/*  section-title */}
        <div className="section-title text-center">
          <h1>Customer <span>saying</span></h1>
        </div>
        {/*  end section-title */}
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <div id="testimonial-carousel" className="testimonial-carousel owl-carousel owl-theme">
                <div className="testimonial-item">
                  <div className="client-img text-center"><img src={clientphoto} alt="" className="img-circle" /></div>
                  <div className="quote-icons"><i className="fa fa-quote-left" aria-hidden="true"></i></div>
                  <p className="text-center">Finding the shampoo that is both healthy and nice for your hair is not easy for any woman… So when I found how many hair care products are offered here I was hooked once and for all!</p>
                  <div className="client-title text-center"><strong>Amanda Pool</strong></div>
                </div>
                {/* testmonial-item 1*/}
                <div className="testimonial-item">
                  <div className="client-img text-center"><img src={clientphoto} alt="" className="img-circle" /></div>
                  <div className="quote-icons"><i className="fa fa-quote-left" aria-hidden="true"></i></div>
                  <p className="text-center">Finding the shampoo that is both healthy and nice for your hair is not easy for any woman… So when I found how many hair care products are offered here I was hooked once and for all!</p>
                  <div className="client-title text-center"><strong>Amanda Pool</strong></div>
                </div>
                {/* testmonial-item 2*/}
                <div className="testimonial-item">
                  <div className="client-img text-center"><img src={clientphoto} alt="" className="img-circle" /></div>
                  <div className="quote-icons"><i className="fa fa-quote-left" aria-hidden="true"></i></div>
                  <p className="text-center">Finding the shampoo that is both healthy and nice for your hair is not easy for any woman… So when I found how many hair care products are offered here I was hooked once and for all!</p>
                  <div className="client-title text-center"><strong>Amanda Pool</strong></div>
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
          <h1 className="decor">See what’s new on <span>my Blog</span></h1>
        </div>
        {/*  end section-title */}
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <div className="post-entry">
                <div className="post-thumbnail"> <img src={placeholder} alt=""/> <a href="#"> <i className="fa fa-link"></i> </a> </div>
                {/* post-thumbnial*/}
                <h2> <a href="#">How to wash and style curly hair</a> </h2>
                <ul className="entry-meta">
                  <li> <i className="fa fa-calendar"></i>07 June 2014 </li>
                  <li> <i className="fa fa-comments"></i> <a href="#">7 Comments</a> </li>
                </ul>
                <p>In recent years, an increasingly big number of African American women take a fashion decision to return to their natural...</p>
                <a className="btn btn-primary" href="post.html">Read More </a> </div>
              {/* post-entry*/}
            </div>
            {/* end col*/}
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <div className="post-entry">
                <div className="post-thumbnail"> <img src={placeholder} alt=""/> <a href="#"> <i className="fa fa-link"></i> </a> </div>
                {/* post-thumbnial*/}
                <h2> <a href="#">Returning to a natural hair texture</a> </h2>
                <ul className="entry-meta">
                  <li> <i className="fa fa-calendar"></i>07 June 2014 </li>
                  <li> <i className="fa fa-comments"></i> <a href="#">9 Comments</a> </li>
                </ul>
                <p>In recent years, an increasingly big number of African American women take a fashion decision to return to their natural...</p>
                <a className="btn btn-primary" href="post.html">Read More </a> </div>
              {/* post-entry*/}
            </div>
            {/* end col*/}
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <div className="post-entry">
                <div className="post-thumbnail"> <img src={placeholder} alt=""/> <a href="#"> <i className="fa fa-link"></i> </a> </div>
                {/* post-thumbnial*/}
                <h2> <a href="#">Winterish version of rainbow hair?</a> </h2>
                <ul className="entry-meta">
                  <li> <i className="fa fa-calendar"></i>07 June 2014 </li>
                  <li> <i className="fa fa-comments"></i> <a href="#">3 Comments</a> </li>
                </ul>
                <p>In recent years, an increasingly big number of African American women take a fashion decision to return to their natural... </p>
                <a className="btn btn-primary" href="post.html">Read More </a> </div>
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
