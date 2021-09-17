import React from 'react';

import { EnvelopeFill, Github, Linkedin } from 'react-bootstrap-icons';


const Footer = () => {
  return (
    <div style={{textAlign: 'center'}}>
        <a href = "mailto:sofia.debellis23@gmail.com"><EnvelopeFill size={40} alt="Email" className = "footer-icon"/></a>
        <a href = "https://github.com/sofiadebellis121295"><Github  size={40} alt="Linkedin" className = "footer-icon"/></a>
        <a href = "www.linkedin.com/in/sofiadebellis12"><Linkedin  size={40} alt="Github" className = "footer-icon"/></a>
    </div>
  );
}

export default Footer;