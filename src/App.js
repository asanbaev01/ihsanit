// App.js
import React, { useState } from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './page/home/Home'
import About from './page/about/About'
import Courses from './page/courses/Courses'
import CourseDetail from './page/course-detail/CourseDetail'
import Pricing from './page/pricing/Pricing'
import Reviews from './page/reviews/Reviews'
import Contact from './page/contact/Contact'
import './index.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [selectedCourse, setSelectedCourse] = useState(null)

  return (
    <div>
      <Header setActiveSection={setActiveSection} setSelectedCourse={setSelectedCourse} />
      
      {activeSection === 'home' && <Home setActiveSection={setActiveSection} />}
      {activeSection === 'about' && <About />}
      {activeSection === 'courses' && <Courses setActiveSection={setActiveSection} setSelectedCourse={setSelectedCourse} />}
      {activeSection === 'coursedetail' && <CourseDetail selectedCourse={selectedCourse} setActiveSection={setActiveSection} />}
      {activeSection === 'pricing' && <Pricing />}
      {activeSection === 'reviews' && <Reviews />}
      {activeSection === 'contact' && <Contact />}
      
      <Footer />
    </div>
  )
}

export default App