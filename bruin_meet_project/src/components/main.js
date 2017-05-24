import React, { Component } from 'react';
import Loader from 'halogenium/GridLoader';
import api from '../config/api.js';
import Header from '../containers/header.js';
import MeetupList from '../containers/meetuplist.js';
import Login from '../containers/login.js';
import MeetupModal from '../containers/meetupdetail.js';
import '../styles/main.css';

const Main = (props) => (
    <div className="body">
      <Header />
      {props.areMeetupsLoading
      ? <Loader className='loader' color="#1F2421" size="16px" margin="4px"/>
      : <MeetupList />}
      {props.showLoginModal ? <Login /> : null}
      {props.currentMeetupId ? <MeetupModal /> : null}
    </div>
)

export default Main;
