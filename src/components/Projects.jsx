import React from 'react'
import { useNavigate } from 'react-router-dom'
import { projectsData } from '../data/projectsData'
import styles from '../styles/Projects.module.css'

export default function Projects() {
  const navigate = useNavigate()
  const projects = projectsData.filter((p) => !p.isHidden)

  const openProject = (project) => {
    if (project.externalPage) {
      window.location.href = project.externalPage
    } else {
      navigate(`/project/${project.id}`)
    }
  }

  return (
    <section id="projects" className="projects">
      <div className="section-header">
        <p className="section-eyebrow">Portfolio</p>
        <h2 className="section-title">Latest Projects</h2>
        <p className="section-subtitle">A selection of work in game design, UX research, and product</p>
      </div>

      <div className={styles.projectsGrid}>
        {projects.map((project) => (
          <button
            type="button"
            key={project.id}
            className={styles.projectCard}
            onClick={() => openProject(project)}
          >
            <div className={styles.projectImage}>
              <img
                src={project.thumbnail}
                alt={project.title}
                loading="lazy"
                onError={(e) => {
                  e.target.src = `https://via.placeholder.com/600x400/FBF3E7/20232B?text=${encodeURIComponent(project.title)}`
                }}
              />
            </div>
            <div className={styles.projectInfo}>
              <div className={styles.projectMetaRow}>
                <span className={styles.projectCategory}>{project.category}</span>
                <span className={styles.projectYear}>{project.year}</span>
              </div>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectBlurb}>{project.shortDescription || project.description}</p>
              <div className={styles.projectTools}>
                {project.tools.slice(0, 4).map((tool, i) => (
                  <span key={i} className={styles.toolTag}>{tool}</span>
                ))}
                {project.tools.length > 4 && (
                  <span className={`${styles.toolTag} ${styles.more}`}>+{project.tools.length - 4}</span>
                )}
              </div>
            </div>
          </button>
        ))}
      </div>

      <div className={styles.viewArtworkContainer}>
        <button
          type="button"
          className={styles.viewArtworkBtn}
          onClick={() => navigate('/project/artwork')}
        >
          <span>View Artwork</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </section>
  )
}
