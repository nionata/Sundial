import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'

import App from './components/App'
import LandingPage from './components/landingpage/LandingPage.js';
import NotFound from './components/NotFound'

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
    <Router history={browserHistory} >
        <Route path="/Sundial/" component={LandingPage} />
        <Route path="/Sundial/team/:id" component={App} />
        <Route path='*' component={NotFound} />
    </Router>,
    document.getElementById('root')
)


