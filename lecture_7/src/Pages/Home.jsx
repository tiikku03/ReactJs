import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import CreateArticle from "../Components/CrearArticulo";
import ArticulosExistentes from "../Components/ArticulosExistentes";
import Articulos from "../Hooks/Articulos";
import useLocalStorageArticles from "../Hooks/useLocalStorageArticles";

import {
  Stack,
  Container,
  Row,
  Col,
  Form,
  Button,
  Alert,
} from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";


function Home() {
  const userName = JSON.parse(localStorage.getItem("usuario"))?.nombre || "Invitado";
  

  const { articles, addArticle } = useLocalStorageArticles();

  
 

  return (
    <Container fluid style={{ border: "none" }}>
      
      <Row className="flex-fill" style={{ flex: '1' }}>
        <Col className="d-flex align-items-center justify-content-center">
          <Header />
        </Col>
      </Row>
      
      <Row className="flex-fill" style={{ flex: '6' }}>
        <Col className="d-flex flex-column justify-content-center align-items-center p-4">
          <h1>Bienvenido {userName}</h1>
          <Stack direction="horizontal" gap={3}>
            <Link to="/About" >About</Link>
            <Link to="/Gallery" >Gallery</Link>
          </Stack>
        </Col>
      </Row>
      <CreateArticle addArticle={addArticle} />
      <Stack className="flex-fill" style={{ display: 'flex', flexFlow: 'row wrap', alignItems: 'center' }}>
       
        {articles.map((e, index) => {
          return <ArticulosExistentes 
            key={e.id || index}
            imagen={e.imagen} 
            titulo={e.titulo} 
            contenido={e.contenido}  
            style={{ width: '18rem', margin: '1rem' }} 
          />;
        })}
        
        
        {Articulos.map((e, index) => {
          return <ArticulosExistentes 
            key={`static-${index}`}
            imagen={e.imagen} 
            titulo={e.titulo} 
            contenido={e.contenido}  
            style={{ width: '18rem', margin: '1rem' }} 
          />;
        })}
      </Stack>

      <Row className="flex-fill" style={{ flex: '1' }}>
        <Col className="d-flex align-items-center justify-content-center">
          <Footer />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
