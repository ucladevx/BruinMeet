import React, { Component } from 'react';
import heartIcon from '../img/ic-heart.png';
import peopleIcon from '../img/ic-people.png';
import '../styles/events.css'

class EventCard extends Component {
  render() {
    return (
      <div className='event-card'>
        <div className='event-side' />
        <p className='event-title'>Silicon Valley Watch Party</p>
        <p className='event-location'>at Fireside Lounge</p>
        <p className='event-time'>25 May, 4:30 PM</p>
        <div className='event-footer'>
          <div className='event-tags'>
            <Tag />
            <Tag />
          </div>
          <div className='event-details'>
            <div className='event-detail'>
              <img src={heartIcon} className='ic-heart' />
              <p className='event-detail-txt'>11/15</p>
            </div>
            <div className='event-detail'>
              <img src={peopleIcon} className='ic-people' />
              <p className='event-detail-txt'>5</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

class Tag extends Component {
  render() {
    return (
      <div className='event-tag'>
        Netflix
      </div>
    )
  }
}

export default EventCard;
