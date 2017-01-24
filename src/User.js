import React, { Component } from 'react';
// import axios from 'axios';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import style from './style';

class User extends Component {
  constructor(props){
    super(props);
    this.state= {
      toBeSignedup: false,
    };
  }

  render() {
    return (
      <div>
        <a style={ style.signupLink } href="#" onClick={ this.showSignupForm }>Sign Up</a>
        <a style={ style.loginLink } href="#" onClick={ this.showLoginForm }>Log In</a>
        <SignupForm onSignupSubmit={ this.handleSignupSubmit} />
        <LoginForm onLoginSubmit={ this.handleLoginSubmit} />
      </div>
    )
  }
}

export default User;
