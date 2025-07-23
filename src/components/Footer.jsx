import React from 'react';
import { FaHeart, FaArrowUp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="logo">
              <span className="logo-text">I</span>
              <div className="logo-circle"></div>
            </div>
            <p className="footer-tagline">
              Passionate Full Stack Developer creating beautiful, 
              functional web experiences with modern technologies.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-links-group">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            <div className="footer-links-group">
              <h4>Services</h4>
              <ul>
                <li><a href="#">Web Development</a></li>
                <li><a href="#">Frontend Development</a></li>
                <li><a href="#">Backend Development</a></li>
                <li><a href="#">UI/UX Design</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copyright">
            <p>
              © {currentYear} Isha Shukla. Made with <FaHeart className="heart" /> in India
            </p>
          </div>
          
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>

      <button 
        className="scroll-top-btn"
        onClick={scrollToTop}
        title="Scroll to top"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;