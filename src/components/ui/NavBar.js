import React, {Component} from 'react';
import sundialLogo from '../../assets/images/favicon-32x32.png';
import './navbar.css';

class NavBar extends Component {
  render() {
    return (
      <nav className="main-navigation">
        <div>
          <img src={sundialLogo} alt="meerkat icon" />
          <a className="nav-home" href="#">Sundial</a>
          <ul>
            <li><a href="#features">Features</a></li>
            <li><a href="//github.com/meerkats-sundial/sundial" target="_blank">Github</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;