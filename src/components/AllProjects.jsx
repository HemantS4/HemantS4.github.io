import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { projectsData } from '../data/projectsData'
import Sidebar from './Sidebar'
import '../styles/AllProjects.css'

export default function AllProjects() {
  const [activeSection, setActiveSection] = useState('projects')
  const [filter, setFilter] = useState('all')
  const [selectedArtwork, setSelectedArtwork] = useState(null)
  const [selectedArtworkIndex, setSelectedArtworkIndex] = useState(null)

  const categories = ['all', ...new Set(projectsData.map(p => p.category))]

  const filteredProjects = filter === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === filter)

  // Artwork images and videos
  const artworks = [
    { id: 1, src: `${import.meta.env.BASE_URL}images/artworks/1.png`, alt: 'Digital Art', type: 'image' },
    { id: 2, src: `${import.meta.env.BASE_URL}images/artworks/3.jpg`, alt: 'Character Design', type: 'image' },
    { id: 3, src: `${import.meta.env.BASE_URL}images/artworks/camera2.jpg`, alt: 'Camera Study', type: 'image' },
    { id: 4, src: `${import.meta.env.BASE_URL}images/artworks/POT.png`, alt: 'POT Artwork', type: 'image' },
    { id: 5, src: `${import.meta.env.BASE_URL}images/artworks/Screenshot 2024-03-31 150415.png`, alt: 'Digital Illustration', type: 'image' },
    { id: 6, src: `${import.meta.env.BASE_URL}images/artworks/Screenshot 2025-08-10 205226.png`, alt: 'Game Art', type: 'image' },
    { id: 7, src: `${import.meta.env.BASE_URL}images/artworks/Untitled_Artwork (12).png`, alt: 'Untitled Artwork 12', type: 'image' },
    { id: 8, src: `${import.meta.env.BASE_URL}images/artworks/Untitled_Artwork(7).png`, alt: 'Untitled Artwork 7', type: 'image' },
    { id: 9, src: `${import.meta.env.BASE_URL}images/artworks/Untitled_Artwork(8).png`, alt: 'Untitled Artwork 8', type: 'image' },
    { id: 10, src: `${import.meta.env.BASE_URL}images/artworks/whale1.png`, alt: 'Whale Artwork 1', type: 'image' },
    { id: 11, src: `${import.meta.env.BASE_URL}images/artworks/Whale2.png`, alt: 'Whale Artwork 2', type: 'image' },
    { id: 12, src: `${import.meta.env.BASE_URL}images/artworks/Untitled_Artwork.png`, alt: 'Untitled Artwork', type: 'image' },
    { id: 13, src: `${import.meta.env.BASE_URL}images/artworks/Untitled_Artwork(1).png`, alt: 'Untitled Artwork 1', type: 'image' },
    { id: 14, src: `${import.meta.env.BASE_URL}images/artworks/Untitled_Artwork(2).png`, alt: 'Untitled Artwork 2', type: 'image' },
    { id: 15, src: `${import.meta.env.BASE_URL}images/artworks/Untitled_Artwork(3).png`, alt: 'Untitled Artwork 3', type: 'image' },
    { id: 16, src: `${import.meta.env.BASE_URL}images/artworks/0000-0480.mp4`, alt: 'Animation Demo', type: 'video' }
  ]

  const goToPreviousArtwork = () => {
    if (selectedArtworkIndex > 0) {
      const newIndex = selectedArtworkIndex - 1
      setSelectedArtworkIndex(newIndex)
      setSelectedArtwork(artworks[newIndex])
    }
  }

  const goToNextArtwork = () => {
    if (selectedArtworkIndex < artworks.length - 1) {
      const newIndex = selectedArtworkIndex + 1
      setSelectedArtworkIndex(newIndex)
      setSelectedArtwork(artworks[newIndex])
    }
  }

  const closeArtworkLightbox = () => {
    setSelectedArtwork(null)
    setSelectedArtworkIndex(null)
  }

  // Keyboard navigation for artwork lightbox
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!selectedArtwork) return

      if (e.key === 'Escape') {
        closeArtworkLightbox()
      } else if (e.key === 'ArrowLeft') {
        goToPreviousArtwork()
      } else if (e.key === 'ArrowRight') {
        goToNextArtwork()
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [selectedArtwork, selectedArtworkIndex])

  return (
    <>
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Back Button */}
      <Link to="/" className="back-button">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Back to Home
      </Link>

      <div className="all-projects-page">
        <div className="all-projects-header">
          <h1 className="all-projects-title">All Projects</h1>
          <p className="all-projects-subtitle">Explore my complete portfolio of game design work</p>

          {/* Filter Tabs */}
          <div className="filter-tabs">
            {categories.map(cat => (
              <button
                key={cat}
                className={`filter-tab ${filter === cat ? 'active' : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat === 'all' ? 'All Projects' : cat}
              </button>
            ))}
          </div>
        </div>

        <div className="all-projects-grid">
          {filteredProjects.map((project, index) => (
            project.externalPage ? (
            <a
              key={project.id}
              href={project.externalPage}
              className="all-project-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="all-project-image">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/600x400/1a1a2e/ff7849?text=${encodeURIComponent(project.title)}`
                  }}
                />
                <div className="all-project-overlay">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="view-icon">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              <div className="all-project-info">
                <div className="all-project-meta">
                  <span className="all-project-category">{project.category}</span>
                  <span className="all-project-year">{project.year}</span>
                </div>
                <h3 className="all-project-title">{project.title}</h3>
                <p className="all-project-description">{project.shortDescription || project.description}</p>

                <div className="all-project-tools">
                  {project.tools.slice(0, 3).map((tool, i) => (
                    <span key={i} className="all-tool-tag">{tool}</span>
                  ))}
                  {project.tools.length > 3 && (
                    <span className="all-tool-tag more">+{project.tools.length - 3}</span>
                  )}
                </div>
              </div>
            </a>
            ) : (
            <Link
              key={project.id}
              to={`/project/${project.id}`}
              className="all-project-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="all-project-image">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/600x400/1a1a2e/ff7849?text=${encodeURIComponent(project.title)}`
                  }}
                />
                <div className="all-project-overlay">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="view-icon">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              <div className="all-project-info">
                <div className="all-project-meta">
                  <span className="all-project-category">{project.category}</span>
                  <span className="all-project-year">{project.year}</span>
                </div>
                <h3 className="all-project-title">{project.title}</h3>
                <p className="all-project-description">{project.shortDescription || project.description}</p>

                <div className="all-project-tools">
                  {project.tools.slice(0, 3).map((tool, i) => (
                    <span key={i} className="all-tool-tag">{tool}</span>
                  ))}
                  {project.tools.length > 3 && (
                    <span className="all-tool-tag more">+{project.tools.length - 3}</span>
                  )}
                </div>
              </div>
            </Link>
            )
          ))}
        </div>

        {/* Artworks Section */}
        <div className="artworks-section">
          <div className="artworks-header">
            <h2 className="artworks-title">Artworks</h2>
            <p className="artworks-subtitle">Visual explorations and creative work</p>
          </div>

          <div className="artworks-grid">
            {artworks.map((artwork, index) => (
              <div
                key={artwork.id}
                className="artwork-item"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => {
                  setSelectedArtwork(artwork)
                  setSelectedArtworkIndex(index)
                }}
              >
                {artwork.type === 'video' ? (
                  <video
                    src={artwork.src}
                    muted
                    loop
                    playsInline
                    onError={(e) => {
                      e.target.style.display = 'none'
                    }}
                  />
                ) : (
                  <img
                    src={artwork.src}
                    alt={artwork.alt}
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/600x600/1a1a2e/ff7849?text=Artwork+${artwork.id}`
                    }}
                  />
                )}
                <div className="artwork-overlay">
                  {artwork.type === 'video' ? (
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                      <path d="M10 8l6 4-6 4V8z" fill="currentColor"/>
                    </svg>
                  ) : (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                      <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Artwork Lightbox */}
        {selectedArtwork && (
          <div className="artwork-lightbox" onClick={closeArtworkLightbox}>
            <div className="artwork-lightbox-content" onClick={(e) => e.stopPropagation()}>
              <button className="artwork-close" onClick={closeArtworkLightbox}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {/* Previous Button */}
              {selectedArtworkIndex > 0 && (
                <button className="artwork-prev" onClick={goToPreviousArtwork}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              )}

              {/* Next Button */}
              {selectedArtworkIndex < artworks.length - 1 && (
                <button className="artwork-next" onClick={goToNextArtwork}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              )}

              {selectedArtwork.type === 'video' ? (
                <video
                  src={selectedArtwork.src}
                  controls
                  autoPlay
                  loop
                  style={{ maxWidth: '90vw', maxHeight: '85vh', width: 'auto', height: 'auto' }}
                />
              ) : (
                <img src={selectedArtwork.src} alt={selectedArtwork.alt} />
              )}

              {/* Image Counter */}
              <div className="artwork-counter">
                {selectedArtworkIndex + 1} / {artworks.length}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
