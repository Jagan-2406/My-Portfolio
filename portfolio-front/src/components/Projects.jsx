import React, { useState, useEffect } from 'react';
import projectsData from '../data/projectsData';
import { fetchProjects } from '../services/api';
import useScrollAnimation from '../hooks/useScrollAnimation';

export default function Projects() {
  const [projects, setProjects] = useState(projectsData);
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    async function loadProjects() {
      try {
        const data = await fetchProjects();
        if (data && data.length > 0) {
          setProjects(data);
        }
      } catch (err) {
        // Warning already logged in service, fallback is active
      }
    }
    loadProjects();
  }, []);

  // Update animations when projects state or active filter changes
  useScrollAnimation([projects, activeFilter]);

  const filters = ['All', 'Full Stack', 'AI/ML', 'AR'];

  const getFilteredProjects = () => {
    if (activeFilter === 'All') return projects;
    return projects.filter(p => p.category === activeFilter);
  };

  // Helper to map tech name to devicon or simpleicon
  const getTechIcon = (techName) => {
    const name = techName.toLowerCase().trim().replace('.js', '').replace(' ', '');
    const devicons = {
      python: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      java: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      javascript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      js: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      csharp: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
      'c#': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
      react: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      html5: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      html: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      css3: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      css: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      tailwindcss: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
      tailwind: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
      nodejs: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      node: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      express: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      flask: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',
      mongodb: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      postgresql: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      mysql: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      sqlite: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg',
      unity: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg',
      unity3d: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg',
      androidstudio: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg',
      git: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      github: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
      vscode: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
      postman: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg',
      figma: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
      vercel: 'https://cdn.simpleicons.org/vercel/000000',
      render: 'https://cdn.simpleicons.org/render/46E3B7',
      netlify: 'https://cdn.simpleicons.org/netlify/00C7B7',
      scikitlearn: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg',
      claudeai: 'https://cdn.simpleicons.org/anthropic/CC9B76',
      claudeaiapi: 'https://cdn.simpleicons.org/anthropic/CC9B76',
      supabase: 'https://cdn.simpleicons.org/supabase/3ECF8E',
      android: 'https://cdn.simpleicons.org/android/3DDC84',
      arcore: 'https://cdn.simpleicons.org/google/4285F4',
      opentamil: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      gtts: 'https://cdn.simpleicons.org/google/4285F4',
      webspeechapi: 'https://cdn.simpleicons.org/javascript/F7DF1E'
    };
    return devicons[name] || null;
  };

  return (
    <section id="projects" className="section" style={{ backgroundColor: 'var(--color-bg)', position: 'relative' }}>
      {/* Subtle projects section mesh */}
      <div
        className="projects-mesh-wrapper"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 50% 10%, rgba(37,99,235,0.04) 0%, transparent 60%), radial-gradient(ellipse at 20% 90%, rgba(124,58,237,0.03) 0%, transparent 50%)',
          pointerEvents: 'none',
          zIndex: 1
        }}
      />

      <div className="container" style={{ zIndex: 2 }}>
        {/* Section Header */}
        <div className="section-header reveal">
          <span className="section-subtitle">Projects</span>
          <h2 className="text-h1 section-title">Showcase of My Work</h2>
          <p className="section-desc">AI solutions, immersive AR applications, and full-stack scheduling systems.</p>
        </div>

        {/* Filter Tabs */}
        <div className="skills-filter reveal" data-delay="0.1s">
          {filters.map(filter => (
            <button
              key={filter}
              className={`filter-tab ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {getFilteredProjects().map((project, index) => {
            const isFeatured = project.featured === true || String(project.featured) === 'true';
            return (
              <div
                key={project.id || project._id || index}
                className={`project-card glass ${isFeatured ? 'glass-gradient glow-pulse' : ''} reveal`}
                data-delay={`${index * 0.1}s`}
              >
                <div className="project-card-body">
                  {/* Top Featured Badge (No emoji - using star SVG) */}
                  {isFeatured && (
                    <span className="project-featured-badge">
                      <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                      Featured
                    </span>
                  )}

                  {/* Project Name */}
                  <h3 className="project-title" style={{ paddingRight: isFeatured ? '90px' : '0px' }}>
                    {project.name}
                  </h3>

                  {/* Project Description */}
                  <p className="project-desc">{project.description}</p>

                  {/* Tech Tags with Logos */}
                  <div className="project-tech">
                    {project.tech && project.tech.map((t, idx) => {
                      const iconUrl = getTechIcon(t);
                      return (
                        <span key={idx} className="tech-tag">
                          {iconUrl && (
                            <img
                              src={iconUrl}
                              alt={t}
                              loading="lazy"
                              onError={(e) => { e.target.style.display = 'none'; }}
                            />
                          )}
                          {t}
                        </span>
                      );
                    })}
                  </div>

                  {/* Outcome Highlight Box */}
                  {project.outcome && (
                    <div style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.4)',
                      border: '1px dashed var(--color-border)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '8px 12px',
                      marginBottom: 'var(--space-md)',
                      fontSize: '12.5px',
                      color: 'var(--color-text-muted)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-blue)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                      <span>{project.outcome.replace('🏆', '')}</span>
                    </div>
                  )}

                  {/* Card Action Buttons */}
                  <div className="card-actions">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost"
                    >
                      <img src="https://cdn.simpleicons.org/github/64748B" alt="GitHub" width="14" height="14" />
                      Code
                    </a>
                    
                    {project.live && (
                      <a
                        href={project.live.startsWith('http') ? project.live : project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-ghost"
                        style={{
                          borderColor: project.live.startsWith('http') ? 'var(--color-blue)' : 'var(--color-border)',
                          color: project.live.startsWith('http') ? 'var(--color-blue)' : 'var(--color-text-muted)'
                        }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                        {project.live.startsWith('http') ? 'Live Demo' : 'Download APK'}
                      </a>
                    )}
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
