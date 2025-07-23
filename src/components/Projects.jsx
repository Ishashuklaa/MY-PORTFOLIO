import React from 'react';
import './Projects.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import p1 from '../assets/Screenshot (42).png';
import p5 from '../assets/Screenshot (43).png';
import p3 from '../assets/Screenshot (45).png';
import p2 from '../assets/Screenshot (103).png';
import p4 from '../assets/Screenshot (104).png';
import p6 from '../assets/Screenshot (105).png';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'PROJECT 01',
      image: p1,
      category: 'CultureConnect - A Cultural Exchange Platform',
            github: 'https://github.com/Ishashuklaa/CultureConnect',
      live: 'https://ecommerce-ishashukla.vercel.app'
    },
    {
      id: 2,
      title: 'PROJECT 02',
      image: p2,
      category: 'StuNest - A Student Networking App',
      github: 'https://github.com/Ishashuklaa/Hostel_Management',
      live: 'https://stunest.vercel.app'
    },
    {
      id: 3,
      title: 'PROJECT 03',
      image: p3,
      category: 'MridaAmrit - A Vermicompost Startup Website',
            github: 'https://github.com/Ishashuklaa/MridaAmrit-Vermicompost-Store',
      live: 'https://ecommerce-ishashukla.vercel.app'
    },
     {
      id: 4,
      title: 'PROJECT 04',
      image: p4,
      category: 'FarmToTable - A Farm to Table E-commerce Platform',
      github: 'https://github.com/Ishashuklaa/FarmToTableN',
      live: 'https://ecommerce-ishashukla.vercel.app'
    },
    {
      id: 5,
      title: 'PROJECT 05',
      image: p5,
      category: 'QuizGame - A Quiz Game App',
      github: 'https://github.com/Ishashuklaa/Quiz-game',
      live: 'https://ecommerce-ishashukla.vercel.app'
    },
    {
      id: 6,
      title: 'PROJECT 06',
      image: p6,
      category: 'Portfolio - My Personal Portfolio Website',
            github: 'https://github.com/ishashukla/ecommerce-platform',
      live: 'https://ecommerce-ishashukla.vercel.app'
    },
     {
      id: 7,
      title: 'PROJECT 07',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'WeatherApp - A Weather Forecast Application',
            github: 'https://github.com/Ishashuklaa/Weather-Tracker',
      live: 'https://ecommerce-ishashukla.vercel.app'
    }
   
  ];

  return (
   <section id="projects" className="section section-dark">
      <div className="container">
        <div className="section-title">
          {/* <span className="section-number">02 PORTFOLIO</span> */}
          <h2>MY LATEST WORK.</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-category">{project.category}</p>
                    <p className="project-description">{project.description}</p>
                    <div className="project-links">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                        title="View Source Code"
                      >
                        <FaGithub />
                        <span>GitHub</span>
                      </a>
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                        title="View Live Demo"
                      >
                        <FaExternalLinkAlt />
                        <span>Live Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Projects;