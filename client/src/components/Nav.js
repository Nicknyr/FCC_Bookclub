import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
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
               <NavItem id="nav-link">
                 <NavLink href="http://localhost:5000/auth/github">LOG IN</NavLink>
               </NavItem>
             </Nav>
           </Collapse>
         </Navbar>
       </div>
     );
   }
 }



export default NavigationBar;
