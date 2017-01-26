import React, {Component} from 'react';
import './header.css';

class Header extends Component {
  render() {
    return (
      <header>
        <h1 className='title'>sundial</h1>
        <h2 className='sub-title'>
          Simple session based web app that will allow team members to input available times and their time zone and a time slot will be generated
        </h2>
        <a href="#generate-link">Get Started</a>
      </header>
    );
  }
}

export default Header;