import React, { Component } from 'react';
import {connect} from 'react-redux';
import { fetchBook } from '../actions/fetchBookAction';
import { fetchNYTBestSellers } from '../actions/fetchNYTBestSellersAction';
import { Container, Row, Col } from 'reactstrap';
import BookShelf from './images/bookshelf.jpg';

class Books extends Component {

  componentDidMount = () => {
    this.props.fetchBook();
    this.props.fetchNYTBestSellers();
  }

  render() {

    const nytBooks = Object.entries(this.props.nyt.data).map((item, key) => {
      const author = item[1].author;
      const covers = item[1].book_image;
      console.log(covers);
      return (
       <Col md="2" sm="4" className="book-col">
        <img src={covers} alt="covers"/>
       </Col>
      );

    })

    return (
      <div>
        <Container className="bestsellers-section">
          <Row>
            <h2>NYT's Best Sellers</h2>
          </Row>
          <Row>
            {nytBooks}
          </Row>
        </Container>
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
