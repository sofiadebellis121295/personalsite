import React from 'react';

import Button from 'react-bootstrap/Button';
import profile from "../assets/sofia.jpeg";
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import resume from '../assets/resume.pdf';

const Home = () => {
  return (
    <Container>
      <Row>
        <Col sm={8}>        
          <div class="headline">
            <h1 className="header">Hi, I'm Sofia De Bellis 😊</h1>
            <br></br>
            <h4 className="subtitle">I’m a high school student with a keen interest in mathematics, design, embedded systems, physics and programming.</h4>
            <br></br>
            <Button variant="info" className='subtitle' href={resume}>View My Resume</Button>
          </div>
        </Col>
        <Col sm={4}>
          <Image src={ profile } responsive rounded style={{ width: '100%' }}/>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;