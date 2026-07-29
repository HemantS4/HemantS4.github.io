import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ProjectDetail from './components/ProjectDetail'
import './App.css'

function HomePage({ activeSection, setActiveSection }) {
  return (
    <>
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="main-content">
        <Hero />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </main>
    </>
  )
}

function AppContent() {
  const [activeSection, setActiveSection] = useState('home')
  const location = useLocation()

  useEffect(() => {
    if (location.pathname !== '/') return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { threshold: 0.4 }
    )
    ;['home', 'projects', 'about', 'contact'].forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [location.pathname])

  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              activeSection={activeSection}
              setActiveSection={setActiveSection}
            />
          }
        />
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
