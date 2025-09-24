import React, { Component } from 'react';
import './LoginRegister.css';
import FadeTransition from './FadeTransition';
import LoginBox from './LogInBox';
import RegisterBox from './RegisterBox';
import { InitialState } from '../State/InitialState';

export default class LogInRegister extends Component {
  constructor(props) {
    super(props);
    this.state = InitialState;
  }

  showLoginBox() {
    this.setState({ isLoginOpen: true, isRegisterOpen: false });
  }

  showRegisterBox() {
    this.setState({ isRegisterOpen: true, isLoginOpen: false });
  }

  render() {
    return (
      <div className='root-container'>
        <div className='box-controller'>
          <div
            className={
              'controller ' +
              (this.state.isLoginOpen ? 'selected-controller' : '')
            }
            onClick={this.showLoginBox.bind(this)}
          >
            Login
          </div>
          <div
            className={
              'controller ' +
              (this.state.isRegisterOpen ? 'selected-controller' : '')
            }
            onClick={this.showRegisterBox.bind(this)}
          >
            Register
          </div>
        </div>

        <FadeTransition isOpen={this.state.isLoginOpen} duration={500}>
          <div className='box-container'>
            <LoginBox
              userName={this.props.userName}
              password={this.props.password}
              loginError={this.props.loginError}
              handleUser={this.props.handleUser}
              handleLogIn={this.props.handleLogIn}
            />
          </div>
        </FadeTransition>
        <FadeTransition isOpen={this.state.isRegisterOpen} duration={500}>
          <div className='box-container'>
            <RegisterBox
              firstName={this.props.firstName}
              lastname={this.props.lastName}
              userName={this.props.userName}
              password={this.props.password}
              email={this.props.email}
              firstNameError={this.props.firstNameError}
              lastNameError={this.props.lastNameError}
              userNameError={this.props.userNameError}
              passwordError={this.props.passwordError}
              emailError={this.props.emailError}
              handleUser={this.props.handleUser}
              handleRegister={this.props.handleRegister}
            />
          </div>
        </FadeTransition>
      </div>
    );
  }
}
