import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardProducto from "./CardProducto";
import { useState, useEffect } from "react";
import { consultarAPI } from "../helpers/queries";

const Inicio = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    consultarAPI().then(
      (respuesta) => {
        setProductos(respuesta);
      },
      (reason) => {
        console.log(reason);
      }
    );
  }, []);

  return (
    <Container className="mainSection">
      <h1 className="text-center display-1 my-5">Bienvenidos</h1>
      <h2 className="text-center">Menu</h2>
      <hr />
      <Row className="justify-content-around">
        {productos.map((producto) => (
          <Col>
            <CardProducto key={producto.id} producto={producto}></CardProducto>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Inicio;
