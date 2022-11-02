import React from "react";
import Nav from "react-bootstrap/Nav";

const Menu = () => {
  return (
    <header>
      <Nav variant="pills" defaultActiveKey="/home" className="bg-danger py-3">
        <Nav.Item className="ms-3">
          <h2>Cafeteria</h2>
        </Nav.Item>
        <Nav.Item className="ms-2">
          <Nav.Link href="/">Inicio</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/administrar">Administrar</Nav.Link>
        </Nav.Item>
      </Nav>
    </header>
  );
};

export default Menu;
