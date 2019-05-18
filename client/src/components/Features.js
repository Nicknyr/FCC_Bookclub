import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookReader, faUsers, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const Features = (props) => {
  return (
    <Container>
      <Row className="features-section">
        <Col md={{ size: 4 }} sm={{ size: 12 }} className="feature">
          <FontAwesomeIcon
            icon={faBookReader}
            size="3x"
            color="#4392F1"
          />
        <h3>Books</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu volutpat odio facilisis mauris sit amet massa.</p>
        </Col>
        <Col md={{ size: 4 }} sm={{ size: 12 }} className="feature">
          <FontAwesomeIcon
            icon={faUsers}
            size="3x"
            color="#4392F1"
          />
        <h3>Trade</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi quis eleifend quam adipiscing vitae proin.</p>
        </Col>
        <Col md={{ size: 4 }} sm={{ size: 12 }} className="feature">
          <FontAwesomeIcon
            icon={faThumbsUp}
            size="3x"
            color="#4392F1"
          />
        <h3>Success</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor eget dolor morbi non arcu risus quis.</p>
        </Col>
      </Row>
    </Container>
  );
}


export default Features;
