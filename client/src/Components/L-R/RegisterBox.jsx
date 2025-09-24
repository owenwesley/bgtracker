import React, { Component } from "react";
import { InitialState } from "../State/InitialState";

export default class RegisterBox extends Component {
  constructor(props) {
    super(props);
    this.state = InitialState;
  }

  render() {
    let pwdWeak = false,
      pwdMedium = false,
      pwdStrong = false;

    if (this.state.pwdState === "weak") {
      pwdWeak = true;
    } else if (this.state.pwdState === "medium") {
      pwdWeak = true;
      pwdMedium = true;
    } else if (this.state.pwdState === "strong") {
      pwdWeak = true;
      pwdMedium = true;
      pwdStrong = true;
    }

    return (
      <div className="inner-container">
        <div className="header">Register</div>
        <div className="box">
          <div className="input-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              className="login-input"
              placeholder="First Name"
              onChange={this.props.handleUser}
            />
            <small className="danger-error">{this.props.firstNameError}</small>
          </div>

          <div className="input-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              className="login-input"
              placeholder="Last Name"
              onChange={this.props.handleUser}
            />
            <small className="danger-error">{this.props.lastNameError}</small>
          </div>

          <div className="input-group">
            <label htmlFor="userName">User Name</label>
            <input
              type="text"
              name="userName"
              className="login-input"
              placeholder="Username"
              onChange={this.props.handleUser}
            />
            <small className="danger-error">{this.props.userNameError}</small>
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
            <small className="danger-error">{this.props.passwordError}</small>

            {this.state.password && (
              <div className="password-state">
                <div
                  className={"pwd pwd-weak " + (pwdWeak ? "show" : "")}
                ></div>
                <div
                  className={"pwd pwd-medium " + (pwdMedium ? "show" : "")}
                ></div>
                <div
                  className={"pwd pwd-strong " + (pwdStrong ? "show" : "")}
                ></div>
              </div>
            )}
          </div>

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              className="login-input"
              placeholder="Email"
              onChange={this.props.handleUser}
            />
            <small className="danger-error">{this.props.emailError}</small>
          </div>

          <button
            type="button"
            className="login-btn"
            onClick={this.props.handleRegister}
          >
            Register
          </button>
        </div>
      </div>
    );
  }
}
