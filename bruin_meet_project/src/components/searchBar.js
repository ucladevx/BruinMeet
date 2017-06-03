import React, {
    Component
}
from 'react';
import RotatingText from 'react-rotating-text';
import searchIcon from '../img/search.png';
import '../styles/searchBar.css';


class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
            search: false,
            on: false,
        };
    }

    handleClick(value) {
        this.setState({
            clicked: value,
        });
        console.log(value);
    }

    render() {
        
        return ( 
            <div className = "message">
                {this.state.clicked 
                    ? <div className= 'in'> <input autoFocus onBlur ={() => this.handleClick(!this.state.clicked)} type="text" className="inputB" onChange = { (event) => console.log(event.target.value)}></input></div>
                : <p className="txt-header" onClick={() => this.handleClick(!this.state.clicked)}>I am looking <RotatingText className="opac" items={['for a study partner', 'to form a band', 'to Netflix/Chill']} /></p>}
            </div>
            
        )
    }
}

export default SearchBar;

{/*
    this.setState( {query : event.target.value})
   <input type="image" src={searchIcon} onClick={() => this.handleClick(true)} className = "ic-search"/>
            

    ////        ? <input type="text">Enter Something</input> 
    //         : <div className = "message"><p className="txt-header">I am looking <RotatingText className="opac" items={['for a study partner', 'to form a band', 'to Netflix/Chill']} /></p></div>
    ////    <input type="image" src={searchIcon} onClick={() => this.handleClick(true)} className = "ic-search"/>*/
}