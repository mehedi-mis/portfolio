import { useState } from 'react'
import { motion } from 'framer-motion'

const skillCategories = [
  {
    id: 'languages',
    label: 'Languages',
    emoji: '💻',
    color: '#f89820',
    skills: [
      { name: 'Python', level: 95 },
      { name: 'JavaScript', level: 82 },
      { name: 'TypeScript', level: 65 },
      { name: 'Perl', level: 55 },
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    emoji: '🎨',
    color: '#61dafb',
    skills: [
      { name: 'ReactJS', level: 86 },
      { name: 'Owl', level: 78 },
      { name: 'Bootstrap', level: 90 },
      { name: 'Tailwind CSS', level: 76 },
      { name: 'HTML/CSS', level: 92 },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    emoji: '⚙️',
    color: '#44b78b',
    skills: [
      { name: 'Django', level: 94 },
      { name: 'DRF', level: 90 },
      { name: 'FastAPI', level: 88 },
      { name: 'Flask', level: 82 },
      { name: 'Odoo', level: 88 },
    ],
  },
  {
    id: 'data',
    label: 'Data & Infra',
    emoji: '🗄️',
    color: '#00b4d8',
    skills: [
      { name: 'PostgreSQL', level: 90 },
      { name: 'MongoDB', level: 72 },
      { name: 'Redis', level: 84 },
      { name: 'Docker', level: 82 },
      { name: 'AWS', level: 78 },
    ],
  },
  {
    id: 'tooling',
    label: 'Libraries & Tools',
    emoji: '🛠️',
    color: '#7c3aed',
    skills: [
      { name: 'Selenium', level: 80 },
      { name: 'Pandas', level: 84 },
      { name: 'Celery', level: 78 },
      { name: 'Git / GitHub / GitLab', level: 90 },
      { name: 'CI/CD', level: 72 },
    ],
  },
]

const techTags = [
  'Python', 'JavaScript', 'Django', 'DRF', 'FastAPI', 'Flask', 'Odoo',
  'ReactJS', 'Owl', 'Bootstrap', 'Tailwind CSS', 'Socket.io', 'Ajax',
  'PostgreSQL', 'MySQL', 'MongoDB', 'SQLite', 'Redis', 'ElasticSearch',
  'Docker', 'Kafka', 'AWS EC2', 'AWS S3', 'AWS DynamoDB', 'AWS EFS',
  'OpenSearch', 'Celery', 'JWT', 'OpenAI API', 'Google API', 'Selenium',
  'Beautiful Soup', 'Pandas', 'NumPy', 'Matplotlib', 'Linux', 'GitLab CI/CD',
]

export default function Skills() {
  const [active, setActive] = useState('languages')
  const category = skillCategories.find(c => c.id === active)

  return (
    <section id="skills" style={{ background: 'linear-gradient(180deg, var(--bg-primary) 0%, #080d1e 100%)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <div className="section-tag">Technical Skills</div>
          <h2 className="section-title">My Tech Stack</h2>
          <p className="section-subtitle">Technologies I use across full-stack apps, APIs, ERP systems, and automation work</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 48 }}
        >
          {skillCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              style={{
                padding: '10px 20px', borderRadius: 12, cursor: 'pointer',
                fontFamily: 'var(--font-main)', fontWeight: 600, fontSize: '0.88rem',
                transition: 'all 0.3s ease',
                background: active === cat.id
                  ? `linear-gradient(135deg, ${cat.color}30, ${cat.color}15)`
                  : 'rgba(255,255,255,0.04)',
                color: active === cat.id ? cat.color : 'var(--text-muted)',
                border: `1px solid ${active === cat.id ? cat.color + '50' : 'rgba(255,255,255,0.08)'}`,
                transform: active === cat.id ? 'translateY(-2px)' : 'none',
                boxShadow: active === cat.id ? `0 4px 20px ${cat.color}20` : 'none',
              }}
            >
              {cat.emoji} {cat.label}
            </button>
          ))}
        </motion.div>

        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="glass-card"
          style={{ padding: 40, marginBottom: 48 }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px 48px' }} className="skills-grid">
            {category.skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                  <span style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.93rem' }}>{skill.name}</span>
                  <span style={{ fontFamily: 'var(--font-code)', fontSize: '0.8rem', color: category.color }}>{skill.level}%</span>
                </div>
                <div style={{ height: 6, borderRadius: 3, background: 'rgba(255,255,255,0.06)', overflow: 'hidden' }}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: i * 0.08, ease: 'easeOut' }}
                    style={{
                      height: '100%', borderRadius: 3,
                      background: `linear-gradient(90deg, ${category.color}, ${category.color}80)`,
                      boxShadow: `0 0 10px ${category.color}50`,
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 style={{ textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.88rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 24, fontFamily: 'var(--font-code)' }}>
            Full Technology Arsenal
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center' }}>
            {techTags.map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                whileHover={{ scale: 1.08, y: -2 }}
                style={{
                  padding: '7px 14px', borderRadius: 8,
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  color: 'var(--text-secondary)', fontSize: '0.83rem',
                  fontFamily: 'var(--font-code)', cursor: 'default',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(0,180,216,0.4)'; e.currentTarget.style.color = 'var(--accent-blue)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = 'var(--text-secondary)' }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
      <style>{`@media(max-width:640px){.skills-grid{grid-template-columns:1fr !important;}}`}</style>
    </section>
  )
}
