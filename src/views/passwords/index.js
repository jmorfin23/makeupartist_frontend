import React, { Component } from "react";
import { connect } from "react-redux";
import { updatePassword } from "../../actions/adminActions.js";
import { Redirect, withRouter } from "react-router-dom";

class Passwords extends Component {
  constructor(props) {
    super(props);

    this.state = {
      info: {}
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.password_update.error) {
      return { info: nextProps.password_update.error };
    }
    if (nextProps.password_update.success) {
      return { info: nextProps.password_update.success };
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("test");
    if (this.state.info != prevState.info) {
      alert(this.state.info);

      //redirect user to admin login page
      this.props.history.push("/admin");
    }
  }

  submitNewPassword = e => {
    e.preventDefault();
    //check whether passwords are equal
    if (e.target.password.value != e.target.password2.value) {
      alert("Please verify that the passwords are the same.");
      return;
    }
    //action for setting new password
    this.props.updatePassword(
      e.target.password.value,
      this.props.info.params.token
    );
  };

  render() {
    console.log(this.props);
    return (
      <div className="reset">
        <h3>New Password</h3>
        <form onSubmit={e => this.submitNewPassword(e)}>
          <div className="form-group">
            <label>New Password</label>
            <input
              name="password"
              type="password"
              className="form-control"
              required="required"
              placeholder="new password"
            />
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input
              name="password2"
              type="password"
              className="form-control"
              required="required"
              placeholder="new password"
            />
          </div>
          <div className="center">
            <button type="submit" className="btn btn-primary">
              Reset Password
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  password_update: state.user.password_update
});
export default withRouter(
  connect(mapStateToProps, { updatePassword })(Passwords)
);
