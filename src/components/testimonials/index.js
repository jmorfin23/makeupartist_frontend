import React from "react";
import testimonialOne from "../../images/testimonial_woman-01.jpg";
import testimonialTwo from "../../images/testimonial_woman-02.jpg";
import testimonialThree from "../../images/testimonial_woman-03.jpg";

const Testimonials = props => {
  return (
    <section className="section section-testimonials">
      {/*  section-title */}
      <div className="section-title text-center">
        <h1>
          Customer <span>saying</span>
        </h1>
      </div>
      {/*  end section-title */}
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div
              id="testimonial-carousel"
              className="testimonial-carousel owl-carousel owl-theme"
            >
              <div className="testimonial-item">
                <div className="client-img text-center">
                  <img src={testimonialOne} alt="" className="img-circle" />
                </div>
                <div className="quote-icons">
                  <i className="fa fa-quote-left" aria-hidden="true"></i>
                </div>
                <p className="text-center">
                  Kathryn's work is unbelievable! Her work is truly
                  professional, which allowed me to feel great on my wedding
                  day.
                </p>
                <div className="client-title text-center">
                  <strong>Amanda S.</strong>
                </div>
              </div>
              {/* testmonial-item 1*/}
              <div className="testimonial-item">
                <div className="client-img text-center">
                  <img src={testimonialTwo} alt="" className="img-circle" />
                </div>
                <div className="quote-icons">
                  <i className="fa fa-quote-left" aria-hidden="true"></i>
                </div>
                <p className="text-center">
                  We hired Kathryn for a special event, she was fantastic, very
                  professional, and a great person to work alongside.
                </p>
                <div className="client-title text-center">
                  <strong>Jennifer B.</strong>
                </div>
              </div>
              {/* testmonial-item 2*/}
              <div className="testimonial-item">
                <div className="client-img text-center">
                  <img src={testimonialThree} alt="" className="img-circle" />
                </div>
                <div className="quote-icons">
                  <i className="fa fa-quote-left" aria-hidden="true"></i>
                </div>
                <p className="text-center">
                  Kathry did makeup for a large-scale photoshoot, and everyone
                  looked unbelievable. We will definitely be hiring her again.
                </p>
                <div className="client-title text-center">
                  <strong>Miranda D. </strong>
                </div>
              </div>
              {/* testmonial-item 3*/}
            </div>
            {/* testimonial-carousel*/}
          </div>
          {/* end col*/}
        </div>
        {/* row*/}
      </div>
      {/* container*/}
    </section>
  );
};

export default Testimonials;
