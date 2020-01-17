import React from "react";

const PortfolioImage = props => {
  return (
    <div className="portfolio-items row">
      {props.images &&
        props.images.map(image => (
          <div className="portfolio-item item fashion col-xs-12 col-sm-6 col-md-4">
            <div
              className="a-img"
              style={{ backgroundImage: `url(` + image + `)` }}
            ></div>
            <a href={image} className="mfp-image">
              <i className="fa fa-search"></i>
            </a>{" "}
          </div>
        ))}
    </div>
  );
};

export default PortfolioImage;
