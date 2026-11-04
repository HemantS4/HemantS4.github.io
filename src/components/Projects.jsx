import React, { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { projectsData } from '../data/projectsData'
import styles from '../styles/Projects.module.css'

// Rough bucketing from project.category text — keeps data untouched.
function bucket(category = '') {
  const c = category.toLowerCase()
  if (c.includes('game') || c.includes('indie') || c.includes('card game')) return 'games'
  if (c.includes('artwork') || c.includes('art')) return 'art'
  return 'ux'
}

const FILTERS = [
  { id: 'all',   label: 'all'      },
  { id: 'ux',    label: 'UX / UI'  },
  { id: 'games', label: 'games'    },
]

export default function Projects() {
  const navigate = useNavigate()
  const [active, setActive] = useState('all')

  const openProject = (project) => {
    if (project.externalPage) {
      window.location.href = project.externalPage
    } else {
      navigate(`/project/${project.id}`)
    }
  }

  const visible = useMemo(() => {
    const base = projectsData.filter((p) => !p.isHidden)
    if (active === 'all') return base
    return base.filter((p) => bucket(p.category) === active)
  }, [active])

  // Small per-card rotation so the grid feels hand-placed, not CSS-grid-stiff.
  const rotations = ['-0.8deg', '0.5deg', '-0.3deg', '0.9deg', '-0.6deg', '0.4deg']

  return (
    <section id="projects" className={styles.projectsSection}>
      {/* Section header */}
      <div className={styles.sectionHead}>
        <p className={styles.eyebrow}>my work</p>
        <h2 className={styles.title}>
          projects
          <svg className={styles.titleUnderline} viewBox="0 0 320 22" preserveAspectRatio="none" aria-hidden="true">
            <path d="M6 12 C 70 2, 150 20, 220 10 S 300 2, 316 14"
              stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
        </h2>
        <p className={styles.subtitle}>a mix of UX/UI case studies and games I kept finishing.</p>
      </div>

      {/* Filter pills */}
      <div className={styles.filterRow} role="tablist" aria-label="Filter projects">
        {FILTERS.map((f) => {
          const isActive = active === f.id
          return (
            <button
              key={f.id}
              role="tab"
              aria-selected={isActive}
              className={`${styles.filterPill} ${isActive ? styles.filterPillActive : ''}`}
              onClick={() => setActive(f.id)}
              type="button"
            >
              <svg className={styles.filterFrame} viewBox="0 0 160 52" preserveAspectRatio="none" aria-hidden="true">
                <path d="M6 10 C 40 4, 100 2, 154 8 L 156 46 C 110 50, 50 48, 4 44 Z"
                  stroke="currentColor" strokeWidth="2.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>{f.label}</span>
            </button>
          )
        })}
      </div>

      {/* Project grid */}
      <div className={styles.projectsGrid}>
        {visible.map((project, i) => (
          <article
            key={project.id}
            className={styles.projectCard}
            style={{ '--card-rotate': rotations[i % rotations.length] }}
          >
            {/* Handwritten name above */}
            <h3 className={styles.projectName}>
              {project.title}
            </h3>

            {/* Framed image */}
            <div className={styles.frameWrap}>
              <svg className={styles.frameStroke} viewBox="0 0 400 300" preserveAspectRatio="none" aria-hidden="true">
                <path d="M8 10 L 394 6 L 396 294 L 6 290 Z"
                  stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <button
                type="button"
                className={styles.imageBtn}
                onClick={() => openProject(project)}
                aria-label={`Open ${project.title}`}
              >
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/600x400/FFFFFF/141414?text=${encodeURIComponent(project.title)}`
                  }}
                />
                {/* Hover pointer-doodle */}
                <span className={styles.pointerDoodle} aria-hidden="true">
                  <svg viewBox="0 0 48 48">
                    <path d="M18 8 L 18 28 L 12 24 L 22 42 L 28 40 L 22 28 L 32 28 Z"
                      fill="#fff" stroke="#141414" strokeWidth="2.5" strokeLinejoin="round" />
                  </svg>
                </span>
              </button>
            </div>

            {/* Meta + view-project sketch button */}
            <div className={styles.projectFoot}>
              <p className={styles.projectBlurb}>
                {project.shortDescription || project.description}
              </p>
              <button
                type="button"
                className={styles.viewProjectBtn}
                onClick={() => openProject(project)}
              >
                <svg className={styles.viewProjectFrame} viewBox="0 0 220 56" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M6 10 C 50 4, 120 2, 212 8 L 214 50 C 150 54, 60 52, 4 48 Z"
                    stroke="currentColor" strokeWidth="2.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>view project</span>
                <svg width="20" height="14" viewBox="0 0 24 14" aria-hidden="true">
                  <path d="M2 7 L18 7 M12 1 L20 7 L12 13" stroke="currentColor" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Artwork link — kept as a quieter inline link in the sketch style */}
      <div className={styles.artworkRow}>
        <button
          type="button"
          className={styles.artworkLink}
          onClick={() => navigate('/project/artwork')}
        >
          or see the artwork &rarr;
        </button>
      </div>
    </section>
  )
}
