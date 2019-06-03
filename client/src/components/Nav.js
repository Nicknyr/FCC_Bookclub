import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import {connect} from 'react-redux';
import { fetchGithubUserData } from '../actions/fetchGithubUserDataAction';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  } from 'reactstrap';

class NavigationBar extends Component {
  constructor(props) {
     super(props);

     this.toggle = this.toggle.bind(this);
     this.state = {
       isOpen: false
     };
   }
   toggle() {
     this.setState({
       isOpen: !this.state.isOpen
     });
   }

  componentDidMount() {
    this.props.fetchGithubUserData();
  }

   render() {
     return (
       <div>
         <Navbar expand="md" light id="my-nav">
           <NavbarBrand href="/">
             <FontAwesomeIcon
               className="book"
               icon={faBook}
               size="lg"
               color="white"
             />
           <span className="book-trading-club-title">Book Trading Club</span>
           </NavbarBrand>
           <NavbarToggler onClick={this.toggle} id="hamburger"/>
           <Collapse isOpen={this.state.isOpen} navbar>
             <Nav className="ml-auto" navbar>
               <NavItem className="nav-item" id="nav-link">
                 <NavLink href="/books/">BOOKS</NavLink>
               </NavItem>
               <NavItem id="nav-link">
                 <NavLink href="/requests/">REQUESTS</NavLink>
               </NavItem>
               <NavItem id="nav-link">
                 <NavLink href="/trades/">TRADES</NavLink>
               </NavItem>
               <NavItem id="nav-link">
                 <NavLink href="/users/">USERS</NavLink>
               </NavItem>
               {/*
                 if user isn't logged in display 'log in' link,
                 if user is logged in display 'profile' link
               */}
               {
                 (this.props.userData.username === undefined)
                 ?  <NavItem id="nav-link">
                    <NavLink href="http://localhost:5000/auth/github">LOG IN</NavLink>
                    </NavItem>
                 :  <NavItem id="nav-link">
                    <NavLink href="http://localhost:5000/auth/github">PROFILE</NavLink>
                    </NavItem>
               }
             </Nav>
           </Collapse>
         </Navbar>
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

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
