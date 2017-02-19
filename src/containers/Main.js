import React, { Component } from 'react';
import Table from '../components/Table';
import Show from '../components/Show';
import './Main.css';

class Main extends Component {
  render() {
    return (
        <div className="container">
          <div className="item"><Table/></div>
          <div className="item"><Show/></div>
        </div>
    );
  }
}

export default Main;
