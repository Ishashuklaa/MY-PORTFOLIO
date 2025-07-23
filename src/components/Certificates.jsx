import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import './Certificates.css';

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: 'Front-end Web Development Internship',
      issuer: 'IBM skillbuild CSRBOX',
      date: '2024',
      description: 'Completed a 6-week intensive front-end development program through IBM SkillsBuild and CSRBOX.',
      link: 'https://drive.google.com/file/d/1R1GU8Jvl6BPB4o5gBoo2ArXK5KeyE8iu/view?usp=drivesdk'
    },
    {
      id: 2,
      title: 'Build with India Hackathon Finalist',
      issuer: 'Build with India',
      date: '2024',
      description: 'Reached the final round of national hackathon held at Google Office, Bengaluru',
      link: 'https://drive.google.com/file/d/11oYTKAmjk34hPpykOSRSfNdKTo6OZKrT/view?usp=drivesdk'
    },
    {
      id: 3,
      title: 'Arambh Entrepreneurship Competition',
      issuer: 'Arambh Season 2',
      date: '2025',
      description: 'Finalist in national level entrepreneurship competition.',
      link: 'https://drive.google.com/file/d/11pmmDK7ImJoNWRkP-eK_llKgYj82_pk9/view?usp=drivesdk'
    },
    {
      id: 4,
      title: 'GirlScript Summer of Code Contributor and Campus Ambassador',
      issuer: 'GirlScript Summer of Code',
      date: '2024',
      description: 'Contributed to open-source projects during this 1-month program and served as a campus ambassador.',
      link: 'https://drive.google.com/file/d/11tsBVqqftrz17N_PziKhhlLGQtQAuZcX/view?usp=drivesdk'
    },
    {
      id: 5,
      title: 'Eureka! Business Model Competition – IIT Bombay',
      issuer: 'Eureka! IIT Bombay',
      date: '2025',
      description: 'Participated in Eureka!, Asia’s largest business model competition organized by IIT Bombay',
      link: 'https://drive.google.com/file/d/11oYolKY3M3A3f9HFRmoceYfBW9Oe4sru/view?usp=drivesdk'
    }
  ];

  return (
    <section id="certificates" className="section section-darker">
      <div className="container">
        <div className="section-title">
          {/* <span className="section-number">03 CERTIFICATES</span> */}
          <h2>MY ACHIEVEMENTS</h2>
          <p className="section-subtitle">Professional certifications and completed courses</p>
        </div>

        <div className="certificates-grid">
          {certificates.map((cert) => (
            <div key={cert.id} className="certificate-card">
              <div className="certificate-content">
                <h3 className="certificate-title">{cert.title}</h3>
                <div className="certificate-meta">
                  <span className="certificate-issuer">{cert.issuer}</span>
                  <span className="certificate-date">{cert.date}</span>
                </div>
                <p className="certificate-description">{cert.description}</p>
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="certificate-link"
                >
                  VIEW CERTIFICATE <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;