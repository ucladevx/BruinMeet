import React, {
    Component
}
from 'react';
import '../styles/create.css';


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
    
//    async handleCreate(e) {
//    e.preventDefault();
//    const res = await api.Create({ email: this.state.email, password: this.state.password });
//    if (!res.ok) {
//      console.log('error logging in');
//    }
//  }
    
    render() {
        return (
    < div className='create-container'>
    <h2 className='h2-create'>Create a Meetup</h2>
    <form className= "form-create" onSubmit={(e)=> this.handleCreate(e)}>
        <label>
            <h3 className= "h3-create">Give your meetup a name</h3>
            < input className="inputStyles-create" type="" placeholder="" value={this.state.title} onChange={(e)=> this.setState({ title: e.target.value })}/>
        </label>
        <label>
            <h3 className= "h3-create">How many people you wanna have at this meetup?</h3>
            < input className="inputStyles-create" type="" placeholder="" value={this.state.num} onChange={(e)=> this.setState({ num: e.target.value })}/>
        </label>
        <label>
            <h3 className= "h3-create">What's {this.state.title == "" ? "your meetup" : this.state.title} about?</h3>
            < textarea rows="1" className="inputStyles-create" type="" placeholder="" value={this.state.description} onChange={(e)=> this.setState({ description: e.target.value })} />
        </label>
        <label>
            <h3 className= "h3-create">When?</h3>
            < input className="inputStyles-create" type="" placeholder="" value={this.state.place} onChange={(e)=> this.setState({ place: e.target.value })} />
            <h3 className= "h3-create">Where?</h3>
            < input className="inputStyles-create" type="" placeholder="" value={this.state.time} onChange={(e)=> this.setState({ time: e.target.value })} />
        </label>
        {/*<label>
            <h3 className= "h3-create">Add tags</h3>
            < input className="inputStyles-create" type="" placeholder="" value={this.state.password} onChange={(e)=> this.setState({ password: e.target.value })} />
            </label>*/}
        <label className= "buttons">
            <h3 className= "h3-create">Pick a category</h3>
            <input className="inputStyles login-create social" type="" value="Social" onChange={(e)=> this.setState({ type: "social" })}/>
            <input className="inputStyles login-create active" type="" value="Active" onChange={(e)=> this.setState({ type: "active" })}/>
            <input className="inputStyles login-create food" type="" value="Food/Drink" onChange={(e)=> this.setState({ type: "food" })}/>
            <input className="inputStyles login-create study" type="" value="Study" onChange={(e)=> this.setState({ type: "study" })}/>
            <input className="inputStyles login-create random" type="" value="Random" onChange={(e)=> this.setState({ type: "random" })}/>
        </label>
            <input className="inputStyles login done" type="submit" value="Done!" />
        < /form>
            < /div>
        )
    }
}

// POST: signup/email, 

export default Create;