import React, { Component } from 'react';
import RotatingText from 'react-rotating-text';
import addIcon from '../img/ic-plus.png';
import menuIcon from '../img/ic-menu.png';
import '../styles/header.css'

const Header = (props) => (
  <div className="search-header">
    <img src={menuIcon} className="ic-circular" />
    <div className = "message"><p className="txt-header">I am looking <RotatingText className="opac" items={['for a study partner', 'to form a band', 'to Netflix/Chill']} /></p></div>
    {/*add on click to convert to search bar*/}
    {props.isLoggedIn
      ? <a className="btn-header" onClick={props.onAdd}> <img src={addIcon} className="ic-circular" /> <p className="color-white">Log Off</p></a>
      : <a className="btn-header" onClick={props.toggleLoginModal}><p className="color-white">Log In</p></a>}
  </div>
)

export default Header;
