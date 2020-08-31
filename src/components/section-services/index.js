import React from "react";
import service1 from "../../images/bride-01.jpg";
import service2 from "../../images/model-02.jpg";
import service3 from "../../images/model-03.jpg";

const SectionServices = () => {
  return (
    <section className="section section-services">
      {/*  section-title */}
      <div className="section-title text-center">
        <h1 className="decor">
          Makeup and Hair <span>Stylist Services</span>
        </h1>
      </div>
      {/*  end section-title */}
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-6">
            <div className="service-box service-color-one">
              <div className="service-img">
                <img src={service1} alt="" />
              </div>
              <div className="service-contents">
                <h1>Bridal Makeup</h1>
                <p>
                  My primary focus is to ensure you look your best. I guarantee
                  the quality of my work is unmatched, and will make you feel
                  stunning.
                </p>
                <p className="service-price pb-10">
                  <span className="decor-text">starts from</span>
                  <strong>$146.00</strong>
                </p>
                <a className="btn btn-primary" href="/services">
                  Read More
                  <i
                    className="fa fa-angle-double-right"
                    aria-hidden="true"
                  ></i>
                </a>
              </div>
              {/* service-contents*/}
            </div>
            {/* service-box*/}
          </div>
          {/* col-md-4*/}
          <div className="col-md-4 col-sm-6">
            <div className="service-box service-color-two">
              <div className="service-img">
                <img src={service2} alt="" />
              </div>
              <div className="service-contents">
                <h1>tv film commercial</h1>
                <p>
                  The capacity of my work meets the most demanding challenges.
                  Through hundreds of sessions of performance, I've gained the
                  skillset to meet any and every need.
                </p>
                <p className="service-price pb-10">
                  <span className="decor-text">starts from</span>
                  <strong>$146.00</strong>
                </p>
                <a className="btn btn-primary" href="/services">
                  Read More
                  <i
                    className="fa fa-angle-double-right"
                    aria-hidden="true"
                  ></i>
                </a>
              </div>
              {/* service-contents*/}
            </div>
            {/* service-box*/}
          </div>
          {/* col-md-4*/}
          <div className="col-md-4 col-sm-6">
            <div className="service-box service-color-three">
              <div className="service-img">
                <img src={service3} alt="" />
              </div>
              <div className="service-contents">
                <h1>Special occasions</h1>
                <p>
                  Each occasion has the possibilty to be great. No matter the
                  day, I want you to look your best. Feel great and be great.
                </p>
                <p className="service-price pb-10">
                  <span className="decor-text">starts from</span>
                  <strong>$146.00</strong>
                </p>
                <a className="btn btn-primary" href="/services">
                  Read More
                  <i
                    className="fa fa-angle-double-right"
                    aria-hidden="true"
                  ></i>
                </a>
              </div>
              {/* service-contents*/}
            </div>
            {/* service-box*/}
          </div>
          {/* col-md-4*/}
        </div>
        {/* row*/}
      </div>
      {/* container*/}
    </section>
  );
};

export default SectionServices;
