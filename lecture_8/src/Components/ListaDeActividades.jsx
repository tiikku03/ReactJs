import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useContext } from "react";
import { LocalStorageContext } from "../Context/LocalStorageContext";


/*
{
        id: Date.now(),
        actividad: actividadNombre,
        horas: horasNuevas,
        fecha: new Date().toLocaleDateString(),
      };

*/
function ListaDeActividades() {
  const { valores, } = useContext(LocalStorageContext);

  return (
    <>
      <List>
        {valores.map((actividad, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={actividad?.actividad}
            />
            <ListItemText
              primary={actividad?.horas}
            />
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListaDeActividades;
