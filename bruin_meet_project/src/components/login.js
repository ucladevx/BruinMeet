import React, { Component } from 'react';
import api from '../config/api.js';
import '../styles/login.css';
import _ from 'lodash';

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

  async handleSubmit(e) {
    e.preventDefault();
    if (!this.props.showSignup) {
      const res = await api.login({ email: this.state.email, password: this.state.password });
      if (res == false) {
        this.setState({ showError: true })
      } else {
        this.props.toggleLoginModal();
      }
    } else {
      const res = await api.signup({ email: this.state.email, password: this.state.password });
    }
  }

  render() {
    return (
      <div className='background' onClick={this.props.toggleLoginModal}>
        <div className='container' onClick={(e) => { e.stopPropagation(); }}>
          <h2>Bruin Meet</h2>
          <h3>Get Started</h3>
        <form onSubmit={(e)=> this.handleSubmit(e)}>
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
          <p className="label-signup" onClick={this.props.toggleSignup}>Not yet registered?</p>
          {this.state.showError
            ? <p className='error'>Sorry, there is no such combination of email and password.</p>
            : null}
          <input className="inputStyles login" type="submit" value={this.props.showSignup ? "Sign up!" : "Log In"} />
          </form>
        </div>
      </div>
    )
  }
}

export default Login;
