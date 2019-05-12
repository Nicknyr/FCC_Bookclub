import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import BookShelf from './images/bookshelf.jpg';
import darker from './images/-80.jpg';


const Jumbo = (props) => {
  return (
    <div>
      <Jumbotron fluid style={{ background: `url(${darker})`, backgroundSize: 'cover'}}>
        <Container fluid>
          <h1 className="display-3">Book Trading Club</h1>
          <p className="lead">List and swap books</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Jumbo;
