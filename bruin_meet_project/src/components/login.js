import React, { Component } from 'react';
import '../styles/login.css';

class Login extends Component {
  render() {
    return (
      <div className='container'>
        <p>Email</p>
        <input />
        <p>Password</p>
        <input />
        <a className='login' onClick={this.props.onLogin}>
          <p>Log In</p>
        </a>
      </div>
    )
  }
}

export default Login;
