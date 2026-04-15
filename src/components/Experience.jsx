import { motion } from 'framer-motion'
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi'

const experiences = [
  {
    id: 1,
    role: 'Software Engineer (ERP & Product Development)',
    company: 'Mir Info Systems Ltd.',
    period: 'May 2024 – Present',
    type: 'Full-time',
    location: 'Dhaka, Bangladesh',
    color: '#00b4d8',
    emoji: '🏢',
    bullets: [
      'Develop and maintain Odoo ERP, HR, and accounting solutions with PostgreSQL-backed business workflows.',
      'Build modern front-end interfaces using Owl and ReactJS for product and ERP modules.',
      'Deliver FastAPI and ReactJS applications with a focus on performance and maintainability.',
      'Handle customization, deployment, and optimization work based on client needs and operational requirements.',
      'Contributed to solutions for BRAC AI, PASHA, Omera, Agrim, Mir Group, and Mir Akter.',
    ],
    tags: ['Odoo', 'FastAPI', 'ReactJS', 'Owl', 'PostgreSQL', 'ERP'],
  },
  {
    id: 2,
    role: 'Junior Software Engineer',
    company: 'W3 Engineers Ltd.',
    period: 'Mar 2023 – Apr 2024',
    type: 'Full-time',
    location: 'Dhaka, Bangladesh',
    color: '#7c3aed',
    emoji: '💼',
    bullets: [
      'Built backend features and API services for the STS project and Left Travel using Django, DRF, Redis, Celery, JWT, Postgres, and AWS.',
      'Optimized APIs for better speed and efficiency while supporting production workflows and background jobs.',
      'Developed cron job scripts and data collection pipelines with Django and Selenium for scheduled data gathering and analysis.',
      'Integrated APIs into the Content Kitchen dashboard using Django, AWS services, Google API, OpenAI, and Vue JS.',
      'Collaborated on AirG product integrations in a microservice environment involving Perl, Flask, Java, Spring Boot, NodeJS, Redis, and Docker.',
    ],
    tags: ['Django', 'DRF', 'Redis', 'Celery', 'AWS', 'Docker'],
  },
  {
    id: 3,
    role: 'Software Engineer Internship',
    company: 'W3 Engineers Ltd.',
    period: 'Sep 2022 – Feb 2023',
    type: 'Internship',
    location: 'Dhaka, Bangladesh',
    color: '#10b981',
    emoji: '🎓',
    bullets: [
      'Worked across selective projects using Django, Flask, Beego, ReactJS, and Express.js during the early training phase.',
      'Collected data from databases, APIs, web scraping pipelines, and external feeds for ongoing product work.',
      'Developed and maintained automation scripts to streamline data collection tasks.',
      'Collaborated with analysts and scientists to improve data accuracy, reliability, and delivery speed.',
      'Resolved operational issues in the collection pipeline to keep recurring processes stable.',
    ],
    tags: ['Django', 'Flask', 'ReactJS', 'Express.js', 'Automation', 'Web Scraping'],
  },
  {
    id: 4,
    role: 'QA Engineer',
    company: 'Vcube Soft & Tech',
    period: 'Mar 2021 – Aug 2022',
    type: 'Full-time',
    location: 'Bangladesh',
    color: '#f89820',
    emoji: '🧪',
    bullets: [
      'Created and reviewed 3D project assets and captured supporting imagery for delivery workflows.',
      'Checked project outputs, validated required information, and supported issue detection.',
      'Transferred data between internal applications as part of QA and operations processes.',
    ],
    tags: ['QA', 'Review', 'Operations', '3D Projects'],
  },
]

const highlights = [
  {
    role: 'Training',
    org: 'Professional & Technical Courses',
    period: 'Ongoing',
    desc: 'Completed training in Professional English Communication, Django Web Development, PHP with Laravel, Web Design, Responsive Web Design, and Digital Marketing.',
    color: '#10b981',
    emoji: '📚',
  },
  {
    role: 'Interests',
    org: 'Continuous Learning',
    period: 'Always',
    desc: 'Focused on learning new technologies, R&D work, and improving practical delivery across backend and full-stack systems.',
    color: '#f89820',
    emoji: '🚀',
  },
]

export default function Experience() {
  return (
    <section id="experience" style={{ background: 'var(--bg-primary)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <div className="section-tag">Experience</div>
          <h2 className="section-title">Work History</h2>
          <p className="section-subtitle">My professional path across product engineering, ERP systems, APIs, and automation</p>
        </motion.div>

        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', left: 28, top: 0, bottom: 0, width: 2, background: 'linear-gradient(180deg, rgba(0,180,216,0.5), rgba(124,58,237,0.5), transparent)' }} className="timeline-line" />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                style={{ display: 'flex', gap: 32, position: 'relative' }}
                className="timeline-item"
              >
                <div style={{ width: 58, flexShrink: 0, display: 'flex', justifyContent: 'center', paddingTop: 24 }} className="timeline-dot-col">
                  <motion.div
                    whileInView={{ scale: [0, 1.3, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.15 }}
                    style={{ width: 48, height: 48, borderRadius: '50%', background: `${exp.color}20`, border: `2px solid ${exp.color}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem', flexShrink: 0 }}
                  >
                    {exp.emoji}
                  </motion.div>
                </div>

                <motion.div
                  whileHover={{ y: -4, boxShadow: `0 12px 40px ${exp.color}15` }}
                  className="glass-card"
                  style={{ flex: 1, padding: '28px 32px', transition: 'all 0.3s ease' }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12, marginBottom: 8 }}>
                    <div>
                      <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 4 }}>{exp.role}</h3>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <FiBriefcase size={14} color={exp.color} />
                        <span style={{ color: exp.color, fontWeight: 600 }}>{exp.company}</span>
                        <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>·</span>
                        <span style={{ color: 'var(--text-muted)', fontSize: '0.82rem', background: `${exp.color}15`, padding: '2px 8px', borderRadius: 4, border: `1px solid ${exp.color}30` }}>{exp.type}</span>
                      </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--text-muted)', fontSize: '0.82rem' }}>
                        <FiCalendar size={13} />
                        <span>{exp.period}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--text-muted)', fontSize: '0.82rem' }}>
                        <FiMapPin size={13} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <ul style={{ listStyle: 'none', padding: 0, margin: '20px 0', display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {exp.bullets.map((b, j) => (
                      <li key={j} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.7 }}>
                        <span style={{ color: exp.color, marginTop: 6, flexShrink: 0 }}>▸</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {exp.tags.map(tag => (
                      <span key={tag} style={{ padding: '3px 10px', borderRadius: 6, fontSize: '0.76rem', fontFamily: 'var(--font-code)', background: `${exp.color}10`, border: `1px solid ${exp.color}25`, color: exp.color }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginTop: 72 }}
        >
          <h3 style={{ textAlign: 'center', fontWeight: 700, fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: 32 }}>
            🌱 Growth Snapshot
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }} className="vol-grid">
            {highlights.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="glass-card"
                style={{ padding: '24px 28px' }}
              >
                <div style={{ fontSize: '1.8rem', marginBottom: 12 }}>{v.emoji}</div>
                <h4 style={{ color: v.color, fontWeight: 700, marginBottom: 4 }}>{v.role}</h4>
                <p style={{ color: 'var(--text-primary)', fontWeight: 600, marginBottom: 6 }}>{v.org}</p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', marginBottom: 10 }}>{v.period}</p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <style>{`
        @media(max-width:768px){
          .timeline-line,.timeline-dot-col{display:none !important;}
          .timeline-item{flex-direction:column !important;}
          .vol-grid{grid-template-columns:1fr !important;}
        }
      `}</style>
    </section>
  )
}
