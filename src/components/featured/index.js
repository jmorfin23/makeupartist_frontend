import React from 'react';

//logo imports
import logo1 from '../../images/logos/logo1.png';
import logo2 from '../../images/logos/logo2.png';
import logo3 from '../../images/logos/logo3.png';
import logo4 from '../../images/logos/logo4.png';
import logo5 from '../../images/logos/logo5.png';
import logo6 from '../../images/logos/logo6.png';

const Featured = () => {
  return(
    <section className="section section-logos pt-zero">
      {/*  section-title */}
      <div className="section-title text-center">
        <h1 className="decor">Featured <span>on</span></h1>
      </div>
      {/*  end section-title */}
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-md-2 col-sm-4 col-xs-6 text-center">
            <div className="cleint-logo"> <img src={logo1} alt="" /></div>
          </div>
          {/* end col*/}
          <div className="col-lg-2 col-md-2 col-sm-4 col-xs-6 text-center">
            <div className="cleint-logo"> <img src={logo2} alt="" /> </div>
          </div>
          {/* end col*/}
          <div className="col-lg-2 col-md-2 col-sm-4 col-xs-6 text-center">
            <div className="cleint-logo"> <img src={logo3} alt="" /> </div>
          </div>
          {/* end col*/}
          <div className="col-lg-2 col-md-2 col-sm-4 col-xs-6 text-center">
            <div className="cleint-logo"> <img src={logo4} alt="" /> </div>
          </div>
          {/* end col*/}
          <div className="col-lg-2 col-md-2 col-sm-4 col-xs-6 text-center">
            <div className="cleint-logo"> <img src={logo5} alt="" /> </div>
          </div>
          {/* end col*/}
          <div className="col-lg-2 col-md-2 col-sm-4 col-xs-6 text-center">
            <div className="cleint-logo"> <img src={logo6} alt="" /> </div>
          </div>
          {/* end col*/}
        </div>
        {/* row*/}
      </div>
      {/* container*/}
    </section>

  )
}

export default Featured;
