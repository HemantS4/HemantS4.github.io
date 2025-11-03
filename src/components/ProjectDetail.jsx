import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { getProjectById, getAdjacentProjects } from '../data/projectsData'
import Sidebar from './Sidebar'
import { BarChart, ProgressBars, StatsGrid, DonutChart } from './ResearchCharts'
import Frame9WithGifs from './Frame9WithGifs'
import Frame10WithGifs from './Frame10WithGifs'
import '../styles/ProjectDetail.css'

export default function ProjectDetail() {
  const { projectId } = useParams()
  const navigate = useNavigate()
  const [project, setProject] = useState(null)
  const [adjacentProjects, setAdjacentProjects] = useState(null)
  const [selectedImage, setSelectedImage] = useState(null)
  const [selectedImageIndex, setSelectedImageIndex] = useState(null)
  const [activeSection, setActiveSection] = useState('projects')

  useEffect(() => {
    // Scroll to top when project changes
    window.scrollTo({ top: 0, behavior: 'smooth' })

    const projectData = getProjectById(projectId)
    if (!projectData) {
      navigate('/') // Redirect to home if project not found
      return
    }

    setProject(projectData)
    setAdjacentProjects(getAdjacentProjects(projectId))
    setSelectedImage(null)
    setSelectedImageIndex(null)
  }, [projectId, navigate])

  const openLightbox = (image, index) => {
    setSelectedImage(image)
    setSelectedImageIndex(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    setSelectedImageIndex(null)
  }

  const goToPreviousImage = () => {
    if (selectedImageIndex > 0) {
      const newIndex = selectedImageIndex - 1
      setSelectedImageIndex(newIndex)
      setSelectedImage(project.gallery[newIndex])
    }
  }

  const goToNextImage = () => {
    if (selectedImageIndex < project.gallery.length - 1) {
      const newIndex = selectedImageIndex + 1
      setSelectedImageIndex(newIndex)
      setSelectedImage(project.gallery[newIndex])
    }
  }

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!selectedImage) return

      if (e.key === 'Escape') {
        closeLightbox()
      } else if (e.key === 'ArrowLeft') {
        goToPreviousImage()
      } else if (e.key === 'ArrowRight') {
        goToNextImage()
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [selectedImage, selectedImageIndex])

  // Function to render markdown-style bold text
  const renderMarkdown = (text) => {
    if (!text) return null

    // Split by ** to handle bold text
    const parts = text.split(/(\*\*.*?\*\*)/g)

    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        // Remove ** and render as bold
        const boldText = part.slice(2, -2)
        return <strong key={index}>{boldText}</strong>
      }
      return <span key={index}>{part}</span>
    })
  }

  if (!project) {
    return <div className="loading">Loading project...</div>
  }

  return (
    <>
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Floating Lanterns for Spring Twilight */}
      {project.id === 'spring-twilight' && (
        <div className="floating-lanterns">
          <img src={`${import.meta.env.BASE_URL}images/projects/spring-twilight/Floating-Lantern.gif`} className="lantern lantern-1" alt="" />
          <img src={`${import.meta.env.BASE_URL}images/projects/spring-twilight/Floating-Lantern.gif`} className="lantern lantern-2" alt="" />
          <img src={`${import.meta.env.BASE_URL}images/projects/spring-twilight/Floating-Lantern.gif`} className="lantern lantern-3" alt="" />
          <img src={`${import.meta.env.BASE_URL}images/projects/spring-twilight/Floating-Lantern.gif`} className="lantern lantern-4" alt="" />
        </div>
      )}

      {/* Fixed Back Button Overlay */}
      <Link to="/" className="back-button">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Back to Portfolio
      </Link>

      <div className="project-detail">
        {/* Single Scrollable Container */}
        <div className={`project-content-scroll ${!project.overview ? 'image-only-layout' : ''}`}>
          {/* Hero Section */}
          <div className="project-hero-content">
            <div className="project-meta">
              <span className="project-category">{project.category}</span>
              <span className="project-year">{project.year}</span>
            </div>

            <h1 className="project-title-large">{project.title}</h1>
            <p className="project-tagline">{project.description}</p>

            <div className="project-tools-list">
              {project.tools.map((tool, index) => (
                <span key={index} className="tool-badge">{tool}</span>
              ))}
            </div>
          </div>

          {/* Video Showcase */}
          {project.videoUrl && (
            <div className="content-block video-block">
              <h2 className="block-title">Gameplay Video</h2>
              <div className="video-container">
                {project.videoUrl.includes('youtube.com') || project.videoUrl.includes('youtu.be') ? (
                  <iframe
                    src={project.videoUrl}
                    title={`${project.title} Video`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    referrerPolicy="strict-origin-when-cross-origin"
                  ></iframe>
                ) : (
                  <video
                    controls
                    preload="metadata"
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  >
                    <source src={project.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
            </div>
          )}

          {/* Quick Info Cards */}
          <div className="content-block info-cards-block">
            <div className="info-cards-inline">
              <div className="info-card-inline">
                <span className="info-label">Role</span>
                <span className="info-value">{project.role}</span>
              </div>
              <div className="info-card-inline">
                <span className="info-label">Duration</span>
                <span className="info-value">{project.duration}</span>
              </div>
              <div className="info-card-inline">
                <span className="info-label">Team Size</span>
                <span className="info-value">{project.teamSize}</span>
              </div>
              <div className="info-card-inline">
                <span className="info-label">Platform</span>
                <span className="info-value">{project.platform.join(', ')}</span>
              </div>
            </div>
          </div>

          {/* Overview */}
          {project.overview && (
            <div className="content-block text-block">
              <h2 className="block-title">Overview</h2>
              <p className="text-content">{project.overview}</p>
            </div>
          )}

          {/* Links */}
          {project.links && Object.keys(project.links).length > 0 && (
            <div className="content-block links-block">
              <div className="links-inline">
                {Object.entries(project.links).map(([platform, url]) => {
                  const isGDD = platform === 'gdd' || platform === 'conceptGdd' || platform === 'gameGdd';

                  let linkText;
                  if (platform === 'gdd') {
                    linkText = 'View Full Game Design Document';
                  } else if (platform === 'conceptGdd') {
                    linkText = 'View Concept & Research GDD';
                  } else if (platform === 'gameGdd') {
                    linkText = 'View Game Systems GDD';
                  } else {
                    linkText = platform.charAt(0).toUpperCase() + platform.slice(1).replace(/([A-Z])/g, ' $1');
                  }

                  return (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={isGDD ? 'link-button gdd-button' : 'link-button'}
                    >
                      {isGDD && (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                      {linkText}
                      {!isGDD && (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </a>
                  );
                })}
              </div>
            </div>
          )}

          {/* Research Data Visualizations */}
          {project.researchData && project.id !== 'flowlog' && (
            <div className="content-block research-block">
              <h2 className="block-title">Research & Insights</h2>

              {/* DP2 specific charts */}
              {project.id === 'dp2-motor-play' && (
                <>
                  <StatsGrid stats={project.researchData.keyMetrics} columns={3} />
                  <ProgressBars
                    data={project.researchData.researchFindings}
                    title="Key Findings from Field Research"
                  />
                </>
              )}
            </div>
          )}

          {/* Extended Sections with Images interspersed */}
          {project.extendedSections && project.extendedSections.length > 0 && (
            <>
              {project.extendedSections.map((section, index) => (
                <div
                  key={index}
                  className={`content-block ${section.content ? 'mixed-block' : 'image-banner-block'} ${section.backgroundGif ? 'gif-background-block' : ''}`}
                  style={section.backgroundGif ? {
                    backgroundImage: `url(${import.meta.env.BASE_URL}images/projects/${project.id.replace(/-/g, '-')}/${section.backgroundGif})`
                  } : {}}
                >
                  <h2 className="block-title">{section.title}</h2>
                  {section.content && (
                    <div className="text-content">{renderMarkdown(section.content)}</div>
                  )}
                  {section.image && (
                    <div className={`block-image ${section.image === 'Howitworks.png' ? 'small-image' : ''}`}>
                      <img
                        src={`${import.meta.env.BASE_URL}images/projects/${project.id.replace(/-/g, '-')}/${section.image}`}
                        alt={section.title}
                        onError={(e) => {
                          e.target.src = `https://via.placeholder.com/800x450/1a1a2e/ff7849?text=${encodeURIComponent(section.title)}`
                        }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </>
          )}

          {/* Features */}
          {project.features && project.features.length > 0 && (
            <div className="content-block features-block">
              <h2 className="block-title">Key Features</h2>
              <div className="features-list">
                {project.features.map((feature, index) => (
                  <div key={index} className="feature-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17L4 12" stroke="#ff7849" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Challenges */}
          {project.challenges && project.challenges.length > 0 && (
            <div className="content-block text-block">
              <h2 className="block-title">Challenges</h2>
              <ul className="styled-list challenges-list">
                {project.challenges.map((challenge, index) => (
                  <li key={index}>{challenge}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Solutions */}
          {project.solutions && project.solutions.length > 0 && (
            <div className="content-block text-block">
              <h2 className="block-title">Solutions</h2>
              <ul className="styled-list solutions-list">
                {project.solutions.map((solution, index) => (
                  <li key={index}>{solution}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Gallery Images interspersed */}
          {project.gallery && project.gallery.length > 0 && (
            <div className="content-block gallery-block">
              {project.overview && <h2 className="block-title">Gallery</h2>}
              {project.gallery.map((image, index) => {
                // Check if this is Frame 9 or Frame 10 in ammo-batics project
                const isFrame9 = project.id === 'ammo-batics' && image.includes('Frame 9.png')
                const isFrame10 = project.id === 'ammo-batics' && image.includes('Frame 10.png')

                if (isFrame9) {
                  return (
                    <div key={index} className="gallery-image-block">
                      <Frame9WithGifs />
                    </div>
                  )
                }

                if (isFrame10) {
                  return (
                    <div key={index} className="gallery-image-block">
                      <Frame10WithGifs />
                    </div>
                  )
                }

                return (
                  <div
                    key={index}
                    className="gallery-image-block"
                    onClick={project.overview ? () => openLightbox(image, index) : undefined}
                  >
                    <img
                      src={image}
                      alt={`${project.title} Screenshot ${index + 1}`}
                      onError={(e) => {
                        e.target.src = `https://via.placeholder.com/800x450/1a1a2e/ff7849?text=Screenshot+${index + 1}`
                      }}
                    />
                    {project.overview && <div className="image-caption">Click to enlarge</div>}
                  </div>
                )
              })}
            </div>
          )}
        </div>

      {/* Navigation to Other Projects */}
      {adjacentProjects && (
        <section className="project-navigation">
          <Link
            to={`/project/${adjacentProjects.previous.id}`}
            className="nav-project prev-project"
          >
            <img src={adjacentProjects.previous.thumbnail} alt={adjacentProjects.previous.title} className="nav-thumbnail" />
            <div className="nav-content">
              <span className="nav-label">Previous Project</span>
              <span className="nav-title">{adjacentProjects.previous.title}</span>
            </div>
          </Link>
          <Link
            to={`/project/${adjacentProjects.next.id}`}
            className="nav-project next-project"
          >
            <div className="nav-content">
              <span className="nav-label">Next Project</span>
              <span className="nav-title">{adjacentProjects.next.title}</span>
            </div>
            <img src={adjacentProjects.next.thumbnail} alt={adjacentProjects.next.title} className="nav-thumbnail" />
          </Link>
        </section>
      )}

      {/* Image Lightbox */}
      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Previous Button */}
            {selectedImageIndex > 0 && (
              <button className="lightbox-prev" onClick={goToPreviousImage}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            )}

            {/* Next Button */}
            {selectedImageIndex < project.gallery.length - 1 && (
              <button className="lightbox-next" onClick={goToNextImage}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            )}

            <img src={selectedImage} alt="Full size" />

            {/* Image Counter */}
            <div className="lightbox-counter">
              {selectedImageIndex + 1} / {project.gallery.length}
            </div>
          </div>
        </div>
      )}
      </div>
    </>
  )
}
