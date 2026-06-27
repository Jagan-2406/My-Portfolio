import React from 'react';

export default function About() {
  const stats = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="7" />
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
        </svg>
      ),
      value: '2',
      label: 'Hackathon Wins'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="2" y1="20" x2="22" y2="20" />
          <line x1="12" y1="17" x2="12" y2="20" />
        </svg>
      ),
      value: '3+ Live',
      label: 'Projects'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      ),
      value: '6+',
      label: 'Certifications'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
        </svg>
      ),
      value: '8.2',
      label: 'CGPA'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      value: '2 IBM',
      label: 'Internships'
    }
  ];

  return (
    <section id="about" className="section mesh-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal">
          <span className="section-eyebrow">About Me</span>
          <h2 className="section-heading">My Background & Philosophy</h2>
          <p className="section-desc">Get to know the developer, engineer, and student behind the projects.</p>
        </div>

        {/* Section Content Grid */}
        <div className="about-grid">
          {/* Left Column: Story Paragraphs */}
          <div className="about-text reveal" data-delay="0.1s">
            <p className="text-body-lg">
              Technology has always fascinated me — not just how it works, but how it can improve everyday life. As an AI & Data Science student at Chettinad College of Engineering and Technology, I'm constantly exploring new technologies and expanding my skills through curiosity and hands-on building.
            </p>
            <p className="text-body">
              I believe progress comes from consistency, discipline, and embracing challenges. Every project I build — from AR disaster awareness apps to AI-powered Tamil language platforms — is a step toward becoming a better engineer and a better problem solver.
            </p>
            <p className="text-body">
              Currently pursuing B.Tech in AI & Data Science (2023–2027), I've worked with IBM as a Full Stack Intern, won hackathons, and built projects that bridge technology with real human needs.
            </p>
          </div>

          {/* Right Column: Glass Stats Card */}
          <div className="about-stats-card glass reveal" data-delay="0.2s">
            {stats.map((stat, index) => (
              <div key={index} className="about-stat-item">
                <div className="contact-icon-wrapper" style={{ width: '40px', height: '40px' }}>
                  {stat.icon}
                </div>
                <div className="about-stat-info">
                  <span className="about-stat-value">{stat.value}</span>
                  <span className="about-stat-label">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
