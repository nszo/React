import React, { useState } from 'react';
import './ContentAndCarousel.css';

const ContentAndCarousel = ({ carouselData }) => {
  const [selectedImage, setSelectedImage] = useState(carouselData.images[0]);

  const handleClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="container">
      <div className="text-section">
        <div className="text-content"> {/* Agregado para el padding */}
          <h2>{carouselData.title}</h2> {/* Usamos h2 aquí */}
          <h3>{carouselData.name}</h3> {/* Usamos h3 para el nombre */}
          <p>{carouselData.description}</p>
        </div>
      </div>
      <div className="carousel-section">
        <div className="carousel-container">
          <div className="carousel-main-image">
            <img src={selectedImage} alt="Selected" />
          </div>
          <div className="carousel-thumbnails">
            {carouselData.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index}`}
                onClick={() => handleClick(image)}
                className={image === selectedImage ? 'thumbnail active' : 'thumbnail'}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentAndCarousel;
