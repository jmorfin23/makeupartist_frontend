import React, { Component } from "react";
import work from "../../images/work.jpg";
import PortfolioImage from "../../components/portfolioImage";
import PortfolioModal from "../../components/portfolioModal";

class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalToggle: false
    };
  }

  toggleModal = () => {
    console.log("toggleModal");
    this.setState({ modalToggle: !this.state.modalToggle });
  };
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
        <button onClick={() => this.toggleModal()}>Press me</button>
        <PortfolioModal
          show={this.state.modalToggle}
          toggleModal={() => this.toggleModal()}
        />
      </div>
    );
  }
}

export default Portfolio;
