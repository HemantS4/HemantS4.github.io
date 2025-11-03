import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Scene3D from './components/Scene3D'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ProjectDetail from './components/ProjectDetail'
import AllProjects from './components/AllProjects'
import './App.css'

function HomePage({ activeSection, setActiveSection, scrollProgress }) {
  return (
    <>
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="main-content">
        <Hero />
        <Projects scrollProgress={scrollProgress} />
        <About />
        <Contact />
        <Footer />
      </main>
    </>
  )
}

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.error('3D Background Error (non-critical):', error)
  }

  render() {
    if (this.state.hasError) {
      // Render fallback gradient background if 3D scene crashes
      return (
        <div className="canvas-container" style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(180deg, #0a0a1e 0%, #1a1a3e 100%)',
          zIndex: 0
        }} />
      )
    }
    return this.props.children
  }
}

function AppContent() {
  const [activeSection, setActiveSection] = useState('home')
  const [scrollProgress, setScrollProgress] = useState(0)
  const location = useLocation()

  useEffect(() => {
    let rafId = null
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        rafId = requestAnimationFrame(() => {
          // Get scroll position relative to sections
          const heroSection = document.getElementById('home')
          const projectsSection = document.getElementById('projects')
          const aboutSection = document.getElementById('about')

          const scrollY = window.scrollY
          const windowHeight = window.innerHeight

          // Calculate which section is visible
          let projectsProgress = 0

          if (projectsSection) {
            const projectsTop = projectsSection.offsetTop
            const projectsHeight = projectsSection.offsetHeight
            const projectsBottom = projectsTop + projectsHeight

            if (scrollY + windowHeight > projectsTop && scrollY < projectsBottom) {
              // We're in projects section
              const entryPoint = projectsTop - windowHeight * 0.5
              const exitPoint = projectsBottom - windowHeight * 0.5
              projectsProgress = Math.max(0, Math.min(1, (scrollY - entryPoint) / (exitPoint - entryPoint)))
            } else if (scrollY >= projectsBottom) {
              // We've passed projects section
              projectsProgress = 2 // Signal to move cards to background
            }
          }

          const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
          const progress = scrollHeight > 0 ? scrollY / scrollHeight : 0
          setScrollProgress(Math.min(Math.max(progress, 0), 1))

          // Store projects progress in window for Projects component
          window.projectsProgress = projectsProgress

          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  // Only run scroll tracking on home page
  const isHomePage = location.pathname === '/'

  return (
    <div className="app">
      {/* 3D Background with error boundary protection */}
      <ErrorBoundary>
        <Scene3D scrollProgress={isHomePage ? scrollProgress : 0} />
      </ErrorBoundary>

      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              activeSection={activeSection}
              setActiveSection={setActiveSection}
              scrollProgress={isHomePage ? scrollProgress : 0}
            />
          }
        />
        <Route path="/all-projects" element={<AllProjects />} />
        <Route path="/project/:projectId" element={<ProjectDetail />} />
      </Routes>
    </div>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
