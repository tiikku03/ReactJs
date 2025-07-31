import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { Nav, NavDropdown, Navbar, Container } from 'react-bootstrap'

function Menu() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title={<AiOutlineMenu />} id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Articulos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Crear Articulo
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Editar Articulo</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default Menu