import React, { useState, useEffect } from "react";
import useScannerFromVideoDevice from "../Hooks/useScannerFromVideoDevice";

function AddProductForm() {
  
  const [producto, setProducto] = useState({
    nombre: "",
    cantidad: "",
    id: "",
    categoria: "",
  });

  const { result, error, videoRef, startScanning, stopScanning } =
    useScannerFromVideoDevice();

  
  useEffect(() => {
    if (result) {  
      setProducto((prevProducto) => ({
        ...prevProducto,
        id: result,
      }));
    }
  }, [result]); 

  


  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto((prevProducto) => ({
      ...prevProducto,
      [name]: value,
    }));
  };

  const clearForm = () => {
    setProducto({
      nombre: "",
      cantidad: "",
      id: "",
      categoria: "",
    });
  };

 
  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log("Producto a guardar:", producto);
    clearForm();
  };

  return (
    <div className="p-4">
      

      <video ref={videoRef} autoPlay className="w-full max-w-md border rounded mb-4" />
      {error && <p className="text-red-500">{error}</p>}
      <button onClick={startScanning} className="bg-green-400 h-10 w-50 rounded-[1rem] active:bg-green-500">Comenzar el escaneo</button>
      <button onClick={stopScanning} className="bg-red-400 h-10 w-50 rounded-[1rem] active:bg-red-500">Detener</button>
      {result && 
      <form className="w-full max-w-md" onSubmit={handleSubmit}>
        <fieldset className="flex flex-col items-center gap-4">
          <input
            type="text" 
            name="id" 
            placeholder="ID del Producto (escanea un código)"
            className="p-2 border rounded w-full"
            value={producto.id}
            onChange={handleChange}
          />
          <input
            type="text"
            name="nombre"
            placeholder="Nombre del Producto"
            className="p-2 border rounded w-full"
            value={producto.nombre}
            onChange={handleChange}
          />
          <input
            type="number"
            name="cantidad"
            placeholder="Cantidad"
            className="p-2 border rounded w-full"
            value={producto.cantidad}
            onChange={handleChange}
          />
          <select
            name="categoria"
            className="p-2 border rounded w-full"
            value={producto.categoria}
            onChange={handleChange}
          >
            <option value="">Elige la Categoría</option>
            <option value="Categoria 1">Categoría 1</option>
            <option value="Categoria 2">Categoría 2</option>
          </select>
          <button
            type="submit" // Botón de tipo submit para el formulario
            className="bg-[#0077B6] text-white w-full h-[2.5rem] rounded-[0.5rem] hover:bg-[#005f8e] transition-colors"
          >
            Guardar
          </button>
        </fieldset>
      </form>
      }
      
    </div>
  );
}

export default AddProductForm;