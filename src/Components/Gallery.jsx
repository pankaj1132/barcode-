import React from 'react';
import { 
  service1, 
  service2, 
  service3, 
  service4, 
  service5, 
  service6, 
  service7, 
  service8 
} from '../assets';

const Gallery = () => {
  const serviceImages = [
    { id: 1, src: service1, alt: 'Barcode Generation', name: 'Barcode Generation', description: 'Professional barcode creation services' },
    { id: 2, src: service2, alt: 'Barcode Printing Software', name: 'Barcode Printing Software', description: 'Advanced barcode printing software solutions' },
    { id: 3, src: service3, alt: 'Product Labels / Stickers', name: 'Product Labels / Stickers', description: 'Custom product labeling and sticker solutions' },
    { id: 4, src: service4, alt: 'Label Printing Services', name: 'Label Printing Services', description: 'Professional label printing and design services' },
    { id: 5, src: service5, alt: 'Footwear Labels / Stickers', name: 'Footwear Labels / Stickers', description: 'Specialized labeling solutions for footwear industry' },
    { id: 6, src: service6, alt: 'Mobile Accessories Labels / Stickers', name: 'Mobile Accessories Labels / Stickers', description: 'Custom labels for mobile accessories and electronics' },
    { id: 7, src: service7, alt: 'Garment Labels / Stickers', name: 'Garment Labels / Stickers', description: 'Professional garment labeling and branding solutions' },
    { id: 8, src: service8, alt: 'Jewellery Labels / Stickers', name: 'Jewellery Labels / Stickers', description: 'Premium labeling solutions for jewelry and accessories' },
  ];

  return (
    <div className="gallery-container">
      <div className="gallery-header">
        <h2>Our Services</h2>
        <p>Discover our comprehensive range of services</p>
      </div>
      
      <div className="gallery-grid">
        {serviceImages.map((image) => (
          <div key={image.id} className="gallery-item">
            <div className="image-wrapper">
              <img src={image.src} alt={image.alt} />
            </div>
            <div className="service-info">
              <h3>{image.name}</h3>
              <p>{image.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
