import React from 'react'
import './Home.css';
import { Container,Card,Row,Col } from 'react-bootstrap';

function Home() {
  return (
    <div className="home">
    <Container fluid className="d-flex align-items-center justify-content-center vh-100">
      <Card.Body>
        <Row>
          <Col md="10" lg="6" className="d-flex flex-column align-items-center">
            <h1>Welcome, !</h1>
            {/* Other content for the home page */}
          </Col>
          <Col md="10" lg="5" className="d-flex align-items-center">
            <Card.Img src='' fluid />
          </Col>
        </Row>
      </Card.Body>
    </Container>
  </div>
  )
}

export default Home