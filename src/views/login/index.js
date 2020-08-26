import React, { Component } from "react";
import { loginAdmin, registerAdmin } from "../../actions/adminActions";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import SECRET_KEY from "../../config.js";
import { animateScroll as scroll } from "react-scroll";
let jwt = require("jsonwebtoken");

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  componentDidMount() {
    scroll.scrollToTop();
  }

  submitLoginForm = e => {
    e.preventDefault();

    let token = jwt.sign(
      { username: this.state.username, password: this.state.password },
      SECRET_KEY,
      { expiresIn: "1h" } // expires in 1 hour
    );

    this.props.dispatch(loginAdmin(token));
  };

  componentDidUpdate() {
    // check if login successful
    console.log("component did update in login page");
    console.log("user is logged:");
    console.log(this.props.user.isLogged);

    if (this.props.user.isLogged) {
      console.log(this.props);
      console.log("this is running");
      //push to admin home page
      this.props.history.push("/admin/home"); //this isnt running
      console.log("this should be last?");
    }
  }
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
              <a href="/reset">Forgot account?</a>
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
export default withRouter(connect(mapStateToProps)(Login));
