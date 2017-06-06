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
            type: 'social',
            tags: ['']
		};
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
        <input type='text' className='location' placeholder='Location'></input>
        <input type='text' className='time' placeholder='Time'></input>
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
        <input type='text' className='p-ppl' placeholder='Max ppl'></input>
    </div>
    <div className='buttons'>
            <input className="c-inputStyles social" type="" value="Social" onClick={(e)=> this.setState({ type: "social" })}/>
            <input className="c-inputStyles active" type="" value="Active" onClick={(e)=> this.setState({ type: "active" })}/>
            <input className="c-inputStyles food" type="" value="Food" onClick={(e)=> this.setState({ type: "food" })}/>
            <input className="c-inputStyles study" type="" value="Study" onClick={(e)=> this.setState({ type: "study" })}/>
            <input className="c-inputStyles random" type="" value="Random" onClick={(e)=> this.setState({ type: "random" })}/>
    </div>
    <div className='foot'>
        <input className="inputStyles cre" type="submit" value="Create Meetup" />
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
