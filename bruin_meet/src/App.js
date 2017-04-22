import React, { Component } from 'react';
import addIcon from './img/ic-add.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="body">
        <div className="home-header">
          <h1 className="home-logo">BM</h1>
          <a className="btn-add">
            <img src={addIcon} className="ic-add" />
          </a>
        </div>
      </div>
    );
  }
}

export default App;
