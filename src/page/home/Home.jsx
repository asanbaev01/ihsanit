// page/home/Home.js
import React, { useState, useEffect } from 'react'

function Home({ setActiveSection }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides = [
    { title: 'Стань IT специалистом', text: 'Frontend, Backend, Python, UI/UX и другие IT курсы' },
    { title: 'Практическое обучение', text: '12+ реальных проектов в каждом курсе' },
    { title: 'Трудоустройство', text: '98% наших студентов находят работу' }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const courses = [
    { name: 'Frontend Development', students: 1240, level: 'С нуля до PRO' },
    { name: 'Backend Development', students: 890, level: 'Продвинутый' },
    { name: 'Python Programming', students: 2100, level: 'Все уровни' },
    { name: 'UI/UX Design', students: 560, level: 'Начинающий' }
  ]

  return (
    <section className="home">
      <div className="home-badge">✨ 5000+ выпускников</div>
      <div className="slideshow">
        <h1 key={currentSlide}>{slides[currentSlide].title}</h1>
        <p key={currentSlide + 100}>{slides[currentSlide].text}</p>
      </div>
      <div className="home-stats">
        {courses.map((course, idx) => (
          <div key={idx} className="stat-card">
            <h4>{course.students}+</h4>
            <p>{course.name}</p>
            <small>{course.level}</small>
          </div>
        ))}
      </div>
      <button onClick={() => setActiveSection('courses')}>Начать обучение</button>
    </section>
  )
}

export default Home