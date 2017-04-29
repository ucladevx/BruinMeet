import React, { Component } from 'react';
import Header from './components/header.js';
import EventList from './components/eventlist.js';
import Login from './components/login.js';
import './styles/App.css';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        loginPage: false,
        loggedIn: false,
        cardNumber: 1
      };
  }

  render() {
    return (
      <div className="body">
        <Header
          onLogin={() => this.setState({ loginPage: !this.state.loginPage })}
          loggedIn={this.state.loggedIn}
          onAdd={() => this.setState({ cardNumber: this.state.cardNumber + 1 })} />
        {this.state.loginPage
        ? <Login onLogin={() => this.setState({ loggedIn: true, loginPage: false })} />
        : <EventList eventNumber={this.state.cardNumber} />
        }
      </div>
    );
  }
}

export default App;
