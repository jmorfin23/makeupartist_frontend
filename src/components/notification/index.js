import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { HIDE_NOTIFICATION } from "../../actions/types.js";
import "./index.css";

const Notification = () => {
  const { isOpen, message } = useSelector(state => state.notification);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch({ type: HIDE_NOTIFICATION });
  };
  return (
    <>
      {isOpen && message && (
        <div className="user-notification-container">
          <div className="user-notification-content">
            {/*<h1 className="user-heading">Notification</h1> */}
            <h4 className="user-message-content">{message}</h4>
            <button
              className="btn btn-primary user-notification-close"
              onClick={() => handleClose()}
              type="button"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Notification;
