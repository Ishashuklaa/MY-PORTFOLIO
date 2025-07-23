import React, { useState, useEffect } from 'react';
import { FaDownload, FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';
import './Hero.css';
import myPhoto from './me.jpg';
const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const roles = ['FULL STACK DEVELOPER', 'REACT DEVELOPER', 'UI/UX DESIGNER', 'PROBLEM SOLVER'];

  useEffect(() => {
    const typeWriter = () => {
      const currentRole = roles[currentIndex];
      if (displayText.length < currentRole.length) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
      } else {
        setTimeout(() => {
          setDisplayText('');
          setCurrentIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }, 2000);
      }
    };

    const timer = setTimeout(typeWriter, 100);
    return () => clearTimeout(timer);
  }, [displayText, currentIndex, roles]);

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        {/* <img 
          src={myPhoto } */}
          {/* alt="Background"
        /> */}
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-intro">
              <span className="intro-text">I'M</span>
            </div>
            <h1 className="hero-name">
              <span className="name-line">ISHA</span>
              <span className="name-line">SHUKLA<span className="name-dot">.</span></span>
            </h1>
            
            <div className="hero-role">
              <span className="typing-text">{displayText}</span>
              <span className="cursor">|</span>
            </div>
            
            <div className="hero-buttons">
              <a href="https://drive.google.com/file/d/11vhhU5shRpgUTKvANjZ_zCAGfXb9rohX/view?usp=drivesdk" className="btn btn-primary" download>
                <FaDownload />
                DOWNLOAD RESUME
              </a>
            </div>

            <div className="social-links">
              <a href="https://linkedin.com/in/ishashukla" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://github.com/ishashukla" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://leetcode.com/ishashukla" target="_blank" rel="noopener noreferrer">
                <SiLeetcode />
              </a>
              <a href="https://auth.geeksforgeeks.org/user/ishashukla" target="_blank" rel="noopener noreferrer">
                <SiGeeksforgeeks />
              </a>
            </div>
          </div>

          <div className="hero-image">
            <div className="image-container">
              <img 
                src={myPhoto} 
                alt="Isha Shukla"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;