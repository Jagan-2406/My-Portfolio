import React, { useState, useEffect } from 'react';
import resumePdf from '../assets/Jagan-Resume.pdf';

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleScrollToSection = (e, sectionId) => {
    e.preventDefault();
    const targetEl = document.getElementById(sectionId);
    if (targetEl) {
      const offset = 64; // Navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = targetEl.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <footer className="footer">
        <div className="footer-inner">
          {/* Left: Jagan branding + tagline + social icons */}
          <div>
            <a href="#hero" className="footer-brand-name" onClick={(e) => handleScrollToSection(e, 'hero')}>
              Jagan
            </a>
            <p className="footer-tagline">
              Code. Create. Impact.
            </p>
            <div className="footer-socials">
              <a href="https://github.com/Jagan-2406" target="_blank" rel="noopener noreferrer" className="social-icon" title="GitHub">
                <img src="https://cdn.simpleicons.org/github/FFFFFF" alt="GitHub" width="18" height="18" />
              </a>
              <a href="https://linkedin.com/in/jagan2406" target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn">
                <img src="https://cdn.simpleicons.org/linkedin/FFFFFF" alt="LinkedIn" width="18" height="18" />
              </a>
              <a href="https://x.com/Jagan1529014" target="_blank" rel="noopener noreferrer" className="social-icon" title="X (Twitter)">
                <img src="https://cdn.simpleicons.org/x/FFFFFF" alt="X" width="18" height="18" />
              </a>
              <a href="https://wa.me/919345591948" target="_blank" rel="noopener noreferrer" className="social-icon" title="WhatsApp">
                <img src="https://cdn.simpleicons.org/whatsapp/FFFFFF" alt="WhatsApp" width="18" height="18" />
              </a>
            </div>
          </div>

          {/* Right: built with */}
          <div className="footer-right">
            Built with <strong>❤️</strong> and lots of <strong>☕</strong><br />
            Stack: <strong>React · Node · Express · MongoDB</strong>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="footer-bottom">
          © 2026 Jagan V N. All rights reserved.
        </div>
      </footer>

      {/* Floating Back to Top Button */}
      <button
        onClick={handleScrollToTop}
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        aria-label="Scroll back to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="19" x2="12" y2="5"></line>
          <polyline points="5 12 12 5 19 12"></polyline>
        </svg>
      </button>
    </>
  );
}
