import React from "react";
import "./index.css";
import "../../App.css";
import PortfolioImage from "../../components/portfolioImage";

const Portfolio = () => {
  return (
    <div>
      <section className="section section-page-title my-header portfolio-heading">
        <div className="overlay">
          <h1>Portfolio</h1>
        </div>
        {/*overlay*/}
      </section>
      <section id="gallery" className="section section-gallery">
        {/* section-title */}
        <div className="section-title text-center">
          <h1 className="text-center">My Portfolio</h1>
        </div>
        {/* end section-title */}
        <div className="container">
          {/* Portfolio items */}
          <PortfolioImage />
          {/* END Portfolio items */}
        </div>
        {/*container*/}
      </section>
    </div>
  );
};

export default Portfolio;
