// src/components/Footer.jsx
import React from 'react';
// Importa solo los íconos que necesitas de React Icons
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  // Obtén el año actual para que se actualice automáticamente cada año
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pie-pagina">
      <div className="grupo-1">
        <div className="box">
          <figure>
            <a href="#">
              <img src="src/assets/isotipo.png" alt="Logo de SLee Dw" />
            </a>
          </figure>
        </div>
        <div className="box">
          <h2>SOBRE NOSOTROS</h2>
          <p>Motivados por la oportunidad de crear algo nuevo y de tener un impacto positivo</p>
        </div>
        <div className="box">
          <h2>SÍGUENOS</h2>
          <div className="red-social">
            {/* Utiliza los componentes de íconos directamente */}
            <a href="#" className="icon"><FaFacebookF /></a>Laura
            <a href="#" className="icon"><FaFacebookF /></a>Marcela
          </div>
          <div className="red-social">
            {/* Utiliza los componentes de íconos directamente */}
            <a href="#" className="icon"><FaFacebookF /></a>Anderson
            <a href="#" className="icon"><FaFacebookF /></a>Andres
          </div>
        </div>
      </div>
      <div className="grupo-2">
        {/* Muestra el año actual dinámicamente */}
        <small>Todos los derechos reservados © {currentYear} <b>Mercadata</b></small>
      </div>
    </footer>
  );
}

export default Footer;
