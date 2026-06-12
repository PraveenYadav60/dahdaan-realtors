import React from 'react';
import { FiMapPin, FiArrowUpRight } from 'react-icons/fi';
import { FaLocationDot } from 'react-icons/fa6';

const MapSection = ({ backgroundImage }) => {
  // If no graphic asset is supplied via props, it falls back gracefully to CSS gradients
  const inlineStyles = backgroundImage 
    ? { backgroundImage: `url(${backgroundImage})` } 
    : {};

  return (
    <div className="map-canvas-wrapper" style={inlineStyles}>
      
      {/* Background Interactive Layer Simulation Pins */}
      <div className="map-point-wrapper" style={{ top: '65%', left: '39%' }}>
        <FaLocationDot size={36} className="secondary-gray-pin" />
      </div>

      <div className="map-point-wrapper" style={{ top: '75%', left: '48%' }}>
        <FaLocationDot size={36} className="secondary-gray-pin" />
      </div>

      <div className="map-point-wrapper" style={{ top: '56%', left: '47%' }}>
        <div className="central-blue-pin">
          <FiMapPin size={18} color="#ffffff" strokeWidth={2.5} />
        </div>
      </div>

      {/* Primary Floating Location Identity Card */}
      <div className="location-float-card">
        <div className="location-tag">
          <div className="green-status-dot"></div>
          Our Primary Location
        </div>
        <h4>Dahdaan Realtors Pvt. Ltd.</h4>
        <p>Office No. PSP-05-001A, Fifth Floor, The Palm Spring Plaza, Sector-54, Gurugram, District- Gurugram, Haryana- 122001</p>
        <a href="#directions" className="directions-link">
          Get Directions <FiArrowUpRight size={16} />
        </a>
      </div>

    </div>
  );
};

export default MapSection;