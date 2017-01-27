import React, {Component} from 'react';
import sundialLogo from '../../assets/images/favicon-32x32.png';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
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
          <Nav pullRight>
            <NavItem eventKey={1} href="#features">Features</NavItem>
          </Nav>
          <Navbar.Text className='external-nav-link' pullRight>
            <Navbar.Link href="//github.com/meerkats-sundial/sundial/" target="_blank">GitHub</Navbar.Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;