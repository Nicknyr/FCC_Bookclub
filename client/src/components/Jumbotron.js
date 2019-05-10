import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Jumbo = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Book Trading Club</h1>
          <p className="lead">List and swap books</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Jumbo;
