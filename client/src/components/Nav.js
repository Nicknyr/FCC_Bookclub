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
         <Navbar expand="md">
           <NavbarBrand href="/">
             <FontAwesomeIcon
               className="book"
               icon={faBook}
               size="lg"
               color="white"
             />
           <span className="book-trading-club-title">Book Trading Club</span>
           </NavbarBrand>
           <NavbarToggler onClick={this.toggle} />
           <Collapse isOpen={this.state.isOpen} navbar>
             <Nav className="ml-auto" navbar>
               <NavItem>
                 <NavLink href="/books/">Books</NavLink>
               </NavItem>
               <NavItem>
                 <NavLink href="/requests/">Requests</NavLink>
               </NavItem>
               <NavItem>
                 <NavLink href="/trades/">Trades</NavLink>
               </NavItem>
               <NavItem>
                 <NavLink href="/users/">Users</NavLink>
               </NavItem>
               <NavItem>
                 <NavLink href="http://localhost:5000/auth/github">Log in</NavLink>
               </NavItem>
             </Nav>
           </Collapse>
         </Navbar>
       </div>
     );
   }
 }



export default NavigationBar;
