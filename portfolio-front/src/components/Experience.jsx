import React from 'react';

export default function Experience() {
  const experiences = [
    {
      role: 'Business Analytics Intern',
      company: "IBM (Naan Mudhalvan Program)",
      duration: 'April 2026 – May 2026',
      location: 'Remote',
      certificate: 'Yes — IBM Certified',
      logo: 'https://cdn.simpleicons.org/ibm/052FAD',
      description: "Learned and applied IBM Cognos Analytics — a leading business intelligence tool. Worked on data visualization, reporting, and business analytics workflows as part of IBM's structured learning program."
    },
    {
      role: 'Full Stack Intern',
      company: "IBM (Naan Mudhalvan Program)",
      duration: 'November 2025 – December 2025',
      location: 'CCET, Karur (On-site)',
      certificate: 'Yes — IBM Certified',
      logo: 'https://cdn.simpleicons.org/ibm/052FAD',
      description: "Developed a full-stack web application with frontend, backend, and database integration. Implemented proper security practices including authentication and authorization. Gained hands-on experience in end-to-end web development under IBM's structured internship program."
    }
  ];

  return (
    <section id="experience" className="section mesh-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal">
          <span className="section-subtitle">Experience</span>
          <h2 className="text-h1 section-title">Professional Journey</h2>
          <p className="section-desc">My professional internships and industry-aligned experiences.</p>
        </div>

        {/* Timeline Container */}
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="timeline-item glass reveal"
              data-delay={`${index * 0.15}s`}
            >
              <div className="timeline-header">
                <div className="timeline-role-info">
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="timeline-logo"
                    loading="lazy"
                  />
                  <div>
                    <h3 className="timeline-role">{exp.role}</h3>
                    <div className="timeline-company">{exp.company}</div>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '6px' }}>
                  <span className="timeline-date">{exp.duration}</span>
                  <span style={{ fontSize: '12px', color: 'var(--color-text-faint)', fontStyle: 'italic' }}>
                    {exp.location}
                  </span>
                </div>
              </div>
              <p className="timeline-desc">{exp.description}</p>
              
              <div style={{ marginTop: 'var(--space-md)', display: 'flex', gap: '8px' }}>
                <span className="tech-tag" style={{ background: 'var(--color-violet-faint)', color: 'var(--color-violet)', borderColor: 'rgba(124, 58, 237, 0.15)' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '4px' }}>
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  {exp.certificate}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
