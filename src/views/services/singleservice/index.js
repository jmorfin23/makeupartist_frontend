import React, { Component } from 'react';
import work from '../../../images/work.jpg';
import bridal from '../../../images/bridal.jpg';


class SingleService extends Component {
  render() {
    return(
    <div>
      <section className="section section-page-title" style={{backgroundImage: `url(${work})` }}>
        <div className="overlay">
          <h1>Makeup for the Bride</h1>
        </div>
        {/* overlay*/}
      </section>
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-8 pull-right">
              <p><img src={bridal} alt=""/></p>
              <h3>On Location Makeup for the Bride & Bridal Party</h3>
              <p>Donec laoreet malesuada varius. Aenean sit amet neque in est feugiat auctor. Vivamus condimentum consectetur sem vel tempor. Etiam et porta quam. Aliquam erat volutpat. Sed ut odio quis magna fringilla sodales a sed quam. Maecenas sollicitudin volutpat egestas. Nam quis purus ac purus tempus. </p>
              <h3>Bridal Makeup</h3>
              <p>Ut in lorem consequat, elementum ligula id, cursus leo. Nam eu ex eget metus rhoncus sollicitudin vel eu nunc. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc mollis purus nibh, non viverra ipsum condimentum vitae. Praesent consequat, ante laoreet pulvinar cursus, urna lectus aliquam nunc, a viverra turpis ipsum rhoncus mauris. Sed a massa consequat, mattis tortor sed, tincidunt nunc. Pellentesque aliquet sem iaculis, ultrices dolor eget, consequat mauris. </p>
              <h3>Perfect Wedding Make Up</h3>
              <p>Donec laoreet malesuada varius. Aenean sit amet neque in est feugiat auctor. Vivamus condimentum consectetur sem vel tempor. Etiam et porta quam. Aliquam erat volutpat. Sed ut odio quis magna fringilla sodales a sed quam. Maecenas sollicitudin volutpat egestas. Nam quis purus ac purus tempus iaculis. </p>
            </div>
            {/* col-md-8*/}
            <div className="col-md-4 col-sm-4 pull-left">
              <ul className="service-list-group">
                <li><a href="single-service.html">Bridal Makeup</a></li>
                <li><a href="single-service.html">tv film commercial</a></li>
                <li><a href="single-service.html">Special occasions</a></li>
                <li><a href="single-service.html">Model Photo Shoots</a></li>
                <li><a href="single-service.html">Engagement Photos</a></li>
                <li><a href="single-service.html">Airbrush Makeup</a></li>
              </ul>
            </div>
          </div>
          {/* row*/}
        </div>
        {/* container*/}
      </section>
      </div>
    );
  }
}

export default SingleService;
