import React, { useState, useEffect, useRef } from 'react'
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
  const scrollProgressRef = useRef(0)
  const location = useLocation()

  useEffect(() => {
    // Use IntersectionObserver for section highlighting only
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    }

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    // Observe all sections for highlighting
    const sectionIds = ['home', 'projects', 'about', 'contact']
    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    // Continuous scroll tracking for smooth rotation
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY
          const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
          const progress = scrollHeight > 0 ? scrollY / scrollHeight : 0
          setScrollProgress(Math.min(Math.max(progress, 0), 1))

          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial call

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
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
