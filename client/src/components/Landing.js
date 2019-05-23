import React from 'react';
import { Button, Row, Col, Container } from 'reactstrap';
import PileOfBooks from './images/pileofbooks.svg';


const Landing = (props) => {
  return (
    <Container>
      <Row className="landing">
        <Col lg={{size: 5}} md={{size: 7 }} xs={{ size: 10, offset: 1}} className="greeting">
          <h1>Book Trading Club</h1>
          <h2>An online book trading platform</h2>
          <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper viverra nam libero justo. Neque laoreet suspendisse interdum consectetur libero id faucibus.</p>
          <Button outline color="primary">
            <a href="http://localhost:5000/auth/github">Log In</a>
          </Button>{' '}
        </Col>
        <Col lg={{size: 6}} md={{size: 3 }} xs={{size: 12}} className="pile-of-books">
          <img src={PileOfBooks} alt="Pile of Books" width="500px" />
        </Col>
      </Row>
    </Container>
  );
};

export default Landing;
