import React from "react";
import "./index.css";

export const PageTitleHeading = props => {
  return (
    <section
      className="section section-page-title my-header"
      style={{ backgroundImage: `url(${props.image})` }}
    >
      <div className="overlay">
        <h1>{props.page}</h1>
      </div>
      {/* overlay*/}
    </section>
  );
};
