import React, { Component } from "react";
import "./index.css";

class Reset extends Component {
  constructor(props) {
    super(props);
  }

  submitResetForm = () => {
    console.log("submit login form");
  };
  render() {
    return (
      <div className="reset">
        <h3>Reset Password</h3>
        <form onSubmit={e => this.submitResetForm(e)}>
          <div className="form-group">
            <label>Email</label>
            <input
              name="username"
              type="username"
              className="form-control"
              required="required"
              placeholder="Email"
            />
          </div>
          <div className="center">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Reset;
