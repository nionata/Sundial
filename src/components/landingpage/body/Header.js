import React, {Component} from 'react';
import './header.css';

class Header extends Component {
  render() {
    return (
      <header>
        <h1 className='title' id="title">Sundial</h1>
        <h2 className='sub-title'>
          Simple session based web app that allows remote teams to find meeting availbility across multiple time zones!
        </h2>
        <a href="#generate-link">Get Started</a>
      </header>
    );
  }
}

export default Header;
