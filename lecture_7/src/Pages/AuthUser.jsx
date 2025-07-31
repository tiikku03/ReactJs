import React from "react";
import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { Container, Row, Col, Form, Stack, Button } from "react-bootstrap";

function AuthUser() {
  const [contrasena, setContrasena] = useState("");
  const [nombre, setNombre] = useState("");

  localStorage.setItem("usuario", JSON.stringify({ nombre }));

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };
  return (
    <Container style={{ height: '10rem', width: '25rem', padding: '5px' }}>
      <Row>
        <Col>
          <h1>Ingresar</h1>
        </Col>
      </Row>
      <Row>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Contraseña"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
            />
          </Form.Group>
        </Form>
        <Stack direction="horizontal" gap={5} className="col-md-8 mx-auto">
          <Button type="submit" as={Link} to="/Home">Iniciar sesión</Button>
          <Button variant="secondary" as={Link} to="/CreateUser">
            No tengo Cuenta
          </Button>
        </Stack>
      </Row>
    </Container>
  );
}

export default AuthUser;
