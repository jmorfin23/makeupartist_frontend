import React, { Component } from 'react';


class Contact extends Component {
  render() {
    return(
      <div className="contact">
        <section className="section section-page-title">
          <div className="overlay">
            <h1>Get in Touch </h1>
          </div>
          {/*overlay*/}
        </section>
        <section id="contact" className="section section-contact">
          {/* section-title */}
          <div className="section-title text-center">
            <h1 className="text-center">Get in Touch </h1>
            <p className="intro max-500">If you have a question regarding my makeup services or would like to schedule a consultation, feel free to contact me using the form below.</p>
          </div>
          {/* end section-title */}
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-4">
                <div className="contact-detail"> <i className="fa fa-map-marker"></i>
                  <p> <strong>Location:</strong> <br/>
                    5896 BellFast Lane, Howard St. <br/>
                    Florida, USA 33002 </p>
                </div>
                <div className="contact-detail"> <i className="fa fa-phone"></i>
                  <p> <strong>Call me:</strong> <br/>
                    Phone: +01 234 567 8900 <br/>
                    Mobile: +(01) 987 654 3210 </p>
                </div>
                <div className="contact-detail"> <i className="fa fa-comments"></i>
                  <p> <strong>Email:</strong> <br/>
                    <a href="mailto:info@yourdomain.net">info@yourdomain.net</a> <br/>
                    <a href="mailto:info@yourdomain.net">customer@yourdomain.net</a> </p>
                </div>
              </div>
              {/*col-6*/}
              <div className="col-lg-8 col-md-8">
                <div className="alert alert-success alert-success-contact" role="alert" style={{ display: 'none' }}>
                  <button type="button" className="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>
                  Your message has been sent. We will contact you asap! </div>
                <div className="alert alert-danger alert-danger-contact" role="alert" style={{ display: 'none' }}>
                  <button type="button" className="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>
                  Opps! There was problem sending email. Please try Again! </div>
                <form className="contactform" id="contactform" action="email.php" method="post">
                  <div className="row">
                    <div className="col-md-6">
                      <p>
                        <input className="form-control" id="cname" name="cname" placeholder="your name" required="required" type="text"/>
                      </p>
                    </div>
                    <div className="col-md-6">
                      <p>
                        <input className="form-control" id="cemailaddress" name="cemailaddress" placeholder="email address" required="required" type="email" />
                      </p>
                    </div>
                    <div className="col-md-6">
                      <p>
                        <input className="form-control" id="cphone" name="cphone" placeholder="phone no." required="required" type="tel" />
                      </p>
                    </div>
                    <div className="col-md-6">
                      <p>
                        <input className="form-control" id="subject" name="subject" placeholder="subject" type="text" />
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xs-12">
                      <p>
                        <textarea className="form-control" id="cmessage" name="cmessage" rows="4" placeholder="Message" required="required"></textarea>
                      </p>
                      <div className="text-right">
                        <button className="btn btn-primary" id="submit-contact-form">Send Message <i className="fa fa-angle-double-right"></i> </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              {/*col-8*/}
            </div>
          </div>
        </section>
      </div> //end of contact div
    );
  }
}

export default Contact;
