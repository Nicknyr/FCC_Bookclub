import React from 'react';
import { Container, Button, Row, Col } from 'reactstrap';
import PileOfBooks from './images/pileofbooks.svg';


const Landing = (props) => {
  return (
      <Row className="landing">
        <Col md={{size: 5 }} xs={{ size: 10, offset: 1}} className="greeting">
          <h1>Book Trading Club</h1>
          <h2>An online book trading platform</h2>
          <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper viverra nam libero justo. Neque laoreet suspendisse interdum consectetur libero id faucibus.</p>
          <Button outline color="primary">
            <a href="http://localhost:5000/auth/github">Log In</a>
          </Button>{' '}
        </Col>
        <Col md={{size: 5 }} className="pile-of-books">
          <img src={PileOfBooks} alt="Pile of Books" width="400px"/>
        </Col>
      </Row>
  );
};

export default Landing;
