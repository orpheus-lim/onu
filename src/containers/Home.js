import React, { Component } from 'react';
import OnSum from '../components/OnSum';
import DmButtons from '../buttons/DmButtons';

import '../../public/css/Home.css';

class Home extends Component {
  render() {
    return (
        <div className="b-g">
              온전한 숨
              따뜻한 숨
              온유의 숨
              <OnSum/>
          <DmButtons/>
        </div>
    );
  }
}

export default Home;
