import React, { Component } from "react";
import work from "../../images/port-art.png";
import PortfolioImage from "../../components/portfolioImage";

class Portfolio extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <section
          className="section section-page-title"
          style={{ backgroundImage: `url(` + work + `)` }}
        >
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
  }
}

export default Portfolio;
