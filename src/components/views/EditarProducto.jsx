import React from "react";
import { Form, Button, Container } from "react-bootstrap";

const EditarProducto = () => {
  return (
    <Container>
      <h1>Nuevo producto</h1>
      <hr />
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Nombre producto*</Form.Label>
          <Form.Control type="text" placeholder="Ej: Cafe" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Precio*</Form.Label>
          <Form.Control type="text" placeholder="Ej: 50" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Imagen URL*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: https://www.imagen.com/es-es/hola-31231/"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Categoria*</Form.Label>
          <Form.Select>
            <option>Seleccione una opcion</option>
          </Form.Select>
        </Form.Group>
        <Button variant="primary" type="submit">
          Guardar
        </Button>
      </Form>
    </Container>
  );
};

export default EditarProducto;
