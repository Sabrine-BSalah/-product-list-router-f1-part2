import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'


const NavBar = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" className="myNavbar">
                <Container>
                    <Navbar.Brand href="#home">React Router</Navbar.Brand>
                    <Nav className="me-auto">
                        <NavLink exact className="navLink" to="/" activeClassName="selectedLink" >Home</NavLink>
                        <NavLink className="navLink" activeClassName="selectedLink" to="/products">Products</NavLink>
                        <NavLink className="navLink" activeClassName="selectedLink" to="/about">About</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar
