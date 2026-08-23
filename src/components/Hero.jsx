import React from 'react'
import styles from '../styles/Hero.module.css'

export default function Hero() {
  const scrollToProjects = () => {
    const el = document.getElementById('projects')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.heroContent}>
        <p className={styles.heroEyebrow}>Portfolio · 2025</p>
        <h1 className={styles.heroTitle}>
          <span className={styles.heroTitleSmall}>Hi, I&rsquo;m</span>
          <span className={styles.heroTitleName}>Hemant Sharma</span>
        </h1>
        <p className={styles.heroSubtitle}>
          Biologist turned game designer, bringing life to play.
        </p>
        <div className={styles.heroCtaRow}>
          <button type="button" className="cta-button" onClick={scrollToProjects}>
            <span>View my work</span>
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <a className="cta-button ghost" href="#contact">
            <span>Get in touch</span>
          </a>
        </div>
      </div>
    </section>
  )
}
