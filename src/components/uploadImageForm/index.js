import React from "react";
import { Form, MyInput, Button } from "../UI/index";

export const UploadImageForm = ({ onSubmit, onChange }) => {
  return (
    <Form onSubmit={onSubmit}>
      <MyInput
        onChange={onChange}
        type="file"
        accept="image/*"
        label={<label htmlFor="file-input"></label>}
      />
      <br />
      <Button type="submit" className="btn btn-primary" label="Submit" />
    </Form>
  );
};
