import React, { Component } from 'react';
import Header from './buttons/Header.js';
import OnSum from './etc/OnSum.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="b-g">
        <div className="b-g2">
          <OnSum/>
          <Header/>
        </div>
      </div>
    );
  }
}

export default App;
