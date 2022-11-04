import React from "react";
import { Card, Container, Row, Col, Badge } from "react-bootstrap";

const DetalleProducto = () => {
  return (
    <Container className="my-5 mainSection">
      <Card style={{ width: "45rem" }}>
        <Row>
          <Col md="4">
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/887853/pexels-photo-887853.jpeg?cs=srgb&dl=pexels-kshkt-kttk-887853.jpg&fm=jpg"
              className="w-100"
            />
          </Col>
          <Col md="8">
            <Card.Body>
              <Card.Title>Brownie</Card.Title>
              <hr />
              <Badge className="bg-primary">Dulce</Badge>
              <Card.Text>
                Precio: $300
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default DetalleProducto;
