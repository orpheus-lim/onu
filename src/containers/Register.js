import React from 'react';
import {Header, Footer, Auth} from '../components';

class Register extends React.Component {

  render() {
    return(
      <div>
        <Header/>
        <Auth mode={false}/>
        <Footer/>
      </div>
    );
  }
}

export default Register;
