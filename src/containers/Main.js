import React, { Component } from 'react';
import Table from '../components/Table';
import '../../public/css/Main.css';

class Main extends Component {
  render() {
    return (
        <div className="container">
          <div className="item"><Table/></div>
        </div>
    );
  }
}

export default Main;
