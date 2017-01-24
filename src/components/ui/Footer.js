import React, {Component} from 'react';
import './footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="small-print">
          <nav>
            <ul>
              <li><a href="//github.com/meerkats-sundial/sundial">GitHub</a></li>
              <li><a href="#">Terms of Use</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Footer;