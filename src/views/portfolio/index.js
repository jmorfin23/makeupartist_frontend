import React from "react";
import PortfolioImage from "../../components/portfolioImage";
import heading_background from "../../images/camera.jpg";
import { PageTitleHeading } from "../../components/pagetitleheading";

const Portfolio = () => {
  return (
    <div>
      <PageTitleHeading page={"Portfolio"} image={heading_background} />
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
