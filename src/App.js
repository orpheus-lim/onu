import React, { Component } from 'react';
import DmButtons from './buttons/DmButtons';
import OnSum from './etc/OnSum';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="b-g">
          <div className="b-g2">
            <OnSum/>
            <DmButtons/>
          </div>
        </div>
    );
  }
}

export default App;
