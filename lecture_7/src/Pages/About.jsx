import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function About() {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h1>About</h1>
          <p>Esta es la página About de nuestra aplicación.</p>
        </Col>
      </Row>
    </Container>
  )
}

export default About
