import React from 'react'
import styles from '../styles/Hero.module.css'

export default function Hero() {
  const scrollToProjects = () => {
    const el = document.getElementById('projects')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.heroInner}>
        {/* Left column — handwritten greeting, name, bio */}
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

        {/* Right column — stick-figure character */}
        <div className={styles.heroCharacter} aria-hidden="true">
          <svg viewBox="0 0 320 420" className={styles.stickFigure}>
            {/* Head */}
            <ellipse cx="170" cy="100" rx="78" ry="85" stroke="currentColor" strokeWidth="6" fill="none" />
            {/* Eyes */}
            <circle cx="148" cy="95" r="4.5" fill="currentColor" />
            <circle cx="196" cy="95" r="4.5" fill="currentColor" />
            {/* Smile */}
            <path d="M138 128 Q 170 152 202 128" stroke="currentColor" strokeWidth="5" fill="none" strokeLinecap="round" />
            {/* Body */}
            <path d="M170 185 L 170 310" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
            {/* Waving arm (right, holding a pen/stick) */}
            <path d="M170 215 C 200 190, 240 150, 260 115" stroke="currentColor" strokeWidth="6" strokeLinecap="round" fill="none" />
            <circle cx="262" cy="110" r="14" stroke="currentColor" strokeWidth="5" fill="none" />
            {/* Other arm (down/side) */}
            <path d="M170 220 C 140 250, 130 275, 118 288" stroke="currentColor" strokeWidth="6" strokeLinecap="round" fill="none" />
            {/* Legs */}
            <path d="M170 310 L 135 400" stroke="currentColor" strokeWidth="6" strokeLinecap="round" fill="none" />
            <path d="M170 310 L 210 400" stroke="currentColor" strokeWidth="6" strokeLinecap="round" fill="none" />
            {/* Ground squiggle */}
            <path d="M80 408 Q 160 400 260 410" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.5" />
          </svg>

          {/* floating "hi!" doodle near the waving hand */}
          <span className={styles.floatingHi}>hi!</span>
        </div>
      </div>
    </section>
  )
}
