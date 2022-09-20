import React from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components'

function NavBar() {
  const Nav = styled.h3`
    font-family: papyrus;
    font-size: 18px;
    padding-left: 15px;
    padding-bottom: 5px;
  `
  return (
    <>
    <Nav>
        <Link to="/">Home</Link>
    </Nav>
    <Nav>
        <Link to="/dresses">Dress Collection</Link>
    </Nav>
    <Nav>
        <Link to="/dresses/new">New Dress</Link>
    </Nav>
    </>
  )
}

export default NavBar