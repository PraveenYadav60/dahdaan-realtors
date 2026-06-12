import React from 'react';

const PropertyCard = ({ image, price, title, subtitle }) => {
  return (
    <div className="property-card">
      <div className="card-image-wrapper">
        <img src={image} alt={title} />
        <div className="price-tag">₹ {price}</div>
      </div>
      <div className="card-details">
        <h3 className="property-title">{title}</h3>
        <p className="property-subtitle">{subtitle}</p>
      </div>
    </div>
  );
};

export default PropertyCard;