import React from 'react';
import {Button, Navbar, Nav, FormControl, Form, NavDropdown } from 'react-bootstrap';

function TopBar(props) {
    return (
        <div>
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Ventas</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/products">Productos</Nav.Link>
                <NavDropdown title="Usuarios" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Login</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Registro</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default TopBar;