import React, { Component } from "react";
import "./index.css";
import "../../App.css";
// Images
import bridal from "../../images/bridal-makeup2.jpg";
import special from "../../images/specialo.jpg";
import tv from "../../images/tv-film.jpg";
import model from "../../images/model-photo-shoot.jpg";
import engagement from "../../images/engagement.jpg";
import airbrush from "../../images/airbrush-makeup.jpg";
import MyServices from "../../components/my-services";

class Services extends Component {
  constructor(props) {
    super(props);
    this.state = { displaySection: "Bridal" };
  }
  render() {
    return (
      <div className="services">
        <section className="section section-page-title services-heading my-header">
          <div className="overlay">
            <h1>Services</h1>
          </div>
          {/*overlay*/}
        </section>
        <section className="section">
          <div className="container">
            <div className="row services-sec">
              {this.state.displaySection === "Bridal" && (
                <div className="col-md-8 col-sm-8 pull-right">
                  <p>
                    <img src={bridal} alt="" />
                  </p>
                  <h3>On Location Makeup for the Bride & Bridal Party</h3>
                  <ul>
                    <li>Hair styling</li>
                    <li>Makeup</li>
                    <li>Artificial eyelashes</li>
                  </ul>
                  <h3>Bridal Makeup</h3>
                  <ul>
                    <li>Hair treatment</li>
                    <li>Shampoo & style</li>
                    <li>Custom-fit makeup</li>
                    <li>Artificial Lashes</li>
                  </ul>
                  <h3>Custom Package</h3>
                  <ul>
                    <li>Contact for details</li>
                  </ul>
                </div>
              )}
              {this.state.displaySection === "TV" && (
                <div className="col-md-8 col-sm-8 pull-right">
                  <p>
                    <img src={tv} alt="" />
                  </p>
                  <h3>TV Film Commercial</h3>
                  <ul>
                    <li>On site custom makeup</li>
                    <li>Hair treatment</li>
                    <li>Base hair color</li>
                    <li>Partial foil or full foil</li>
                    <li>Balayage</li>
                    <li>Hair shampoo & style</li>
                    <li>Extensions</li>
                  </ul>
                </div>
              )}
              {this.state.displaySection === "Special" && (
                <div className="col-md-8 col-sm-8 pull-right">
                  <p>
                    <img src={special} alt="" />
                  </p>
                  <h3>Special occasions</h3>
                  <ul>
                    <li>In studio makeup</li>
                    <li>Partial foil or full foil</li>
                    <li>Hair style</li>
                    <li>Balayage</li>
                    <li>Extensions</li>
                  </ul>
                </div>
              )}
              {this.state.displaySection === "Model" && (
                <div className="col-md-8 col-sm-8 pull-right">
                  <p>
                    <img src={model} alt="" />
                  </p>
                  <h3>Model Photo Shoots</h3>
                  <ul>
                    <li>On site or in studio custom makeup</li>
                    <li>Base hair color</li>
                    <li>Balayage</li>
                    <li>Airbrush</li>
                    <li>Hair shampoo & style</li>
                    <li>Extensions</li>
                  </ul>
                </div>
              )}
              {this.state.displaySection === "Engagement" && (
                <div className="col-md-8 col-sm-8 pull-right">
                  <p>
                    <img src={engagement} alt="" />
                  </p>
                  <h3>Engagement</h3>
                  <li>Hair Styling</li>
                  <li>In studio makeup</li>
                  <li>Airbrush</li>
                  <li>Skin care package</li>
                </div>
              )}
              {this.state.displaySection === "Airbrush" && (
                <div className="col-md-8 col-sm-8 pull-right">
                  <p>
                    <img src={airbrush} alt="" />
                  </p>
                  <h3>Airbrush Makeup</h3>
                  <li>In studio makeup</li>
                  <li>Full airbrush</li>
                  <li>Skin care package</li>
                </div>
              )}

              {/* col-md-8*/}
              <div className="col-md-4 col-sm-4 pull-left sticky-bar">
                <ul className="service-list-group">
                  <li>
                    <a
                      href="#/"
                      onClick={() =>
                        this.setState({ displaySection: "Bridal" })
                      }
                    >
                      Bridal Makeup
                    </a>
                  </li>
                  <li>
                    <a
                      href="#/"
                      onClick={() => this.setState({ displaySection: "TV" })}
                    >
                      tv film commercial
                    </a>
                  </li>
                  <li>
                    <a
                      href="#/"
                      onClick={() =>
                        this.setState({ displaySection: "Special" })
                      }
                    >
                      Special occasions
                    </a>
                  </li>
                  <li>
                    <a
                      href="#/"
                      onClick={() => this.setState({ displaySection: "Model" })}
                    >
                      Model Photo Shoots
                    </a>
                  </li>
                  <li>
                    <a
                      href="#/"
                      onClick={() =>
                        this.setState({ displaySection: "Engagement" })
                      }
                    >
                      Engagement Photos
                    </a>
                  </li>
                  <li>
                    <a
                      href="#/"
                      onClick={() =>
                        this.setState({ displaySection: "Airbrush" })
                      }
                    >
                      Airbrush Makeup
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* row*/}
          </div>
          {/* container*/}
        </section>
        {/*section-services*/}
        <section className="section parallax services-image my-header">
          <MyServices />
          {/*overlay*/}
        </section>
        {/*section-paralax*/}
        <section className="section section-pricing">
          {/* section-title */}
          <div className="section-title text-center">
            <h1>View Pricing</h1>
          </div>
          {/* end section-title */}
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="pricing-box pink-bg">
                  <div className="pricing-box-inner">
                    <h3>Standard</h3>
                    <div className="price">
                      <sup className="currency">$</sup>99
                    </div>
                    <ul>
                      <li>Bridal Makeup Trial</li>
                      <li>Hair OR Makeup Trial </li>
                      <li>Complimentary Lashes</li>
                      <li>Bridal Touch up Kit</li>
                      <li>Veil Placement</li>
                    </ul>
                    <div className="pricing-button-box">
                      <a href="/contact" className="btn btn-primary">
                        Get it now!
                      </a>
                    </div>
                    {/*pricing-button-box*/}
                  </div>
                  {/*pricing-inner*/}
                </div>
                {/*pricing-box*/}
              </div>
              {/*col*/}
              <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="pricing-box yellow-bg">
                  <div className="pricing-box-inner">
                    <h3>Premium</h3>
                    <div className="price">
                      <sup className="currency">$</sup>199
                    </div>
                    <ul>
                      <li>Bridal Makeup Trial</li>
                      <li>Hair OR Makeup Trial </li>
                      <li>Complimentary Lashes</li>
                      <li>Bridal Touch up Kit</li>
                      <li>Veil Placement</li>
                    </ul>
                    <div className="pricing-button-box">
                      <a href="/contact" className="btn btn-primary">
                        Get it now!
                      </a>
                    </div>
                    {/*pricing-button-box*/}
                  </div>
                  {/*pricing-inner*/}
                </div>
                {/*pricing-box*/}
              </div>
              {/*col*/}
              <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="pricing-box green-bg">
                  <div className="pricing-box-inner">
                    <h3>Professional</h3>
                    <div className="price">
                      <sup className="currency">$</sup>299
                    </div>
                    <ul>
                      <li>Bridal Makeup Trial</li>
                      <li>Hair OR Makeup Trial </li>
                      <li>Complimentary Lashes</li>
                      <li>Bridal Touch up Kit</li>
                      <li>Veil Placement</li>
                    </ul>
                    <div className="pricing-button-box">
                      <a href="/contact" className="btn btn-primary">
                        Get it now!
                      </a>
                    </div>
                    {/*pricing-button-box*/}
                  </div>
                  {/*pricing-inner*/}
                </div>
                {/*pricing-box*/}
              </div>
              {/*col*/}
              <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="pricing-box blue-bg">
                  <div className="pricing-box-inner">
                    <h3>Extreme</h3>
                    <div className="price">
                      <sup className="currency">$</sup>399
                    </div>
                    <ul>
                      <li>Bridal Makeup Trial</li>
                      <li>Hair OR Makeup Trial </li>
                      <li>Complimentary Lashes</li>
                      <li>Bridal Touch up Kit</li>
                      <li>Veil Placement</li>
                    </ul>
                    <div className="pricing-button-box">
                      <a href="/contact" className="btn btn-primary">
                        Get it now!
                      </a>
                    </div>
                    {/*pricing-button-box*/}
                  </div>
                  {/*pricing-inner*/}
                </div>
                {/*pricing-box*/}
              </div>
              {/*col*/}
            </div>
            {/* row*/}
          </div>
          {/*container*/}
        </section>
      </div> //end services div
    );
  }
}

export default Services;
