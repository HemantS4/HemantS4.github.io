import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { getProjectById, getAdjacentProjects } from '../data/projectsData'
import Sidebar from './Sidebar'
import { BarChart, ProgressBars, StatsGrid, DonutChart } from './ResearchCharts'
import styles from '../styles/ProjectDetail.module.css'

export default function ProjectDetail() {
  const { projectId } = useParams()
  const navigate = useNavigate()
  const [project, setProject] = useState(null)
  const [adjacentProjects, setAdjacentProjects] = useState(null)
  const [selectedImage, setSelectedImage] = useState(null)
  const [selectedImageIndex, setSelectedImageIndex] = useState(null)
  const [currentGallery, setCurrentGallery] = useState(null)
  const [activeSection, setActiveSection] = useState('projects')

  useEffect(() => {
    // Scroll to top when project changes
    window.scrollTo({ top: 0, behavior: 'instant' })

    const projectData = getProjectById(projectId)
    if (!projectData) {
      navigate('/') // Redirect to home if project not found
      return
    }

    if (projectData.externalPage) {
      window.location.replace(projectData.externalPage)
      return
    }

    setProject(projectData)
    setAdjacentProjects(getAdjacentProjects(projectId))
    setSelectedImage(null)
    setSelectedImageIndex(null)
  }, [projectId, navigate])

  const openLightbox = (image, index, gallery = null) => {
    setSelectedImage(image)
    setSelectedImageIndex(index)
    setCurrentGallery(gallery || project.gallery)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    setSelectedImageIndex(null)
    setCurrentGallery(null)
  }

  const goToPreviousImage = () => {
    const gallery = currentGallery || project.gallery
    if (selectedImageIndex > 0) {
      const newIndex = selectedImageIndex - 1
      setSelectedImageIndex(newIndex)
      setSelectedImage(gallery[newIndex])
    }
  }

  const goToNextImage = () => {
    const gallery = currentGallery || project.gallery
    if (selectedImageIndex < gallery.length - 1) {
      const newIndex = selectedImageIndex + 1
      setSelectedImageIndex(newIndex)
      setSelectedImage(gallery[newIndex])
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
    return <div className={styles.loading}>Loading project...</div>
  }

  return (
    <>
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Floating Lanterns for Spring Twilight */}
      {project.id === 'spring-twilight' && (
        <div className={styles.floatingLanterns}>
          <img src={`${import.meta.env.BASE_URL}images/projects/spring-twilight/Floating-Lantern.gif`} className={`${styles.lantern} ${styles.lantern1}`} alt="" />
          <img src={`${import.meta.env.BASE_URL}images/projects/spring-twilight/Floating-Lantern.gif`} className={`${styles.lantern} ${styles.lantern2}`} alt="" />
          <img src={`${import.meta.env.BASE_URL}images/projects/spring-twilight/Floating-Lantern.gif`} className={`${styles.lantern} ${styles.lantern3}`} alt="" />
          <img src={`${import.meta.env.BASE_URL}images/projects/spring-twilight/Floating-Lantern.gif`} className={`${styles.lantern} ${styles.lantern4}`} alt="" />
        </div>
      )}

      {/* Back to Portfolio — matches the standalone HTML project pages
          (pico-play, momentum, flow-and-hold): amber bullet + label,
          no capsule background. */}
      <Link to="/" className={styles.backButton}>
        <span className={styles.backButtonBullet} aria-hidden="true"></span>
        Back to Portfolio
      </Link>

      <div className={styles.projectDetail}>
        {/* Single Scrollable Container */}
        <div className={`${styles.projectContentScroll} ${!project.overview ? styles.imageOnlyLayout : ''}`}>
          {/* Hero Section */}
          <div className={styles.projectHeroContent}>
            <div className={styles.projectMeta}>
              <span className={styles.projectCategory}>{project.category}</span>
              <span className={styles.projectYear}>{project.year}</span>
            </div>

            <h1 className={styles.projectTitleLarge}>{project.title}</h1>
            <p className={styles.projectTagline}>{project.description}</p>

            <div className={styles.projectToolsList}>
              {project.tools.map((tool, index) => (
                <span key={index} className={styles.toolBadge}>{tool}</span>
              ))}
            </div>
          </div>

          {/* Video Showcase */}
          {project.videoUrl && (
            <div className={`${styles.contentBlock} ${styles.videoBlock}`}>
              <h2 className={styles.blockTitle}>Gameplay Video</h2>
              <div className={styles.videoContainer}>
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
          <div className={styles.contentBlock}>
            <div className={styles.infoCardsInline}>
              <div className={styles.infoCardInline}>
                <span className={styles.infoLabel}>Role</span>
                <span className={styles.infoValue}>{project.role}</span>
              </div>
              <div className={styles.infoCardInline}>
                <span className={styles.infoLabel}>Duration</span>
                <span className={styles.infoValue}>{project.duration}</span>
              </div>
              <div className={styles.infoCardInline}>
                <span className={styles.infoLabel}>Team Size</span>
                <span className={styles.infoValue}>{project.teamSize}</span>
              </div>
              <div className={styles.infoCardInline}>
                <span className={styles.infoLabel}>Platform</span>
                <span className={styles.infoValue}>{project.platform.join(', ')}</span>
              </div>
            </div>
          </div>

          {/* Overview */}
          {project.overview && (
            <div className={`${styles.contentBlock} ${styles.textBlock}`}>
              <h2 className={styles.blockTitle}>Overview</h2>
              <p className={styles.textContent}>{project.overview}</p>
            </div>
          )}

          {/* Links */}
          {project.links && Object.keys(project.links).length > 0 && (
            <div className={`${styles.contentBlock} ${styles.linksBlock}`}>
              <div className={styles.linksInline}>
                {Object.entries(project.links).map(([platform, url]) => {
                  const isGDD = platform === 'gdd' || platform === 'conceptGdd' || platform === 'gameGdd';
                  const isPPT = platform === 'ppt';
                  const isDocument = isGDD || isPPT;

                  let linkText;
                  if (platform === 'gdd') {
                    linkText = 'View Full Game Design Document';
                  } else if (platform === 'conceptGdd') {
                    linkText = 'View Concept & Research GDD';
                  } else if (platform === 'gameGdd') {
                    linkText = 'View Game Systems GDD';
                  } else if (platform === 'ppt') {
                    linkText = 'Packless - PPT';
                  } else {
                    linkText = platform.charAt(0).toUpperCase() + platform.slice(1).replace(/([A-Z])/g, ' $1');
                  }

                  return (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={isDocument ? 'link-button gdd-button' : 'link-button'}
                    >
                      {isDocument && (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                      {linkText}
                      {!isDocument && (
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
            <div className={`${styles.contentBlock} ${styles.researchBlock}`}>
              <h2 className={styles.blockTitle}>Research & Insights</h2>

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

          {/* Extended Sections with Images Side-by-Side */}
          {project.extendedSections && project.extendedSections.length > 0 && (
            <>
              {project.extendedSections.map((section, index) => (
                <div
                  key={index}
                  className={`${styles.contentBlock} ${styles.extendedSection} ${section.image ? styles.hasImage : ''} ${section.backgroundGif ? styles.gifBackgroundBlock : ''}`}
                  style={section.backgroundGif ? {
                    backgroundImage: `url(${import.meta.env.BASE_URL}images/projects/${project.id.replace(/-/g, '-')}/${section.backgroundGif})`
                  } : {}}
                >
                  <h2 className={styles.blockTitle}>{section.title}</h2>
                  {section.image ? (
                    <div className={styles.sectionContentGrid}>
                      <div className={styles.sectionText}>
                        {section.content && (
                          <div className={styles.textContent}>{renderMarkdown(section.content)}</div>
                        )}
                      </div>
                      <div className={styles.sectionImage}>
                        <div className={`${styles.blockImage} ${section.image === 'Howitworks.png' ? styles.smallImage : ''}`}>
                          <img
                            src={`${import.meta.env.BASE_URL}images/projects/${project.id.replace(/-/g, '-')}/${section.image}`}
                            alt={section.title}
                            onError={(e) => {
                              e.target.src = `https://via.placeholder.com/800x450/1a1a2e/ff7849?text=${encodeURIComponent(section.title)}`
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <>
                      {section.content && (
                        <div className={styles.textContent}>{renderMarkdown(section.content)}</div>
                      )}
                    </>
                  )}
                  {section.images && section.images.length > 0 && (
                    <div>
                      {section.images.map((image, imgIndex) => (
                        <div
                          key={imgIndex}
                          className={styles.galleryImageBlock}
                          onClick={() => openLightbox(image, imgIndex, section.images)}
                        >
                          <img
                            src={image}
                            alt={`${section.title} ${imgIndex + 1}`}
                            onError={(e) => {
                              e.target.src = `https://via.placeholder.com/800x450/1a1a2e/ff7849?text=Image+${imgIndex + 1}`
                            }}
                          />
                          <div className={styles.imageCaption}>Click to enlarge</div>
                        </div>
                      ))}
                    </div>
                  )}
                  {section.video && (
                    <div className={styles.videoContainer}>
                      <video
                        controls
                        preload="metadata"
                        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                      >
                        <source src={section.video} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  )}
                </div>
              ))}
            </>
          )}

          {/* Features */}
          {project.features && project.features.length > 0 && (
            <div className={styles.contentBlock}>
              <h2 className={styles.blockTitle}>Key Features</h2>
              <div className={styles.featuresList}>
                {project.features.map((feature, index) => (
                  <div key={index} className={styles.featureItem}>
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
            <div className={`${styles.contentBlock} ${styles.textBlock}`}>
              <h2 className={styles.blockTitle}>Challenges</h2>
              <ul className={`${styles.styledList} ${styles.challengesList}`}>
                {project.challenges.map((challenge, index) => (
                  <li key={index}>{challenge}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Solutions */}
          {project.solutions && project.solutions.length > 0 && (
            <div className={`${styles.contentBlock} ${styles.textBlock}`}>
              <h2 className={styles.blockTitle}>Solutions</h2>
              <ul className={`${styles.styledList} ${styles.solutionsList}`}>
                {project.solutions.map((solution, index) => (
                  <li key={index}>{solution}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Gallery Images interspersed */}
          {project.gallery && project.gallery.length > 0 && (
            <div className={`${styles.contentBlock} ${styles.galleryBlock}`}>
              {project.overview && <h2 className={styles.blockTitle}>Gallery</h2>}
              {project.gallery.map((image, index) => (
                <div
                  key={index}
                  className={styles.galleryImageBlock}
                  onClick={project.overview ? () => openLightbox(image, index) : undefined}
                >
                  <img
                    src={image}
                    alt={`${project.title} Screenshot ${index + 1}`}
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/800x450/1a1a2e/ff7849?text=Screenshot+${index + 1}`
                    }}
                  />
                  {project.overview && <div className={styles.imageCaption}>Click to enlarge</div>}
                </div>
              ))}
            </div>
          )}
        </div>

      {/* Navigation to Other Projects */}
      {adjacentProjects && (
        <section className={styles.projectNavigation}>
          <Link
            to={`/project/${adjacentProjects.previous.id}`}
            className={`${styles.navProject} ${styles.prevProject}`}
          >
            <img src={adjacentProjects.previous.thumbnail} alt={adjacentProjects.previous.title} className={styles.navThumbnail} />
            <div className={styles.navContent}>
              <span className={styles.navLabel}>Previous Project</span>
              <span className={styles.navTitle}>{adjacentProjects.previous.title}</span>
            </div>
          </Link>
          <Link
            to={`/project/${adjacentProjects.next.id}`}
            className={styles.navProject}
          >
            <div className={styles.navContent}>
              <span className={styles.navLabel}>Next Project</span>
              <span className={styles.navTitle}>{adjacentProjects.next.title}</span>
            </div>
            <img src={adjacentProjects.next.thumbnail} alt={adjacentProjects.next.title} className={styles.navThumbnail} />
          </Link>
        </section>
      )}

      {/* Image Lightbox */}
      {selectedImage && (
        <div className={styles.lightbox} onClick={closeLightbox}>
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.lightboxClose} onClick={closeLightbox}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Previous Button */}
            {selectedImageIndex > 0 && (
              <button className={styles.lightboxPrev} onClick={goToPreviousImage}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            )}

            {/* Next Button */}
            {selectedImageIndex < (currentGallery || project.gallery).length - 1 && (
              <button className={styles.lightboxNext} onClick={goToNextImage}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            )}

            {/* Clickable image areas for navigation */}
            <div className={styles.lightboxImageWrapper}>
              {/* Left click area */}
              {selectedImageIndex > 0 && (
                <div
                  className={`${styles.lightboxNavArea} ${styles.left}`}
                  onClick={goToPreviousImage}
                  title="Previous image"
                />
              )}

              {/* Right click area */}
              {selectedImageIndex < (currentGallery || project.gallery).length - 1 && (
                <div
                  className={`${styles.lightboxNavArea} ${styles.right}`}
                  onClick={goToNextImage}
                  title="Next image"
                />
              )}

              <img src={selectedImage} alt="Full size" />
            </div>

            {/* Image Counter */}
            <div className={styles.lightboxCounter}>
              {selectedImageIndex + 1} / {(currentGallery || project.gallery).length}
            </div>
          </div>
        </div>
      )}
      </div>
    </>
  )
}
