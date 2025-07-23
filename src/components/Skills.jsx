import React, { useState, useEffect } from 'react';
import { 
  FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, 
  FaDatabase, FaCode, FaServer, FaTools, FaCloud, FaJava
} from 'react-icons/fa';
import { 
  SiExpress, SiMongodb, SiPostgresql, SiPostman, SiSupabase, 
  SiVercel, SiTypescript, SiTailwindcss,
  SiFirebase, SiDocker, SiLinux
} from 'react-icons/si';

import './Skills.css';

const Skills = () => {
  const [visibleSkills, setVisibleSkills] = useState([]);

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <FaCode />,
      skills: [
        { name: "React.js", icon: <FaReact />, level: 90, color: "#61DAFB" },
        { name: "JavaScript", icon: <FaJs />, level: 85, color: "#F7DF1E" },
        // { name: "TypeScript", icon: <SiTypescript />, level: 80, color: "#3178C6" },
        { name: "HTML5", icon: <FaHtml5 />, level: 95, color: "#E34F26" },
        { name: "CSS3", icon: <FaCss3Alt />, level: 90, color: "#1572B6" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 85, color: "#06B6D4" }
      ]
    },
    {
      title: "Backend Development",
      icon: <FaServer />,
      skills: [
        { name: "Node.js", icon: <FaNodeJs />, level: 85, color: "#339933" },
        { name: "Express.js", icon: <SiExpress />, level: 80, color: "#000000" },
        { name: "Java", icon: <FaJava />, level: 75, color: "#ED8B00" }
      ]
    },
    {
      title: "Database & Storage",
      icon: <FaDatabase />,
      skills: [
        { name: "MongoDB", icon: <SiMongodb />, level: 80, color: "#47A248" },
        { name: "PostgreSQL", icon: <SiPostgresql />, level: 75, color: "#336791" },
        { name: "SQL", icon: <FaDatabase />, level: 85, color: "#00758F" },
        { name: "Supabase", icon: <SiSupabase />, level: 70, color: "#3ECF8E" },
        // { name: "Firebase", icon: <SiFirebase />, level: 75, color: "#FFCA28" }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: <FaTools />,
      skills: [
        { name: "Git", icon: <FaGitAlt />, level: 90, color: "#F05032" },
        { name: "GitHub", icon: <FaGithub />, level: 90, color: "#181717" },
       { name: "VS Code", icon: <FaCode />, level: 95, color: "#007ACC" },

        { name: "Postman", icon: <SiPostman />, level: 85, color: "#FF6C37" },
      // { name: "VS Code", icon: <SiVisualstudiocode />, level: 95, color: "#007ACC" },

        { name: "Docker", icon: <SiDocker />, level: 70, color: "#2496ED" },
        // { name: "Linux", icon: <SiLinux />, level: 75, color: "#FCC624" }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const categoryIndex = parseInt(entry.target.dataset.category);
            setVisibleSkills(prev => [...prev, categoryIndex]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const skillCategories = document.querySelectorAll('.skill-category');
    skillCategories.forEach((category) => {
      observer.observe(category);
    });

    return () => {
      skillCategories.forEach((category) => {
        observer.unobserve(category);
      });
    };
  }, []);

  return (
    <section id="skills" className="section section-darker">
      <div className="container">
        <div className="section-title">
          {/* <span className="section-number">01 PROFESSIONAL</span> */}
          <h2>MY KNOWLEDGE LEVEL IN SOFTWARE</h2>
          <p className="section-subtitle">Technologies and tools I work with</p>
        </div>

        <div className="skills-container">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className={`skill-category ${visibleSkills.includes(categoryIndex) ? 'animate' : ''}`}
              data-category={categoryIndex}
            >
              <div className="category-header">
                <div className="category-icon">
                  {category.icon}
                </div>
                <h3 className="category-title">{category.title}</h3>
              </div>

              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="skill-card"
                    style={{ '--skill-color': skill.color }}
                  >
                    <div className="skill-icon">
                      {skill.icon}
                    </div>
                    <div className="skill-info">
                      <h4 className="skill-name">{skill.name}</h4>
                      <div className="skill-level">
                        <div className="skill-bar">
                          <div 
                            className={`skill-progress ${visibleSkills.includes(categoryIndex) ? 'animate' : ''}`}
                            style={{ 
                              '--progress': `${skill.level}%`,
                              '--skill-color': skill.color
                            }}
                          ></div>
                        </div>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* <div className="skills-summary">
          <div className="summary-stats">
            <div className="stat-item">
              <span className="stat-number">20+</span>
              <span className="stat-label">Technologies</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">3+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Skills;