import React, { Component } from 'react';
import {connect} from 'react-redux';
import { fetchGithubUserData } from '../actions/fetchGithubUserDataAction';
import { Row, Col } from 'reactstrap';
import NavigationBar from './Nav';
import Footer from './Footer';
import ProfileBooksTable from './ProfileBooksTable';
import AddBookForm from './AddBookForm';

class Profile extends Component {

  componentDidMount = () => {
    this.props.fetchGithubUserData();
  }

  render() {
    //const username = this.props.userData.username;
    const name = this.props.userData.name;
    const avatar = this.props.userData.avatar;
    const link = this.props.userData.profileUrl;
    const s = "'s";

    return (
      <div>
        <NavigationBar />
        <Col md={{size: 6, offset: 3 }} xs={{ size: 10, offset: 1}} className="profile-page">
          <a href={link}>
            <img src={avatar} alt="Profile avatar" height="150" />
          </a>
          <h2>{name}{s} Profile</h2>
          <Row className="profile-books">
            <h4>Books Available</h4>
            <ProfileBooksTable />
          </Row>
        </Col>
        <Col md={{size: 6, offset: 3 }} xs={{ size: 10, offset: 1}} className="add-book-form">
          <h4>Add New Book</h4>
        
        </Col>
        <Footer />
      </div>
    );
  }

}


const mapDispatchToProps = dispatch => ({
  fetchGithubUserData: () => dispatch(fetchGithubUserData())
})

const mapStateToProps = state => ({
  userData: state.fetchGithubUserDataReducer
})


export default connect(mapStateToProps, mapDispatchToProps)(Profile);
