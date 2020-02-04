import React from "react";
import { useSelector } from "react-redux";

const PortfolioImage = () => {
  let images = useSelector(state => state.images.items);
  return (
    <div className="portfolio-images">
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
      <div className="portfolio-items row">
        {images.data &&
          images.data.map((image, index) => (
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
    </div>
  );
};

export default PortfolioImage;
