import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './features.css';

class Features extends Component {
  render() {
    return (
      <Grid fluid>
        <Row id="features">
          <Col xs={12} sm={4} className="feature-box">
            <h3 className="feature-title">Setup meetings</h3>
            <p className="feature-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a fringilla leo. Ut viverra nunc at ante consequat pulvinar.
            </p>
            <a className="button" href="//github.com/meerkats-sundial/sundial#readme">Learn more</a>
          </Col>
          <Col xs={12} sm={4} className="feature-box">
            <h3 className="feature-title">Easy to use</h3>
            <p className="feature-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a fringilla leo. Ut viverra nunc at ante consequat pulvinar.
            </p>
            <a className="button" href="//github.com/meerkats-sundial/sundial#readme">Learn more</a>
          </Col>
          <Col xs={12} sm={4} className="feature-box">
            <h3 className="feature-title">Seemless collaboration</h3>
            <p className="feature-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a fringilla leo. Ut viverra nunc at ante consequat pulvinar.
            </p>
            <a className="button" href="//github.com/meerkats-sundial/sundial#readme">Learn more</a>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Features;