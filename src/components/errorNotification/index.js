import React from "react";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import { HIDE_ERROR } from "../../actions/types.js";

const ErrorNotification = () => {
  const { isOpen, error } = useSelector(state => state.error);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch({ type: HIDE_ERROR });
  };
  return (
    <>
      {isOpen && error && (
        <div className="error-notification-container">
          <div className="error-notification-content">
            <h1 className="error-heading">Error</h1>
            <h4 className="error-message-content">{error}</h4>
            <button
              className="btn btn-primary error-notification-close"
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

export default ErrorNotification;
