import React, { Component } from 'react';
import RotatingText from 'react-rotating-text';
import addIcon from '../img/ic-plus.png';
import menuIcon from '../img/ic-menu.png';
import '../styles/header.css'

class Header extends Component {
    render() {
      return (
          <div className="search-header">
            <img src={menuIcon} className="ic-circular" />
            <p className="txt-header">I am looking <RotatingText className = "textbox" items={['for a study partner', 'to form a band', 'to Netflix/Chill, [insert more stuff]']} /></p>
            {/*add on click to convert to search bar*/}
            {this.props.loggedIn
              ? <a className="btn-header" onClick={this.props.onAdd}> <img src={addIcon} className="ic-circular" /></a>
              : <a className="btn-header" onClick={this.props.onLogin}><p className="color-white">Log In</p></a>}
          </div>
      )
    }
}

export default Header;
