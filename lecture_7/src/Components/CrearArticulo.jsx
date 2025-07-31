import React from "react";
import { useState } from "react";
import {Form, Button, Container, Row, Col, Alert } from "react-bootstrap";

function CrearArticulo({ addArticle }) {
  const [article, setArticle] = useState({
    titulo: "",
    contenido: ""
  });

  const [guardado, setGuardado] = useState(false);
  
  const handleChange = (e) => {
    setArticle({
      ...article,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addArticle(article);

    setArticle({
      titulo: "",
      contenido: ""
    });

    setGuardado(true);
    setTimeout(() => setGuardado(false), 3000);
  };


  return (
    <>
      <h2>Crear Artículo</h2>
      {guardado && <Alert variant="success">¡Artículo creado correctamente!</Alert>}
      <Form onSubmit={handleSubmit}>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Titulo</Form.Label>
                    <Form.Control
                      type="text"
                      name="titulo"
                      value={article.titulo}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Contenido</Form.Label>
                    <Form.Control
                      type="text"
                      name="contenido"
                      value={article.contenido}
                      onChange={handleChange} 
                      placeholder="Contenido del artículo"
                      
                    />
                  </Form.Group>
                </Col>
              </Row>
              
              <Button variant="primary" type="submit">Crear articulo</Button>
            </Form>
    </>
  );
}

export default CrearArticulo;
