import React from 'react'
import { Container, Row, Col, Stack, Button } from 'react-bootstrap'

import { BsPersonFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Profile from '../Pages/Profile.jsx'
import Menu from '../Components/Menu.jsx'
import { AiOutlineMenu } from "react-icons/ai";

function Header() {
  return (
    <>
      <Container style={{ width: '100vw' }} className="d-flex justify-content-between align-items-center">
        <Stack direction="horizontal" width="100%" gap={5}>
        <Button variant='dark'><Link to="/Profile" >Perfil  </Link><BsPersonFill/> 
        </Button>
        <Menu></Menu>
      </Stack>
      </Container>
    </>
  )
}


export default Header