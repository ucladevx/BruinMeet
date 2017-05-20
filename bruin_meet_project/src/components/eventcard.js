import React, { Component } from 'react';
import moment from 'moment';
import heartIcon from '../img/ic-heart.png';
import peopleIcon from '../img/ic-people.png';
import '../styles/events.css';

class EventCard extends Component {
  render() {
    return (
      <div className='event-card' onClick={this.props.onClick}>
        <div className={`event-side ${this.props.event.type}`} />
        <p className='event-title'>{this.props.event.title}</p>
        <p className='event-location'>{this.props.event.location}</p>
        <p className='event-time'>{moment(this.props.event.date).format('MMMM Do, h:mm a')}</p>
        <div className='event-footer'>
          <div className='event-tags'>
            <Tag name='Netflix' />
            <Tag name='Chill' />
            {/* {this.props.event.tags.map((tag) => <Tag name={tag} />)} */}
          </div>
          <div className='event-details'>
            <div className='event-detail'>
              <img src={peopleIcon} className='ic-people' />
              <p className='event-detail-txt'>{this.props.event.curGoing}/{this.props.event.maxLimit}</p>
            </div>
            <div className='event-detail'>
              <img src={heartIcon} className='ic-heart' />
              {/* <p className='event-detail-txt'>{this.props.event.hearts}</p> */}
              <p className='event-detail-txt'>20</p>
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
      <div className='event-tag'>{this.props.name}</div>
    )
  }
}

export default EventCard;
