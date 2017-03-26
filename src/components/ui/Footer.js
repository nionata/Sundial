import React, {Component} from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import './footer.css';

class Footer extends Component {
  render() {
    return (
      <Navbar className="footer" inverse>
        <Nav pullRight>
          <NavItem eventKey={3} href="https://github.com/nionata/Sundial" target="_blank">GitHub</NavItem>
          <NavItem eventKey={3} href="https://github.com/nionata/Sundial/blob/master/README.md" target="_blank">Docs</NavItem>
          <NavItem eventKey={3} href="https://github.com/nionata/Sundial/issues" target="_blank">Issues</NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default Footer;
