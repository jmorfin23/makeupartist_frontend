import React from "react";
import "./index.css";

export const PageTitleHeading = ({ image, page }) => {
  return (
    <section
      className="section section-page-title my-header"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="overlay">
        <h1>{page}</h1>
      </div>
      {/* overlay*/}
    </section>
  );
};
