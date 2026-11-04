import React from 'react'
import styles from '../styles/Hero.module.css'

const BASE_URL = import.meta.env.BASE_URL

export default function Hero() {
  const scrollToProjects = () => {
    const el = document.getElementById('projects')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

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

        {/* Cut-out photo floating with sketch doodles */}
        <div className={styles.heroCharacter}>
          <div className={styles.photoWrap}>
            <img
              src={`${BASE_URL}ME1.png`}
              alt="Hemant Sharma"
              className={styles.photo}
              onError={(e) => { e.currentTarget.style.visibility = 'hidden' }}
            />
            {/* Doodles around the cutout */}
            <svg className={styles.photoDoodleArrow} viewBox="0 0 120 80" aria-hidden="true">
              <path d="M8 40 C 40 10, 80 60, 112 24" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
              <path d="M108 16 L 112 24 L 104 28" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className={styles.photoCallout}>that&rsquo;s me</span>
            <svg className={styles.photoStar} viewBox="0 0 60 60" aria-hidden="true">
              <path d="M30 6 L 36 24 L 54 24 L 40 36 L 46 54 L 30 42 L 14 54 L 20 36 L 6 24 L 24 24 Z"
                stroke="currentColor" strokeWidth="3" fill="none" strokeLinejoin="round" />
            </svg>
            <svg className={styles.photoScribble} viewBox="0 0 220 60" aria-hidden="true">
              <path d="M10 42 C 50 10, 110 58, 160 20 S 210 48, 214 36"
                stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
