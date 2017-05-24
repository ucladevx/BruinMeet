import React, {
    Component
}
from 'react';
import '../styles/meetupcreate.css';
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
    <div className='formContainer'>
    <div className='sideBar' />
    <div className='topDiv'>
        <p className='c-title' contenteditable='true'>Silicon Valley Watch Party</p>
    </div>
    <div className='loc-div'>
        <p className='time' contenteditable="true">Time</p>
        <p className='location' contenteditable="true">Location</p>
    </div>
    <div className='desc'>
        <p contenteditable="true">Dinesh gets back to the ground while Richard continues to explore his new project. Gavin tries to come out of the new problem he has gotten himself into and interestingly the chemistry between Richard and Monica takes a new turn.
        </p>
    </div>
    <div className='tags'>
         <p className='p-tag'>add; tags; like; this</p>
         <p className='p-ppl'>15 ppl</p>
    </div>
    <div className='buttons'>
        <label>
            <input className="c-inputStyles social" type="" value="Social" onChange={(e)=> this.setState({ type: "social" })}/>
            <input className="c-inputStyles active" type="" value="Active" onChange={(e)=> this.setState({ type: "active" })}/>
            <input className="c-inputStyles food" type="" value="Food" onChange={(e)=> this.setState({ type: "food" })}/>
            <input className="c-inputStyles study" type="" value="Study" onChange={(e)=> this.setState({ type: "study" })}/>
            <input className="c-inputStyles random" type="" value="Random" onChange={(e)=> this.setState({ type: "random" })}/>
        </label>
    </div>
    <div className='foot'>
        <input className="inputStyles cre" type="submit" value="Create Meetup" />
        <div className="user">
            <img src={host} className='ic-heart-d' />
            <p className='host'>Hosted by<br></br>Alberto Duncan</p>
        </div>
    </div>
    </div>)
    }
}

// POST: signup/email,

export default Create;
