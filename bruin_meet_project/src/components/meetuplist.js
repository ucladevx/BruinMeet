import React, { Component } from 'react';
import _ from 'lodash';
import MeetupCard from '../containers/meetupcard.js';
import '../styles/meetups.css';

const MeetupList = (props) => (
  <div className='meetup-list'>
    {_.map(props.meetups, (meetup) => (
      <MeetupCard key={meetup.id} meetup={meetup} />
    ))}
  </div>
)

export default MeetupList;
