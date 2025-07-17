import React, { useState } from "react";
import { useReducer, useEffect} from "react";

import '../CSS/DataForm.css';
import PatientInformation from "./PatientInformation";

let initialArray = []

let initialState = {
  fullName: null,
  age: null,
  gender: null,
  symptoms: null,
};



export default function DataForm() {
  const [formulario, setFormulario] = useState({
    nombre: '',
    edad: '',
    genero: '',
    fechaIngreso: '',
    sintomas: '',
  });
  const [pacientes, setPacientes] = useState([]);
  const [error, setError] = useState('');

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setFormulario({ ...formulario, [name]: value });
  };

  const manejarRegistro = () => {
    const { nombre, edad, genero, fechaIngreso, sintomas } = formulario;

    if (!nombre || !edad || !genero || !fechaIngreso || !sintomas) {
      setError('Por favor, complete todos los campos');
      return;
    }

    const nuevoPaciente = {
      id: Date.now(),
      ...formulario
    };

    setPacientes([...pacientes, nuevoPaciente]);

    // Limpiar formulario
    setFormulario({
      nombre: '',
      edad: '',
      genero: '',
      fechaIngreso: '',
      sintomas: '',
    });
    
    setError('');
  };
  



  return (
    <div>
      <h1>Registro de Pacientes</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={(e) => { e.preventDefault(); manejarRegistro(); }}>
        <label>
          Nombre:
          <input type="text" name="nombre" value={formulario.nombre} onChange={manejarCambio} />
        </label>
        <br />
        <label>
          Edad:
          <input type="number" name="edad" value={formulario.edad} onChange={manejarCambio} />
        </label>
        <br />
        <label>
          Género:
          <input type="text" name="genero" value={formulario.genero} onChange={manejarCambio} />
        </label>
        <br />
        <label>
          Fecha de Ingreso:
          <input type="date" name="fechaIngreso" value={formulario.fechaIngreso} onChange={manejarCambio} />
        </label>
        <br />
        <label>
          Síntomas:
          <textarea name="sintomas" value={formulario.sintomas} onChange={manejarCambio}></textarea>
        </label>
        <br />
        <button type="submit">Registrar Paciente</button>
      </form>

      <h2>Pacientes Registrados</h2>
      {pacientes.length === 0 ? (
        <p>No hay pacientes registrados aún.</p>
      ) : (
        <ul>
          {pacientes.map(paciente => (
            <li key={paciente.id}>
              <strong>Nombre:</strong> {paciente.nombre}, 
              <strong> Edad:</strong> {paciente.edad}, 
              <strong> Género:</strong> {paciente.genero}, 
              <strong> Fecha de Ingreso:</strong> {paciente.fechaIngreso}, 
              <strong> Síntomas:</strong> {paciente.sintomas}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
  
}