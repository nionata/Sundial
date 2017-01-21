import React, {Component} from 'react';

class Features extends Component {
  render() {
    return (
      <section id="features" className="row">
        <div className="feature-box one-third column">
          <h5>Setup meetings</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a fringilla leo. Ut viverra nunc at ante consequat pulvinar.
          </p>
          <a className="button" href="//github.com/meerkats-sundial/sundial#readme" target="blank">Learn more</a>
        </div>
        <div className="feature-box one-third column">
          <h5>Easy to use</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a fringilla leo. Ut viverra nunc at ante consequat pulvinar.
          </p>
          <a className="button" href="//github.com/meerkats-sundial/sundial#readme" target="blank">Learn more</a>
        </div>
        <div className="feature-box one-third column">
          <h5>Seemless collaboration</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a fringilla leo. Ut viverra nunc at ante consequat pulvinar.
          </p>
          <a className="button" href="//github.com/meerkats-sundial/sundial#readme" target="blank">Learn more</a>
        </div>
      </section>
    );
  }
}

export default Features;