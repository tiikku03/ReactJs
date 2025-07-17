import React from "react";


export default function PatientInformation(props){
    return(
        <div>
            <p>El paciente {props.fullName} de edad {props.age}</p>
            <p>de genero {props.gender} presenta los sigientes sintomas{props.symptoms}</p>
        </div>
    )
}