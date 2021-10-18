import React from 'react';
import {Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import headerLogo from '../../../images/logo/logo.png';

const Topheader = () => {
    return (
        <>
            <Navbar bg="light" variant="dark" sticky='top' collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home"><img src={headerLogo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-center">
                        <Nav className='text-primary'>
                            <Nav.Link className='text-black fw-bold' as={Link} to="/home#home">Home</Nav.Link>
                            <Nav.Link className='text-black fw-bold' as={Link} to="/home#services">Service</Nav.Link>
                            <Nav.Link className='text-black fw-bold' as={Link} to="/home#about">About</Nav.Link>
                            <Nav.Link className='text-black fw-bold' as={Link} to="/home#doctors">Doctors</Nav.Link>
                            <Nav.Link className='text-black fw-bold' as={Link} to="/home#contact">Contact</Nav.Link>
                            </Nav>                           
                            </Navbar.Collapse>
                            <Nav.Link className='text-black    fw-bold' as={Link} to="/login">Login</Nav.Link>
                            <Navbar.Text className='text-black fw-bold'>
                            Signed in as: <a className='text-black' href="#login">Musfiq</a>
                        </Navbar.Text>
                </Container>
            </Navbar>
        </>
    )
};

export default Topheader;