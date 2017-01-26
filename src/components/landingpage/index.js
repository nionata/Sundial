import React, {Component} from 'react';

import $ from 'jquery';

import './index.css';
import NavBar from '../ui/NavBar';
import Body from './body/index';
import Footer from '../ui/Footer';

class LandingPage extends Component {
  render() {
    // smooth scrolling
    $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
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