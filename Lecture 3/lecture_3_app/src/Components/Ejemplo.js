import React, { useEffect, useState } from "react"; // Necesitamos importar el hook para poder hacer uso de el

function Ejemplo() {
  let [counter, setCounter] = useState(0);

  useEffect(
    () => {
      console.log(`Component was changed to ${counter}`);
    },
    [counter] /* cual es el momento para cargarse*/
  );

  return (
    <div>
      <h2>Hola bienvenido a mi aplicacion</h2>
      <p>{counter}</p>
      <button onClick={() => setCounter(++counter)}>+</button>
      <button onClick={() => setCounter(--counter)}>-</button>
      <button onClick={() => setCounter(0)}>Reset</button>
    </div>
  );
}

export default Ejemplo;
