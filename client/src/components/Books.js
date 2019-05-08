import React, { Component } from 'react';
import {connect} from 'react-redux';
import { fetchBook } from '../actions/fetchBookAction';

class Books extends Component {

  componentDidMount = () => {
    this.props.fetchBook();
  }

  render() {
    return (
      <h1>Hi</h1>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  fetchBook: () => dispatch(fetchBook())
})

const mapStateToProps = state => ({
  books: state.fetchBookReducer
})


export default connect(mapStateToProps, mapDispatchToProps)(Books);
