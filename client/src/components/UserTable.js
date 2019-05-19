import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { Badge } from 'reactstrap';

class UserTable extends Component {
  render() {
    return (
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Username</th>
            <th>City</th>
            <th>Books</th>
            <th>Requests</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>NYC</td>
            <td>
              <Badge href="#" color="primary">Books: 1</Badge>
            </td>
            <td>
              <Badge href="#" color="warning">Pending: 4</Badge>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>London, England</td>
            <td>
              <Badge href="#" color="primary">Books: 7</Badge>
            </td>
            <td>
              <Badge href="#" color="warning">Pending: 4</Badge>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>St. Louis, Missouri</td>
            <td>
              <Badge href="#" color="primary">Books: 4</Badge>
            </td>
            <td>
              <Badge href="#" color="warning">Pending: 4</Badge>
            </td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

export default UserTable;
