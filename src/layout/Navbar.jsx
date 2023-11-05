import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa'; // Importa el icono de hamburguesa
import './Navbar.css';
import logoImage from '../assets/Logotipo.png';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
      
      if (mobileMenuOpen && isScrolled) {
        setMobileMenuOpen(false); // Cierra el menú al hacer scroll
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled, mobileMenuOpen]); // Añade mobileMenuOpen como dependencia

  // Maneja el clic en el icono de hamburguesa
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <Link to="/" className="nav-logo">
        <img src={logoImage} alt="Logotipo" />
      </Link>
      <FaBars className="nav-icon" onClick={toggleMobileMenu} />
      <div className={`nav-links ${mobileMenuOpen ? 'is-active' : ''}`}>
        <Link to="/" className="nav-item">Inicio</Link>
        <Link to="/contacto" className="nav-item">Contacto</Link>
        <Link to="/login" className="nav-item">Iniciar Sesion</Link>
        <Link to="/registro" className="nav-item">Registro</Link>
      </div>
    </nav>
  );
}

export default Navbar;
