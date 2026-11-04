import React, { useEffect, useRef, useState } from 'react'
import styles from '../styles/Hero.module.css'

export default function Hero() {
  const scrollToProjects = () => {
    const el = document.getElementById('projects')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  // Eyes follow cursor
  const headRef = useRef(null)
  const [pupil, setPupil] = useState({ lx: 0, ly: 0, rx: 0, ry: 0 })

  useEffect(() => {
    const handle = (e) => {
      const head = headRef.current
      if (!head) return
      const rect = head.getBoundingClientRect()
      // Eye centers in SVG coords: left (148,95), right (196,95); svg is 320x420
      const cxL = rect.left + (148 / 320) * rect.width
      const cyL = rect.top  + (95  / 420) * rect.height
      const cxR = rect.left + (196 / 320) * rect.width
      const cyR = rect.top  + (95  / 420) * rect.height
      const maxShift = 3 // in svg units
      const shift = (cx, cy) => {
        const dx = e.clientX - cx
        const dy = e.clientY - cy
        const dist = Math.hypot(dx, dy) || 1
        return {
          x: (dx / dist) * maxShift,
          y: (dy / dist) * maxShift,
        }
      }
      const l = shift(cxL, cyL)
      const r = shift(cxR, cyR)
      setPupil({ lx: l.x, ly: l.y, rx: r.x, ry: r.y })
    }
    window.addEventListener('pointermove', handle)
    return () => window.removeEventListener('pointermove', handle)
  }, [])

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.heroInner}>
        <div className={styles.heroText}>
          <p className={styles.heroHi}>hi,</p>
          <h1 className={styles.heroName}>
            I&rsquo;m Hemant
            <svg className={styles.nameUnderline} viewBox="0 0 400 24" preserveAspectRatio="none" aria-hidden="true">
              <path d="M6 14 C 70 4, 150 22, 230 10 S 360 2, 396 16"
                stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </h1>

          <div className={styles.heroBio}>
            <p>Biologist turned game &amp; UX designer.</p>
            <p>I draw systems, pick the one that breaks the least,</p>
            <p>and build until someone else can use it.</p>
            <p className={styles.heroBioFaint}>Based in Bangalore. Open to UX/UI and product roles.</p>
          </div>

          <div className={styles.heroCtaRow}>
            <button type="button" className={styles.sketchBtn} onClick={scrollToProjects}>
              <svg className={styles.sketchBtnFrame} viewBox="0 0 220 60" preserveAspectRatio="none" aria-hidden="true">
                <path d="M6 10 C 50 4, 120 2, 212 8 L 214 54 C 150 58, 60 56, 4 52 Z"
                  stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>view my work</span>
              <svg width="20" height="14" viewBox="0 0 24 14" aria-hidden="true">
                <path d="M2 7 L18 7 M12 1 L20 7 L12 13" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <a className={styles.heroInkLink} href="#contact">
              or just say hi &rarr;
            </a>
          </div>
        </div>

        <div className={styles.heroCharacter} aria-hidden="true">
          <svg viewBox="0 0 320 420" className={styles.stickFigure} ref={headRef}>
            {/* Head */}
            <ellipse cx="170" cy="100" rx="78" ry="85" stroke="currentColor" strokeWidth="6" fill="#fff" />

            {/* Eye whites */}
            <circle cx="148" cy="95" r="9" fill="#fff" stroke="currentColor" strokeWidth="2" />
            <circle cx="196" cy="95" r="9" fill="#fff" stroke="currentColor" strokeWidth="2" />
            {/* Pupils — follow cursor */}
            <circle cx={148 + pupil.lx} cy={95 + pupil.ly} r="3.5" fill="currentColor" />
            <circle cx={196 + pupil.rx} cy={95 + pupil.ry} r="3.5" fill="currentColor" />

            {/* Smile */}
            <path d="M138 128 Q 170 152 202 128" stroke="currentColor" strokeWidth="5" fill="none" strokeLinecap="round" />

            {/* Body */}
            <path d="M170 185 L 170 310" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />

            {/* Waving arm — animated via CSS transform-origin at shoulder */}
            <g className={styles.wavingArm} style={{ transformOrigin: '170px 215px' }}>
              <path d="M170 215 C 200 190, 240 150, 260 115" stroke="currentColor" strokeWidth="6" strokeLinecap="round" fill="none" />
              <circle cx="262" cy="110" r="14" stroke="currentColor" strokeWidth="5" fill="#fff" />
            </g>

            {/* Other arm */}
            <path d="M170 220 C 140 250, 130 275, 118 288" stroke="currentColor" strokeWidth="6" strokeLinecap="round" fill="none" />

            {/* Legs */}
            <path d="M170 310 L 135 400" stroke="currentColor" strokeWidth="6" strokeLinecap="round" fill="none" />
            <path d="M170 310 L 210 400" stroke="currentColor" strokeWidth="6" strokeLinecap="round" fill="none" />

            {/* Ground squiggle */}
            <path d="M80 408 Q 160 400 260 410" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.5" />
          </svg>

          <span className={styles.floatingHi}>hi!</span>
        </div>
      </div>
    </section>
  )
}
