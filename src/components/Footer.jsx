import React, { useState } from 'react'
import styles from '../styles/Footer.module.css'

export default function Footer() {
  const [copied, setCopied] = useState(false)

  const handleEmailClick = () => {
    navigator.clipboard.writeText('sharmah677@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>

        {/* Big handwritten thanks title */}
        <div className={styles.thanksBlock}>
          <h2 className={styles.thanksTitle}>
            Thank you
            <svg className={styles.thanksUnderline} viewBox="0 0 420 22" preserveAspectRatio="none" aria-hidden="true">
              <path d="M6 12 C 90 2, 200 20, 300 10 S 400 2, 414 14"
                stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </h2>
          <h2 className={styles.thanksTitleTwo}>for scrolling</h2>
          <p className={styles.thanksNote}>that's the whole thing. if any of it stuck, say hi.</p>

          {/* Doodles row */}
          <div className={styles.doodleRow} aria-hidden="true">
            {/* Person with pen */}
            <svg viewBox="0 0 160 180" className={styles.doodlePerson}>
              <circle cx="80" cy="42" r="26" stroke="currentColor" strokeWidth="4" fill="none" />
              <circle cx="72" cy="40" r="2.2" fill="currentColor" />
              <circle cx="88" cy="40" r="2.2" fill="currentColor" />
              <path d="M70 52 Q 80 60 90 52" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
              <path d="M80 68 L 80 130" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              <path d="M80 82 C 100 78, 120 94, 128 112" stroke="currentColor" strokeWidth="4" strokeLinecap="round" fill="none" />
              <path d="M126 110 L 142 128" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              <path d="M80 85 C 60 92, 52 110, 50 120" stroke="currentColor" strokeWidth="4" strokeLinecap="round" fill="none" />
              <path d="M80 130 L 62 172" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              <path d="M80 130 L 100 172" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              <path d="M30 176 Q 80 170 140 178" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.5" />
            </svg>

            {/* Floating paper 1 */}
            <svg viewBox="0 0 80 100" className={`${styles.doodlePaper} ${styles.paperOne}`}>
              <path d="M8 10 L 70 6 L 74 92 L 10 94 Z" stroke="currentColor" strokeWidth="3" fill="#fff" strokeLinejoin="round" />
              <path d="M18 28 L 60 26 M 18 42 L 58 40 M 18 56 L 52 54 M 18 70 L 56 68" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>

            {/* Floating paper 2 */}
            <svg viewBox="0 0 80 100" className={`${styles.doodlePaper} ${styles.paperTwo}`}>
              <path d="M6 12 L 72 8 L 70 90 L 8 94 Z" stroke="currentColor" strokeWidth="3" fill="#fff" strokeLinejoin="round" />
              <path d="M16 30 L 56 28 M 16 44 L 60 42 M 16 58 L 50 56" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <circle cx="58" cy="76" r="8" stroke="currentColor" strokeWidth="2.5" fill="none" />
            </svg>

            {/* Star doodle */}
            <svg viewBox="0 0 60 60" className={styles.doodleStar}>
              <path d="M30 6 L 36 24 L 54 24 L 40 36 L 46 54 L 30 42 L 14 54 L 20 36 L 6 24 L 24 24 Z"
                stroke="currentColor" strokeWidth="3" fill="none" strokeLinejoin="round" />
            </svg>

            {/* Heart scribble */}
            <svg viewBox="0 0 60 60" className={styles.doodleHeart}>
              <path d="M30 50 C 10 36, 6 20, 18 14 C 24 11, 28 16, 30 20 C 32 16, 36 11, 42 14 C 54 20, 50 36, 30 50 Z"
                stroke="currentColor" strokeWidth="3" fill="none" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* Contact row — sketch chips */}
        <div className={styles.contactRow}>
          <button
            type="button"
            onClick={handleEmailClick}
            className={styles.contactChip}
            title="Copy email to clipboard"
          >
            <svg className={styles.chipFrame} viewBox="0 0 260 64" preserveAspectRatio="none" aria-hidden="true">
              <path d="M6 10 C 60 4, 180 2, 252 10 L 254 56 C 180 60, 60 58, 4 52 Z"
                stroke="currentColor" strokeWidth="2.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>{copied ? 'copied ✓' : 'sharmah677@gmail.com'}</span>
          </button>

          <a
            href="https://www.linkedin.com/in/hemant-sharma-71247a150/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactChip}
          >
            <svg className={styles.chipFrame} viewBox="0 0 160 64" preserveAspectRatio="none" aria-hidden="true">
              <path d="M6 10 C 40 4, 120 2, 154 8 L 156 56 C 120 60, 40 58, 4 52 Z"
                stroke="currentColor" strokeWidth="2.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>LinkedIn →</span>
          </a>

          <a
            href={`${import.meta.env.BASE_URL}Resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactChip}
          >
            <svg className={styles.chipFrame} viewBox="0 0 160 64" preserveAspectRatio="none" aria-hidden="true">
              <path d="M6 10 C 40 4, 120 2, 154 8 L 156 56 C 120 60, 40 58, 4 52 Z"
                stroke="currentColor" strokeWidth="2.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>Resume →</span>
          </a>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>drawn &amp; coded by Hemant · {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}
