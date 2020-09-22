import React, { Component } from "react";
import { loginAdmin, registerAdmin } from "../../actions/adminActions";
import { connect } from "react-redux";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  submitLoginForm = e => {
    e.preventDefault();

    const credentials = window.btoa(
      `${this.state.username}:${this.state.password}`
    );

    this.props.dispatch(loginAdmin(credentials));
  };

  render() {
    return (
      <div className="admin">
        <h2>Admin Login</h2>
        <form onSubmit={e => this.submitLoginForm(e)}>
          <div className="form-group">
            <label>Email</label>
            <input
              onChange={e => this.setState({ username: e.target.value })}
              value={this.state.username}
              name="username"
              type="username"
              className="form-control"
              required="required"
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              onChange={e => this.setState({ password: e.target.value })}
              value={this.state.password}
              name="password"
              type="password"
              required="required"
              className="form-control"
              placeholder="Password"
            />
          </div>
          <div className="forgot-pass">
            <p>
              <a href="/reset">Forgot password?</a>
            </p>
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
  user: state.user
});
export default connect(mapStateToProps)(Login);
