import React, { Component } from 'react';
import { Header, Footer, OnSum } from '../components';
import DmButtons from '../buttons/DmButtons';

import './App.css';

class App extends Component {
  render() {
    return (
        <div>
          <Header/>
            {this.props.childern}
            <div className="b-g">
              <div className="b-g2">
                <OnSum/>
              </div>
                <DmButtons/>
                <Footer/>
            </div>

        </div>
    );
  }
}

export default App;
