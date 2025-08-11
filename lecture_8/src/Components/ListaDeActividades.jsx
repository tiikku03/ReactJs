import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

function ListaDeActividades(props) {
  return (
    <>
      <List>
        {props.actividades.map((actividad, index) => (
          <ListItem key={index}>
            <ListItemText primary={actividad.nombre} secondary={actividad.descripcion} />
          </ListItem>
        ))}
      </List>
    </>
  )
}


export default ListaDeActividades