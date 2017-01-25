import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './components/App'
import store from './store'

//import styles
import './index.css'


ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>
  ,
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