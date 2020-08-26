import React, { Component } from "react";
import "./index.css";
import { connect } from "react-redux";
import { resetPassword } from "../../actions/adminActions.js";

class Reset extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sent: false,
      info: {}
    };
  }
  submitResetForm = e => {
    e.preventDefault();
    console.log("submit login form");
    if (this.state.sent === e.target.username.value) {
      alert("You have aleady submitted that email.");
      return;
    }
    this.props.resetPassword(e.target.username.value);

    this.setState({ sent: e.target.username.value });
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.password_reset.error) {
      return { info: nextProps.password_reset.error };
    }
    if (nextProps.password_reset.success) {
      return { info: nextProps.password_reset.success };
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("testing?");
    if (this.state.info !== prevState.info) {
      alert(this.state.info);
    }
  }

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

const mapStateToProps = state => ({
  password_reset: state.user.password_reset
});
export default connect(mapStateToProps, { resetPassword })(Reset);
