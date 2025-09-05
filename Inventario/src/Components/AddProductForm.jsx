import React from "react";
import { useState } from "react";
import useScannerFromVideoDevice from "../Hooks/useScannerFromVideoDevice";

function AddProductForm() {
  const [producto, setProducto] = useState({
    nombre: null,
    cantidad: null,
    id: null,
    categoria: null,
  });


  console.log(producto)
  const { result, error, videoRef, videoDevices, setSelectedDevice } =
    useScannerFromVideoDevice();

  if (result) {
    setProducto(...producto, (producto.id = result));
  }

  console.log(videoDevices);

  const clearForm = () => {
    setProducto({
      nombre: '',
      cantidad: '',
      id: '',
      categoria: '',
    });
  };
  const handleSubmit = () => {
    console.log(producto);
    clearForm();
  };
  console.log(producto)

  return (
    <div>
      <video ref={videoRef} autoPlay />
      <form action="/" className="w-full" onSubmit={handleSubmit}>
        <fieldset className="w-full h-[10rem] flex  flex-col items-center justify-around">
          <input
            type="number"
            placeholder="1548654687"
            className=""
            value={producto.id}
            onChange={(e) =>
              setProducto(...producto, (producto.id = e.target.value))
            }
          />
          <input
            type="text"
            placeholder="Nombre del Producto"
            value={producto.nombre}
            onChange={(e) =>
              setProducto(...producto, (producto.nombre = e.target.value))
            }
          />
          <input
            type="number"
            placeholder="cantidad"
            value={producto.cantidad}
            onChange={(e) =>
              setProducto(...producto, (producto.cantidad = e.target.value))
            }
          />
          <select
            name="Categoria"
            id=""
            value={producto.categoria}
            onChange={(e) =>
              setProducto(...producto, (producto.categoria = e.target.value))
            }
          >
            <option value="Elige la Categoria">Categoria</option>
            <option value="Categoria 3">Categoria 3</option>
            <option value="Crear Categoria">Crear Categoria</option>
          </select>
          <button className="bg-[#0077B6] w-[6rem] h-[2rem] rounded-[0.5rem]">
            Guardar
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default AddProductForm;

function crearCategoria() {
  return <></>;
}
