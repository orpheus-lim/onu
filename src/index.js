import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { App, Home, Main, SignupPage, Register, Mon_1 } from './containers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import reducers from './reducers';

const store = createStore(
  (state = {}) => state,
    applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home}/>
          <Route path="signup" component={SignupPage}/>
          <Route path="/main" component={Main}/>
          <Route path="mon_1" component={Mon_1}/>
          <Route path="register" component={Register}/>
        </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
