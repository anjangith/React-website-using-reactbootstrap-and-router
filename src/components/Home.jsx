import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
  render() {
    return(
      <Container>
      <Jumbotron>
      <h2>Welcome to my first react website</h2>
      <p>This website is built with react, react-router and react-dom and also react-bootstrap</p>

      <Link to="/about" style={{ textDecoration: 'none'}}>
      <Button variant="primary" size="lg" >About</Button>
      </Link>
      </Jumbotron>
      <Row className="show-grid text-center">
         <Col xs={12} sm={4} className="person-wrapper">
           <Image src="assets/person-1.jpg" roundedCircle className="profile-pic"/>
           <h3>Frank</h3>
           <p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your brush and you just have to push them out.</p>
         </Col>
         <Col xs={12} sm={4} className="person-wrapper">
           <Image src="assets/person-2.jpg" roundedCircle className="profile-pic"/>
           <h3>Vanessa</h3>
           <p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your brush and you just have to push them out.</p>
         </Col>
         <Col xs={12} sm={4} className="person-wrapper">
           <Image src="assets/person-3.jpg" roundedCircle className="profile-pic"/>
           <h3>Riff</h3>
           <p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your brush and you just have to push them out.</p>
         </Col>
       </Row>
      </Container>
    )
  }
}
