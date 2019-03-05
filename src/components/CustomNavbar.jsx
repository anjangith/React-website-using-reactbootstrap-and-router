import React, { Component } from 'react'
import { Navbar, Nav, NavItem, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css'


export default class CustomNavbar extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
    <Navbar.Brand>
<Link to="/">CodeLife</Link>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav pullRight className="mr-auto">
      <Nav.Link>
      <Link to="/" style={{ textDecoration: 'none'}}>
      Home
      </Link>
      </Nav.Link>
   <Nav.Link >
   <Link to="/about" style={{ textDecoration: 'none'}}>
   About
   </Link>
   </Nav.Link>
   <Nav.Link>
   <Link to="/news" style={{ textDecoration: 'none'}}>
  News
   </Link>
   </Nav.Link>

      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Navbar>
    )
  }
}
