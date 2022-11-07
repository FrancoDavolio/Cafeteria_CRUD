import React from "react";
import { Card, Container, Row, Col, Badge } from "react-bootstrap";
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { obtenerProductoAPI } from "../helpers/queries";

const DetalleProducto = () => {
  const [producto, setProducto] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    obtenerProductoAPI(id).then((respuesta) => {
      if (respuesta.status === 200) {
        setProducto(respuesta.dato);
      }
    });
  }, []);

  return (
    <Container className="my-5 mainSection d-flex justify-content-center">
      <Card style={{ width: "45rem" }}>
        <Row>
          <Col md="4">
            <Card.Img
              variant="top"
              src={producto.imagenURL}
            />
          </Col>
          <Col md="8">
            <Card.Body>
              <Card.Title>{producto.nombreProducto}</Card.Title>
              <hr />
              <Badge className="bg-primary">{producto.categoria}</Badge>
              <Card.Text>Precio: ${producto.precio}</Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default DetalleProducto;
