import React, { Component } from 'react';
import _ from 'lodash';
import EventCard from './eventcard.js';
import '../styles/events.css';

class EventList extends Component {
  render() {
    return (
      <div className='event-list'>
        {_.times(this.props.eventNumber, (i) => (
          <EventCard key={i} />
        ))}
      </div>
    )
  }
}

export default EventList;
