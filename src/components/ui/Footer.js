import React, {Component} from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import './footer.css';

class Footer extends Component {
  render() {
    return (
      <Navbar className="footer" inverse>
        <Nav pullRight>
          <NavItem eventKey={3} href="//github.com/meerkats-sundial/sundial/">GitHub</NavItem>
          <NavItem eventKey={4} href="/terms">Terms of Use</NavItem>
          <NavItem eventKey={5} href="/privacy">Privacy Policy</NavItem>
          <NavItem eventKey={6} href="/contact">Contact Us</NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default Footer;