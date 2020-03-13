import React, { Component } from "react";
import "./index.css";
import { connect } from "react-redux";
import { resetPassword } from "../../actions/adminActions.js";

class Reset extends Component {
  submitResetForm = e => {
    e.preventDefault();
    console.log("submit login form");

    this.props.resetPassword(e.target.username.value);
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

const mapStateToProps = state => ({});
export default connect(mapStateToProps, { resetPassword })(Reset);
