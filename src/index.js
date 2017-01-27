import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'

import App from './components/App'
import store from './store'
import LandingPage from './components/landingpage/index';

//import styles
import './index.css'


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} >
      <Route path="/" component={LandingPage} />
      <Route path="/:sessionid" component={App} />
    </Router>
  </Provider>,
  document.getElementById('root')
)