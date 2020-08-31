import React from "react";
import slide1 from "../../images/portrait.jpg";
import slide2 from "../../images/slide-img2.jpg";

const Carousel = () => {
  return (
    <div
      id="mycarousel"
      className="carousel slide carousel-fade"
      data-ride="carousel"
    >
      {/*  Indicators */}
      <ol className="carousel-indicators">
        <li data-target="#mycarousel" data-slide-to="0" className="active"></li>
        <li data-target="#mycarousel" data-slide-to="1"></li>
      </ol>
      {/*  Wrapper for slides */}
      <div className="carousel-inner" role="listbox">
        <div className="item">
          <img src={slide1} alt="heading" />
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
                      <strong>Specialized</strong> services that will make you
                      <strong> shine</strong> on your special occasion.
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
  );
};

export default Carousel;
