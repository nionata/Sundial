import React, {Component} from 'react';

class FeatureHighlight extends Component {
  render() {
    return (
      <section>
        <h4>Example usage</h4>
        <div className="feature-highlight">
          <figure className="row">
            <img src="//placehold.it/350x150" alt="Feature highlight" className="two-thirds column" />
            <figcaption className="one-third column">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a fringilla leo. Ut viverra nunc at ante consequat pulvinar.
            </figcaption>
          </figure>
        </div>
        <div className="feature-highlight">
          <figure className="row">
            <img src="//placehold.it/350x150" alt="Feature highlight" className="two-thirds column" />
            <figcaption className="one-third column">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a fringilla leo. Ut viverra nunc at ante consequat pulvinar.
            </figcaption>
          </figure>
        </div>
      </section>
    );
  }
}

export default FeatureHighlight;