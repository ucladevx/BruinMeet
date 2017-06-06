import React, {
    Component
}
from 'react';
import '../styles/meetupcreate.css';
import Modal from './utils/modal.js';
import host from '../img/host.png';
import api from '../config/api.js';

class Create extends Component {
    constructor(props) {
		super(props);
		this.state = {
            title: '',
            num: '',
            description: '',
            place: '',
            time: '',
            type: 'social',
            tags: ['']
	    };
	}

    async handleSubmit(e) {
        e.preventDefault();

        if (this.state.title && this.state.description && this.state.time && this.state.location && this.state.num) {
            const res = await api.create_meetup({
                title: this.state.title,
                description: this.state.description,
                timestamp: this.state.time,
                location: this.state.location,
                maxim_cap: this.state.num
            });

            if (res !== true) {
                alert("Unknown error occurred.");
            }
            else {
                this.props.toggleMeetupModal();
            }
        }
        else {
            alert("Please fill in all of the fields.");
        }
    }

    render() {
        return (
    <Modal onClose={this.props.toggleMeetupModal}>
    <div className='formContainer'>
    <div className={`sideBar ${this.state.type}-e`}/>
    <div className='topDiv'>
        <input type='text' className='c-title' placeholder='Title' onChange={(e)=> this.setState({ title: e.target.value })}></input>
    </div>
    <div className='loc-div'>
        <input type='text' className='location' placeholder='Location' onChange={(e)=> this.setState({ location: e.target.value })}></input>
    </div>
    <div className='loc-div'>
        <input type='datetime-local' className='time dt' placeholder='Time' onChange={(e)=> this.setState({ time: e.target.value.replace("T", " ") })}></input>
    </div>
    <div className='desc'>
        <textarea
                    name="description"
                    className='descr'
                    onChange={(e)=> this.setState({ description: e.target.value })}
                    placeholder={`Tell us more about ${this.state.title?this.state.title:"this meetup"}`}></textarea>
    </div>
    <div className='tags'>
        <input type='text' className='p-tag' placeholder='add; tags; like; this'></input>
        <input type='number' className='p-ppl' placeholder='Max # of people' onChange={(e)=> this.setState({ num: e.target.value })}></input>
    </div>
    <div className='buttons'>
            <input className="c-inputStyles social" type="button" value="Social" onClick={(e)=> this.setState({ type: "social" })}/>
            <input className="c-inputStyles active" type="button" value="Active" onClick={(e)=> this.setState({ type: "active" })}/>
            <input className="c-inputStyles food" type="button" value="Food" onClick={(e)=> this.setState({ type: "food" })}/>
            <input className="c-inputStyles study" type="button" value="Study" onClick={(e)=> this.setState({ type: "study" })}/>
            <input className="c-inputStyles random" type="button" value="Random" onClick={(e)=> this.setState({ type: "random" })}/>
    </div>
    <div className='foot'>
        <input className="inputStyles cre" type="submit" value="Create Meetup" onClick={(e) => this.handleSubmit(e)}/>
        <div className="user">
            <img src={host} className='ic-heart-d' />
            <p className='host'>Hosted by<br></br>Alberto Duncan</p>
        </div>
    </div>
    </div>
    </Modal>)
    }
}

// POST: signup/email,

export default Create;
