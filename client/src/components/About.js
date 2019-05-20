import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const About = (props) => {
  return (
    <Container>
      <Row className="about-section">
        <Col md={{size: 8, offset: 2}} xs={{size: 12}}>
          <h3>About Us</h3>
          <h2>This is a header bla blah</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eu sem integer vitae. Ultrices tincidunt arcu non sodales neque sodales.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
