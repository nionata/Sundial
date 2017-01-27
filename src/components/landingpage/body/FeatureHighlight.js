import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './featurehighlight.css';

class FeatureHighlight extends Component {
  render() {
    return (
      <section>
        <h2>Example usage</h2>
        <Grid className="feature-highlight" fluid>
          <Row>
            <Col xs={12} md={8}>
              <img src="//placehold.it/350x150" alt="Feature highlight" className="responsive" />
            </Col>
            <Col xs={12} md={4}>
              <h4 className="feature-caption">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a fringilla leo. Ut viverra nunc at ante consequat pulvinar.
              </h4>
            </Col>
          </Row>
        </Grid>
        <Grid className="feature-highlight" fluid>
          <Row>
            <Col xs={12} md={8}>
              <img src="//placehold.it/350x150" alt="Feature highlight" className="responsive" />
            </Col>
            <Col xs={12} md={4}>
              <h4 className="feature-caption">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a fringilla leo. Ut viverra nunc at ante consequat pulvinar.
              </h4>
            </Col>
          </Row>
        </Grid>
      </section>
    );
  }
}

export default FeatureHighlight;