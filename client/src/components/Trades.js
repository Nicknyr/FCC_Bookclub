import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Row, Col, Container, Card, CardTitle, CardText } from 'reactstrap';
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
            <Card body>
              <CardTitle>User gets</CardTitle>
              <CardText>Name of Book</CardText>
              <CardText>Name of Author</CardText>
            </Card>
          </Col>
          <Col md={{size: 1}} xs={{size: 1}} className="arrow-container">
            <FontAwesomeIcon
              icon={faArrowRight}
              size="2x"
              className="arrow"
            />
          </Col>
          <Col md={{size: 5}} xs={{size: 5}} className="trade-card">
            <Card body>
              <CardTitle>User gets</CardTitle>
              <CardText>Name of Book</CardText>
              <CardText>Name of Author</CardText>
            </Card>
          </Col>
        </Row>
          <Row className="trade-list">
          <Col md={{size: 5}} xs={{size: 5}} className="trade-card">
            <Card body>
              <CardTitle>User gets</CardTitle>
              <CardText>Name of Book</CardText>
              <CardText>Name of Author</CardText>
            </Card>
          </Col>
          <Col md={{size: 1}} xs={{size: 1}} className="arrow-container">
            <FontAwesomeIcon
              icon={faArrowRight}
              size="2x"
              className="arrow"
            />
          </Col>
          <Col md={{size: 5}} xs={{size: 5}} className="trade-card">
            <Card body>
              <CardTitle>User gets</CardTitle>
              <CardText>Name of Book</CardText>
              <CardText>Name of Author</CardText>
            </Card>
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
