import React, {
    Component
}
from 'react';
import '../styles/meetupcreate.css';
import Modal from './utils/modal.js';
import host from '../img/host.png';

class Create extends Component {
    constructor(props) {
		super(props);
		this.state = {
			title: '',
			num: '',
      description: '',
      place: '',
      time: '',
      type: '',
      tags: ['']
		};
	}

    render() {
        return (
    <Modal onClose={this.props.toggleMeetupModal}>
    <div className='formContainer'>
        <form>
            <div className='sideBar' />
            <div className='topDiv'>
                <input
                    type="text"
                    name="title"
                    className='c-title'
                    placeholder="Silicon Valley Watch Party"
                    onChange={(e)=> this.setState({ title: e.target.value })}
                />
            </div>
            <div className='loc-div'>
                <input
                    type="text"
                    name="time"
                    className='time'
                    placeholder="Time"
                    onChange={(e)=> this.setState({ time: e.target.value })}
                />
                <input
                    type="text"
                    name="location"
                    className='location'
                    placeholder="Location"
                    onChange={(e)=> this.setState({ location: e.target.value })}
                />
            </div>
            <div className='desc'>
                <textarea
                    name="description"
                    onChange={(e)=> this.setState({ description: e.target.value })}
                    placeholder="Dinesh gets back to the ground while Richard continues to explore his new project. Gavin tries to come out of the new problem he has gotten himself into and interestingly the chemistry between Richard and Monica takes a new turn."></textarea>
            </div>
            <div className='tags'>
                <input
                    type="text"
                    name="tags"
                    className='p-tag'
                    placeholder="add; tags; like; this"
                    onChange={(e)=> this.setState({ tags: e.target.value.split(';').map((str) => str.trim()) })}
                />
                <input
                    type="number"
                    name="num"
                    className='p-ppl'
                    placeholder="# of people"
                    onChange={(e)=> this.setState({ num: e.target.value })}
                />
            </div>
            <div className='buttons'>
                <label>
                    <input className="c-inputStyles social" type="button" value="Social" onChange={(e)=> this.setState({ type: "social" })}/>
                    <input className="c-inputStyles active" type="button" value="Active" onChange={(e)=> this.setState({ type: "active" })}/>
                    <input className="c-inputStyles food" type="button" value="Food" onChange={(e)=> this.setState({ type: "food" })}/>
                    <input className="c-inputStyles study" type="button" value="Study" onChange={(e)=> this.setState({ type: "study" })}/>
                    <input className="c-inputStyles random" type="button" value="Random" onChange={(e)=> this.setState({ type: "random" })}/>
                </label>
            </div>
            <div className='foot'>
                <input className="inputStyles cre" type="submit" value="Create Meetup" />
                <div className="user">
                    <img src={host} className='ic-heart-d' />
                    <p className='host'>Hosted by<br></br>Alberto Duncan</p>
                </div>
            </div>
        </form>
        </div>
    </Modal>)
    }
}

// POST: signup/email,

export default Create;
