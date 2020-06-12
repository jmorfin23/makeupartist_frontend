import React, { Component } from "react";
import "./index.css";

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
        <div className="modal-content">
          <p>{this.props.children}</p>
        </div>
        <div className="action">
          <button className="modal-close-button" onClick={e => this.onClose(e)}>
            Close
          </button>
        </div>
      </div>
    );
  }
}

export default PortfolioModal;
