import React from 'react'
import { Card, ListGroup } from 'react-bootstrap';

function ArticulosExistentes(props) {
    const showContent = (props) => {
        if(props.contenido.length > 50) {
            return props.contenido.substring(0, 100) + '...';
        }
        return(
            props.contenido
        )
    }


  return (
    <>
    <Card style={{ width: '18rem', margin: '1rem'}}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>{props.titulo}</Card.Title>
        <Card.Text>
          {showContent(props)}
        </Card.Text>
      </Card.Body>
    </Card>

    </>
  )
}

export default ArticulosExistentes