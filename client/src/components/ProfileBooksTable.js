import React, { Component } from 'react';
import { Table } from 'reactstrap';
import {connect} from 'react-redux';
import { fetchUserBooks } from '../actions/fetchUserBooks';

class ProfileBooksTable extends Component {
  componentDidMount = () => {
    this.props.fetchUserBooks();
  }
  render() {
    const books = Object.entries(this.props.userBooks.books).map((item, key) => {
      return (
        <tr key={key}>
          <th scope="row">{key}</th>
          <td>{item[1].bookTitle}</td>
          <td>{item[1].author}</td>
          <td>{item[1].genre}</td>
        </tr>
      );
    })
    console.log('books contain :' + books);

    return (
      <Table hover>
        <thead>
          <tbody>
            {books}
          </tbody>
        </thead>
      </Table>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchUserBooks: () => dispatch(fetchUserBooks())
})

const mapStateToProps = state => ({
  userBooks: state.fetchUserBooksReducer
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileBooksTable);
