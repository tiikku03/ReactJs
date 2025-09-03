import React from 'react'
import { useEffect, useRef } from 'react';

function Pruebas() {
  const inputRef = useRef(null);

  useEffect(() => {
    // 'current' se refiere al nodo del DOM
    inputRef.current.focus(); 
  }, []); // El array vacío asegura que se ejecuta solo una vez al montarse

  return (
    <input ref={inputRef} type="text" />
  );
}


export default Pruebas;



/*




https://docs.google.com/spreadsheets/d/1Falg78ZQ_Q1tLV5_0qUduvCwunJDVk2gzpGDGFlc7Aw/edit?gid=0#gid=0





*/