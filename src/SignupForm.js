import React, { Component } from 'react';
import style from './style';


class SignupForm extends Component {

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
    let username = this.state.username.trim();
    let email = this.state.email.trim();
    let password = this.state.password.trim();
    if (!username || !email){
      return;
    }
    this.props.onSignupSubmit({ username: username, email: email, password: password });
    this.setState({ username: '', email: '', password: '' })
  }
  render() {

    return (

      <form style={ style.signupForm } onSubmit={ this.handleSubmit }>

        <input
          type='text'
          placeholder='Username'
          style={ style.signupFormUsername}
          value={ this.state.username}
          required='required'
          onChange={ this.handleUsernameChange }/>

        <input
          type='email'
          placeholder='Email'
          style={ style.signupFormEmail}
          value={ this.state.email}
          required='required'
          onChange={ this.handleEmailChange }/>

        <input
          type='password'
          placeholder='Password'
          style={ style.signupFormPassword}
          value={ this.state.password}
          required='required'
          onChange={ this.handlePasswordChange }/>

        <input
          type='submit'
          style={ style.recipeFormSubmit }
          value='Sign Up' />
      </form>
    )
  }
}

export default SignupForm;
