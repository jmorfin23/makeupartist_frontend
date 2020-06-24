import React, { Component } from "react";
import service from "../../images/makeup.jpg";
import service1 from "../../images/service1.jpg";
import bridal from "../../images/bridal-makeup2.jpg";
import special from "../../images/specialo.jpg";
import tv from "../../images/tv-film.jpg";
import model from "../../images/model-photo-shoot.jpg";
import engagement from "../../images/engagement.jpg";
import airbrush from "../../images/airbrush-makeup.jpg";
import "./index.css";

class Services extends Component {
  constructor(props) {
    super(props);
    this.state = { displaySection: "Bridal" };
  }
  render() {
    const styles = {
      header: {
        backgroundImage: `url( ` + service + `)`,
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
      <div className="services">
        <section className="section section-page-title" style={styles.header}>
          <div className="overlay" style={styles.content}>
            <h1>Services</h1>
          </div>
          {/*overlay*/}
        </section>
        <section className="section">
          <div className="container">
            <div className="row">
              {this.state.displaySection == "Bridal" && (
                <div className="col-md-8 col-sm-8 pull-right">
                  <p>
                    <img src={bridal} alt="" />
                  </p>
                  <h3>On Location Makeup for the Bride & Bridal Party</h3>
                  <p>
                    Donec laoreet malesuada varius. Aenean sit amet neque in est
                    feugiat auctor. Vivamus condimentum consectetur sem vel
                    tempor. Etiam et porta quam. Aliquam erat volutpat. Sed ut
                    odio quis magna fringilla sodales a sed quam. Maecenas
                    sollicitudin volutpat egestas. Nam quis purus ac purus
                    tempus.
                  </p>
                  <h3>Bridal Makeup</h3>
                  <p>
                    Ut in lorem consequat, elementum ligula id, cursus leo. Nam
                    eu ex eget metus rhoncus sollicitudin vel eu nunc. Orci
                    varius natoque penatibus et magnis dis parturient montes,
                    nascetur ridiculus mus. Nunc mollis purus nibh, non viverra
                    ipsum condimentum vitae. Praesent consequat, ante laoreet
                    pulvinar cursus, urna lectus aliquam nunc, a viverra turpis
                    ipsum rhoncus mauris. Sed a massa consequat, mattis tortor
                    sed, tincidunt nunc. Pellentesque aliquet sem iaculis,
                    ultrices dolor eget, consequat mauris.
                  </p>
                  <h3>Perfect Wedding Make Up</h3>
                  <p>
                    Donec laoreet malesuada varius. Aenean sit amet neque in est
                    feugiat auctor. Vivamus condimentum consectetur sem vel
                    tempor. Etiam et porta quam. Aliquam erat volutpat. Sed ut
                    odio quis magna fringilla sodales a sed quam. Maecenas
                    sollicitudin volutpat egestas. Nam quis purus ac purus
                    tempus iaculis.
                  </p>
                </div>
              )}
              {this.state.displaySection == "TV" && (
                <div className="col-md-8 col-sm-8 pull-right">
                  <p>
                    <img src={tv} alt="" />
                  </p>
                  <h3>TV Film Commercial</h3>
                  <p>
                    Donec laoreet malesuada varius. Aenean sit amet neque in est
                    feugiat auctor. Vivamus condimentum consectetur sem vel
                    tempor. Etiam et porta quam. Aliquam erat volutpat. Sed ut
                    odio quis magna fringilla sodales a sed quam. Maecenas
                    sollicitudin volutpat egestas. Nam quis purus ac purus
                    tempus.
                  </p>
                  <h3>Bridal Makeup</h3>
                  <p>
                    Ut in lorem consequat, elementum ligula id, cursus leo. Nam
                    eu ex eget metus rhoncus sollicitudin vel eu nunc. Orci
                    varius natoque penatibus et magnis dis parturient montes,
                    nascetur ridiculus mus. Nunc mollis purus nibh, non viverra
                    ipsum condimentum vitae. Praesent consequat, ante laoreet
                    pulvinar cursus, urna lectus aliquam nunc, a viverra turpis
                    ipsum rhoncus mauris. Sed a massa consequat, mattis tortor
                    sed, tincidunt nunc. Pellentesque aliquet sem iaculis,
                    ultrices dolor eget, consequat mauris.
                  </p>
                  <h3>Perfect Wedding Make Up</h3>
                  <p>
                    Donec laoreet malesuada varius. Aenean sit amet neque in est
                    feugiat auctor. Vivamus condimentum consectetur sem vel
                    tempor. Etiam et porta quam. Aliquam erat volutpat. Sed ut
                    odio quis magna fringilla sodales a sed quam. Maecenas
                    sollicitudin volutpat egestas. Nam quis purus ac purus
                    tempus iaculis.
                  </p>
                </div>
              )}
              {this.state.displaySection == "Special" && (
                <div className="col-md-8 col-sm-8 pull-right">
                  <p>
                    <img src={special} alt="" />
                  </p>
                  <h3>Special occasions</h3>
                  <p>
                    Donec laoreet malesuada varius. Aenean sit amet neque in est
                    feugiat auctor. Vivamus condimentum consectetur sem vel
                    tempor. Etiam et porta quam. Aliquam erat volutpat. Sed ut
                    odio quis magna fringilla sodales a sed quam. Maecenas
                    sollicitudin volutpat egestas. Nam quis purus ac purus
                    tempus.
                  </p>
                  <h3>Bridal Makeup</h3>
                  <p>
                    Ut in lorem consequat, elementum ligula id, cursus leo. Nam
                    eu ex eget metus rhoncus sollicitudin vel eu nunc. Orci
                    varius natoque penatibus et magnis dis parturient montes,
                    nascetur ridiculus mus. Nunc mollis purus nibh, non viverra
                    ipsum condimentum vitae. Praesent consequat, ante laoreet
                    pulvinar cursus, urna lectus aliquam nunc, a viverra turpis
                    ipsum rhoncus mauris. Sed a massa consequat, mattis tortor
                    sed, tincidunt nunc. Pellentesque aliquet sem iaculis,
                    ultrices dolor eget, consequat mauris.
                  </p>
                  <h3>Perfect Wedding Make Up</h3>
                  <p>
                    Donec laoreet malesuada varius. Aenean sit amet neque in est
                    feugiat auctor. Vivamus condimentum consectetur sem vel
                    tempor. Etiam et porta quam. Aliquam erat volutpat. Sed ut
                    odio quis magna fringilla sodales a sed quam. Maecenas
                    sollicitudin volutpat egestas. Nam quis purus ac purus
                    tempus iaculis.
                  </p>
                </div>
              )}
              {this.state.displaySection == "Model" && (
                <div className="col-md-8 col-sm-8 pull-right">
                  <p>
                    <img src={model} alt="" />
                  </p>
                  <h3>Model Photo Shoots</h3>
                  <p>
                    Donec laoreet malesuada varius. Aenean sit amet neque in est
                    feugiat auctor. Vivamus condimentum consectetur sem vel
                    tempor. Etiam et porta quam. Aliquam erat volutpat. Sed ut
                    odio quis magna fringilla sodales a sed quam. Maecenas
                    sollicitudin volutpat egestas. Nam quis purus ac purus
                    tempus.
                  </p>
                  <h3>Bridal Makeup</h3>
                  <p>
                    Ut in lorem consequat, elementum ligula id, cursus leo. Nam
                    eu ex eget metus rhoncus sollicitudin vel eu nunc. Orci
                    varius natoque penatibus et magnis dis parturient montes,
                    nascetur ridiculus mus. Nunc mollis purus nibh, non viverra
                    ipsum condimentum vitae. Praesent consequat, ante laoreet
                    pulvinar cursus, urna lectus aliquam nunc, a viverra turpis
                    ipsum rhoncus mauris. Sed a massa consequat, mattis tortor
                    sed, tincidunt nunc. Pellentesque aliquet sem iaculis,
                    ultrices dolor eget, consequat mauris.
                  </p>
                  <h3>Perfect Wedding Make Up</h3>
                  <p>
                    Donec laoreet malesuada varius. Aenean sit amet neque in est
                    feugiat auctor. Vivamus condimentum consectetur sem vel
                    tempor. Etiam et porta quam. Aliquam erat volutpat. Sed ut
                    odio quis magna fringilla sodales a sed quam. Maecenas
                    sollicitudin volutpat egestas. Nam quis purus ac purus
                    tempus iaculis.
                  </p>
                </div>
              )}
              {this.state.displaySection == "Engagement" && (
                <div className="col-md-8 col-sm-8 pull-right">
                  <p>
                    <img src={engagement} alt="" />
                  </p>
                  <h3>Engagement</h3>
                  <p>
                    Donec laoreet malesuada varius. Aenean sit amet neque in est
                    feugiat auctor. Vivamus condimentum consectetur sem vel
                    tempor. Etiam et porta quam. Aliquam erat volutpat. Sed ut
                    odio quis magna fringilla sodales a sed quam. Maecenas
                    sollicitudin volutpat egestas. Nam quis purus ac purus
                    tempus.
                  </p>
                  <h3>Bridal Makeup</h3>
                  <p>
                    Ut in lorem consequat, elementum ligula id, cursus leo. Nam
                    eu ex eget metus rhoncus sollicitudin vel eu nunc. Orci
                    varius natoque penatibus et magnis dis parturient montes,
                    nascetur ridiculus mus. Nunc mollis purus nibh, non viverra
                    ipsum condimentum vitae. Praesent consequat, ante laoreet
                    pulvinar cursus, urna lectus aliquam nunc, a viverra turpis
                    ipsum rhoncus mauris. Sed a massa consequat, mattis tortor
                    sed, tincidunt nunc. Pellentesque aliquet sem iaculis,
                    ultrices dolor eget, consequat mauris.
                  </p>
                  <h3>Perfect Wedding Make Up</h3>
                  <p>
                    Donec laoreet malesuada varius. Aenean sit amet neque in est
                    feugiat auctor. Vivamus condimentum consectetur sem vel
                    tempor. Etiam et porta quam. Aliquam erat volutpat. Sed ut
                    odio quis magna fringilla sodales a sed quam. Maecenas
                    sollicitudin volutpat egestas. Nam quis purus ac purus
                    tempus iaculis.
                  </p>
                </div>
              )}
              {this.state.displaySection == "Airbrush" && (
                <div className="col-md-8 col-sm-8 pull-right">
                  <p>
                    <img src={airbrush} alt="" />
                  </p>
                  <h3>Airbrush Makeup</h3>
                  <p>
                    Donec laoreet malesuada varius. Aenean sit amet neque in est
                    feugiat auctor. Vivamus condimentum consectetur sem vel
                    tempor. Etiam et porta quam. Aliquam erat volutpat. Sed ut
                    odio quis magna fringilla sodales a sed quam. Maecenas
                    sollicitudin volutpat egestas. Nam quis purus ac purus
                    tempus.
                  </p>
                  <h3>Bridal Makeup</h3>
                  <p>
                    Ut in lorem consequat, elementum ligula id, cursus leo. Nam
                    eu ex eget metus rhoncus sollicitudin vel eu nunc. Orci
                    varius natoque penatibus et magnis dis parturient montes,
                    nascetur ridiculus mus. Nunc mollis purus nibh, non viverra
                    ipsum condimentum vitae. Praesent consequat, ante laoreet
                    pulvinar cursus, urna lectus aliquam nunc, a viverra turpis
                    ipsum rhoncus mauris. Sed a massa consequat, mattis tortor
                    sed, tincidunt nunc. Pellentesque aliquet sem iaculis,
                    ultrices dolor eget, consequat mauris.
                  </p>
                  <h3>Perfect Wedding Make Up</h3>
                  <p>
                    Donec laoreet malesuada varius. Aenean sit amet neque in est
                    feugiat auctor. Vivamus condimentum consectetur sem vel
                    tempor. Etiam et porta quam. Aliquam erat volutpat. Sed ut
                    odio quis magna fringilla sodales a sed quam. Maecenas
                    sollicitudin volutpat egestas. Nam quis purus ac purus
                    tempus iaculis.
                  </p>
                </div>
              )}

              {/* col-md-8*/}
              <div className="col-md-4 col-sm-4 pull-left holdit">
                <ul className="service-list-group">
                  <li>
                    <a
                      onClick={() =>
                        this.setState({ displaySection: "Bridal" })
                      }
                    >
                      Bridal Makeup
                    </a>
                  </li>
                  <li>
                    <a onClick={() => this.setState({ displaySection: "TV" })}>
                      tv film commercial
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() =>
                        this.setState({ displaySection: "Special" })
                      }
                    >
                      Special occasions
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => this.setState({ displaySection: "Model" })}
                    >
                      Model Photo Shoots
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() =>
                        this.setState({ displaySection: "Engagement" })
                      }
                    >
                      Engagement Photos
                    </a>
                  </li>
                  <li>
                    <a
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
        <section className="section parallax">
          <div className="overlay">
            <div className="container">
              <h1 className="pb-20">
                Offering Makeup and Hair Stylist Services
              </h1>
              <p className="max-500 intro pb-20">
                Japanese nail art design is a trend that increases its
                popularity every year. It plays a major role in trend-setting
                fashion, and is the top choice in nail art competitions.
              </p>
              <a className="btn btn-primary btn-rounded btn-pink" href="#">
                Book Now!
              </a>
            </div>
            {/*container*/}
          </div>
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
                      <a className="btn btn-primary">Get it now!</a>
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
                      <a className="btn btn-primary">Get it now!</a>
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
                      <a className="btn btn-primary">Get it now!</a>
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
                      <a className="btn btn-primary">Get it now!</a>
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
