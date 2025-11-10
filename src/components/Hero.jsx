import React, { useEffect, useRef, useState } from 'react'

export default function Hero() {
  const titleRef = useRef(null)
  const heroRef = useRef(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const letters = titleRef.current.querySelectorAll('.letter')
    letters.forEach((letter, index) => {
      letter.style.animationDelay = `${index * 0.05}s`
    })
  }, [])

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        const x = (e.clientX - rect.left) / rect.width - 0.5
        const y = (e.clientY - rect.top) / rect.height - 0.5
        setMousePosition({ x: x * 20, y: y * 20 })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const splitText = (text, className = '') => {
    return text.split('').map((char, index) => (
      <span key={index} className={`letter ${className}`}>
        {char === ' ' ? '\u00A0' : char}
      </span>
    ))
  }

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects')
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero" ref={heroRef}>
      <div
        className="hero-content"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          transition: 'transform 0.3s ease-out'
        }}
      >
        <div className="hero-name" style={{ fontSize: '1.2rem', color: 'var(--color-primary)', marginBottom: '1rem', fontWeight: '600' }}>

        </div>
        <h1 ref={titleRef} className="hero-title">
          {splitText('Hi, I am ', 'small-text')}
          <br />
          {splitText('Hemant Sharma', 'name-text')}
        </h1>
        <p className="hero-subtitle">
         Biologist turned game designer, bringing life to play
        </p>
        <button className="cta-button" onClick={scrollToProjects}>
          <span>View My Work</span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      <div className="scroll-indicator">
        <span>Scroll to explore</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  )
}
