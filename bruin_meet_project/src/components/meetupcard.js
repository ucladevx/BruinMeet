import React, { Component } from 'react';
import moment from 'moment';
import heartIcon from '../img/ic-heart.png';
import peopleIcon from '../img/ic-people.png';
import '../styles/meetups.css';

const MeetupCard = (props) => (
  <div className='meetup-card' onClick={() => props.setCurrentMeetup(props.meetup.id)}>
    <div className={`meetup-side ${props.meetup.type}`} />
    <p className='meetup-title'>{props.meetup.title}</p>
    <p className='meetup-location'>{props.meetup.location}</p>
    <p className='meetup-time'>{moment(props.meetup.date).format('MMMM Do, h:mm a')}</p>
    <div className='meetup-footer'>
      {props.meetup.tags ? <div className='meetup-tags'>
        {props.meetup.tags.split(' ').map((tag) => <Tag name={tag} />)}
      </div> : null}
      <div className='meetup-details'>
        <div className='meetup-detail'>
          <img src={peopleIcon} className='ic-people' />
          <p className='meetup-detail-txt'>{props.meetup.curGoing}/{props.meetup.maxLimit}</p>
        </div>
        <div className='meetup-detail'>
          <img src={heartIcon} className='ic-heart' />
          <p className='meetup-detail-txt'>20</p>
        </div>
      </div>
    </div>
  </div>
)

const Tag = (props) => (
    <div className='meetup-tag'>{props.name}</div>
)

export default MeetupCard;
