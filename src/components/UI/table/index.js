import React from "react";

export const Table = ({ children, ...props }) => (
  <table {...props}>{children}</table>
);
