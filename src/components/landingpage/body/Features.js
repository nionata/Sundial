import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './features.css';

class Features extends Component {
  render() {
    return (
      <Grid fluid>
        <Row id="features">
          <Col xs={12} sm={4} className="feature-box text-center">
            <h3 className="feature-title">Easy Setup</h3>
            <p className="feature-description">
              Just enter a name and click a button to get started. From there just share the generated url with your teamates!
            </p>
            <a className="button" href="https://github.com/nionata/Sundial#getting-started" target="_blank">Learn more</a>
          </Col>
          <Col xs={12} sm={4} className="feature-box text-center">
            <h3 className="feature-title">No Complex Conversions</h3>
            <p className="feature-description">
              You simply enter your availability, in your time, and let Sundial take care of finding your team's availability in your time!
            </p>
            <a className="button" href="https://github.com/nionata/Sundial#finding-availability" target="_blank">Learn more</a>
          </Col>
          <Col xs={12} sm={4} className="feature-box text-center">
            <h3 className="feature-title">Seemless Collaboration</h3>
            <p className="feature-description">
              As you make changes on one client, it automatically updates all the other open clients in real time!
            </p>
            <a className="button" href="https://github.com/nionata/Sundial#collaborating-with-your-team" target="_blank">Learn more</a>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Features;
