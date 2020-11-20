import React from "react";

export const Form = ({ children, ...props }) => (
  <form {...props}>{children}</form>
);
