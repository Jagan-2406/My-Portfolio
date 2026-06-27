import React, { useState, useEffect } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('Languages');

  const categories = ['Languages', 'Frontend', 'Backend', 'AI/ML', 'AR', 'Tools'];

  const skillCategories = {
    Languages: {
      label: 'Languages',
      class: 'label-blue',
      skills: [
        { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' }
      ]
    },
    Frontend: {
      label: 'Frontend',
      class: 'label-violet',
      skills: [
        { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' }
      ]
    },
    Backend: {
      label: 'Backend & Databases',
      class: 'label-cyan',
      skills: [
        { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
        { name: 'Flask', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
        { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
        { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
        { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { name: 'SQLite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg' }
      ]
    },
    'AI/ML': {
      label: 'AI & Data Science',
      class: 'label-green',
      skills: [
        {
          name: 'Machine Learning',
          type: 'svg',
          svg: (
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="18" cy="5" r="3" />
              <circle cx="6" cy="12" r="3" />
              <circle cx="18" cy="19" r="3" />
              <line x1="8.5" y1="10.5" x2="15.5" y2="6.5" />
              <line x1="8.5" y1="13.5" x2="15.5" y2="17.5" />
            </svg>
          )
        },
        {
          name: 'Data Analysis',
          type: 'svg',
          svg: (
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="20" x2="18" y2="10" />
              <line x1="12" y1="20" x2="12" y2="4" />
              <line x1="6" y1="20" x2="6" y2="14" />
            </svg>
          )
        },
        {
          name: 'NLP',
          type: 'svg',
          svg: (
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              <path d="M8 10h.01M12 10h.01M16 10h.01" />
            </svg>
          )
        },
        { name: 'scikit-learn', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg' },
        { name: 'Claude AI API', icon: 'https://cdn.simpleicons.org/anthropic/CC9B76' },
        {
          name: 'Open-Tamil',
          type: 'svg',
          svg: (
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 8h14M4 14h16M9 5v14M15 5v14" />
            </svg>
          )
        },
        {
          name: 'gTTS',
          type: 'svg',
          svg: (
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
            </svg>
          )
        },
        { name: 'IBM Cognos', icon: 'https://cdn.simpleicons.org/ibm/052FAD' },
        { name: 'Power BI', icon: 'https://cdn.simpleicons.org/powerbi/F2C811' }
      ]
    },
    AR: {
      label: 'AR & Game Dev',
      class: 'label-orange',
      skills: [
        { name: 'Unity3D', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg' },
        {
          name: 'ARCore',
          type: 'svg',
          svg: (
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v1.5a4.5 4.5 0 0 0 0 9V18a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-1.5a4.5 4.5 0 0 0 0-9z" />
              <path d="M12 9v6" />
              <path d="M3 13.5h3.5a1.5 1.5 0 0 1 1.5 1.5v0a1.5 1.5 0 0 1-1.5 1.5H3" />
              <path d="M21 13.5h-3.5a1.5 1.5 0 0 0-1.5 1.5v0a1.5 1.5 0 0 0 1.5 1.5H21" />
            </svg>
          )
        },
        { name: 'Android Studio', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg' }
      ]
    },
    Tools: {
      label: 'Tools & Deploy',
      class: 'label-blue',
      skills: [
        { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
        { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
        { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
        { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
        { name: 'Vercel', icon: 'https://cdn.simpleicons.org/vercel/000000' },
        { name: 'Render', icon: 'https://cdn.simpleicons.org/render/46E3B7' },
        { name: 'Netlify', icon: 'https://cdn.simpleicons.org/netlify/00C7B7' },
        { name: 'MongoDB Atlas', icon: 'https://www.mongodb.com/assets/images/global/favicon.ico' }
      ]
    }
  };

  // Re-trigger scroll animations whenever active category changes
  useScrollAnimation([activeCategory]);

  // Determine which skills to show
  const getFilteredSkills = () => {
    return [
      {
        categoryKey: activeCategory,
        ...skillCategories[activeCategory]
      }
    ];
  };

  return (
    <section id="skills" className="section" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal">
          <span className="section-subtitle">Skills</span>
          <h2 className="text-h1 section-title">My Tech Stack & Expertise</h2>
          <p className="section-desc">Filtered by category of application, design, or tools.</p>
        </div>

        {/* Category Tabs */}
        <div className="skills-filter reveal" data-delay="0.1s">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-tab ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills List */}
        <div className="skills-container" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)' }}>
          {getFilteredSkills().map((catObj) => (
            <div key={catObj.categoryKey} className="skill-group reveal" data-delay="0.2s">
              <div className="skill-category-header" style={{ marginBottom: 'var(--space-md)' }}>
                <span className={`skill-category-label ${catObj.class}`}>
                  {catObj.label}
                </span>
              </div>

              <div className="skills-grid" style={{ justifyContent: 'flex-start' }}>
                {catObj.skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="skill-pill reveal"
                    data-delay={`${0.05 * index}s`}
                    style={{ position: 'relative' }}
                  >
                    {skill.type === 'svg' ? (
                      <span style={{ display: 'flex', color: 'var(--color-text-muted)', width: '22px', height: '22px', alignItems: 'center', justifyContent: 'center' }}>
                        {skill.svg}
                      </span>
                    ) : (
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        loading="lazy"
                        onError={(e) => {
                          e.target.style.display = 'none'; // Fallback if image fails
                        }}
                      />
                    )}
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
