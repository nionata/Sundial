import React, {Component} from 'react';
import './generatelink.css';

class GenerateLink extends Component {
  render() {
    return (
      <section id="generate-link">
        <div>
          <h2 className="section-title">Generate your link and start collaborating with your team</h2>
          <a href="/new">Generate Link</a>
        </div>
      </section>
    );
  }
}

export default GenerateLink;