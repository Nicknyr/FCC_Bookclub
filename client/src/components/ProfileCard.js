import React, { Component } from 'react';
import {
  Card,
  CardTitle,
  CardText,
  CardImg,
  CardBody,
  CardSubtitle
} from 'reactstrap';
import {connect} from 'react-redux';
import { fetchGithubUserData } from '../actions/fetchGithubUserDataAction';
import AddBookModal from './AddBookModal';


class ProfileCard extends Component {

  componentDidMount = () => {
    this.props.fetchGithubUserData();
  }


  render() {
    const username = this.props.userData.username;
    const name = this.props.userData.name;
    const avatar = this.props.userData.avatar;
    const link = this.props.userData.profileUrl;
    const s = "'s";

    return (
      <div>
        <Card id="profile-card">
        <a href={link}><CardImg top src={avatar} alt="User Avatar" id="card-avatar-img"/></a>
        <CardBody>
          <CardTitle>{name}{s} Profile</CardTitle>
          <CardSubtitle>{username}</CardSubtitle>
          <CardSubtitle>City</CardSubtitle>
          <CardSubtitle>State</CardSubtitle>
          <CardSubtitle>Address</CardSubtitle>
          <AddBookModal />
        </CardBody>
      </Card>
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


export default connect(mapStateToProps, mapDispatchToProps)(ProfileCard);
