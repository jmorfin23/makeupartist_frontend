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
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          <h3>Delete Image</h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <img
            style={{ maxWidth: "100%", height: "300px" }}
            src={props.image}
          ></img>
        </div>
      </Modal.Body>
      <Modal.Footer className="centered">
        <button className="btn btn-primary" onClick={() => props.onHide()}>
          No
        </button>
        <button className="btn btn-primary" onClick={() => props.deleteimage()}>
          Yes
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalWindow;
