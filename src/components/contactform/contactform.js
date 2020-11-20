import React, { Component } from "react";
import Recaptcha from "react-recaptcha";
import { MESSAGE_SENT, APP_ERROR } from "../../actions/types";
import { connect } from "react-redux";
import { Form } from "../UI/form";
import { MyInput } from "../UI/input";
import { Button } from "../UI/button";

class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isVerified: false,
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      token: null
    };

    // recaptcha ref
    this.recaptchaRef = React.createRef();
  }

  //allows loading of recaptcha
  captchaCallback = () => {
    console.log("recaptcha is loaded!");
  };

  resetState = () => {
    this.setState({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
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
      this.resetState();
      //reset recaptcha
      this.recaptchaRef.reset();
    } else {
      this.props.dispatch({ type: APP_ERROR, payload: data.error });
    }
  };

  render() {
    const { name, email, phone, subject, message } = this.state;
    return (
      <Form
        className="contactform"
        id="contactform"
        onSubmit={e => this.submitMessage(e)}
      >
        <div className="row">
          <div className="col-md-6">
            <p>
              <MyInput
                className="form-control"
                onChange={e =>
                  this.setState({ [e.target.name]: e.target.value })
                }
                value={name}
                id="cname"
                name="name"
                placeholder="your name"
                required="required"
                type="text"
              />
            </p>
          </div>
          <div className="col-md-6">
            <p>
              <MyInput
                className="form-control"
                onChange={e =>
                  this.setState({ [e.target.name]: e.target.value })
                }
                value={email}
                id="cemailaddress"
                name="email"
                placeholder="email address"
                required="required"
                type="email"
              />
            </p>
          </div>
          <div className="col-md-6">
            <p>
              <MyInput
                className="form-control"
                onChange={e =>
                  this.setState({ [e.target.name]: e.target.value })
                }
                value={phone}
                id="cphone"
                name="phone"
                placeholder="phone no."
                required="required"
                type="tel"
              />
            </p>
          </div>
          <div className="col-md-6">
            <p>
              <MyInput
                className="form-control"
                onChange={e =>
                  this.setState({ [e.target.name]: e.target.value })
                }
                value={subject}
                id="subject"
                name="subject"
                placeholder="subject"
                required="required"
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
                  this.setState({ [e.target.name]: e.target.value })
                }
                value={message}
                id="cmessage"
                name="message"
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
                verifyCallback={token => this.setState({ token: token })}
              />
              <Button
                className="btn btn-primary"
                icon={<i className="fa fa-angle-double-right"></i>}
                label="Send Message"
                type="submit"
              />
            </div>
          </div>
        </div>
      </Form>
    );
  }
}

export default connect()(ContactForm);
