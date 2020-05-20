import React from "react";
import { Col, Row, Container } from "../components/Grid";


function NoMatch() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <h1>No Match!</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default NoMatch;