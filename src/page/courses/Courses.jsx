// components/Courses.js
import React from 'react'

function Courses({ setActiveSection, setSelectedCourse }) {
  const courses = [
    {
      id: 1,
      title: 'Frontend Development',
      duration: '4 months',
      price: '8000 сом',
      students: 1240,
      level: 'Beginner',
      projects: '10+ projects',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind', 'Git'],
      description: 'Веб-сайттардын көрүнүшүн жана интерактивдүү бөлүгүн түзүүнү үйрөнүңүз.'
    },
    {
      id: 2,
      title: 'Backend Development',
      duration: '5 months',
      price: '9000 сом',
      students: 890,
      level: 'Intermediate',
      projects: '8+ projects',
      tech: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST API', 'JWT'],
      description: 'Сервердик логика, маалымат базасы жана API түзүүнү үйрөнүңүз.'
    },
    {
      id: 3,
      title: 'Python Programming',
      duration: '6 months',
      price: '10000 сом',
      students: 2100,
      level: 'All Levels',
      projects: '12+ projects',
      tech: ['Python', 'Django', 'Flask', 'PostgreSQL', 'REST', 'Celery'],
      description: 'Python тилинде программалоо, веб-разработка жана маалымат аналитикасы.'
    },
    {
      id: 4,
      title: 'UI/UX Design',
      duration: '3 months',
      price: '6000 сом',
      students: 560,
      level: 'Beginner',
      projects: '5+ projects',
      tech: ['Figma', 'Adobe XD', 'Photoshop', 'Prototyping', 'User Research'],
      description: 'Колдонуучуга ыңгайлуу интерфейстерди жана дизайнды түзүңүз.'
    },
    {
      id: 5,
      title: 'Mobile Development',
      duration: '5 months',
      price: '9500 сом',
      students: 670,
      level: 'Intermediate',
      projects: '6+ projects',
      tech: ['React Native', 'Flutter', 'Firebase', 'Mobile UI', 'App Store'],
      description: 'iOS жана Android үчүн мобилдик колдонмолорду иштеп чыгуу.'
    },
    {
      id: 6,
      title: 'Cybersecurity',
      duration: '6 months',
      price: '11000 сом',
      students: 430,
      level: 'Advanced',
      projects: '8+ projects',
      tech: ['Network Security', 'Cryptography', 'Penetration Testing', 'Linux'],
      description: 'Киберкоопсуздук негиздери жана системаларды коргоо.'
    }
  ]

  const handleViewDetail = (course) => {
    setSelectedCourse(course)
    setActiveSection('coursedetail')
  }

  return (
    <section className="courses">
      <h1>Our Courses</h1>
      <p className="courses-subtitle">Келечегиңизди биз менен куруңуз — заманбап програмдар жана эксперттер</p>
      
      <div className="courses-filter">
        <button className="filter-active">All Courses</button>
        <button>Frontend</button>
        <button>Backend</button>
        <button>Mobile</button>
        <button>Design</button>
      </div>

      <div className="courses-grid">
        {courses.map(course => (
          <div key={course.id} className="course-card">
            <div className="course-badge">{course.level}</div>
            <h3>{course.title}</h3>
            <p className="course-desc">{course.description}</p>
            <div className="course-tech">
              {course.tech.slice(0, 4).map((t, idx) => (
                <span key={idx}>{t}</span>
              ))}
              {course.tech.length > 4 && <span>+{course.tech.length - 4}</span>}
            </div>
            <div className="course-info">
              <span>📅 {course.duration}</span>
              <span>👨‍🎓 {course.students} students</span>
              <span>📁 {course.projects}</span>
            </div>
            <div className="course-footer">
              <span className="course-price">{course.price}</span>
              <button onClick={() => handleViewDetail(course)}>View Details</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Courses