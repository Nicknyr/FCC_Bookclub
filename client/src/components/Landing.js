import React from 'react';
import { Container, Button, Row, Col } from 'reactstrap';



const Landing = (props) => {
  return (
    <Container>
      <Row className="landing">
        <Col md="6">
          <h1>Book Trading Club</h1>
          <h2>An online book trading platform</h2>
          <p className="lead">Trade books with readers from all around the world</p>
          <Button outline color="primary">Log In</Button>{' '}
        </Col>
      </Row>
    </Container>
  );
};

export default Landing;
