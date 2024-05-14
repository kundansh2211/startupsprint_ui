import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer fixed-bottom py-3 bg-light">
      <div className="container text-center">
        <span className="text-muted">
          <NavLink to="/" className="text-decoration-none text-dark fw-bold mx-2">Home</NavLink> | 
          <NavLink to="/contact" className="text-decoration-none text-dark fw-bold mx-2">Contact Us</NavLink> | 
          <NavLink to="/blog" className="text-decoration-none text-dark fw-bold mx-2">Blog</NavLink> | 
          <NavLink to="/career" className="text-decoration-none text-dark fw-bold mx-2">Career</NavLink> | 
          <NavLink to="/partners" className="text-decoration-none text-dark fw-bold mx-2">Partner With Us</NavLink>
        </span>
      </div>
    </footer>
  );
};

export default Footer;

