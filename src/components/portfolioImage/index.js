import React from "react";
import { useSelector } from "react-redux";

const PortfolioImage = () => {
  const images = useSelector(state => state.images.items);
  return (
    <div className="portfolio-items row">
      {images.data &&
        images.data.map((image, index) => (
          <div
            key={index}
            className="portfolio-item item fashion col-xs-12 col-sm-6 col-md-4"
          >
            <div
              className="a-img"
              style={{ backgroundImage: `url(` + image + `)` }}
            ></div>
            <a href={image} className="mfp-image">
              <i className="fa fa-search"></i>
            </a>
          </div>
        ))}
    </div>
  );
};

export default PortfolioImage;
