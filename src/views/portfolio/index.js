import React, { Component } from "react";
import camera from "../../images/camera.jpg";
import PortfolioImage from "../../components/portfolioImage";

class Portfolio extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const styles = {
      header: {
        backgroundImage: `url(` + camera + `)`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed"
      },
      content: {
        backgroundColor: "rgba(0, 0, 0, 0.3)"
      }
    };
    return (
      <div>
        <section className="section section-page-title" style={styles.header}>
          <div className="overlay" style={styles.content}>
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
