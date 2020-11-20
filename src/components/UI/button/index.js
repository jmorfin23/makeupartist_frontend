import React from "react";
import PropTypes from "prop-types";

export const Button = ({ label, type, ...props }) => (
  <button {...props} type={type}>
    {label} {props.icon && props.icon}
  </button>
);

Button.defaultProps = {
  label: "button"
};

Button.propTypes = {
  label: PropTypes.string,
  type: PropTypes.oneOf(["submit", "button"]).isRequired
};
