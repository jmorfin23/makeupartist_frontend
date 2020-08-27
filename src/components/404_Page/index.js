import React from "react";
import "./index.css";

const Four04 = () => {
  return (
    <section className="error-message">
      <h1 className="error-code">404</h1>
      <p className="error-description">Page not found</p>
      <a href="/home" className="error-link">
        Go to homepage
      </a>
    </section>
  );
};

export default Four04;
