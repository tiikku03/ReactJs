import React, { useState } from "react";
import { useReducer, useEffect } from "react";

import "../CSS/DataForm.css";
import PatientInformation from "./PatientInformation";

let initialArray = [];

let initialState = {
  fullName: null,
  age: null,
  gender: null,
  symptoms: null,
};

export default function DataForm() {
  const [formulario, setFormulario] = useState({
    nombre: "",
    edad: "",
    genero: "",
    fechaIngreso: "",
    sintomas: "",
  });
  const [pacientes, setPacientes] = useState([]);
  const [error, setError] = useState("");
  const [updateMode, setUpdate] = useState(false)

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setFormulario({ ...formulario, [name]: value });
  };

  const manejarRegistro = () => {
    const { nombre, edad, genero, fechaIngreso, sintomas } = formulario;

    if (!nombre || !edad || !genero || !fechaIngreso || !sintomas) {
      setError("Por favor, complete todos los campos");
      return;
    }

    const nuevoPaciente = {
      id: Date.now(),
      ...formulario,
    };

    setPacientes([...pacientes, nuevoPaciente]);

    // Limpiar formulario
    setFormulario({
      nombre: "",
      edad: "",
      genero: "",
      fechaIngreso: "",
      sintomas: "",
    });

    setError("");
  };

  const manejarEdit = (paciente) => {
    setUpdate(true)
    let {nombre, edad, genero, fechaIngreso, sintomas} = paciente
    

    setUpdate(false)
  };

  return (
    <div>
      <h1>Registro de Pacientes</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          manejarRegistro();
        }}
      >
        <label>
          Nombre:
          <input
            type="text"
            name="nombre"
            value={formulario.nombre}
            onChange={manejarCambio}
          />
        </label>
        <br />
        <label>
          Edad:
          <input
            type="number"
            name="edad"
            value={formulario.edad}
            onChange={manejarCambio}
          />
        </label>
        <br />
        <select
          name="genero"
          value={formulario.genero}
          onChange={manejarCambio}
        >
          <option value="">Seleccione</option>
          <option value="masculino">Masculino</option>
          <option value="femenino">Femenino</option>
        </select>
        <br />
        <label>
          Fecha de Ingreso:
          <input
            type="date"
            name="fechaIngreso"
            value={formulario.fechaIngreso}
            onChange={manejarCambio}
          />
        </label>
        <br />
        <label>
          Síntomas:
          <textarea
            name="sintomas"
            value={formulario.sintomas}
            onChange={manejarCambio}
          ></textarea>
        </label>
        <br />
        <button type="submit" className="submitButton">
          {updateMode? "Guardar": "Registrar Paciente"}
        </button>
      </form>
      <div className="divitionline"></div>
      <h2>Pacientes Registrados</h2>
      {pacientes.length === 0 ? (
        <p>No hay pacientes registrados aún.</p>
      ) : (
        <ul>
          {pacientes.map((paciente) => (
            <li key={paciente.id} className="patientItem">
              <span className="nombre">
                <strong>Nombre:</strong> {paciente.nombre}{" "}
              </span>
              <span className="edad">
                <strong> Edad:</strong> {paciente.edad}{" "}
              </span>
              <span className="genero">
                <strong> Género:</strong> {paciente.genero}{" "}
              </span>
              <span className="fechaIngreso">
                <strong> Fecha de Ingreso:</strong> {paciente.fechaIngreso}{" "}
              </span>
              <span className="sintomas">
                <strong> Síntomas:</strong> {paciente.sintomas}
              </span>
              <div className="buttons">
                <button className="editButton" onClick={manejarEdit(paciente)}>Editar</button>
                <button className="deleteButton">Eliminar</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
