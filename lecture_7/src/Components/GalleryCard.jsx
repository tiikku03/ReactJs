import React from 'react'
import { Card, ListGroup } from 'react-bootstrap';

function GalleryCard(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.imagen} />
      <Card.Body>
        <Card.Title>{props.titulo}</Card.Title>
        <Card.Text>
          {props.descripcion}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default GalleryCard