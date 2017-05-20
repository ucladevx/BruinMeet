import React, { Component } from 'react';
import _ from 'lodash';
import EventCard from './eventcard.js';
import '../styles/events.css';

const EventList = (props) => (
  <div className='event-list'>
  {props.events.map((event) => (
    <EventCard key={event.id} event={event} onClick={() => props.onClickMeetup(event)} />
  ))}
  </div>
)

export default EventList;
