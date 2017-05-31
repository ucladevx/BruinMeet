import React, { Component } from 'react';
import Modal from './utils/modal.js';
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

  async handleSubmit(e) {
    e.preventDefault();
    if (!this.props.showSignup) {
      const res = await api.login({ email: this.state.email, password: this.state.password });
      if (res) {
        this.props.setCurrentUser({ email: this.state.email });
        this.props.toggleLoginModal();
      } else {
        this.setState({ showError: true })
      }
    } else {
      const res = await api.signup({ email: this.state.email, password: this.state.password });
      console.log(res);
      if (res === 'Success') {
        this.props.setCurrentUser({ email: this.state.email });
        this.props.toggleLoginModal();
      }
    }
  }

  render() {
    return (
      <Modal onClose={this.props.toggleLoginModal}>
        <div className='container'>
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
          <p className="label-signup" onClick={this.props.toggleSignup}>{this.props.showSignup ? "Already registered?" : "Not yet registered?"}</p>
          {this.state.showError
            ? <p className='error'>Sorry, there is no such combination of email and password.</p>
            : null}
          <input className="inputStyles login" type="submit" value={this.props.showSignup ? "Sign up!" : "Log In"} />
          </form>
        </div>
      </Modal>
    )
  }
}

export default Login;
