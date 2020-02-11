import React from "react";
import { Modal } from "react-bootstrap";

const ModalWindow = props => {
  console.log("SHOW MODAL IS CALLED!");
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>this is a test</p>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={() => props.onHide()}>Close</button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalWindow;
