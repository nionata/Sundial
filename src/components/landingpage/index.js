import React, {Component} from 'react';

import NavBar from '../ui/NavBar';
import Body from './body/index';
import Footer from '../ui/Footer';
import './index.css'

class LandingPage extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default LandingPage;