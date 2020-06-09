import React from "react";
import "./index.css";
import { Modal } from "react-bootstrap";

const ModalWindow = props => {
  return (
    <Modal
      {...props}
      className="center"
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h3>Delete Image</h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Are you sure you want to delete this image?</h4>
        <div>
          <img
            style={{ maxWidth: "100%", height: "300px" }}
            src={props.image}
          ></img>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button
          className="btn btn-primary center"
          onClick={() => props.onHide()}
        >
          Close
        </button>
        <button
          className="btn btn-primary center"
          onClick={() => props.deleteimage()}
        >
          Yes
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalWindow;
