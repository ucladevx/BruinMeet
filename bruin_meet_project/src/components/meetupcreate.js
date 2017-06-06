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
    <div className='background'>
    <div className='formContainer'>
        <form>
            <div className='sideBar' />
            <div className='topDiv'>
                <input type="text" name="title" className='c-title' value="Silicon Valley Watch Party"/>
            </div>
            <div className='loc-div'>
                <input type="text" name="time" className='time' value="Time"/>
                <input type="text" name="location" className='location' value="Location"/>
            </div>
            <div className='desc'>
                <textarea>Dinesh gets back to the ground while Richard continues to explore his new project. Gavin tries to come out of the new problem he has gotten himself into and interestingly the chemistry between Richard and Monica takes a new turn.</textarea>
            </div>
            <div className='tags'>
                <input type="text" name="tags" className='p-tag' value="add; tags; like; this"/>
                <input type="text" name="ppl" className='p-ppl' value="15 ppl"/>
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
    </div>)
    }
}

// POST: signup/email,

export default Create;
