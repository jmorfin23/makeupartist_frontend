import React from "react";

export const MyInput = ({ label, ...props }) => {
  return (
    <>
      {label && <>{label}</>}
      <input {...props}></input>
    </>
  );
};
