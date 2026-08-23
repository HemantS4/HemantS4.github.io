import React from 'react'
import styles from '../styles/About.module.css'

export default function About() {
  const tools = [
    { name: 'Unity', category: 'Engine' },
    { name: 'Blender', category: '3D' },
    { name: 'Photoshop', category: 'Adobe' },
    { name: 'Figma', category: 'Design' },
    { name: 'Unreal', category: 'Engine' },
    { name: 'AI', category: 'Tech' }
  ]

  const handleResumeClick = () => {
    // Open resume PDF in new tab
    window.open(`${import.meta.env.BASE_URL}Resume.pdf`, '_blank')
  }

  return (
    <section id="about" className={styles.about}>
      <div className={styles.aboutContent}>
        <div className={styles.aboutText}>
          <h2 className="section-title">About Me</h2>
          <p className={styles.aboutIntro}>
            I'm <strong style={{ color: 'var(--color-primary)' }}>Hemant Sharma</strong>, a Game System Designer specializing in creating engaging gameplay mechanics and systems
            that drive player interaction and immersion.
          </p>
          <p className={styles.aboutDescription}>
            I focus on designing robust game systems, from combat mechanics to progression loops,
            ensuring every element contributes to a cohesive player experience. My approach combines
            analytical thinking with creative problem-solving to build systems that are both fun and balanced.
          </p>
          <p className={styles.aboutDescription}>
            With expertise in level design, game balancing, and player psychology, I craft experiences
            that keep players engaged through well-designed feedback loops and meaningful choices.
          </p>

          {/* Resume Button */}
          <button className={styles.resumeButton} onClick={handleResumeClick}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 9H9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            View Resume
          </button>
        </div>

        <div className={styles.aboutProfile}>
          {/* Floating Profile Image */}
          <div className={styles.profileImageContainer}>
            <div className={styles.profileImageWrapper}>
              <img
                src={`${import.meta.env.BASE_URL}ME1.png`}
                alt="Profile"
                className={styles.profileImage}
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/300x300/1a1a2e/ff7849?text=Your+Photo'
                }}
              />
              <div className={styles.profileGlow}></div>
            </div>
          </div>

          {/* Tools Proficiency */}
          <div className={styles.toolsProficiency}>
            <h3 className={styles.toolsTitle}>Tools & Technologies</h3>
            <div className={styles.toolsGrid}>
              {tools.map((tool, index) => (
                <div key={index} className={styles.toolBadge} data-category={tool.category}>
                  <span className={styles.toolName}>{tool.name}</span>
                  <span className={styles.toolCategory}>{tool.category}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
