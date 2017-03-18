import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'

import App from './components/App'
import store from './store'
import LandingPage from './components/landingpage/index';

//import database
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCgvDZulACFrd5vOLUTgzwNDE9BASpKtaw",
    authDomain: "meerkat-sundial.firebaseapp.com",
    databaseURL: "https://meerkat-sundial.firebaseio.com",
    storageBucket: "meerkat-sundial.appspot.com",
    messagingSenderId: "9951676621"
};
firebase.initializeApp(config);

//import styles
import './index.css'


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} >
      <Route path="/" component={LandingPage} />
      <Route path="/team" component={App} />
    </Router>
  </Provider>,
  document.getElementById('root')
)
