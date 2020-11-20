import React from "react";

export const ContactInformation = () => {
  return (
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
          <a href="mailto:customer@ksmakeup.com">customer@ksmakeup.com</a>
        </p>
      </div>
    </div>
  );
};
