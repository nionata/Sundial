import React, {Component} from 'react';
import './smoothscroll';
import './index.css';
import NavBar from '../ui/NavBar';
import Body from './body/index';
import Footer from '../ui/Footer';

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