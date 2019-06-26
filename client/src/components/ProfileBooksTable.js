import React, { Component } from 'react';
import { Table } from 'reactstrap';
import {connect} from 'react-redux';
import { fetchUserBooks } from '../actions/fetchUserBooks';

class ProfileBooksTable extends Component {
  componentDidMount = () => {
    this.props.fetchUserBooks();
  }
  render() {
    const data = this.props.userBooks;
    console.log("data contains : " + data);
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

const mapDispatchToProps = dispatch => ({
  fetchUserBooks: () => dispatch(fetchUserBooks())
})

const mapStateToProps = state => ({
  userBooks: state.fetchUsersBooksReducer
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileBooksTable);
