import React, { Component } from 'react';
import style from './style';


class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = { username: '', email: '', password: '' };
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleUsernameChange(e) {
    this.setState({ username: e.target.value });
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    //TODO check here later for how to format the input string for content
    let username = this.state.username.trim();
    let email = this.state.email.trim();
    let password = this.state.password.trim();

    this.props.onLoginSubmit({ username: username, email: email, password: password });
    this.setState({ username: '', email: '', password: '' })
  }
  render() {

    return (
      <form style={ style.loginForm } onSubmit={ this.handleSubmit }>

        <input
          type='text'
          placeholder='Username'
          style={ style.loginFormUsername}
          value={ this.state.username}
          required='required'
          autofocus
          onChange={ this.handleUsernameChange }/>

        <input
          type='email'
          placeholder='Email'
          style={ style.loginFormEmail}
          value={ this.state.email}
          required='required'
          onChange={ this.handleEmailChange }/>

        <input
          type='password'
          placeholder='Password'
          style={ style.loginFormPassword}
          value={ this.state.password}
          required='required'
          onChange={ this.handlePasswordChange }/>

        <input
          type='submit'
          style={ style.recipeFormSubmit }
          value='Log in' />
      </form>
    )
  }
}

export default LoginForm;
