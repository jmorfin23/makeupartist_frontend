import React from "react";
import "./index.css";
import { Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteImage } from "../../actions/imageActions";

const AdminModal = props => {
  const dispatch = useDispatch();

  const yesButton = () => {
    props.onHide();
    dispatch(deleteImage(props.id));
  };
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
            alt="portfolio"
          ></img>
        </div>
      </Modal.Body>
      <Modal.Footer className="centered">
        <button className="btn btn-primary" onClick={() => props.onHide()}>
          No
        </button>
        <button className="btn btn-primary" onClick={() => yesButton()}>
          Yes
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default AdminModal;
