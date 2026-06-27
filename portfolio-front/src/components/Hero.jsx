import React, { useState, useEffect } from 'react';
import profileImg from '../assets/jagan-profile.png';
import resumePdf from '../assets/Jagan-Resume.pdf';

export default function Hero() {
  const roles = [
    'AI & Data Science Student',
    'Full Stack Developer',
    'AR & Game Developer'
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const activeRole = roles[roleIndex];
    
    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText(activeRole.substring(0, currentText.length - 1));
      }, 50);
    } else {
      timer = setTimeout(() => {
        setCurrentText(activeRole.substring(0, currentText.length + 1));
      }, 100);
    }

    if (!isDeleting && currentText === activeRole) {
      timer = setTimeout(() => setIsDeleting(true), 2000); // Pause at full text
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex]);

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      const offset = 64; // Navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = projectsSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="section container mesh-hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="hero" style={{ width: '100%' }}>
        {/* Left Column - Text Content */}
        <div className="hero-content reveal" style={{ opacity: 1 }}>
          <div className="hero-badge">
            Available for Internships & Collaborations
          </div>
          
          <h1 className="text-hero" style={{ marginBottom: 'var(--space-xs)' }}>
            Hi, I'm <span className="hero-name">Jagan V N</span>
          </h1>

          <div className="hero-role-wrapper">
            <h2 className="text-h2" style={{ fontWeight: 500 }}>
              <span className="hero-role">{currentText}</span>
              <span className="cursor" />
            </h2>
          </div>

          <h3 className="hero-tagline">
            Driven by curiosity. Focused on innovation. Committed to impact.
          </h3>

          <p className="text-body-lg hero-body">
            I build AI-powered applications, full-stack platforms, and immersive AR experiences
            that solve real-world problems — from Tamil language learning to disaster awareness.
          </p>

          {/* CTA Buttons */}
          <div className="hero-ctas">
            <a href="#projects" className="btn-primary" onClick={handleScrollToProjects}>
              View My Work
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            <a href={resumePdf} download="Jagan-Resume.pdf" className="btn-outline">
              Download Resume
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </a>
          </div>

          {/* Social Row */}
          <div className="hero-socials">
            <a href="https://github.com/Jagan-2406" target="_blank" rel="noopener noreferrer" className="social-icon" title="GitHub">
              <img src="https://cdn.simpleicons.org/github/0F172A" alt="GitHub" width="20" height="20" />
            </a>
            <a href="https://linkedin.com/in/jagan2406" target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn">
              <img src="https://cdn.simpleicons.org/linkedin/0A66C2" alt="LinkedIn" width="20" height="20" />
            </a>
            <a href="https://x.com/Jagan1529014" target="_blank" rel="noopener noreferrer" className="social-icon" title="X (Twitter)">
              <img src="https://cdn.simpleicons.org/x/0F172A" alt="X" width="20" height="20" />
            </a>
            <a href="https://wa.me/919345591948" target="_blank" rel="noopener noreferrer" className="social-icon" title="WhatsApp">
              <img src="https://cdn.simpleicons.org/whatsapp/25D366" alt="WhatsApp" width="20" height="20" />
            </a>
          </div>

          {/* Stats Row */}
          <div className="hero-stats">
            <div className="stat-card glass glass-blue">
              <div className="stat-number">3+</div>
              <div className="stat-label">Projects</div>
            </div>
            <div className="stat-card glass glass-blue">
              <div className="stat-number">2</div>
              <div className="stat-label">Internships</div>
            </div>
            <div className="stat-card glass glass-blue">
              <div className="stat-number">6+</div>
              <div className="stat-label">Certifications</div>
            </div>
          </div>
        </div>

        {/* Right Column - Visual Graphic with Profile Avatar */}
        <div className="hero-visual">
          <div className="hero-profile-wrapper">
            <div className="hero-profile-ring"></div>
            <div className="hero-avatar-wrapper">
              <img src={profileImg} alt="Jagan V N" className="hero-profile-img" loading="lazy" />
            </div>
          </div>

          {/* Floating mini cards */}
          <div className="hero-float-card float-card-win float-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '4px' }}>
              <circle cx="12" cy="8" r="7"></circle>
              <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
            </svg>
            IBM Hackathon Winner
          </div>

          <div className="hero-float-card float-card-ar float-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '4px' }}>
              <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v1.5a4.5 4.5 0 0 0 0 9V18a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-1.5a4.5 4.5 0 0 0 0-9z"></path>
              <path d="M12 9v6"></path>
              <path d="M3 13.5h3.5a1.5 1.5 0 0 1 1.5 1.5v0a1.5 1.5 0 0 1-1.5 1.5H3"></path>
              <path d="M21 13.5h-3.5a1.5 1.5 0 0 0-1.5 1.5v0a1.5 1.5 0 0 0 1.5 1.5H21"></path>
            </svg>
            AR Developer
          </div>

          <div className="hero-float-card float-card-stack float-3">
            Python · React · Unity
          </div>
        </div>
      </div>
    </section>
  );
}
