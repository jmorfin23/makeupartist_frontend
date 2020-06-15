import React, { Component } from "react";
import "./index.css";
import X_picture from "../../images/cursor.png";

class PortfolioModal extends Component {
  constructor(props) {
    super(props);
  }
  // componentDidMount() {
  //   console.log('component did mount in modal');
  //   window.addEventListener('keyup', this.handleKeyUp, false);
  //   document.addEventListener('click', this.handleOutsideClick, false);
  // }
  // handleOutsideClick = e => {
  //   console.log('handle outside click');
  // }
  // handleKeyUp = e => {
  //   console.log('inside handle key up.');
  //   const keys = {
  //     27: () => {
  //       e.preventDefault();
  //       window.removeEventListener('keyup', this.handleKeyUp, false);
  //     },
  //   };
  //   console.log(keys);
  //   console.log(keys[e.keyCode]);
  //   if (keys[e.keyCode]) { keys[e.keyCode](); }
  // }
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
