import React from 'react';

export default function Certifications() {
  const certifications = [
    {
      title: 'IBM Naan Mudhalvan Hackathon Certificate',
      issuer: 'IBM / TN Govt',
      year: '2026',
      logo: 'ibm',
      link: 'https://drive.google.com/file/d/1ZOpmdziBDOmbdXSivkHajSzk-1EASpxE/view?usp=sharing'
    },
    {
      title: 'Front End Technologies',
      issuer: 'IBM',
      year: '2025',
      logo: 'ibm',
      link: 'https://drive.google.com/file/d/1yIy2Ml4lmQlS4ipzELi0doZ35L4U3WQE/view?usp=sharing'
    },
    {
      title: 'Introduction to Cognos Analytics',
      issuer: 'IBM',
      year: '2024',
      logo: 'ibm',
      link: 'https://drive.google.com/file/d/1Jd228DIpva01EdREO0tZrlEJ82D1X2CT/view?usp=drive_link'
    },
    {
      title: 'Ethical Hacking',
      issuer: 'NPTEL / Skill India',
      year: '2025',
      logo: 'nptel',
      link: 'https://drive.google.com/file/d/1ZVHnQ0nhHrGB-NaqbyTR7xw9GfFiObjU/view?usp=drive_link'
    },
    {
      title: 'Data Analytics with Python',
      issuer: 'NPTEL / Skill India',
      year: '2025',
      logo: 'nptel',
      link: 'https://drive.google.com/file/d/1K0ihiCAj3hP2CJ0YG0r2HVe3t-_6S9K2/view?usp=sharing'
    },
    {
      title: 'Power BI',
      issuer: 'Microsoft',
      year: '2026',
      logo: 'microsoft',
      link: 'https://drive.google.com/file/d/1KjYDsej-Voaim29SoWoObvYbJacE45FH/view?usp=drive_link'
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
    if (logo === 'ibm') {
      return (
        <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '48px', height: '48px', background: 'rgba(37,99,235,0.06)', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(37,99,235,0.15)', color: '#2563EB' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
            <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
            <line x1="6" y1="6" x2="6.01" y2="6" />
            <line x1="6" y1="18" x2="6.01" y2="18" />
          </svg>
        </span>
      );
    }
    if (logo === 'microsoft') {
      return (
        <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '48px', height: '48px', background: 'rgba(0,164,239,0.06)', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(0,164,239,0.15)', color: '#00A4EF' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M0 0h11v11H0zM13 0h11v11H13zM0 13h11v11H0zM13 13h11v11H13z" />
          </svg>
        </span>
      );
    }
    return null;
  };

  return (
    <section id="certifications" className="section mesh-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal">
          <span className="section-eyebrow">Credentials</span>
          <h2 className="section-heading">Certifications</h2>
          <p className="section-desc">Professional qualifications and aligned industry achievements.</p>
        </div>

        {/* Certifications Grid */}
        <div className="certifications-grid">
          {certifications.map((cert, index) => {
            const issuerLower = cert.issuer.toLowerCase();
            const issuerAttr = issuerLower.includes('ibm') ? 'ibm' : (issuerLower.includes('microsoft') ? 'microsoft' : (issuerLower.includes('nptel') ? 'nptel' : 'other'));
            return (
              <div
                key={index}
                className="cert-card glass glass-cyan reveal"
                data-delay={`${index * 0.08}s`}
                data-issuer={issuerAttr}
              >
                <div className="cert-header">
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)' }}>
                    {renderLogo(cert.logo)}
                    <div>
                      <h3 className="cert-title card-title" style={{ fontSize: '15px', fontWeight: 600, lineHieght: 1.4 }}>{cert.title}</h3>
                      <div className="cert-issuer" style={{ fontSize: '13px', marginTop: '2px' }}>{cert.issuer}</div>
                    </div>
                  </div>
                </div>
                <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 'var(--space-md)' }}>
                  <span className="cert-year date-badge">{cert.year}</span>
                  <div className="cert-action">
                    <a
                      href={cert.link}
                      className="cert-view-btn"
                      style={{ padding: '4px 12px', fontSize: '11px', borderRadius: 'var(--radius-sm)' }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Certificate
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
