import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Achievements from '../components/Achievements';
import Education from '../components/Education';
import Certifications from '../components/Certifications';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';
import useScrollAnimation from '../hooks/useScrollAnimation';

export default function Home() {
  // Activate scroll animations
  useScrollAnimation();

  return (
    <div className="portfolio-wrapper" style={{ position: 'relative', minHeight: '100vh' }}>
      <Navbar />

      {/* Background Mesh Blobs */}
      <div className="mesh-blob mesh-blob-1"></div>
      <div className="mesh-blob mesh-blob-2"></div>
      <div className="mesh-blob mesh-blob-3"></div>

      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Achievements />
      <Education />
      <Certifications />
      <Contact />
      <Footer />
      <Chatbot />
    </div>
  );
}
