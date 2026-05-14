// components/Header.js
import React from 'react'

function Header({ setActiveSection, setSelectedCourse }) {
  const handleNavClick = (section) => {
    setActiveSection(section)
    setSelectedCourse(null)
  }

  return (
    <header className="header">
      <h1 onClick={() => handleNavClick('home')}>IHSAN IT ACADEMY</h1>
      <nav>
        <a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('home') }}>Home</a>
        <a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('courses') }}>Courses</a>
        <a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('about') }}>About</a>
        <a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('pricing') }}>Pricing</a>
        <a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('reviews') }}>Reviews</a>
        <a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('contact') }}>Contact</a>
      </nav>
    </header>
  )
}

export default Header