import React, { Component } from 'react';
import Header from './HF/Header';
import Footer from './HF/Footer';
import DmButtons from './buttons/DmButtons';
import OnSum from './etc/OnSum';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="b-g">
          <Header/>
          <div className="b-g2">
            <OnSum/>
          </div>
          <div className="dm-buttons">
            <DmButtons/>
          </div>
          <Footer/>
        </div>
    );
  }
}

export default App;
