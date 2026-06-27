import React from 'react';

export default function Education() {
  const educationData = [
    {
      degree: 'B.Tech — Artificial Intelligence & Data Science',
      college: 'Chettinad College of Engineering and Technology (CCET), Karur',
      duration: '2023 – 2027',
      cgpa: '8.2',
      logo: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--color-blue)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ background: 'var(--color-blue-faint)', borderRadius: 'var(--radius-sm)', padding: '6px' }}>
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
        </svg>
      ),
      description: "Acquiring core knowledge in Machine Learning algorithms, Advanced Data Structures, Big Data Analytics, Natural Language Processing, and Full-Stack Development frameworks."
    }
  ];

  return (
    <section id="education" className="section" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal">
          <span className="section-subtitle">Education</span>
          <h2 className="text-h1 section-title">Academic Background</h2>
          <p className="section-desc">Details of my academic history and coursework.</p>
        </div>

        {/* Timeline Container */}
        <div className="timeline">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="timeline-item glass reveal"
              data-delay={`${index * 0.15}s`}
            >
              <div className="timeline-header">
                <div className="timeline-role-info">
                  <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {edu.logo}
                  </span>
                  <div>
                    <h3 className="timeline-role">{edu.degree}</h3>
                    <div className="timeline-company">{edu.college}</div>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '6px' }}>
                  <span className="timeline-date">{edu.duration}</span>
                  <div className="education-cgpa">CGPA: {edu.cgpa}</div>
                </div>
              </div>
              <p className="timeline-desc">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
