import React, { Component } from "react";
import "./index.css";
import "../../App.css";
import Recaptcha from "react-recaptcha";
import { MESSAGE_SENT, APP_ERROR } from "../../actions/types";
import { connect } from "react-redux";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isVerified: false,
      token: null,
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    };
    // recaptcha ref
    this.recaptchaRef = React.createRef();
  }
  //allows loading of recaptcha
  captchaCallback = () => {
    console.log("recaptcha is loaded!");
  };

  submitMessage = async e => {
    e.preventDefault();

    const { name, email, subject, phone, message, token } = this.state;

    const formData = new FormData();

    formData.append("name", name);
    formData.append("email", email);
    formData.append("subject", subject);
    formData.append("phone", phone);
    formData.append("message", message);

    const URL = "https://kathrynsmithmakeup-backend.herokuapp.com/api/contact";

    const response = await fetch(URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`
      },
      body: formData
    });

    const data = await response.json();

    if (data.status === "ok") {
      this.props.dispatch({ type: MESSAGE_SENT, payload: data });

      //reset form
      this.setState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
      //reset recaptcha
      this.recaptchaRef.reset();
    }
  };
  render() {
    return (
      <div className="contact">
        <section className="section section-page-title my-header contact-heading">
          <div className="overlay">
            <h1>Contact</h1>
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
                    <a href="mailto:info@ksmakeup.com">info@ksmakeup.com</a>
                    <br />
                    <a href="mailto:customer@ksmakeup.com">
                      customer@ksmakeup.com
                    </a>
                  </p>
                </div>
              </div>
              {/*col-6*/}
              <div className="col-lg-8 col-md-8">
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
                          onChange={e =>
                            this.setState({ name: e.target.value })
                          }
                          value={this.state.name}
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
                          onChange={e =>
                            this.setState({ email: e.target.value })
                          }
                          value={this.state.email}
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
                          onChange={e =>
                            this.setState({ phone: e.target.value })
                          }
                          value={this.state.phone}
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
                          onChange={e =>
                            this.setState({ subject: e.target.value })
                          }
                          value={this.state.subject}
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
                          onChange={e =>
                            this.setState({ message: e.target.value })
                          }
                          value={this.state.message}
                          id="cmessage"
                          name="cmessage"
                          rows="4"
                          placeholder="Message"
                          required="required"
                        ></textarea>
                      </p>
                      <div className="text-right">
                        <Recaptcha
                          ref={e => (this.recaptchaRef = e)}
                          className="recaptcha-styling"
                          sitekey="6LcDR8oZAAAAACFELDflcK8Me3Bk52opXFBebqYb"
                          render="explicit"
                          onloadCallback={() => this.captchaCallback()}
                          verifyCallback={token =>
                            this.setState({ token: token })
                          }
                        />
                        ,
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
      </div>
    );
  }
}

export default connect()(Contact);
