import React from "react";
import PortfolioImage from "../../components/portfolioImage";
import heading_background from "../../images/camera.jpg";
import { PageTitleHeading } from "../../components/pagetitleheading";

const Portfolio = () => {
  return (
    <div>
      <PageTitleHeading page={"Portfolio"} image={heading_background} />
      <section id="gallery" className="section section-gallery">
        <div className="section-title text-center">
          <h1 className="text-center">My Portfolio</h1>
        </div>
        <div className="container">
          <PortfolioImage />
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
