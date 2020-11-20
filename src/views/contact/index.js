import React, { Component } from "react";
import { PageTitleHeading } from "../../components/pagetitleheading";
import heading_background from "../../images/contact_me.jpg";
import { ContactInformation } from "../../components/contact-info/contact-info";
import ContactForm from "../../components/contactform/contactform";

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <PageTitleHeading page={"Contact"} image={heading_background} />
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
              <ContactInformation />
              {/*col-6*/}
              <div className="col-lg-8 col-md-8">
                <ContactForm />
              </div>
              {/*col-8*/}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Contact;
