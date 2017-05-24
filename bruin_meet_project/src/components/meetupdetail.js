import React, { Component } from 'react';
import heartIcon from '../img/ic-heart.png';
import peopleIcon from '../img/ic-people.png';
import host from '../img/host.png';
import '../styles/meetupdetail.css'

class Detail extends Component {
  render() {
    return (
      <div className='background' onClick={this.props.resetCurrentMeetup}>
        <div className='card'>
          <div className={`side ${this.props.meetup.type}`} />
          <p className='title'>{this.props.meetup.title}</p>
          {/* <p className='detail'>Dinesh gets back to the ground while Richard continues to explore his new project. Gavin tries to come out of the new problem he has gotten himself into and interestingly the chemistry between Richard and Monica takes a new turn.</p> */}

          <div className= 'host'>
              <p className='loc'>{this.props.meetup.time}<br></br>{this.props.meetup.location}</p>
              <img src={host} className='ic-heart-d' />
              <p className='loc'>Hosted by<br></br>Gavin Belson</p>
              </div>
          <div className= 'last'>
              <input className="inputStyles login going" type="submit" value="Going!" />
              <p className= 'g2'>David and {this.props.meetup.people} others are going!</p>
          </div>
          {//        <div className='meetup-footer'>
  //          <div className='meetup-details'>
  //            <div className='meetup-detail'>
  //              <img src={heartIcon} className='ic-heart' />
  //              <p className='meetup-detail-txt'>11/15</p>
  //            </div> </div>
          }
        </div>
      </div>
    )
  }
}

class Tag extends Component {
  render() {
    return (
      <div className='meetup-tag'>
        Netflix
      </div>
    )
  }
}

export default Detail;
