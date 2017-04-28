import React, { Component } from 'react';
import addIcon from './img/ic-plus.png';
import menuIcon from './img/ic-menu.png';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="body">
        <div className="home-header">
          <a className="btn-header">
            <img src={menuIcon} className="ic-circular" />
          </a>
          <p className="txt-header color-blue">Bruin Meet</p>
          <a className="btn-header">
            <img src={addIcon} className="ic-circular" />
          </a>
        </div>
        <div className="search-header">
          <p className="txt-header">I am looking for a study partner</p>
        </div>
      </div>
    );
  }
}

export default App;
