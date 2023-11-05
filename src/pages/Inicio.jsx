import React from "react";
import { Link } from "react-router-dom";
import './Inicio.css'; // Importa el archivo CSS para Home
import ContentAndCarousel  from "../components/ContentAndCarousel";
import carouselData from '../data/ContentAndCarousel.json';

function Inicio() {

  return (
    <>
      <div className="home-container">
        <div className="home-background-shape"></div>
        <div className="home-content">
          <h1 className="home-big-title">¿Qué es?</h1>
          <p className="home-description">
            Somos una plataforma especializada en todo lo relacionado con el análisis de la competencia,
            identificación de posibles clientes y compras fraudulentas al igual que tiene acceso a un portafolio
            online para encontrar el mejor precio y confiabilidad.
          </p>
          <a href="#" className="home-button">Ver mas</a>
          <a href="#" className="home-button">Registrarse</a>
        </div>
      </div>
      <ContentAndCarousel carouselData={carouselData} />
    </>
  );
}

export default Inicio;
