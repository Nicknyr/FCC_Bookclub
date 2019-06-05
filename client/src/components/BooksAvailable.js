import React, { Component } from 'react';
import { Table } from 'reactstrap';
import NavigationBar from './Nav';
import Footer from './Footer';
import { Col, Container } from 'reactstrap';


class BooksAvailable extends Component {
  render() {
    return (
      <div>
      <NavigationBar />
        <Container className="books-available-container">
          <h2>Books Available</h2>
          <Col md={{size: 10, offset: 1 }} xs={{ size: 12}} className="books-available-list">
            <Table striped>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Author</th>
                  <th>User</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Container>
      <Footer />
      </div>
    );
  }
}

export default BooksAvailable;
