import React, {Component} from 'react';

class Header extends Component {
  render() {
    return (
      <header>
        <h1>sundial</h1>
        <h4>
          Simple session based web app that will allow team members to input available times and their time zone and a time slot will be generated
        </h4>
        <a href="#generate-link">Get Started</a>
      </header>
    );
  }
}

export default Header;