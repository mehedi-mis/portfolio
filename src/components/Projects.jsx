import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const projects = [
  {
    id: 1,
    title: 'Online Grocery Shop',
    subtitle: 'E-commerce Web Application',
    emoji: '🛒',
    period: 'Personal Project',
    role: 'Full-stack Developer',
    color: '#00b4d8',
    gradient: 'linear-gradient(135deg, rgba(0,180,216,0.15), rgba(6,214,199,0.05))',
    live: null,
    github: 'https://github.com/MehediMK',
    tags: ['Django', 'Bootstrap', 'SQLite', 'E-commerce'],
    description: 'A Django-based grocery shop project focused on product browsing, cart flow, and order-oriented web interactions.',
    bullets: [
      'Built as a full-stack Django application with Bootstrap-based UI components.',
      'Structured the app around common commerce flows such as catalog display, customer actions, and data persistence.',
      'Used SQLite for lightweight project storage and rapid development.',
    ],
    featured: true,
  },
  {
    id: 2,
    title: 'Online Library & Book Shop',
    subtitle: 'Books, Inventory, and Catalog Experience',
    emoji: '📚',
    period: 'Personal Project',
    role: 'Full-stack Developer',
    color: '#7c3aed',
    gradient: 'linear-gradient(135deg, rgba(124,58,237,0.15), rgba(167,139,250,0.05))',
    live: null,
    github: 'https://github.com/MehediMK',
    tags: ['Django', 'Bootstrap', 'SQLite', 'Library'],
    description: 'A web app for managing books and presenting an online book-shopping style experience with Django.',
    bullets: [
      'Designed to organize books, display catalog information, and support a bookstore-style workflow.',
      'Implemented with Django templates and Bootstrap for a simple responsive interface.',
      'Used SQLite as the local application database.',
    ],
    featured: true,
  },
  {
    id: 3,
    title: 'Online Nursery',
    subtitle: 'Plant Shop Web App',
    emoji: '🌿',
    period: 'Personal Project',
    role: 'Full-stack Developer',
    color: '#10b981',
    gradient: 'linear-gradient(135deg, rgba(16,185,129,0.15), rgba(6,214,199,0.05))',
    live: null,
    github: 'https://github.com/MehediMK',
    tags: ['Django', 'Bootstrap', 'SQLite', 'Storefront'],
    description: 'A nursery-oriented web project for presenting products and handling a lightweight online storefront experience.',
    bullets: [
      'Built an end-to-end Django application around plant and nursery product presentation.',
      'Used Bootstrap to keep the customer-facing layout simple and readable.',
      'Stored application data with SQLite for rapid prototyping.',
    ],
    featured: false,
  },
  {
    id: 4,
    title: 'Expense Tracker',
    subtitle: 'Personal Finance Tracking',
    emoji: '💸',
    period: 'Personal Project',
    role: 'Full-stack Developer',
    color: '#f89820',
    gradient: 'linear-gradient(135deg, rgba(248,152,32,0.15), rgba(251,191,36,0.05))',
    live: null,
    github: 'https://github.com/MehediMK',
    tags: ['Django', 'Bootstrap', 'SQLite', 'Productivity'],
    description: 'A budgeting and transaction-tracking application for recording expenses and monitoring spending activity.',
    bullets: [
      'Created a Django-based tracker for recording and viewing expense-related data.',
      'Focused on clear CRUD interactions and lightweight reporting-style screens.',
      'Used SQLite to support a simple local workflow.',
    ],
    featured: false,
  },
  {
    id: 5,
    title: 'Car Wash Management System',
    subtitle: 'Service Operations Workflow',
    emoji: '🚗',
    period: 'Personal Project',
    role: 'Full-stack Developer',
    color: '#06d6c7',
    gradient: 'linear-gradient(135deg, rgba(6,214,199,0.15), rgba(0,180,216,0.05))',
    live: null,
    github: 'https://github.com/MehediMK',
    tags: ['Django', 'Bootstrap', 'SQLite', 'Management System'],
    description: 'A service-management project designed around car wash operations, customer handling, and daily workflow tracking.',
    bullets: [
      'Modeled a management flow for handling service operations in a car wash business context.',
      'Used Django and Bootstrap to deliver a straightforward admin-friendly interface.',
      'Kept the stack lightweight with SQLite for project storage.',
    ],
    featured: false,
  },
]

const filters = ['All', 'Featured', 'Django', 'Bootstrap', 'Management']

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [expanded, setExpanded] = useState(null)

  const filtered = projects.filter(p => {
    if (activeFilter === 'All') return true
    if (activeFilter === 'Featured') return p.featured
    return p.tags.some(t => t.toLowerCase().includes(activeFilter.toLowerCase()))
  })

  return (
    <section id="projects" style={{ background: 'linear-gradient(180deg, #080d1e 0%, var(--bg-primary) 100%)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <div className="section-tag">Projects</div>
          <h2 className="section-title">What I&apos;ve Built</h2>
          <p className="section-subtitle">A selection of Django-based personal projects from my portfolio work</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 48 }}
        >
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              style={{
                padding: '8px 20px', borderRadius: 100, border: 'none', cursor: 'pointer',
                fontFamily: 'var(--font-main)', fontWeight: 600, fontSize: '0.85rem',
                transition: 'all 0.3s',
                background: activeFilter === f ? 'linear-gradient(135deg,#00b4d8,#7c3aed)' : 'rgba(255,255,255,0.05)',
                color: activeFilter === f ? '#fff' : 'var(--text-muted)',
                boxShadow: activeFilter === f ? '0 4px 16px rgba(0,180,216,0.3)' : 'none',
              }}
            >
              {f}
            </button>
          ))}
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 28 }} className="projects-grid">
          <AnimatePresence>
            {filtered.map((p, i) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="glass-card"
                style={{ padding: 0, overflow: 'hidden', cursor: 'pointer' }}
                onClick={() => setExpanded(expanded === p.id ? null : p.id)}
                id={`project-${p.id}`}
              >
                <div style={{ background: p.gradient, padding: '28px 28px 20px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div style={{ fontSize: '2.2rem', marginBottom: 12 }}>{p.emoji}</div>
                    <div style={{ display: 'flex', gap: 10 }}>
                      {p.live && (
                        <a href={p.live} target="_blank" rel="noopener noreferrer"
                          onClick={e => e.stopPropagation()}
                          style={{ width: 34, height: 34, borderRadius: 8, background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: p.color, textDecoration: 'none' }}>
                          <FiExternalLink size={15} />
                        </a>
                      )}
                      <a href={p.github} target="_blank" rel="noopener noreferrer"
                        onClick={e => e.stopPropagation()}
                        style={{ width: 34, height: 34, borderRadius: 8, background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)', textDecoration: 'none' }}>
                        <FiGithub size={15} />
                      </a>
                    </div>
                  </div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 2 }}>{p.title}</h3>
                  <p style={{ color: p.color, fontSize: '0.82rem', fontFamily: 'var(--font-code)', marginBottom: 4 }}>{p.subtitle}</p>
                  <div style={{ display: 'flex', gap: 8, color: 'var(--text-muted)', fontSize: '0.78rem' }}>
                    <span>👤 {p.role}</span>
                    <span>·</span>
                    <span>📅 {p.period}</span>
                  </div>
                </div>

                <div style={{ padding: '20px 28px' }}>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: 16 }}>{p.description}</p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 }}>
                    {p.tags.map(tag => (
                      <span key={tag} style={{ padding: '3px 9px', borderRadius: 5, fontSize: '0.73rem', fontFamily: 'var(--font-code)', background: `${p.color}12`, border: `1px solid ${p.color}25`, color: p.color }}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button style={{ background: 'none', border: 'none', color: p.color, cursor: 'pointer', fontSize: '0.83rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 4 }}>
                    {expanded === p.id ? '▲ Hide details' : '▼ Show details'}
                  </button>

                  <AnimatePresence>
                    {expanded === p.id && (
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        style={{ listStyle: 'none', padding: 0, marginTop: 16, overflow: 'hidden' }}
                      >
                        {p.bullets.map((b, j) => (
                          <li key={j} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', color: 'var(--text-secondary)', fontSize: '0.87rem', lineHeight: 1.6, marginBottom: 8 }}>
                            <span style={{ color: p.color, marginTop: 5, flexShrink: 0 }}>▸</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
      <style>{`@media(max-width:768px){.projects-grid{grid-template-columns:1fr !important;}}`}</style>
    </section>
  )
}
