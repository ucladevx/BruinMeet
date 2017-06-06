import React, { Component } from 'react';
import _ from 'lodash';
import RotatingText from 'react-rotating-text';
import addIcon from '../img/ic-plus.png';
import menuIcon from '../img/ic-menu.png';
import logo from '../img/logo.png';
import logo2 from '../img/logo2.png';
import searchIcon from '../img/search.png';
import SearchBar from '../components/searchBar.js';
import '../styles/header.css'

const Header = (props) => (
  <div className="search-header">

    <img src={logo2} className="ic-logo" />
    <SearchBar></SearchBar>  
    <input type="image" src={searchIcon} onClick={() => this.handleClick(!this.state.clicked)} className = "ic-search"/>
  
    {props.isLoggedIn
      ? <div className="right-container">
        <a onClick={props.toggleMeetupModal}>
          <img src={addIcon} className="ic-circular" />
        </a>
        <p className="white" onClick={props.logout}>Log Off</p>
      </div>
      : <a className="btn-header" onClick={props.toggleLoginModal}>
        <p className="white">Log In</p>
      </a>}
  </div>
)

export default Header;
