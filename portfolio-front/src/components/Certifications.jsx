import React from 'react';

export default function Certifications() {
  const certifications = [
    {
      title: 'IBM Naan Mudhalvan Hackathon Certificate',
      issuer: 'IBM / TN Govt',
      year: '2026',
      logo: 'https://cdn.simpleicons.org/ibm/052FAD',
      link: '#'
    },
    {
      title: 'Front End Technologies',
      issuer: 'IBM',
      year: '2025',
      logo: 'https://cdn.simpleicons.org/ibm/052FAD',
      link: '#'
    },
    {
      title: 'Introduction to Cognos Analytics',
      issuer: 'IBM',
      year: '2024',
      logo: 'https://cdn.simpleicons.org/ibm/052FAD',
      link: '#'
    },
    {
      title: 'Ethical Hacking',
      issuer: 'NPTEL / Skill India',
      year: '2025',
      logo: 'nptel',
      link: '#'
    },
    {
      title: 'Data Analytics with Python',
      issuer: 'NPTEL / Skill India',
      year: '2025',
      logo: 'nptel',
      link: '#'
    },
    {
      title: 'Power BI',
      issuer: 'Microsoft',
      year: '2026',
      logo: 'https://cdn.simpleicons.org/microsoft/F25022',
      link: '#'
    }
  ];

  const renderLogo = (logo) => {
    if (logo === 'nptel') {
      return (
        <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '48px', height: '48px', background: 'var(--color-blue-faint)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', padding: '6px', color: 'var(--color-blue)' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        </span>
      );
    }
    return (
      <img
        src={logo}
        alt="Issuer Logo"
        className="cert-logo"
        loading="lazy"
        onError={(e) => {
          e.target.style.display = 'none';
        }}
      />
    );
  };

  return (
    <section id="certifications" className="section mesh-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal">
          <span className="section-subtitle">Credentials</span>
          <h2 className="text-h1 section-title">Certifications</h2>
          <p className="section-desc">Professional qualifications and aligned industry achievements.</p>
        </div>

        {/* Certifications Grid */}
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="cert-card glass reveal"
              data-delay={`${index * 0.08}s`}
            >
              <div className="cert-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)' }}>
                  {renderLogo(cert.logo)}
                  <div>
                    <h3 className="cert-title" style={{ fontSize: '15px', fontWeight: 600, lineHieght: 1.4 }}>{cert.title}</h3>
                    <div className="cert-issuer" style={{ fontSize: '13px', marginTop: '2px' }}>{cert.issuer}</div>
                  </div>
                </div>
              </div>
              <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'between', alignItems: 'center', paddingTop: 'var(--space-md)' }}>
                <span className="cert-year">{cert.year}</span>
                <div className="cert-action">
                  <a
                    href={cert.link}
                    className="btn-ghost"
                    style={{ padding: '4px 12px', fontSize: '11px', borderRadius: 'var(--radius-sm)' }}
                    onClick={(e) => e.preventDefault()} // Keep as interactive placeholder
                  >
                    View Certificate
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
