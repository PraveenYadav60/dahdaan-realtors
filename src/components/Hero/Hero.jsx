import React from 'react';
import './Hero.css';
import SearchBox from '../SearchBox/SearchBox';
import {
  FaFacebookF,
  FaWhatsapp,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaRss,
  FaFacebookMessenger
} from 'react-icons/fa';
import { FaLocationDot, FaXTwitter } from 'react-icons/fa6';
import { MdAlternateEmail, MdEmail } from 'react-icons/md';

const Hero = () => {
  return (
    <section className="hero">
      
      {/* Social Media Side Bar */}
      <div className="hero__social-bar">
        <a href="https://www.facebook.com/" className="hero__social-btn hero__social-btn--fb" aria-label="Facebook">
          <FaFacebookF size={16} />
        </a>
        <a href="https://wa.me/" className="hero__social-btn hero__social-btn--wa" aria-label="WhatsApp">
          <FaWhatsapp size={16} />
        </a>
        <a href="https://www.youtube.com/" className="hero__social-btn hero__social-btn--yt" aria-label="YouTube">
          <FaYoutube size={16} />
        </a>
        {/* <a href="https://www.blog.com" className="hero__social-btn hero__social-btn--blog" aria-label="Blog">
          <FaRss size={16} />
        </a> */}
        <a href="https://www.instagram.com/dahdaanrealtorspvtltd/reels/" className="hero__social-btn hero__social-btn--ig" aria-label="Instagram">
          <FaInstagram size={16} />
        </a>
        <a href="https://www.linkedin.com" className="hero__social-btn hero__social-btn--li" aria-label="LinkedIn">
          <FaLinkedinIn size={16} />
        </a>
        <a href="https://www.x.com" className="hero__social-btn hero__social-btn--x" aria-label="X">
          <FaXTwitter size={16} />
        </a>
        <a href="https://www.pinterest.com" className="hero__social-btn hero__social-btn--pin" aria-label="Pinterest">
          <FaPinterestP size={16} />
        </a>
        <a href="https:// www.blog.com" className="hero__social-btn hero__social-btn--at" aria-label="At">
          <MdAlternateEmail size={16} />
        </a>
        <a href="https://www.facebook.com" className="hero__social-btn hero__social-btn--msg" aria-label="Messenger">
          <FaFacebookMessenger size={16} />
        </a>
        <a href="https://www.google.com" className="hero__social-btn hero__social-btn--loc" aria-label="Location">
          <FaLocationDot size={16} />
        </a>
        <a href="https://www.email.com" className="hero__social-btn hero__social-btn--mail" aria-label="Email">
          <MdEmail size={16} />
        </a>
      </div>

      <div className="hero__content">
        {/* Headline */}
        {/* <h1 className="hero__title">Find Your Perfect Home</h1> */}
        {/* <p className="hero__subtitle">Search across premium properties in Gurugram and beyond.</p> */}

        {/* Search Box */}
        <div className="searchbox-container">
        <div className="hero__search-wrapper">
          <SearchBox />
        </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
