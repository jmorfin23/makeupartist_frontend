import React from "react";
import headingphoto from "../../images/makeup.jpg";

const MyServices = () => {
  return (
    <section
      className="section parallax services-image"
      style={{ backgroundImage: `url(${headingphoto})` }}
    >
      <div className="overlay">
        <div className="container">
          <h1 className="pb-20">Offering Makeup and Hair Stylist Services</h1>
          <p className="max-500 intro pb-20">
            If you would like to book a consultation or contact me regarding my
            services click the link below!
          </p>
          <a className="btn btn-primary btn-rounded btn-pink" href="/contact">
            Book Now!
          </a>
        </div>
        {/*container*/}
      </div>
    </section>
  );
};

export default MyServices;
