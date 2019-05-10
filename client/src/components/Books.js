import React, { Component } from 'react';
import {connect} from 'react-redux';
import { fetchBook } from '../actions/fetchBookAction';
import { fetchNYTBestSellers } from '../actions/fetchNYTBestSellersAction';

class Books extends Component {

  componentDidMount = () => {
    this.props.fetchBook();
    this.props.fetchNYTBestSellers();
  }

  render() {

    const nytBooks = Object.entries(this.props.nyt.data).map((item, key) => {
      const author = item[1].author;

      return (
        <ul key={key}>
          <li key={key}>{author}</li>
        </ul>
      );

    })

    return (
      <div>
        {nytBooks}
      </div>
    );
  }

}


const mapDispatchToProps = dispatch => ({
  fetchBook: () => dispatch(fetchBook()),
  fetchNYTBestSellers: () => dispatch(fetchNYTBestSellers())
})

const mapStateToProps = state => ({
  books: state.fetchBookReducer,
  nyt: state.fetchNYTBestSellersReducer
})


export default connect(mapStateToProps, mapDispatchToProps)(Books);
