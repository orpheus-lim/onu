import React from 'react';
import {Header, Footer, Auth} from '../components';

class Login extends React.Component {
  render() {
    return(
      <div>
        <Header/>
        <Auth mode={true}/>
        <Footer/>
      </div>
    );
  }
}

export default Login;
