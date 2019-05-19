import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Row, Col, Container } from 'reactstrap';
import NavigationBar from './Nav';
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

class Trades extends Component {

  componentDidMount = () => {

  }

  render() {

    return (
      <div>
        <NavigationBar />
        <Container>
          <Row className="trade-list">
            <Col md={{size: 5}} xs={{size: 5}} className="trade-card">
              <h4>User gets: </h4>
              <p>Name of Book</p>
              <p>Author of Book</p>
            </Col>
            <Col md={{size: 1}} className="arrow-container">
              <FontAwesomeIcon
                icon={faArrowRight}
                size="2x"
                className="arrow"
              />
            </Col>
            <Col md={{size: 5}} xs={{size: 5}} className="trade-card">
              <h4>User gets: </h4>
              <p>Name of Book</p>
              <p>Author of Book</p>
            </Col>
          </Row>
          <Row className="trade-list">
            <Col md={{size: 5}} xs={{size: 5}} className="trade-card">
              <h4>User gets: </h4>
              <p>Name of Book</p>
              <p>Author of Book</p>
            </Col>
            <Col md={{size: 1}} className="arrow-container">
              <FontAwesomeIcon
                icon={faArrowRight}
                size="2x"
                className="arrow"
              />
            </Col>
            <Col md={{size: 5}} xs={{size: 5}} className="trade-card">
              <h4>User gets: </h4>
              <p>Name of Book</p>
              <p>Author of Book</p>
            </Col>
          </Row>
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


export default connect(mapStateToProps, mapDispatchToProps)(Trades);
