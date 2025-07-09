import { useState, useEffect, useReducer } from "react";
import React from "react";
// Asegúrate de instalar node-fetch si estás usando Node.js
const API = "https://api.escuelajs.co/api/v1/";

function postData(urlAPI, data) {
  return fetch(urlAPI, {
    method: "POST", // get:obtener,post:enviar,put: actualizar,delete: eliminar
    mode: "cors", // cors: cross origin resource sharing, no-cors: no permite compartir recursos entre dominios
    credentials: "same-origin", // same-origin: mismo origen, include: incluye cookies,
    headers: {
      "Content-Type": "application/json", // tipo de contenido que se esta enviando
    },
    body: JSON.stringify(data), // convierte el objeto a una cadena JSON
  });
}

const imageFormat = {
  "title": "Camisa",
  "price": 800,
  "description": "A description",
  "categoryId": 1,
  "images": ["https://placehold.co/600x400"]
}

postData(`https://api.escuelajs.co/api/v1/products/`, imageFormat)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
  

let initialState = {
  name: "",
  email: "",
  product: "",
};
// para trabajar con useReducer se necesita un reducer que es una funcion
//que recibe el estado actual y una accion, y retorna un nuevo estado
// dependiendo de la accion que se le pase

function dataReducer(state, action) {
  // sí el reducer se vuelve my complejo es buena practica separarlo en un archivo aparte
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_PRODUCT":
      return { ...state, product: action.payload };
    default:
      return state;
  }
}

function BuyForm() {
  const [datos, dispatch] = useReducer(dataReducer, initialState);
  const [failure, setFailure] = useState(false);
  const [success, setSuccess] = useState(false);
  const handlingSubmit = (event) => {
    event.preventDefault();
    console.log("datos", datos);
  };

  useEffect(() => {});
  return (
    <form action="post" onSubmit={handlingSubmit}>
      <h1>Buy Form</h1>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        required
        value={datos.name}
        onChange={(e) =>
          dispatch({ type: "SET_NAME", payload: e.target.value })
        }
      />
      <br />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        required
        value={datos.email}
        onChange={(e) =>
          dispatch({ type: "SET_EMAIL", payload: e.target.value })
        }
      />
      <br />
      <label htmlFor="product">Product:</label>
      <select
        id="product"
        name="product"
        value={datos.product}
        onChange={(e) =>
          dispatch({ type: "SET_PRODUCT", payload: e.target.value })
        }
      >
        <option value="">Elije el producto</option>
        <option value="product1">Product 1</option>
        <option value="product2">Product 2</option>
        <option value="product3">Product 3</option>
      </select>
      <br />
      <button type="submit">Buy Now</button>
    </form>
  );
}

export default BuyForm;
