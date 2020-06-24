import React, { Component } from "react";
import contact from "../../images/contact_me.jpg";
import Recaptcha from "react-recaptcha";

class Contact extends Component {
  constructor(props) {
    super(props);
  }

  submitMessage = async e => {
    console.log("inside submit message");

    const URL = "http://127.0.0.1:5000/api/contact";

    let response = await fetch(URL, {
      method: "POST",
      headers: {
        "Contact-Type": "application/json",
        name: e.target.cname.value,
        email: e.target.cemailaddress.value,
        subject: e.target.subject.value,
        phone: e.target.cphone.value,
        message: e.target.cmessage.value
      }
    });

    let data = await response.json();

    if (data.Success) {
      console.log("message sent successfully");
    }
  };

  render() {
    const styles = {
      header: {
        backgroundImage: `url(` + contact + `)`,
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
      <div className="contact">
        <section className="section section-page-title" style={styles.header}>
          <div className="overlay" style={styles.content}>
            <h1>Get in Touch </h1>
          </div>
          {/*overlay*/}
        </section>
        <section id="contact" className="section section-contact">
          {/* section-title */}
          <div className="section-title text-center">
            <h1 className="text-center">Get in Touch </h1>
            <p className="intro max-500">
              If you would like to contact me regarding my services, please use
              the form below.
            </p>
          </div>
          {/* end section-title */}
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-4">
                <div className="contact-detail">
                  <i className="fa fa-map-marker"></i>
                  <p>
                    <strong>Location:</strong> <br />
                    Chicago IL, USA 60613
                  </p>
                </div>
                <div className="contact-detail">
                  <i className="fa fa-phone"></i>
                  <p>
                    <strong>Call me:</strong> <br />
                    Phone: +01 773 567 8900 <br />
                  </p>
                </div>
                <div className="contact-detail">
                  <i className="fa fa-comments"></i>
                  <p>
                    <strong>Email:</strong> <br />
                    <a href="mailto:info@yourdomain.net">info@ksmakeup.com</a>
                    <br />
                    <a href="mailto:info@yourdomain.net">
                      customer@ksmakeup.com
                    </a>
                  </p>
                </div>
              </div>
              {/*col-6*/}
              <div className="col-lg-8 col-md-8">
                <div
                  className="alert alert-success alert-success-contact"
                  role="alert"
                  style={{ display: "none" }}
                >
                  <button
                    type="button"
                    className="close"
                    data-dismiss="alert"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                  Your message has been sent. We will contact you asap!
                </div>
                <div
                  className="alert alert-danger alert-danger-contact"
                  role="alert"
                  style={{ display: "none" }}
                >
                  <button
                    type="button"
                    className="close"
                    data-dismiss="alert"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                  Opps! There was problem sending email. Please try Again!
                </div>
                <form
                  className="contactform"
                  id="contactform"
                  onSubmit={e => this.submitMessage(e)}
                >
                  <div className="row">
                    <div className="col-md-6">
                      <p>
                        <input
                          className="form-control"
                          id="cname"
                          name="cname"
                          placeholder="your name"
                          required="required"
                          type="text"
                        />
                      </p>
                    </div>
                    <div className="col-md-6">
                      <p>
                        <input
                          className="form-control"
                          id="cemailaddress"
                          name="cemailaddress"
                          placeholder="email address"
                          required="required"
                          type="email"
                        />
                      </p>
                    </div>
                    <div className="col-md-6">
                      <p>
                        <input
                          className="form-control"
                          id="cphone"
                          name="cphone"
                          placeholder="phone no."
                          required="required"
                          type="tel"
                        />
                      </p>
                    </div>
                    <div className="col-md-6">
                      <p>
                        <input
                          className="form-control"
                          id="subject"
                          name="subject"
                          required="required"
                          placeholder="subject"
                          type="text"
                        />
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xs-12">
                      <p>
                        <textarea
                          className="form-control"
                          id="cmessage"
                          name="cmessage"
                          rows="4"
                          placeholder="Message"
                          required="required"
                        ></textarea>
                      </p>
                      <div className="text-right">
                        <button
                          className="btn btn-primary"
                          id="submit-contact-form"
                        >
                          Send Message
                          <i className="fa fa-angle-double-right"></i>
                        </button>
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
