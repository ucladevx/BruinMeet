import React, { Component } from 'react';
import Loader from 'halogenium/GridLoader';
import api from '../config/api.js';
import EventList from './eventlist.js';
import Header from '../containers/header.js';
import Login from '../containers/login.js';
import EventModal from './detail.js';
import '../styles/main.css';

class Main extends Component {
  constructor(props) {
      super(props);
      this.state = {
        loggedIn: false,
        cardNumber: 1,
        currentMeetup: null
      };
  }

  render() {
    return (
      <div className="body">
        <Header
          onLogin={this.props.toggleLoginModal}
          loggedIn={this.state.loggedIn}
          onAdd={() => this.setState({ cardNumber: this.state.cardNumber + 1 })} />
        {this.props.areMeetupsLoading
        ? <Loader className='loader' color="#1F2421" size="16px" margin="4px"/>
        : <EventList events={this.props.meetups} onClickMeetup={(meetup) => {
          this.setState({ currentMeetup: meetup });
        }} />}
        {this.props.showLoginModal
        ? <Login onLogin={() => this.setState({ loggedIn: true, loginPage: false })} />
        : null}
        {this.state.currentMeetup ? <EventModal meetup={this.state.currentMeetup} onClose={() => this.setState({ currentMeetup: null })} /> : null}
      </div>
    );
  }
}

export default Main;
