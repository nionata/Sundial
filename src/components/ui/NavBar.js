import React, {Component} from 'react';
import sundialLogo from '../../assets/images/favicon-32x32.png';
import { Navbar } from 'react-bootstrap';
import './navbar.css';

class NavBar extends Component {
  render() {
    return (
      <Navbar className="main-navigation" inverse collapseOnSelect fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <span>
              <a href="/">
                <img src={sundialLogo} alt="meerkat icon" />
                Sundial
              </a>
            </span>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Navbar.Text className='external-nav-link' pullRight>
            <Navbar.Link href="#features">Features</Navbar.Link>
            <Navbar.Link href="//github.com/meerkats-sundial/sundial/" target="_blank">GitHub</Navbar.Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;