import React from 'react'

export default function Hero() {
  const scrollToProjects = () => {
    const el = document.getElementById('projects')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="hero-eyebrow">Portfolio · 2025</p>
        <h1 className="hero-title">
          <span className="hero-title-small">Hi, I&rsquo;m</span>
          <span className="hero-title-name">Hemant Sharma</span>
        </h1>
        <p className="hero-subtitle">
          Biologist turned game designer, bringing life to play.
        </p>
        <div className="hero-cta-row">
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
