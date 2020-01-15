import React, { Component } from 'react';
import work from '../../images/work.jpg';

import ph1 from '../../images/gallery/1.jpg';
import ph2 from '../../images/gallery/2.jpg';
import ph3 from '../../images/gallery/3.jpg';
import ph4 from '../../images/gallery/4.jpg';
import ph5 from '../../images/gallery/5.jpg';
import ph6 from '../../images/gallery/6.jpg';
import ph7 from '../../images/gallery/7.jpg';
import ph8 from '../../images/gallery/8.jpg';
import ph9 from '../../images/gallery/9.jpg';


class Portfolio extends Component {

  constructor(props) {
    super(props);

    this.state = {
      typeID: ''
    }
  }

  retrieveAllPosts = async() => {
    console.log('retrieve all posts');

    const URL = 'http://127.0.0.1:5000/api/retrieve-images';

    let response = await fetch(URL);

    let data = await response.json();

    console.log(data);
  }

  componentDidMount() {
    console.log('inside component did mount');
    this.retrieveAllPosts();
  }


  render() {
    return(
      <div>
      <section className="section section-page-title" style={{backgroundImage: `url(${work})` }}>
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
            <li className="current"><a href="" data-filter="*">All Works</a></li>
            <li className=""><a href="" data-filter=".wedding">Wedding</a></li>
            <li className=""><a href="" data-filter=".fashion">Hairstyle</a></li>
            <li className=""><a href="" data-filter=".nature">Commercial</a></li>
            <li className=""><a href="" data-filter=".studio">Studio</a></li>
          </ul>
          <div className="portfolio-items row">
            <div className="portfolio-item item height-2x fashion col-xs-12 col-sm-6 col-md-4">
              <div className="a-img" style={{ backgroundImage: `url( ${ph1})` }}></div>
              <a href={ph1} className="mfp-image"><i className="fa fa-search"></i></a> </div>
            <div className="portfolio-item item wedding col-xs-12 col-sm-6 col-md-4">
              <div className="a-img" style={{ backgroundImage: `url( ${ph2})` }}></div>
              <a href={ph2} className="mfp-image"><i className="fa fa-search"></i></a> </div>
            <div className="portfolio-item item nature col-xs-12 col-sm-6 col-md-4">
              <div className="a-img" style={{ backgroundImage: `url( ${ph3})` }}></div>
              <a href={ph3} className="mfp-image"><i className="fa fa-search"></i></a> </div>
            <div className="portfolio-item item studio col-xs-12 col-sm-6 col-md-4">
              <div className="a-img" style={{ backgroundImage: `url( ${ph4})` }}></div>
              <a href={ph4} className="mfp-image"><i className="fa fa-search"></i></a> </div>
            <div className="portfolio-item item fashion col-xs-12 col-sm-6 col-md-4">
              <div className="a-img" style={{ backgroundImage: `url( ${ph5})` }}></div>
              <a href={ph5} className="mfp-image"><i className="fa fa-search"></i></a> </div>
            <div className="portfolio-item item width-2x wedding col-xs-12 col-sm-6 col-md-8">
              <div className="a-img" style={{ backgroundImage: `url( ${ph6})` }}></div>
              <a href={ph6} className="mfp-image"><i className="fa fa-search"></i></a> </div>
            <div className="portfolio-item item height-2x nature col-xs-12 col-sm-6 col-md-4">
              <div className="a-img" style={{ backgroundImage: `url( ${ph7})` }}></div>
              <a href={ph7} className="mfp-image"><i className="fa fa-search"></i></a> </div>
            <div className="portfolio-item item studio col-xs-12 col-sm-6 col-md-4">
              <div className="a-img" style={{ backgroundImage: `url( ${ph8})` }}></div>
              <a href={ph8} className="mfp-image"><i className="fa fa-search"></i></a> </div>
            <div className="portfolio-item item fashion col-xs-12 col-sm-6 col-md-4">
              <div className="a-img" style={{ backgroundImage: `url( ${ph9})` }}></div>
              <a href={ph9} className="mfp-image"><i className="fa fa-search"></i></a> </div>
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
