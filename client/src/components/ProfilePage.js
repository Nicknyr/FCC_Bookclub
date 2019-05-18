import React, { Component } from 'react';
import {connect} from 'react-redux';
//import { fetchBook } from '../actions/fetchBookAction';
import { fetchNYTBestSellers } from '../actions/fetchNYTBestSellersAction';
import { Container, Row, Col } from 'reactstrap';
import NavigationBar from './Nav';
import Footer from './Footer';
import Avatar from './images/avatar.png';
import ProfileBooksTable from './ProfileBooksTable';

class Profile extends Component {

  componentDidMount = () => {
    //this.props.fetchBook();
    this.props.fetchNYTBestSellers();
  }

  render() {
    return (
      <div>
        <NavigationBar />
        <Col md={{size: 6, offset: 3 }} xs={{ size: 10, offset: 1}} className="profile-page">
          <img src={Avatar} alt="Profile avatar" height="150" />
          <h2>User's Profile</h2>
          <Row className="profile-books">
            <h4>Books Available</h4>
            <ProfileBooksTable />
          </Row>
        </Col>
        <Footer />
      </div>
    );
  }

}


const mapDispatchToProps = dispatch => ({
  //fetchBook: () => dispatch(fetchBook()),
  fetchNYTBestSellers: () => dispatch(fetchNYTBestSellers())
})

const mapStateToProps = state => ({
  //books: state.fetchBookReducer,
  nyt: state.fetchNYTBestSellersReducer
})


export default connect(mapStateToProps, mapDispatchToProps)(Profile);
