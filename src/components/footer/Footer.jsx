import React, { useState } from 'react';
import { 
  FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, 
  FaYoutube, FaPinterestP, FaPhoneAlt, FaSnapchatGhost, FaWhatsapp 
} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const [inputs, setInputs] = useState({
    name: '',
    mobile: '',
    email: '',
    visit: ''
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form Field Lead Captured:', inputs);
    alert('Lead info sent successfully!');
  };

  return (
    <div className='footer'>
    <footer className="site-footer">
      <div className="footer-container">
        
        {/* Top Centered Quick Navigation Row */}
        <div className="footer-top-nav">
          <a href="#about">About Us</a>
          <a href="#terms">Term & Conditions</a>
          <a href="#privacy">Privacy Policy</a>
        </div>

        {/* Mid Container Splits */}
        <div className="footer-main-grid">
          
          {/* Left Block Content Section */}
          <div className="footer-left-content">
            <div className="office-info-row">
              <div className="office-col">
                <h3>Corporate Office:</h3>
                <p>
                  Office No. PSP-05-001A, Fifth Floor,<br />
                  The Palm Spring Plaza, Sector-54,<br />
                  Gurugram,<br />
                  District- Gurugram, Haryana- 122001
                </p>
              </div>
              <div className="office-col">
                <h3>Registered Office:</h3>
                <p>
                  Plot No. 132, Near Major Parmanand House,<br />
                  Village Chandu, District- Budhera,<br />
                  Gurugram,<br />
                  Haryana- 122205
                </p>
              </div>
            </div>

            {/* Social Media Circular Flex Rows */}
            <div className="social-icons-list">
              <div className="social-circle-item"><FaFacebookF size={12} color="#009fff" /></div>
              <div className="social-circle-item"><FaTwitter size={12} color="#009fff" /></div>
              <div className="social-circle-item"><FaLinkedinIn size={12} color="#009fff" /></div>
              <div className="social-circle-item"><FaInstagram size={12} color="#009fff" /></div>
              <div className="social-circle-item"><FaYoutube size={12} color="#009fff" /></div>
              <div className="social-circle-item"><FaPinterestP size={12} color="#009fff" /></div>
              <div className="social-circle-item"><FaSnapchatGhost size={12} color="#009fff" /></div>
              <div className="social-circle-item"><FaWhatsapp size={12} color="#009fff" /></div>
            </div>
          </div>

          {/* Right Frame Element Form Block */}
          <div className="enquiry-outer-frame">
            <form className="enquiry-inner-card" onSubmit={handleFormSubmit}>
              <div className="enquiry-form-title">ENQUIRY NOW</div>
              
              <div className="enquiry-fields-stack">
                <input 
                  type="text" 
                  name="name" 
                  className="enquiry-form-field" 
                  placeholder="Name:" 
                  value={inputs.name}
                  onChange={handleInput}
                  required
                />
                <input 
                  type="tel" 
                  name="mobile" 
                  className="enquiry-form-field" 
                  placeholder="Mobile Number:" 
                  value={inputs.mobile}
                  onChange={handleInput}
                  required
                />
                <input 
                  type="email" 
                  name="email" 
                  className="enquiry-form-field" 
                  placeholder="Email Address:" 
                  value={inputs.email}
                  onChange={handleInput}
                  required
                />
                <input 
                  type="text" 
                  name="visit" 
                  className="enquiry-form-field" 
                  placeholder="Schedule A Visit:" 
                  value={inputs.visit}
                  onChange={handleInput}
                />
              </div>

              <button type="submit" className="enquiry-black-submit">SUBMIT</button>

              <div className="form-center-divider">OR</div>

              <a href="tel:+919999992070" className="enquiry-black-call-anchor">
                <FaPhoneAlt size={13} /> +91 9999992070
              </a>
            </form>
          </div>

        </div>

        {/* Bottom Absolute Line & Copyright Statement */}
        <div className="footer-bottom-divider"></div>
        <div className="footer-copyright-text">
          © All Right Reserved DAHDAAN REALTORS PVT. LTD.
        </div>

      </div>
    </footer>
    </div>
  );
};

export default Footer;