import React from "react";

export const DeleteImageItem = ({ id, url, type }) => {
  return (
    <div
      key={id}
      className={`portfolio-item item ` + type + ` col-xs-12 col-sm-6 col-md-4`}
    >
      <div
        className="a-img"
        style={{ backgroundImage: `url(` + url + `)` }}
      ></div>
      <a
        onClick={() =>
          this.setState({
            showModal: true,
            imageToDelete: url,
            imageIdToDelete: id
          })
        }
        className="mfp-image"
      ></a>
    </div>
  );
};
