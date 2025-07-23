import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section section-dark">
      <div className="container">
        <div className="about-content">
          <div className="about-logo">
            <div className="logo-large">
              <span className="logo-text-large">I</span>
              <div className="logo-circle-large"></div>
            </div>
          </div>
          
          <div className="about-text">
            <p className="about-description">
              I'm currently pursuing my MCA from Maulana Azad National Institute of Technology (MANIT), Bhopal. I have hands-on experience with modern web technologies like React.js, Node.js, Express, and MongoDB. I'm passionate about building efficient and user-friendly web applications, and I enjoy learning new tools and frameworks to stay updated with the latest trends in tech.
            </p>
            
            <div className="about-buttons">
              <a href="https://drive.google.com/file/d/11vhhU5shRpgUTKvANjZ_zCAGfXb9rohX/view?usp=drivesdk" className="btn btn-primary" download>
                DOWNLOAD RESUME
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;