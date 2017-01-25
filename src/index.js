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

/* ==============================================
 * Uncomment the code below and comment the code
 * above to use Landing page. Code below
 * is for testing only.
 * ==============================================
 */

// import React from 'react';
// import ReactDOM from 'react-dom';
// import LandingPage from './components/landingpage/index';

// import 'normalize-css/normalize.css';
// import 'skeleton-css/css/skeleton.css';
// import './index.css';

// ReactDOM.render(
//   <LandingPage />,
//   document.getElementById('root')
// );