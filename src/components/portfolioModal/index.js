import React, { Component } from "react";
import "./index.css";
import X_picture from "../../images/cursor.png";

class PortfolioModal extends Component {
  constructor(props) {
    super(props);
  }
  onClose = e => {
    this.props.toggleModal();
  };

  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className="modal-window">
        <div className="my-modal-content">
          <img src={`${this.props.children}`}></img>
        </div>
        <div className="action">
          <button className="modal-close-button" onClick={e => this.onClose(e)}>
            <img src={X_picture}></img>
          </button>
        </div>
      </div>
    );
  }
}

export default PortfolioModal;
