import React, { Component } from ‘react’;
import SignupForm from ‘./SignupForm’;
import LoginForm from ‘./LoginForm’;
import style from ‘./style’;

class UserBox extends Component {
 constructor(props) {
 super(props);
 this.state = { data: [] };
 }
 render() {
 return (
   <div style={ style.userBox }>
   <h1>Code Book</h1>
   <SignupForm />
   <LoginForm />
   </div>
   )
 }
}
export default UserBox;
