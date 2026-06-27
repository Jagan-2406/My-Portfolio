import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isDark, setIsDark] = useState(() => localStorage.getItem('theme') === 'dark');

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Education', href: '#education' },
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
      const sections = ['hero', 'about', 'skills', 'experience', 'education', 'projects', 'achievements', 'contact'];
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
        {/* Left: Jagan Monogram Logo */}
        <a href="#hero" className="nav-logo" onClick={(e) => handleLinkClick(e, '#hero')}>Jagan</a>

        {/* Center: Desktop Nav Links */}
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

        {/* Theme Toggle Button */}
        <button
          className="theme-toggle"
          id="themeToggle"
          aria-label="Toggle dark mode"
          title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          onClick={() => {
            const html = document.documentElement;
            const currentlyDark = html.getAttribute('data-theme') === 'dark';
            const sheet = document.getElementById('theme-stylesheet');
            if (currentlyDark) {
              html.removeAttribute('data-theme');
              if (sheet) sheet.setAttribute('disabled', '');
              localStorage.setItem('theme', 'light');
              setIsDark(false);
            } else {
              html.setAttribute('data-theme', 'dark');
              if (sheet) sheet.removeAttribute('disabled');
              localStorage.setItem('theme', 'dark');
              setIsDark(true);
            }
          }}
        >
          {isDark ? (
            /* Moon icon — shown in dark mode */
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"/>
            </svg>
          ) : (
            /* Sun icon — shown in light mode */
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="5"/>
              <line x1="12" y1="1" x2="12" y2="3"/>
              <line x1="12" y1="21" x2="12" y2="23"/>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
              <line x1="1" y1="12" x2="3" y2="12"/>
              <line x1="21" y1="12" x2="23" y2="12"/>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </svg>
          )}
        </button>

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
