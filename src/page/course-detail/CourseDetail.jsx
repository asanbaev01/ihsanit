// components/CourseDetail.js
import React from 'react'

function CourseDetail({ selectedCourse, setActiveSection }) {
  if (!selectedCourse) {
    return (
      <section className="course-detail">
        <h1>Course Detail</h1>
        <p>Курс тандалган жок. Сураныч, курстар бөлүмүнөн курс тандаңыз.</p>
        <button onClick={() => setActiveSection('courses')}>Back to Courses</button>
      </section>
    )
  }

  const syllabus = [
    'Module 1: Introduction & Basics',
    'Module 2: Core Concepts',
    'Module 3: Advanced Topics',
    'Module 4: Real Projects',
    'Module 5: Final Exam & Certification'
  ]

  return (
    <section className="course-detail">
      <button className="back-btn" onClick={() => setActiveSection('courses')}>← Back to Courses</button>
      
      <div className="detail-header">
        <h1>{selectedCourse.title}</h1>
        <div className="detail-badge">{selectedCourse.level}</div>
      </div>

      <div className="detail-grid">
        <div className="detail-main">
          <div className="detail-section">
            <h2>📖 About this Course</h2>
            <p>{selectedCourse.description}</p>
            <p>Бул курста сиз {selectedCourse.tech.join(', ')} технологияларын үйрөнөсүз. 
            Курстун жыйынтыгында {selectedCourse.projects} иш жүзүндөгү долбоорду аткарып, 
            портфолиоңузду түзөсүз.</p>
          </div>

          <div className="detail-section">
            <h2>📚 Syllabus</h2>
            <ul className="syllabus-list">
              {syllabus.map((item, idx) => (
                <li key={idx}>
                  <span className="syllabus-num">{idx + 1}</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="detail-section">
            <h2>🛠 Technologies You'll Learn</h2>
            <div className="detail-tech">
              {selectedCourse.tech.map((tech, idx) => (
                <span key={idx}>{tech}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="detail-sidebar">
          <div className="price-card">
            <h3>Course Price</h3>
            <div className="price-amount">{selectedCourse.price}</div>
            <p>Installment available: 0% interest</p>
            <button className="enroll-btn">Enroll Now →</button>
          </div>

          <div className="info-card">
            <h3>Course Info</h3>
            <div className="info-row">
              <span>⏱ Duration:</span>
              <span>{selectedCourse.duration}</span>
            </div>
            <div className="info-row">
              <span>👥 Students:</span>
              <span>{selectedCourse.students}+</span>
            </div>
            <div className="info-row">
              <span>📁 Projects:</span>
              <span>{selectedCourse.projects}</span>
            </div>
            <div className="info-row">
              <span>🎓 Certificate:</span>
              <span>✓ Included</span>
            </div>
            <div className="info-row">
              <span>🔄 Support:</span>
              <span>24/7 Mentor</span>
            </div>
          </div>

          <div className="contact-card">
            <h3>Need Help?</h3>
            <p>Суроолоруңуз болсо, биз менен байланышыңыз</p>
            <button onClick={() => setActiveSection('contact')}>Contact Us</button>
          </div>
        </div>
      </div>

    </section>
  )
}

export default CourseDetail