import React, { Component } from "react";
import work from "../../images/work.jpg";

import ph1 from "../../images/gallery/1.jpg";

class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
      typeID: ""
    };
  }

  retrieveAllPosts = async () => {
    const URL = "http://127.0.0.1:5000/api/retrieve-images";
    let response = await fetch(URL);
    let data = await response.json();

    if (data.error) {
      alert(data.error.message);
    }

    let d = data.success.data;

    for (let i = 0; i < d.length; i++) {
      this.setState(prevState => ({
        images: [...prevState.images, d[i]]
      }));
    }
  };

  retrieveSpecificPost = async () => {
    console.log("specific post");

    const URL1 = "http://127.0.0.1:5000/api/newsletter";

    let response = await fetch(URL);

    let data = await response.json();

    console.log(data);
  };

  testfunction = () => {
    console.log("test");
  };

  componentDidMount() {
    console.log("inside component did mount");
    this.retrieveAllPosts();
  }

  render() {
    return (
      <div>
        <section
          className="section section-page-title"
          style={{ backgroundImage: `url(${work})` }}
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
              {/* should i put this in a component or will it be faster like this? */}
              {this.state.images &&
                this.state.images.map(image => (
                  <div className="portfolio-item item fashion col-xs-12 col-sm-6 col-md-4">
                    <div
                      className="a-img"
                      style={{ backgroundImage: `url(` + image + `)` }}
                    ></div>
                    <a href={image} className="mfp-image">
                      <i className="fa fa-search"></i>
                    </a>{" "}
                  </div>
                ))}
            </div>
            {/* END Portfolio items */}
          </div>
          {/*container*/}
        </section>
      </div>
    );
  }
}

export default Portfolio;

// <PortfolioImages
//   images={this.state.images}
//   />
