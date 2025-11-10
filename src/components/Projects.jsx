import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { projectsData } from '../data/projectsData'

export default function Projects({ scrollProgress }) {
  const navigate = useNavigate()
  const [hoveredProject, setHoveredProject] = useState(null)
  const [selectedProject, setSelectedProject] = useState(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [globalTilt, setGlobalTilt] = useState({ x: 0, y: 0 })
  const [sectionProgress, setSectionProgress] = useState(1)
  const [time, setTime] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const projectsRef = useRef(null)
  const animationRef = useRef(null)

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
        const mouseX = (e.clientX - rect.left) / rect.width // 0 to 1
        const mouseY = (e.clientY - rect.top) / rect.height // 0 to 1

        setGlobalTilt({
          mouseX,
          mouseY,
          baseTiltX: (mouseY - 0.5) * -20,
          baseTiltY: (mouseX - 0.5) * 20
        })
      }
    }

    window.addEventListener('mousemove', handleGlobalMouseMove)
    return () => window.removeEventListener('mousemove', handleGlobalMouseMove)
  }, [])

  useEffect(() => {
    const startTime = Date.now()
    let lastUpdate = 0
    const fps = 30 // Reduced to 30 FPS for better performance
    const interval = 1000 / fps

    const animate = (timestamp) => {
      if (!lastUpdate) lastUpdate = timestamp
      const delta = timestamp - lastUpdate

      // Only update if enough time has passed
      if (delta >= interval) {
        const currentTime = (Date.now() - startTime) / 1000
        setTime(currentTime)
        lastUpdate = timestamp - (delta % interval)
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
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

  const projects = projectsData

  const handleMouseMove = (e, projectId) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    // Calculate tilt based on mouse position
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const tiltX = ((y - centerY) / centerY) * -10 // Invert for natural tilt
    const tiltY = ((x - centerX) / centerX) * 10

    setMousePosition({ x, y, tiltX, tiltY })
  }

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0, tiltX: 0, tiltY: 0 })
  }

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

  // 3-4-2 Grid layout with consistent spacing between all tiles
  // Card width is 360px (25% of 1400px container), so using consistent gaps
  const card3DPositions = [
    // Row 1 - Top (3 cards evenly spaced)
    { x: 16, y: 25, z: 15, rotSpeed: 0.08, phaseX: 0, phaseY: 0, amplitudeX: 1.0, amplitudeY: 1.0 },       // Top-left
    { x: 50, y: 25, z: 18, rotSpeed: 0.09, phaseX: 2.1, phaseY: 3.5, amplitudeX: 1.0, amplitudeY: 1.0 },  // Top-center
    { x: 84, y: 25, z: 12, rotSpeed: 0.085, phaseX: 4.2, phaseY: 1.8, amplitudeX: 1.0, amplitudeY: 1.0 }, // Top-right

    // Row 2 - Middle (4 cards evenly distributed with consistent spacing)
    { x: 12, y: 65, z: 16, rotSpeed: 0.095, phaseX: 1.3, phaseY: 5.2, amplitudeX: 1.0, amplitudeY: 1.0 }, // Mid-far-left
    { x: 37, y: 65, z: 14, rotSpeed: 0.09, phaseX: 5.5, phaseY: 4.1, amplitudeX: 1.0, amplitudeY: 1.0 },  // Mid-left
    { x: 63, y: 65, z: 17, rotSpeed: 0.08, phaseX: 6.2, phaseY: 1.5, amplitudeX: 1.0, amplitudeY: 1.0 },  // Mid-right
    { x: 88, y: 65, z: 13, rotSpeed: 0.087, phaseX: 3.8, phaseY: 5.7, amplitudeX: 1.0, amplitudeY: 1.0 }, // Mid-far-right

    // Row 3 - Bottom (2 cards centered with consistent gap)
    { x: 33, y: 95, z: 10, rotSpeed: 0.075, phaseX: 3.7, phaseY: 2.4, amplitudeX: 1.0, amplitudeY: 1.0 }, // Bottom-left
    { x: 67, y: 95, z: 11, rotSpeed: 0.09, phaseX: 2.5, phaseY: 4.3, amplitudeX: 1.0, amplitudeY: 1.0 }   // Bottom-right
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

    // Dynamic floating animation - each card moves in its own pattern
    const floatY = Math.sin(time * pos.rotSpeed + pos.phaseY) * pos.amplitudeY
    const floatX = Math.cos(time * pos.rotSpeed * 0.7 + pos.phaseX) * pos.amplitudeX

    // Gentle rotation - subtle tilt
    const rotateXAnim = Math.sin(time * 0.2 + index) * 4
    const rotateYAnim = Math.cos(time * 0.18 + index * 1.2) * 3

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
      // Floating in 3D space with dynamic movement in their own positions
      x = pos.x + floatX
      y = pos.y + floatY
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

        // Calculate angle towards cursor
        const angleTowardsCursor = Math.atan2(distY, distX) * (180 / Math.PI)

        // Apply distance-amplified tilt that points towards cursor
        rotateX = rotateXAnim + globalTilt.baseTiltX * distanceMultiplier
        rotateY = rotateYAnim + globalTilt.baseTiltY * distanceMultiplier
      } else {
        rotateX = rotateXAnim
        rotateY = rotateYAnim
      }
      rotateZ = 0

      // Ensure all cards have proper z-index with larger separation
      // Give each card a distinct z-index based on its index
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
        : 'none' // No transition for smooth floating animation
    }
  }

  return (
    <section id="projects" className="projects" ref={projectsRef}>
      <div className="section-header">
        <h2 className="section-title">Latest Projects</h2>
        <p className="section-subtitle">Floating in 3D space - Hover to highlight, Click to explore</p>
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
            className={`project-card project-floating ${selectedProject === project.id ? 'selected' : ''} ${hoveredProject === project.id ? 'hovered' : ''}`}
            style={getCardStyle(index)}
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => {
              setHoveredProject(null)
              handleMouseLeave()
            }}
            onMouseMove={(e) => handleMouseMove(e, project.id)}
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

      {/* See All Button */}
      <button
        className="see-all-button"
        onClick={() => navigate('/all-projects')}
      >
        <span className="see-all-text">See All Projects</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </section>
  )
}
