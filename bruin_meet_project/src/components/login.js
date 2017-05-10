import React, { Component } from 'react';
import api from '../config/api.js';
import '../styles/login.css';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		};
	}

  async handleLogin(e) {
    e.preventDefault();
    const res = await api.login({ email: this.state.email, password: this.state.password });
    if (!res.ok) {
      console.log('error logging in');
    }
  }

  render() {
    return (
      <div className='container'>
        <form onSubmit={(e) => this.handleLogin(e)}>
          <label>
            <p>Email</p>
            <input
              type='text'
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </label>
          <label>
            <p>Password</p>
            <input
              type='password'
              value={this.state.password}
              onChange={(e) => this.setState({ password: e.target.value })}
            />
          </label>
          <input type="submit" value="Log in" />
        </form>
      </div>
    )
  }
}

export default Login;
