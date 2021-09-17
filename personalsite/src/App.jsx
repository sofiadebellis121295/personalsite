import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';

import './App.css';

import Home from './pages/Home';
import Blog from './pages/Blog';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

const App = () => (
  <>
    <Router>
      <Container className="p-3">
          <Navigation/>
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
