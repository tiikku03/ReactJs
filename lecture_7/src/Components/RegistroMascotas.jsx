import {Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import React, { useState } from 'react';

const RegistroMascotas = () => {
  const [form, setForm] = useState({
    nombre: '',
    especie: '',
    raza: '',
    edad: '',
    duenio: '',
  });

  const [guardado, setGuardado] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mascotas = JSON.parse(localStorage.getItem("mascotas")) || [];
    mascotas.push(form);
    localStorage.setItem("mascotas", JSON.stringify(mascotas));

    setForm({
      nombre: '',
      especie: '',
      raza: '',
      edad: '',
      duenio: '',
    });

    setGuardado(true);
    setTimeout(() => setGuardado(false), 3000);
  };

  return (
    <Container className="mt-5">
      <h2 className="mb-4">Registros de mascotas</h2>
      {guardado && <Alert variant="success">Mascota registrada correctamente!</Alert>}
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Nombre de la mascota</Form.Label>
              <Form.Control
                type="text"
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Especie</Form.Label>
              <Form.Control
                type="text"
                name="especie"
                value={form.especie}
                onChange={handleChange}
                placeholder="Perro, Gato, Loro"
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <Form.Group className="mb-3">
              <Form.Label>Raza</Form.Label>
              <Form.Control
                type="text"
                name="raza"
                value={form.raza}
                onChange={handleChange}
                placeholder="Labrador, Siames, etc."
                required
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group className="mb-3">
              <Form.Label>Edad</Form.Label>
              <Form.Control
                type="number"
                name="edad"
                min={1}
                value={form.edad}
                onChange={handleChange}
                placeholder="Edad en años"
                required
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group className="mb-3">
              <Form.Label>Dueño</Form.Label>
              <Form.Control
                type="text"
                name="duenio"
                value={form.duenio}
                onChange={handleChange}
                placeholder="nombre del dueño"
                required
              />
            </Form.Group>
          </Col>
          </Row>
        <Button variant="primary" type="submit">Registrar Mascota</Button>
      </Form>
    </Container>
  );
};

export default RegistroMascotas;