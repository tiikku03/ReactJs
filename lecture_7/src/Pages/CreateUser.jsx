import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Stack, Form, Button, Container, Row, Col, Alert } from "react-bootstrap";

function CreateUser() {
  return (
    <Container  fluid style={{ minHeight: '100vh' }}>
      <Row>
        <Col>
          <Link to="/">Volver</Link>
        </Col>
      </Row>
      <Row>
        <Col>
          <h1>Crear usuario</h1>
          <Form>
            <Container>
              <Row>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Correo Electronico</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Ingrese su correo electronico"
                  />
                </Form.Group>
              </Row>

              <Row>
                <Form.Group controlId="formBasicName">
                  <Form.Label>Nombre de usuario</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingrese su nombre de usuario"
                  />
                </Form.Group>
              </Row>

              <Row>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control type="password" placeholder="Contraseña" />
                </Form.Group>
              </Row>
            </Container>
            <Stack direction="horizontal" gap={5} className="col-md-10 mx-auto">
              <Button variant="primary" type="submit">
                Crear Usuario
              </Button>
              <Button variant="secondary" as={Link} to="/">
                Cancelar
              </Button>
            </Stack>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default CreateUser;
