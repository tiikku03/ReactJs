import React, { useState, useEffect } from "react";
import {LocalStorageContext} from "./LocalStorageContext";

function LocalStorageProvider({ children }) {
  const [valores, setValores] = useState([]);

  const agregarValor = (nuevoValor) => {
    setValores((prev) => [...prev, nuevoValor]);
  };

  useEffect(() => {
    const valoresDeLocalStorage =
      JSON.parse(localStorage.getItem("ActividadesEstaSemana")) || [];
    setValores(valoresDeLocalStorage);
  }, []);

  useEffect(() => {
    localStorage.setItem("ActividadesEstaSemana", JSON.stringify(valores));
  }, [valores]);

  return (
    <LocalStorageContext.Provider value={{ valores, agregarValor }}>
      {children}
    </LocalStorageContext.Provider>
  );
}

export default LocalStorageProvider;
