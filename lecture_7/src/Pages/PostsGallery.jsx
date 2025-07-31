

import { Outlet, Link } from "react-router-dom";
import {
  Stack,
  Form,
  Button,
  Container,
  Row,
  Col,
  Alert,
} from "react-bootstrap";

function PostsGallery() {
  

  return (
    <Stack>
        <Container>
      <Row>
        <Col>
          <Link to="/">Volver</Link>
        </Col>
      </Row>
      <Row>
        <Col>
          <h1>Galería</h1>
          <p>Contenido de la galería</p>
        </Col>
      </Row>
    </Container>
      <Container className="mt-5">
        <Stack direction="horizontal" gap={3}>
          <Link to="/CreateUser">
            <Button variant="primary">Crear Usuario</Button>
          </Link>
          <Link to="/Gallery">
            <Button variant="secondary">Ver Galería</Button>
          </Link>
        </Stack>
      </Container>
    </Stack>
  );
}
export default PostsGallery;
