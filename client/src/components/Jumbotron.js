import React from 'react';
import { Jumbotron, Container, Button, Row, Col } from 'reactstrap';
import BookShelf from './images/bookshelf.jpg';
import darker from './images/-80.jpg';


const Jumbo = (props) => {
  return (
    <div>
      {/*style={{ background: `url(${darker})`, backgroundSize: 'cover'}}*/}
      <Jumbotron fluid >
        <Container fluid>
          <Col md="5">
            <h2 className="display-3">Book Trading Club</h2>
            <p className="lead">Trade books with readers from all around the world</p>
            <Button outline color="primary">Log In</Button>{' '}
          </Col>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Jumbo;
