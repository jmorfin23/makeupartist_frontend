import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Form, MyInput, Button } from "../UI/index";
import { loginAdmin } from "../../actions/adminActions";
import { Link } from "react-router-dom";

class AdminLoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    const credentials = window.btoa(
      `${this.state.username}:${this.state.password}`
    );

    this.props.dispatch(loginAdmin(credentials));
  };

  render() {
    return (
      <Form onSubmit={e => this.handleSubmit(e)}>
        <div className="form-group">
          <MyInput
            label="Email"
            onChange={e => this.setState({ [e.target.name]: e.target.value })}
            value={this.state.username}
            name="username"
            type="username"
            className="form-control"
            required="required"
            placeholder="username"
          />
        </div>
        <div className="form-group">
          <MyInput
            label="Password"
            onChange={e => this.setState({ [e.target.name]: e.target.value })}
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
            <Link to="/reset">Forgot password?</Link>
          </p>
        </div>
        <div className="center">
          <Button type="submit" label="Submit" className="btn btn-primary" />
        </div>
      </Form>
    );
  }
}

export default connect()(AdminLoginForm);
