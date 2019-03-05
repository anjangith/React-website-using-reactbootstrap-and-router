import React, { Component } from "react";
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class  Footer extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
    <Navbar.Brand>
<Link to="/">CODE LIFE</Link>
    </Navbar.Brand>
  </Navbar>
  );
  }
}
