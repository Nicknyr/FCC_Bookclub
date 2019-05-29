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


class ProfileTabs extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
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
                  <Form id="update-profile-form">
                    <FormGroup>
                      <Label for="exampleEmail">Username</Label>
                      <Input type="email" name="username" id="username" placeholder="Enter username" />
                    </FormGroup>
                    <FormGroup>
                      <Label for="examplePassword">Full Name</Label>
                      <Input type="password" name="fullname" id="name" placeholder="Enter name" />
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleEmail">City</Label>
                      <Input type="email" name="city" id="city" placeholder="Enter city" />
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleEmail">State</Label>
                      <Input type="email" name="state" id="state" placeholder="Enter state" />
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleEmail">Address</Label>
                      <Input type="email" name="address" id="address" placeholder="Enter mailing address" />
                    </FormGroup>
                    <Button>Submit</Button>
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
