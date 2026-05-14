// components/About.js
import React from 'react'

function About() {
  const features = [
    { icon: '🎓', title: '10+ Years Experience', desc: 'ИТ тармагында 10 жылдан ашык тажрыйба' },
    { icon: '👨‍🏫', title: 'Expert Mentors', desc: 'Кесипкөй жана тажрыйбалуу мугалимдер' },
    { icon: '💻', title: 'Modern Labs', desc: 'Заманбап компьютердик класс жабдуулары' },
    { icon: '🏆', title: 'Certificate', desc: 'Аяктагандан кийин сертификат берүү' },
    { icon: '🤝', title: 'Job Assistance', desc: 'Ишке орношууга жардам' },
    { icon: '🌍', title: 'Online & Offline', desc: 'Аралыктан жана салттуу окуу форматы' }
  ]

  const teachers = [
    { name: 'Азамат Асанов', role: 'Senior Fullstack Developer', exp: '8 years', image: '👨‍💻' },
    { name: 'Айсулуу Кенжебаева', role: 'Python Expert', exp: '6 years', image: '👩‍💻' },
    { name: 'Бектур Сартбаев', role: 'Frontend Lead', exp: '5 years', image: '👨‍🎨' }
  ]

  return (
    <section className="about">
      <h1>About Academy</h1>
      <div className="about-hero">
        <p className="about-text">
          Ihsan IT Academy - 2015-жылдан бери Кыргызстанда заманбап IT билим берүүчү академия. 
          Биз 5000+ студентти ийгиликтүү бүтүрүп, алардын көбү ири IT компанияларда эмгектенүүдө.
        </p>
      </div>
      
      <div className="features-grid">
        {features.map((feature, idx) => (
          <div key={idx} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
          </div>
        ))}
      </div>

      <h2 className="teachers-title">Our Mentors</h2>
      <div className="teachers-grid">
        {teachers.map((teacher, idx) => (
          <div key={idx} className="teacher-card">
            <div className="teacher-avatar">{teacher.image}</div>
            <h3>{teacher.name}</h3>
            <p className="teacher-role">{teacher.role}</p>
            <p className="teacher-exp">⭐ {teacher.exp} experience</p>
          </div>
        ))}
      </div>

      <div className="about-stats">
        <div className="about-stat">
          <h2>5000+</h2>
          <p>Students</p>
        </div>
        <div className="about-stat">
          <h2>50+</h2>
          <p>Courses</p>
        </div>
        <div className="about-stat">
          <h2>98%</h2>
          <p>Success Rate</p>
        </div>
        <div className="about-stat">
          <h2>30+</h2>
          <p>Partners</p>
        </div>
      </div>
    </section>
  )
}

export default About