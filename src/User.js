import React, { Component } from 'react';
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
    render() {
   return (
     <div style={ style.user }>
     <h3>{this.props.username}</h3>
     </div>
   )
   }
  }

export default User;
