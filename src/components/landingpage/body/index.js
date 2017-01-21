import React, {Component} from 'react';

import Header from './Header';
import Features from './Features';
import FeatureHighlight from './FeatureHighlight';
import GenerateLink from './GenerateLink';

class Body extends Component {
  render() {
    return (
      <div className='wrapper'>
      <Header />
      <Features />
      <FeatureHighlight />
      <GenerateLink />
      </div>
    );
  }
}

export default Body;