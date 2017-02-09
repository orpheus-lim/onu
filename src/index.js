import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { App, Login, Register } from './containers';

import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
      <Route path="/" component={App}/>
      <IndexRoute component={App}/>
      <Route path="login" component={Login}/>
      <Route path="register" component={Register}/>
  </Router>,
  document.getElementById('root')
);
