import React from 'react';

export default function Achievements() {
  const achievements = [
    {
      title: 'IBM Naan Mudhalvan Hackathon Winner',
      event: 'IBM Naan Mudhalvan Hackathon 2026',
      year: '2026',
      detail: 'Won 1st Prize for Smart Appointment Scheduling System — a full-stack React + Node + MongoDB centralized management platform. ₹25,000 cash award.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="7" />
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
        </svg>
      )
    },
    {
      title: 'Data Dive Contest Winner',
      event: 'CCET — Dept. of AI & Data Science',
      year: '2025',
      detail: 'Won Data Dive contest — Data Science & Analytics quiz and BI challenge organized by the AI & DS department.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
          <line x1="2" y1="20" x2="22" y2="20" />
        </svg>
      )
    }
  ];

  return (
    <section id="achievements" className="section mesh-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal">
          <span className="section-subtitle">Achievements</span>
          <h2 className="text-h1 section-title">Honors & Awards</h2>
          <p className="section-desc">Recognition received for project development and technical skills.</p>
        </div>

        {/* Achievements Grid */}
        <div className="achievements-grid" style={{ maxWidth: '900px', margin: '0 auto' }}>
          {achievements.map((item, index) => (
            <div
              key={index}
              className="achievement-card glass glass-violet glow-pulse reveal"
              data-delay={`${index * 0.15}s`}
            >
              <div className="achievement-icon-wrapper">
                {item.icon}
              </div>
              <h3 className="achievement-title">{item.title}</h3>
              <div className="achievement-event">{item.event}</div>
              <span className="achievement-year">{item.year}</span>
              <p className="achievement-detail">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
