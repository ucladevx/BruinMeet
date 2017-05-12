import React, { Component } from 'react';
import api from '../config/api.js';
import '../styles/login.css';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
  		name: '',
      showError: false,
		};
	}

  async handleLogin(e) {
    e.preventDefault();
    const res = await api.login({ email: this.state.email, password: this.state.password });
    if (!res.ok) {
      this.setState({ showError: true })
    }
  }

  render() {
    return (
      <div className='background' onClick={this.props.toggleLoginModal}>
        <div className='container'>
          <h2>Bruin Meet</h2>
          <h3>Get Started</h3>
        <form onSubmit={(e)=> this.handleLogin(e)}>
          <label>
            <input
              className="inputStyles"
              type=""
              placeholder="Name"
              value={this.state.name}
              onChange={(e)=> this.setState({ name: e.target.value })}
            />
          </label>
          <label>
            <input
              className="inputStyles"
              type=""
              placeholder="Your UCLA Email"
              value={this.state.email}
              onChange={(e)=> this.setState({ email: e.target.value })}
            />
          </label>
          <label>
            <input
              className="inputStyles"
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={(e)=> this.setState({ password: e.target.value })}
            />
          </label>
          {this.state.showError
            ? <p className='error'>Sorry, there is no such combination of email and password.</p>
            : null}
          <input className="inputStyles login" type="submit" value="Sign Up!" />
          </form>
        </div>
      </div>
    )
  }
}

export default Login;
