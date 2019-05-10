import React, { Component } from 'react';
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
         <Navbar color="light" light expand="md">
           <NavbarBrand href="/">Book Trading Club</NavbarBrand>
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
