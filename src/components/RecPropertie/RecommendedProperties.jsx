import React, { useRef } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from 'react-icons/md';
import PropertyCard from '../NewLaunch/PropertyCard';
import './RecommendedProperties.css';

const propertyData = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=800&auto=format&fit=crop', // Placeholder matching the vibe
    price: '45L',
    title: 'Buildwick The Mist',
    subtitle: '2 BHK Apartment in Sector 53, Gurugram'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=800&auto=format&fit=crop',
    price: '50L',
    title: 'Buildwick The Mist',
    subtitle: '2 BHK Apartment in Sector 53, Gurugram'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=800&auto=format&fit=crop',
    price: '55L',
    title: 'Buildwick The Mist',
    subtitle: '2 BHK Apartment in Sector 53, Gurugram'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=800&auto=format&fit=crop',
    price: '60L',
    title: 'Buildwick The Mist',
    subtitle: '2 BHK Apartment in Sector 53, Gurugram'
  }
];

const RecommendedProperties = () => {
  const carouselRef = useRef(null);

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 340, behavior: 'smooth' });
    }
  };

  return (
    <div className="carousel-wrapper">
      <div className="carousel-header">
        <h2 className="carousel-title">Recommended Properties</h2>
        <div className="location-selector">
          <span>In</span>
          <div className="location-dropdown">
            Gurugram <MdKeyboardArrowDown size={18} />
          </div>
        </div>
      </div>

      <div className="carousel-container" ref={carouselRef}>
        {propertyData.map((property) => (
          <PropertyCard 
            key={property.id}
            image={property.image}
            price={property.price}
            title={property.title}
            subtitle={property.subtitle}
          />
        ))}
      </div>

      <button className="nav-button-right" onClick={scrollRight} aria-label="Scroll right">
        <MdKeyboardArrowRight size={24} color="#333" />
      </button>
    </div>
  );
};

export default RecommendedProperties;