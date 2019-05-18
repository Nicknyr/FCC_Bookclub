import React, { Component } from 'react';
import { Table } from 'reactstrap';

class ProfileBooksTable extends Component {
  render() {
    return (
      <Table hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Author</th>
            <th>Genre</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>1984</td>
            <td>George Orwell</td>
            <td>Fiction</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>A Clockwork Orange</td>
            <td>Anthony Burgress</td>
            <td>Fiction</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>For Whom the Bell Tolls</td>
            <td>Ernest Hemingway</td>
            <td>Fiction</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

export default ProfileBooksTable;
