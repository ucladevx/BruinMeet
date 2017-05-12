import React, { Component } from 'react';
import heartIcon from '../img/ic-heart.png';
import peopleIcon from '../img/ic-people.png';
import host from '../img/host.png';
import '../styles/detail.css'

class Detail extends Component {
  render() {
    return (
      <div className='card'>
        <div className='side' />
        <p className='title'>Silicon Valley Watch Party</p>
        <p className='detail'>Dinesh gets back to the ground while Richard continues to explore his new project. Gavin tries to come out of the new problem he has gotten himself into and interestingly the chemistry between Richard and Monica takes a new turn.</p>
        
        <div className= 'host'>
            <p className='loc'>25 May, 4:30 PM <br></br>at Fireside Lounge</p>
            <img src={host} className='ic-heart-d' />
            <p className='loc'>Hosted by<br></br>Alberto Duncan</p>
            </div>
        <div className= 'last'>
            <input className="inputStyles login going" type="submit" value="Going!" />
            <p className= 'g2'>David and 12 others are going!</p>
        </div>
        {//        <div className='event-footer'>
//          <div className='event-details'>
//            <div className='event-detail'>
//              <img src={heartIcon} className='ic-heart' />
//              <p className='event-detail-txt'>11/15</p>
//            </div> </div>
        }
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

export default Detail;
