import { motion } from 'framer-motion'
import { FiAward, FiBook } from 'react-icons/fi'

const education = [
  {
    degree: 'MSc. in Computer Science',
    institution: 'Jahangirnagar University, Savar, Dhaka',
    period: 'Enrollment: 1 Year',
    gpa: null,
    emoji: '🎓',
    color: '#00b4d8',
    tags: ['Graduate Studies', 'Computer Science', 'Advanced Learning'],
  },
  {
    degree: 'BSc. in Computer Science & Engineering',
    institution: 'Daffodil International University, Dhanmondi, Dhaka',
    period: 'Fall 2016 – Spring 2021',
    gpa: 'Pass Year: Mar 2021',
    emoji: '💻',
    color: '#7c3aed',
    tags: ['CSE', 'Software Engineering', 'Web Development'],
  },
  {
    degree: 'Higher Secondary Certificate (HSC) — Science',
    institution: 'Comilla City College',
    period: 'Pass Year: Aug 2016',
    gpa: null,
    emoji: '📚',
    color: '#10b981',
    tags: ['Science', 'Mathematics', 'Foundation Studies'],
  },
  {
    degree: 'Secondary School Certificate (SSC) — Science',
    institution: 'Barura Haji Nowab Ali Pilot High School',
    period: 'Pass Year: May 2014',
    gpa: null,
    emoji: '🏫',
    color: '#f89820',
    tags: ['Science', 'Academic Basics'],
  },
]

const courses = [
  { name: 'Professional English Communication Skill', platform: 'WSDA', color: '#00b4d8' },
  { name: 'Django Web Development', platform: 'Daffodil International University (CPC)', color: '#44b78b' },
  { name: 'PHP with Laravel Framework', platform: 'Pencilbox Training Institute', color: '#f89820' },
  { name: 'Web Design', platform: 'Foresight IT', color: '#7c3aed' },
  { name: 'Responsive Web Design', platform: 'FreeCodeCamp', color: '#06d6c7' },
  { name: 'Digital Marketing', platform: 'Skill Jobs', color: '#10b981' },
]

const languages = [
  { label: 'English', sub: 'Professional working proficiency', emoji: '🌍' },
  { label: 'Bengali', sub: 'Native proficiency', emoji: '🗣️' },
  { label: 'Interests', sub: 'Learning new technology and R&D', emoji: '🚀' },
]

export default function Education() {
  return (
    <section id="education" style={{ background: 'var(--bg-primary)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <div className="section-tag">Education</div>
          <h2 className="section-title">Academic Background</h2>
          <p className="section-subtitle">Formal education, training, and continuous learning that support my engineering work</p>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, marginBottom: 72 }}>
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -3 }}
              className="glass-card"
              style={{ padding: '28px 32px', display: 'flex', gap: 24, alignItems: 'flex-start', transition: 'all 0.3s' }}
            >
              <div style={{ width: 56, height: 56, borderRadius: 16, background: `${edu.color}15`, border: `1px solid ${edu.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.6rem', flexShrink: 0 }}>
                {edu.emoji}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8, marginBottom: 4 }}>
                  <h3 style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '1.02rem' }}>{edu.degree}</h3>
                  {edu.gpa && <span style={{ background: `${edu.color}15`, border: `1px solid ${edu.color}30`, color: edu.color, padding: '3px 12px', borderRadius: 100, fontSize: '0.77rem', fontWeight: 600, whiteSpace: 'nowrap' }}>{edu.gpa}</span>}
                </div>
                <p style={{ color: edu.color, fontWeight: 600, marginBottom: 4, fontSize: '0.92rem' }}>{edu.institution}</p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', marginBottom: 14 }}>📅 {edu.period}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {edu.tags.map(tag => (
                    <span key={tag} style={{ padding: '3px 10px', borderRadius: 5, fontSize: '0.73rem', fontFamily: 'var(--font-code)', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: 'var(--text-muted)' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }} className="edu-bottom-grid">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 style={{ display: 'flex', alignItems: 'center', gap: 10, fontWeight: 700, fontSize: '1.2rem', marginBottom: 20, color: 'var(--text-primary)' }}>
              <FiBook color="#00b4d8" /> Training & Coursework
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {courses.map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="glass-card"
                  style={{ padding: '16px 20px', display: 'flex', alignItems: 'center', gap: 14, transition: 'all 0.3s' }}
                >
                  <div>
                    <p style={{ color: 'var(--text-primary)', fontWeight: 600, fontSize: '0.9rem', marginBottom: 2 }}>{c.name}</p>
                    <p style={{ color: c.color, fontSize: '0.78rem' }}>{c.platform}</p>
                  </div>
                  <FiAward color={c.color} size={16} style={{ marginLeft: 'auto', flexShrink: 0 }} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 style={{ display: 'flex', alignItems: 'center', gap: 10, fontWeight: 700, fontSize: '1.2rem', marginBottom: 20, color: 'var(--text-primary)' }}>
              🌐 Languages & Focus
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {languages.map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  style={{ display: 'flex', gap: 12, alignItems: 'flex-start', padding: '12px 16px', borderRadius: 12, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <span style={{ fontSize: '1.1rem', flexShrink: 0 }}>{c.emoji}</span>
                  <div>
                    <p style={{ color: 'var(--text-primary)', fontWeight: 500, fontSize: '0.88rem', lineHeight: 1.5 }}>{c.label}</p>
                    {c.sub && <p style={{ color: 'var(--text-muted)', fontSize: '0.77rem', marginTop: 2, fontFamily: 'var(--font-code)' }}>{c.sub}</p>}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <style>{`@media(max-width:768px){.edu-bottom-grid{grid-template-columns:1fr !important;}}`}</style>
    </section>
  )
}
