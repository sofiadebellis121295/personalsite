import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

import './App.css';

import Home from './Home';
import Blog from './Blog';
import Footer from './Footer';

const App = () => (
  <>
    <Router>
      <Container className="p-3">
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

          <div style={{ borderTop: "1px solid gray ", marginLeft: 12, marginRight: 12, paddingTop: 10, paddingBottom: 10 }}></div>

      </Container>

      <Container className="p-3">
        <Switch>
          <Route exact path="/"><Home/></Route>
          <Route path="/home"><Home/></Route>
          <Route path="/blog"><Blog/></Route>
        </Switch>
      </Container>

      <Container className = "p-3">
        <Footer/>
      </Container>
    </Router>
  </>
);

export default App;
