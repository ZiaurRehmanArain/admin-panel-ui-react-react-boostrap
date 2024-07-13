import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <Container fluid className="bg-dark text-white py-2">
      <Row className="justify-content-center">
        <Col xs="auto">
          <span className="px-2">Contact us</span>
        </Col>
        <Col xs="auto">
          <span className="px-2">Privacy policy</span>
        </Col>
        <Col xs="auto">
          <span className="px-2">Condition</span>
        </Col>
      </Row>
      <Row className="justify-content-center mt-2">
        <Col xs="auto">
          Footer
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
