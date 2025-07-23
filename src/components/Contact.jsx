import React, { useState } from 'react';
import { 
  FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane,
  FaLinkedin, FaGithub
} from 'react-icons/fa';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'ishashukla2404@gmail.com',
      link: 'mailto:ishashukla2404@gmail.com'
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      value: '+91 91311xxxxx',
      link: 'tel:+9191311xxxxx'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      value: 'Pachmarhi, Madhya Pradesh, India',
      link: 'https://maps.google.com/?q=Pachmarhi,MadhyaPradesh,India'
    }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <FaLinkedin />,
      url: 'https://www.linkedin.com/in/isha-shukla-792404287/'
    },
    {
      name: 'GitHub',
      icon: <FaGithub />,
      url: 'https://github.com/Ishashuklaa'
    },
    {
      name: 'LeetCode',
      icon: <SiLeetcode />,
      url: 'https://leetcode.com/u/isha_shukla24/'
    },
    {
      name: 'GeeksforGeeks',
      icon: <SiGeeksforgeeks />,
      url: 'https://www.geeksforgeeks.org/user/ishashukn1ki/'
    }
  ];

  return (
    <section id="contact" className="section section-dark">
      <div className="container">
        <div className="section-title">
          {/* <span className="section-number">04 CONTACT</span> */}
          <h2>GET IN TOUCH</h2>
          <p className="section-subtitle">Let's work together to bring your ideas to life</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-text">
              <h3>Let's discuss your project</h3>
              <p>
                I'm always interested in hearing about new opportunities and exciting projects.
                Whether you have a project in mind or just want to chat about technology, 
                feel free to reach out!
              </p>
            </div>

            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-item">
                  <div className="contact-icon">
                    {info.icon}
                  </div>
                  <div className="contact-text-info">
                    <h4>{info.title}</h4>
                    <a href={info.link} target="_blank" rel="noopener noreferrer">
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="social-section">
              <h4>Follow me on</h4>
              <div className="social-grid">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-item"
                    title={social.name}
                  >
                    <div className="social-icon">
                      {social.icon}
                    </div>
                    <span className="social-name">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <form onSubmit={handleSubmit} className="contact-form">
              <h3>Send me a message</h3>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What's this about?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell me more about your project..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="submit-btn btn btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="spinner"></div>
                    SENDING...
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    SEND MESSAGE
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;