import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { projectsData } from '../data/projectsData'

export default function Projects({ scrollProgress }) {
  const navigate = useNavigate()
  const [hoveredProject, setHoveredProject] = useState(null)
  const [selectedProject, setSelectedProject] = useState(null)
  const [globalTilt, setGlobalTilt] = useState({ x: 0, y: 0 })
  const [isMobile, setIsMobile] = useState(false)
  const [glowingProject, setGlowingProject] = useState(null)
  const projectsRef = useRef(null)

  // Detect mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Global mouse tracking for synchronized tilt with distance factor
  useEffect(() => {
    const handleGlobalMouseMove = (e) => {
      if (projectsRef.current) {
        const rect = projectsRef.current.getBoundingClientRect()
        const mouseX = e.clientX - rect.left
        const mouseY = e.clientY - rect.top

        // Check if cursor is within the projects section bounds
        const isInsideSection = mouseX >= 0 && mouseX <= rect.width &&
                                mouseY >= 0 && mouseY <= rect.height

        if (isInsideSection) {
          // Normalize to 0-1 range
          const normalizedX = mouseX / rect.width
          const normalizedY = mouseY / rect.height

          setGlobalTilt({
            mouseX: normalizedX,
            mouseY: normalizedY,
            baseTiltX: (normalizedY - 0.5) * -20,
            baseTiltY: (normalizedX - 0.5) * 20,
            isInside: true
          })
        } else {
          // Reset to facing forward when cursor leaves
          setGlobalTilt({
            mouseX: 0.5,
            mouseY: 0.5,
            baseTiltX: 0,
            baseTiltY: 0,
            isInside: false
          })
        }
      }
    }

    window.addEventListener('mousemove', handleGlobalMouseMove)
    return () => window.removeEventListener('mousemove', handleGlobalMouseMove)
  }, [])


  // Click outside to unzoom
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (selectedProject && !e.target.closest('.project-card')) {
        setSelectedProject(null)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [selectedProject])

  // Random glow effect to invite interaction
  useEffect(() => {
    const selectRandomProject = () => {
      const randomIndex = Math.floor(Math.random() * projects.length)
      setGlowingProject(projects[randomIndex].id)

      // Remove glow after 3 seconds
      setTimeout(() => {
        setGlowingProject(null)
      }, 5000)
    }

    // Start the cycle after 2 seconds, then repeat every 8 seconds
    const initialTimeout = setTimeout(selectRandomProject, 4000)
    const interval = setInterval(selectRandomProject, 6000)

    return () => {
      clearTimeout(initialTimeout)
      clearInterval(interval)
    }
  }, [])

  const projects = projectsData


  const handleProjectClick = (e, projectId) => {
    e.stopPropagation()

    if (selectedProject === projectId) {
      // If already selected, navigate to detail page
      navigate(`/project/${projectId}`)
    } else {
      // First click: zoom in
      setSelectedProject(projectId)
    }
  }

  // Force cards to always be visible - simplified logic
  const projectPhase = 1
  const aboutPhase = 0

  // 4x2 Grid layout - 4 cards per row with even spacing
  const card3DPositions = [
    // Row 1 - Top (4 cards evenly spaced)
    { x: 12.5, y: 25, z: 15 },  // 1
    { x: 37.5, y: 25, z: 18 },  // 2
    { x: 62.5, y: 25, z: 16 },  // 3
    { x: 87.5, y: 25, z: 14 },  // 4

    // Row 2 - Bottom (4 cards evenly spaced with large gap from top row)
    { x: 12.5, y: 70, z: 17 },  // 5
    { x: 37.5, y: 70, z: 13 },  // 6
    { x: 62.5, y: 70, z: 15 },  // 7
    { x: 87.5, y: 70, z: 16 },  // 8

    // Extra positions (if needed for future projects)
    { x: 50, y: 95, z: 10 },    // 9
    { x: 50, y: 95, z: 11 }     // 10
  ]

  const getCardStyle = (index) => {
    const pos = card3DPositions[index]
    const isHovered = hoveredProject === projects[index].id
    const isSelected = selectedProject === projects[index].id

    // Mobile: Stack cards vertically
    if (isMobile && !isSelected) {
      const verticalSpacing = 25 // Percentage spacing between cards
      const mobileY = 10 + (index * verticalSpacing) // Start at 10%, space by 25%

      return {
        position: 'relative',
        left: '50%',
        top: 'auto',
        transform: 'translateX(-50%)',
        opacity: projectPhase,
        pointerEvents: projectPhase > 0.3 && aboutPhase < 0.5 ? 'all' : 'none',
        cursor: 'pointer',
        zIndex: 300 + (index * 50),
        marginBottom: '2rem',
        transition: 'opacity 0.3s ease'
      }
    }

    let x, y, z, scale, opacity, rotateX, rotateY, rotateZ, zIndex

    if (isSelected) {
      // Selected - center the card and ensure it stays within screen bounds
      // Clamp position to ensure card with 360px width stays visible
      // Using 50% center position keeps it safe from edges
      x = 50 // Center horizontally for selected state
      y = 50 // Center vertically for selected state
      z = 200 // Fixed Z position - brings forward but stays consistent
      scale = 1.0 // Normalized size (no scaling)
      opacity = 1
      rotateX = 0 // Straighten for readability
      rotateY = 0
      rotateZ = 0
      zIndex = 9999 // Ensure selected card is always on top
    } else if (aboutPhase > 0) {
      // About section - fade to background
      x = 50 + (pos.x - 50) * (1 - aboutPhase * 0.8)
      y = 50 + (pos.y - 50) * (1 - aboutPhase * 0.8)
      z = pos.z * (1 - aboutPhase)
      scale = 0.7 * (1 - aboutPhase * 0.5)
      opacity = 1 - aboutPhase * 0.9
      rotateX = aboutPhase * 45
      rotateY = aboutPhase * 30 * (index % 2 === 0 ? 1 : -1)
      rotateZ = 0
      zIndex = 10
    } else {
      // Static positions - only rotate based on cursor
      x = pos.x
      y = pos.y
      z = pos.z
      scale = 0.85
      opacity = projectPhase

      // Calculate distance from cursor to card (normalized 0-1)
      if (globalTilt.mouseX !== undefined) {
        const cardX = pos.x / 100 // Convert percentage to 0-1
        const cardY = pos.y / 100
        const distX = globalTilt.mouseX - cardX
        const distY = globalTilt.mouseY - cardY
        const distance = Math.sqrt(distX * distX + distY * distY)

        // Distance multiplier: farther cards rotate more (1 + distance)
        const distanceMultiplier = 1 + distance * 1.5

        // Apply distance-amplified tilt that points towards cursor
        rotateX = globalTilt.baseTiltX * distanceMultiplier
        rotateY = globalTilt.baseTiltY * distanceMultiplier
      } else {
        rotateX = 0
        rotateY = 0
      }
      rotateZ = 0

      // Ensure all cards have proper z-index with larger separation
      zIndex = 300 + (index * 50)
    }

    return {
      left: `${x}%`,
      top: `${y}%`,
      transform: `
        translate(-50%, -50%)
        translateZ(${z}px)
        scale(${scale})
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        rotateZ(${rotateZ}deg)
      `,
      opacity: opacity,
      pointerEvents: projectPhase > 0.3 && aboutPhase < 0.5 ? 'all' : 'none',
      cursor: 'pointer',
      zIndex: zIndex,
      transition: isSelected
        ? 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s ease, filter 0.3s ease'
        : 'transform 0.15s ease-out' // Smooth cursor-based rotation
    }
  }

  return (
    <section id="projects" className="projects" ref={projectsRef}>
      <div className="section-header">
        <h2 className="section-title">Latest Projects</h2>
        <p className="section-subtitle">Hover to highlight, Click to explore</p>
      </div>

      <div className="projects-grid"
        style={{
          perspective: '1000px',
          perspectiveOrigin: '50% 50%'
        }}
      >
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`project-card project-floating ${selectedProject === project.id ? 'selected' : ''} ${hoveredProject === project.id ? 'hovered' : ''} ${glowingProject === project.id ? 'glowing' : ''}`}
            style={getCardStyle(index)}
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
            onClick={(e) => handleProjectClick(e, project.id)}
          >
            {/* Project Image */}
            <div className="project-image">
              <img
                src={project.thumbnail}
                alt={project.title}
                onError={(e) => {
                  e.target.src = `https://via.placeholder.com/400x300/1a1a2e/ff7849?text=${encodeURIComponent(project.title)}`
                }}
              />
              <div className="project-overlay"></div>
            </div>

            {/* Always visible: Title and Category */}
            <div className="project-info-always">
              <h3 className="project-title">{project.title}</h3>
              <div className="project-meta-row">
                <span className="project-category">{project.category}</span>
                <span className="project-year">{project.year}</span>
              </div>
            </div>

            {/* Only visible when selected: Description and Tools */}
            <div className={`project-details-hidden ${selectedProject === project.id ? 'visible' : ''}`}>
              <p className="project-description">{project.description}</p>

              <div className="project-tools">
                <span className="tools-label">Tools:</span>
                <div className="tools-list">
                  {project.tools.map((tool, i) => (
                    <span key={i} className="tool-tag">{tool}</span>
                  ))}
                </div>
              </div>

              <div className="project-cta">
                <span className="view-project-text">Click again to view full details</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
