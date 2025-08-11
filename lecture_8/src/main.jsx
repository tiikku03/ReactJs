import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"

//pages
import InicioDeSecion from './Pages/InicioDeSecion.jsx'
import HomePage from './Pages/HomePage.jsx'
import HistorialDeActividades from './Pages/HistorialDeActividades.jsx'
import RegistroDeUsuario from './Pages/RegistroDeUsuario.jsx'

import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InicioDeSecion />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/historial" element={<HistorialDeActividades />} />
        <Route path="/registro" element={<RegistroDeUsuario />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
