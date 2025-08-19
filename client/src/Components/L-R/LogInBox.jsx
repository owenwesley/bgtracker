import React, { Component } from "react";
import { InitialState } from "../State/InitialState";

export default class LoginBox extends Component {
  constructor(props) {
    super(props);
    this.state = InitialState;
  }

  submitLogin(e) {}

  render() {
    return (
      <div className="inner-container">
        <div className="header">Login</div>
        <div className="box">
          <div className="input-group">
            <label htmlFor="userName">Username</label>
            <input
              type="text"
              name="userName"
              autoComplete="on"
              className="login-input"
              placeholder="Username"
              onChange={this.props.handleUser}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              className="login-input"
              placeholder="Password"
              onChange={this.props.handleUser}
            />
          </div>

          <button
            type="button"
            className="login-btn"
            onClick={this.props.handleLogIn}
          >
            Login
          </button>
          <small className="danger-error">{this.props.loginError}</small>
        </div>
      </div>
    );
  }
}
