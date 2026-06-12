import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import PropertyCarousel from './components/NewLaunch/PropertyCarousel';
import RecommendedProperties from './components/RecPropertie/RecommendedProperties';

import ContactSection from './components/Contect Us/ContactSection';
import MapSection from './components/Contect Us/MapSection';
import './components/Contect Us/PropertyContact.css';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="app__main">
        <Hero />
        <PropertyCarousel />
        <RecommendedProperties />
        
        <div className="contact-page-container">
          <ContactSection />
          <MapSection />
        </div>

        <div style={{ minHeight: '100px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
          {/* Rest of page content sits above */}
          <Footer />
          </div>

      </main>

    </div>
  );
}

export default App;
