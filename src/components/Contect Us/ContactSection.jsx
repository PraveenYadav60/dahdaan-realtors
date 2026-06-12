import React, { useState } from 'react';
import { HiOutlineBuildingOffice2, HiArrowLongRight } from 'react-icons/hi2';
import { FiSliders, FiPieChart, FiUser } from 'react-icons/fi';

const ContactSection = () => {
    <h1>Contact Us</h1>

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Enquiry Form Data Submitted:', formData);
    alert('Enquiry successfully dispatched!');
  };

  return (
    <div className="contact-section">
      <h2 className="contact-heading">About Us</h2>
      <p className="contact-des">
        <h3 className="contact-subheading">Welcome to DAHDAAN REALTORS PVT LTD – Your Trusted Real Estate Partner!</h3>With over 26 years of experience in real estate sector, we at DAHDAAN REALTORS PVT LTD hold specialization in buying, selling, renting, and managing self-owned or leased properties, including residential and commercial spaces. From developing and subdividing land to offering premium apartment hotels and residential communities, we ensure seamless real estate solutions. Whether you're looking for a dream home, an investment opportunity, or a strategic commercial space, we provide expert guidance and a customer-centric approach. Trust us to turn your real estate aspirations into reality!</p>
    </div>
  );
};

export default ContactSection;