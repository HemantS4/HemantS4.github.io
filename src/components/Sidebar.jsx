import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { navItems } from '../config/sections'
import styles from '../styles/Sidebar.module.css'

export default function Sidebar({ activeSection, setActiveSection }) {
  const navigate = useNavigate()
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const goToSection = (id) => {
    setMenuOpen(false)
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        setActiveSection(id)
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 80)
    } else {
      setActiveSection(id)
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <header className={styles.topnav}>
        <button
          type="button"
          className={`${styles.topnavToggle} ${menuOpen ? styles.open : ''}`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(v => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <button
          type="button"
          className={styles.topnavBrand}
          onClick={() => goToSection('home')}
          aria-label="Go to top"
        >
          <span className={styles.topnavBrandMark}>HS</span>
          <span className={styles.topnavBrandName}>Hemant Sharma</span>
        </button>

        <nav className={`${styles.topnavLinks} ${menuOpen ? styles.open : ''}`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`${styles.topnavLink} ${activeSection === item.id ? styles.active : ''}`}
              onClick={() => goToSection(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </header>

      <div
        className={`${styles.topnavScrim} ${menuOpen ? styles.open : ''}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />
    </>
  )
}
