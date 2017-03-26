import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './featurehighlight.css';
import firstVideo from '../../../assets/videos/tutOne.mp4';
import secondVideo from '../../../assets/videos/tutTwo.mp4';

class FeatureHighlight extends Component {
  render() {
    return (
      <section id="how-to">
        <h2>How It Works</h2>
        <Grid className="feature-highlight" fluid>
          <Row>
            <Col xs={12} md={8}>
                <video className="tut-video" width="100%" controls>
                    <source src={firstVideo} type="video/mp4"/>
                </video>
            </Col>
            <Col xs={12} md={4}>
              <h4 className="feature-caption">
                Simply enter a name to get started. After that add yourself to the team. If you need to you can edit the team name or your information.
              </h4>
            </Col>
          </Row>
        </Grid>
        <Grid className="feature-highlight" fluid>
          <Row>
            <Col xs={12} md={8}>
                <video className="tut-video" width="100%" controls>
                    <source src={secondVideo} type="video/mp4"/>
                </video>
            </Col>
            <Col xs={12} md={4}>
              <h4 className="feature-caption">
                Next copy the url and send it to your teamates. Have them enter their information and then hit sundial to check the team's availability.
              </h4>
            </Col>
          </Row>
        </Grid>
      </section>
    );
  }
}

export default FeatureHighlight;
