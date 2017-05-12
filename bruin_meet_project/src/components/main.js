import React, { Component } from 'react';
import Header from './header.js';
import EventList from './eventlist.js';
import Login from './login.js';
import '../styles/main.css';

class Main extends Component {
  constructor(props) {
      super(props);
      this.state = {
        loggedIn: false,
        cardNumber: 1
      };
  }

  render() {
    return (
      <div className="body">
        <Header
          onLogin={this.props.toggleLoginModal}
          loggedIn={this.state.loggedIn}
          onAdd={() => this.setState({ cardNumber: this.state.cardNumber + 1 })} />
        {this.props.showLoginModal
        ? <Login onLogin={() => this.setState({ loggedIn: true, loginPage: false })} />
        : <EventList eventNumber={this.state.cardNumber} />
        }
      </div>
    );
  }
}

export default Main;
