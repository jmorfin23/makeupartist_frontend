import React, { Component } from "react";
import work from "../../images/work.jpg";
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
            <ul className="portfolio-filter list-inline text-center">
              {/* * deleted the 'current class' * */}
              <li className="">
                <a href="" data-filter="*">
                  All Works
                </a>
              </li>
              <li className="filter-">
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
            {/* END Portfolio items */}
          </div>
          {/*container*/}
        </section>
      </div>
    );
  }
}

export default Portfolio;
