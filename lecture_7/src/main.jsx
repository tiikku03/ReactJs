import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// devemmon importar tres onjetos distintos
import {BrowserRouter, Routes, Route } from 'react-router-dom'
/*

BrowserRouter: permite la navegacion entre paginas, utiliza el historial del navegador
Routes: define las rutas de la aplicacion
Route: define una ruta especifica, cada ruta puede tener un componente asociado

*/
// importar componentes de las paginas
import About from './Pages/About.jsx'
import Home from './Pages/Home.jsx'
import NotFound from './Pages/NotFound.jsx'
import CreateUser from './Pages/CreateUser.jsx'
import PostGallery from './Pages/PostsGallery.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import AuthUser from './Pages/AuthUser.jsx'
import Profile from './Pages/Profile.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode >
    <BrowserRouter>
      <Routes>
        <Route path='/Home' element={<Home />} />
        <Route index element={<AuthUser />} />
        {/* path="" define la ruta en la que el componente sera renderizado */}
        {/* element="" defineel componente que sera renderizado */}
        <Route path="/App" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/CreateUser" element={<CreateUser />} />
        <Route path="/PostGallery" element={<PostGallery />} />
        <Route path="*" element={<NotFound />} />
        <Route path='/Profile' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
