import React, { Component } from 'react';
import moment from 'moment';
import heartIcon from '../img/ic-heart.png';
import peopleIcon from '../img/ic-people.png';
import host from '../img/host.png';
import Modal from './utils/modal.js';
import Loader from 'halogenium/ClipLoader';
import '../styles/meetupdetail.css'

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.meetup.title,
      date: props.meetup.date,
      location: props.meetup.location,
    }
    this.cancelEdit = this.cancelEdit.bind(this);
  }

  cancelEdit() {
    this.setState({
      title: this.props.meetup.title,
      date: this.props.meetup.date,
      location: this.props.meetup.location,
    });
    this.props.setEditing(false);
  }

  getHeaderComponents() {
    if (this.props.editLoading)
      return <Loader color="#26A65B" size="16px" />;

    if (this.props.isEditing)
      return (
        <div className='edit-buttons'>
          <a onClick={this.cancelEdit}>
            <h3>cancel</h3>
          </a>
          <h3>/</h3>
          <a onClick={() => this.props.editMeetup({
            ...this.props.meetup,
            title: this.state.title,
            date: this.state.date,
            location: this.state.location,
          })}>
            <h3>submit</h3>
          </a>
        </div>
      )

    if (this.props.isEditable)
      return (
        <a onClick={() => this.props.setEditing(true)}>
          <h3>edit</h3>
        </a>
      )

    return null;
  }

  render() {
    return (
      <Modal onClose={this.props.resetCurrentMeetup}>
        <div className='card'>
          <div className={`side ${this.props.meetup.type}`} />
          <div className='upper'>
            {this.props.isEditing ?
            <input type="text" name="title" value={this.state.title} onChange={(e) => this.setState({ title: e.target.value })} />
            : <p className='title'>{this.props.meetup.title}</p>}
            {this.getHeaderComponents()}
          </div>
          {/* <p className='detail'>Dinesh gets back to the ground while Richard continues to explore his new project. Gavin tries to come out of the new problem he has gotten himself into and interestingly the chemistry between Richard and Monica takes a new turn.</p> */}

          <div className= 'host'>
            {this.props.isEditing ?
            <div>
              <input
                type="datetime-local"
                name="date"
                value={this.state.date}
                onChange={(e) => this.setState({ date: e.target.value })}
              />
              <input
                type="text"
                name="location"
                value={this.state.location}
                onChange={(e) => this.setState({ location: e.target.value })}
              />
            </div> :
            <p className='loc'>
              {moment(this.props.meetup.date).format('MMMM Do, h:mm a')}<br></br>{this.props.meetup.location}
            </p>}
            <img src={host} className='ic-heart-d' />
            <p className='loc'>Hosted by<br></br>Alberto Duncan</p>
          </div>
          <div className= 'last'>
              <input className="inputStyles login going" type="submit" value="Going!" />
              <p className= 'g2'>David and {this.props.meetup.curGoing} others are going!</p>
          </div>
          {//        <div className='meetup-footer'>
  //          <div className='meetup-details'>
  //            <div className='meetup-detail'>
  //              <img src={heartIcon} className='ic-heart' />
  //              <p className='meetup-detail-txt'>11/15</p>
  //            </div> </div>
          }
        </div>
      </Modal>
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
