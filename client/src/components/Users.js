import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Col, Container } from 'reactstrap';
import NavigationBar from './Nav';
import Footer from './Footer';
import UserTable from './UserTable';

class Users extends Component {

  componentDidMount = () => {

  }

  render() {

    return (
      <div>
        <NavigationBar />
        <Container className="user-container">
          <Col md={{size: 10, offset: 1 }} xs={{ size: 12}} className="user-list">
            <h2>Users</h2>
            <UserTable />
          </Col>
        </Container>
        <Footer />
      </div>
    );
  }

}


const mapDispatchToProps = dispatch => ({
  //fetchGithubUserData: () => dispatch(fetchGithubUserData())
})

const mapStateToProps = state => ({
  //userData: state.fetchGithubUserDataReducer
})


export default connect(mapStateToProps, mapDispatchToProps)(Users);
