import React, { Component } from 'react';
import addIcon from '../img/ic-plus.png';
import menuIcon from '../img/ic-menu.png';
import '../styles/header.css'

class Header extends Component {
    render() {
      return (
        <div>
          <div className="home-header">
            <a className="btn-header">
              <img src={menuIcon} className="ic-circular" />
            </a>
            <p className="txt-header color-blue">Bruin Meet</p>
            {this.props.loggedIn
              ? <a className="btn-header" onClick={this.props.onAdd}>
                <img src={addIcon} className="ic-circular" />
              </a>
              : <a className="btn-header" onClick={this.props.onLogin}>
                <p className="color-blue">Log In</p>
              </a>}
          </div>
          <div className="search-header">
            <p className="txt-header">I am looking for a study partner</p>
          </div>
        </div>
      )
    }
}

export default Header;
