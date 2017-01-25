import React, { Component } from 'react';
import axios from 'axios';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import style from './style';

class UserBox extends Component {
 constructor(props) {
 super(props);
 this.state = { data: [] };
 this.handleSignupSubmit = this.handleSignupSubmit.bind(this);
 this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
 }
 handleSignupSubmit(user){
   let users = this.state.data;
   user.id = Date.now();
   let newUsers = users.concat([user]);
   this.setState({ data: newUsers })
   axios.post(this.props.url, user)
     .catch(err => {
       console.error(err);
       this.setState({ data: users });
     });
 }
 handleLoginSubmit(user){
   console.log(user)
   let users = this.state.data;
   user.id = Date.now();
   let currentUser = users.concat([user]);
   this.setState({ data: currentUser})
   axios.post(this.props.url, user)
     .catch(err => {
       console.error(err);
       this.setState({ data: users });
     });
 }
 render() {
 return (
   <div style={ style.userBox }>
   <h1>Code Book</h1>
    <SignupForm onSignupSubmit={ this.handleSignupSubmit} />
   <LoginForm onLoginSubmit={ this.handleLoginSubmit}  />
   </div>
   )
 }
}
export default UserBox;
