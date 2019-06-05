import React, { Component } from 'react';
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Button,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input } from 'reactstrap';
import classnames from 'classnames';
import ProfileBooksTable from './ProfileBooksTable';
import axios from 'axios';

class ProfileTabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: '1',
      username: '',
      fullName: '',
      city: '',
      state: '',
      address: ''
    };

    this.toggle = this.toggle.bind(this);
    this.onSubmit = this.handleSubmit.bind(this);
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const fullName = this.state.fullName;
    const city = this.state.city;
    const state = this.state.state;
    const address = this.state.address;

    axios.post('/profile',{
      username: username,
      fullName: fullName,
      city: city,
      state: state,
      address: address
    })
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    })
  }

  handleInputChange = (event) => {
    event.preventDefault();

    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    const {username} = this.state;
    const {fullName} = this.state;
    const {city} = this.state;
    const {state} = this.state;
    const {address} = this.state;
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Books
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Update Profile
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <ProfileBooksTable />
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
                  <Form
                    method="POST"
                    action="/profile"
                    onSubmit={this.handleSubmit}
                    id="update-profile-form">
                    <FormGroup>
                      <Label>Username</Label>
                      <Input
                        value={username}
                        name="username"
                        id="username"
                        onChange={this.handleInputChange}
                        placeholder="Enter username" />
                    </FormGroup>
                    <FormGroup>
                      <Label>Full Name</Label>
                      <Input
                        value={fullName}
                        name="fullName"
                        id="name"
                        onChange={this.handleInputChange}
                        placeholder="Enter name" />
                    </FormGroup>
                    <FormGroup>
                      <Label>City</Label>
                      <Input
                        value={city}
                        name="city"
                        id="city"
                        onChange={this.handleInputChange}
                        placeholder="Enter city" />
                    </FormGroup>
                    <FormGroup>
                      <Label>State</Label>
                      <Input
                        value={state}
                        name="state"
                        id="state"
                        onChange={this.handleInputChange}
                        placeholder="Enter state" />
                    </FormGroup>
                    <FormGroup>
                      <Label>Address</Label>
                      <Input
                        value={address}
                        name="address"
                        id="address"
                        onChange={this.handleInputChange}
                        placeholder="Enter mailing address" />
                    </FormGroup>
                    <Button type="submit">Submit</Button>
                  </Form>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">

              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}


export default ProfileTabs;
