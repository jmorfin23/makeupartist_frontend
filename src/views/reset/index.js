import React, { Component } from "react";
import "./index.css";
import { connect } from "react-redux";
import { resetPassword } from "../../actions/adminActions.js";
import { APP_ERROR } from "../../actions/types";

class Reset extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: ""
    };
  }

  submitResetForm = e => {
    e.preventDefault();

    const username = e.target.username.value;

    if (this.state.username === username)
      return this.props.dispatch({
        type: APP_ERROR,
        payload: "You have already submitted that email"
      });

    this.setState({ username: username });

    this.props.dispatch(resetPassword(username));
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

export default connect()(Reset);
