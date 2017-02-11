import React, { Component } from 'react';
import OnSum from '../components/OnSum';
import DmButtons from '../buttons/DmButtons';

import './Home.css';

class Home extends Component {
  render() {
    return (
        <div className="b-g">
            <div className="b-g2">
              온전한 숨
              따뜻한 숨
              온유의 숨
              <OnSum/>
            </div>
          <DmButtons/>
        </div>
    );
  }
}

export default Home;
