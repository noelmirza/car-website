import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const MyNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">Check out the car colllection!</Navbar.Brand>
      <Nav className="ml-auto">
      </Nav>
    </Navbar>
  );
};

export default MyNavbar;
