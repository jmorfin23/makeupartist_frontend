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
  render() {
    return(
      <div>
      <section class="section section-page-title" style={{backgroundImage: `url(${work})` }}>
        <div class="overlay">
          <h1>Portfolio</h1>
        </div>
        {/*overlay*/}
      </section>
      <section id="gallery" class="section section-gallery">
        {/* section-title */}
        <div class="section-title text-center">
          <h1 class="text-center">My Portfolio</h1>
        </div>
        {/* end section-title */}
        <div class="container">
          {/* Portfolio items */}
          <ul class="portfolio-filter list-inline text-center">
            <li class="current"><a href="" data-filter="*">All Works</a></li>
            <li class=""><a href="" data-filter=".wedding">Wedding</a></li>
            <li class=""><a href="" data-filter=".fashion">Hairstyle</a></li>
            <li class=""><a href="" data-filter=".nature">Commercial</a></li>
            <li class=""><a href="" data-filter=".studio">Studio</a></li>
          </ul>
          <div class="portfolio-items row">
            <div class="portfolio-item item height-2x fashion col-xs-12 col-sm-6 col-md-4">
              <div class="a-img" style={{ backgroundImage: `url( ${ph1})` }}></div>
              <a href={ph1} class="mfp-image"><i class="fa fa-search"></i></a> </div>
            <div class="portfolio-item item wedding col-xs-12 col-sm-6 col-md-4">
              <div class="a-img" style={{ backgroundImage: `url( ${ph2})` }}></div>
              <a href={ph2} class="mfp-image"><i class="fa fa-search"></i></a> </div>
            <div class="portfolio-item item nature col-xs-12 col-sm-6 col-md-4">
              <div class="a-img" style={{ backgroundImage: `url( ${ph3})` }}></div>
              <a href={ph3} class="mfp-image"><i class="fa fa-search"></i></a> </div>
            <div class="portfolio-item item studio col-xs-12 col-sm-6 col-md-4">
              <div class="a-img" style={{ backgroundImage: `url( ${ph4})` }}></div>
              <a href={ph4} class="mfp-image"><i class="fa fa-search"></i></a> </div>
            <div class="portfolio-item item fashion col-xs-12 col-sm-6 col-md-4">
              <div class="a-img" style={{ backgroundImage: `url( ${ph5})` }}></div>
              <a href={ph5} class="mfp-image"><i class="fa fa-search"></i></a> </div>
            <div class="portfolio-item item width-2x wedding col-xs-12 col-sm-6 col-md-8">
              <div class="a-img" style={{ backgroundImage: `url( ${ph6})` }}></div>
              <a href={ph6} class="mfp-image"><i class="fa fa-search"></i></a> </div>
            <div class="portfolio-item item height-2x nature col-xs-12 col-sm-6 col-md-4">
              <div class="a-img" style={{ backgroundImage: `url( ${ph7})` }}></div>
              <a href={ph7} class="mfp-image"><i class="fa fa-search"></i></a> </div>
            <div class="portfolio-item item studio col-xs-12 col-sm-6 col-md-4">
              <div class="a-img" style={{ backgroundImage: `url( ${ph8})` }}></div>
              <a href={ph8} class="mfp-image"><i class="fa fa-search"></i></a> </div>
            <div class="portfolio-item item fashion col-xs-12 col-sm-6 col-md-4">
              <div class="a-img" style={{ backgroundImage: `url( ${ph9})` }}></div>
              <a href={ph9} class="mfp-image"><i class="fa fa-search"></i></a> </div>
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
