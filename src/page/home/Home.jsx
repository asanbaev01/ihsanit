// components/Home.js
import React from 'react'

function Home({ setActiveSection }) {
  const courses = [
    { name: 'Frontend Development', students: 1240, level: 'Beginner to Advanced' },
    { name: 'Backend Development', students: 890, level: 'Intermediate' },
    { name: 'Python Programming', students: 2100, level: 'All Levels' },
    { name: 'UI/UX Design', students: 560, level: 'Beginner' }
  ]

  return (
    <section className="home">
      <div className="home-badge">✨ 5000+ Students Graduated</div>
      <h1>Become IT Specialist</h1>
      <p>
        Frontend, Backend, Python, UI/UX жана башка IT курстар. 
        Заманбап билим берүү технологиялары менен келечегиңизди куруңуз!
      </p>
      <div className="home-stats">
        {courses.map((course, idx) => (
          <div key={idx} className="stat-card">
            <h4>{course.stats || course.students}+</h4>
            <p>{course.name}</p>
            <small>{course.level}</small>
          </div>
        ))}
      </div>
      <button onClick={() => setActiveSection('courses')}>Start Learning</button>
    </section>
  )
}

export default Home