import { motion } from 'framer-motion'
import { FiUser, FiMapPin, FiMail, FiPhone } from 'react-icons/fi'

const infoItems = [
  { icon: <FiMail size={16} />, label: 'Email', value: 'mehedikhan.cse@gmail.com', href: 'mailto:mehedikhan.cse@gmail.com' },
  { icon: <FiPhone size={16} />, label: 'Primary Phone', value: '+8801531993979', href: 'tel:+8801531993979' },
  { icon: <FiMapPin size={16} />, label: 'Location', value: 'East Kazipara, Mirpur-10, Dhaka', href: null },
  { icon: <FiUser size={16} />, label: 'Status', value: 'Open to Opportunities', href: null },
]

export default function About() {
  return (
    <section id="about" style={{ background: 'var(--bg-primary)', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, rgba(0,180,216,0.3), transparent)' }} />

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <div className="section-tag">About Me</div>
          <h2 className="section-title">Who I Am</h2>
          <p className="section-subtitle">A full-stack developer focused on practical products, APIs, and ERP systems</p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'start' }} className="about-grid">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card" style={{ padding: 36 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
                <div style={{ width: 48, height: 48, borderRadius: 14, background: 'linear-gradient(135deg, rgba(0,180,216,0.2), rgba(124,58,237,0.2))', border: '1px solid rgba(0,180,216,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem' }}>
                  👨‍💻
                </div>
                <div>
                  <h3 style={{ fontWeight: 700, color: 'var(--text-primary)' }}>Mehedi Hasan Khan</h3>
                  <p style={{ color: 'var(--accent-blue)', fontSize: '0.85rem', fontFamily: 'var(--font-code)' }}>Full-stack Web Developer</p>
                </div>
              </div>

              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.9, marginBottom: 20 }}>
                I am a <strong style={{ color: 'var(--text-primary)' }}>Python, Django, and Odoo developer</strong> with around
                <strong style={{ color: 'var(--accent-blue)' }}> 4.5 years of hands-on experience</strong> building and maintaining scalable web applications.
                My work includes backend systems, ERP customization, API design, automation, and data-driven products.
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.9, marginBottom: 20 }}>
                Professionally, I have worked with <strong style={{ color: 'var(--text-primary)' }}>Django, DRF, FastAPI, Flask, Odoo, ReactJS, Owl, PostgreSQL, Redis, Docker, and AWS</strong>.
                I enjoy turning product requirements into maintainable systems with clear APIs and reliable delivery.
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.9 }}>
                I hold a <strong style={{ color: 'var(--text-primary)' }}>BSc in Computer Science & Engineering</strong> from
                <strong style={{ color: 'var(--accent-cyan)' }}> Daffodil International University</strong> and I am currently enrolled in an
                <strong style={{ color: 'var(--text-primary)' }}> MSc in Computer Science</strong> at Jahangirnagar University.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
          >
            {infoItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass-card"
                style={{ padding: '18px 24px', display: 'flex', alignItems: 'center', gap: 16 }}
              >
                <div style={{ width: 38, height: 38, borderRadius: 10, background: 'rgba(0,180,216,0.1)', border: '1px solid rgba(0,180,216,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-blue)', flexShrink: 0 }}>
                  {item.icon}
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: 2, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{item.label}</div>
                  {item.href
                    ? <a href={item.href} style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 500, fontSize: '0.95rem' }}>{item.value}</a>
                    : <span style={{ color: item.label === 'Status' ? '#10b981' : 'var(--text-primary)', fontWeight: 500, fontSize: '0.95rem' }}>{item.value}</span>
                  }
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <a
                href="/mehedi-hasan-khan-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                id="about-download-resume"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                  padding: '16px',
                  background: 'linear-gradient(135deg, rgba(0,180,216,0.15), rgba(124,58,237,0.15))',
                  border: '1px solid rgba(0,180,216,0.3)',
                  borderRadius: 16, textDecoration: 'none', color: 'var(--accent-blue)',
                  fontWeight: 600, fontSize: '0.95rem', transition: 'all 0.3s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0,180,216,0.25), rgba(124,58,237,0.25))'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0,180,216,0.15), rgba(124,58,237,0.15))'; e.currentTarget.style.transform = 'none' }}
              >
                📄 View Full Resume
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style>{`@media(max-width:768px){.about-grid{grid-template-columns:1fr !important;}}`}</style>
    </section>
  )
}
