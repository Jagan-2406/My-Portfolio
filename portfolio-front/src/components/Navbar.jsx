import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const winHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight - winHeight;
      
      // Update scroll progress bar variable
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      document.documentElement.style.setProperty('--scroll-progress', `${scrollPercent}%`);

      // Scroll trigger for glass navbar
      if (scrollTop > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track active section for indicator
      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'achievements', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If the section occupies the upper-middle part of the screen
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initialize once on mount
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const targetEl = document.querySelector(href);
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
      {/* Scroll Progress Bar at very top */}
      <div className="progress-bar" />

      <nav className={`navbar ${isScrolled ? 'scrolled' : 'top'}`}>
        {/* Left: JV Monogram Logo */}
        <a href="#hero" className="nav-logo" onClick={(e) => handleLinkClick(e, '#hero')}>
          JV
        </a>

        {/* Center/Right: Desktop Nav Links */}
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className={activeSection === item.href.slice(1) ? 'active' : ''}
                onClick={(e) => handleLinkClick(e, item.href)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Far Right: Hire Me CTA Pill */}
        <button
          className="nav-cta"
          onClick={(e) => handleLinkClick(e, '#contact')}
          style={{ display: 'block' }}
        >
          Hire Me
        </button>

        {/* Mobile Hamburger Icon */}
        <button
          className={`nav-hamburger ${isMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile Slide-in Menu with Glass Background */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={(e) => handleLinkClick(e, item.href)}
          >
            {item.label}
          </a>
        ))}
        <a
          href="#contact"
          className="mobile-menu-cta"
          onClick={(e) => handleLinkClick(e, '#contact')}
        >
          Hire Me
        </a>
      </div>
    </>
  );
}
