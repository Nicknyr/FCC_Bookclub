import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

const Join = (props) => {
  return (
    <Row className="join-section">
      <Col md="12">
        <h3>Join Us</h3>
        <h2>Start Trading Books Today</h2>
        <p>We know you'll enjoy the community we've built. Register and start trading books today!</p>
        <form className="join-form">
          <input type="text"></input>
          <Button color="purple">Submit</Button>
        </form>
      </Col>
    </Row>
  );
};

export default Join;
