import React from 'react';

import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

const Navigation = () => {
  return (
    <>
      <Navbar>
        <Container>
          <Link to="/home" style={{ textDecoration: 'none' }}><Navbar.Brand><span style={{ fontSize:'30px' }}>Sofia De Bellis</span></Navbar.Brand></Link>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link><Link to="/home" style={{ textDecoration: 'none' }}><span className="navbar-fnt">Home</span></Link></Nav.Link>
            <Nav.Link><Link to="/blog" style={{ textDecoration: 'none' }}><span className="navbar-fnt">Blog</span></Link></Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="horizontal-line"></div>
    </>
  );
}

export default Navigation;