import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiArrowDown, FiBookOpen } from 'react-icons/fi'
import ParticlesBg from './ParticlesBg'

const socialLinks = [
  { icon: <FiGithub size={20} />, href: 'https://github.com/MehediMK', label: 'GitHub' },
  { icon: <FiLinkedin size={20} />, href: 'https://www.linkedin.com/in/mehedikhan-mk/', label: 'LinkedIn' },
  { icon: <FiMail size={20} />, href: 'mailto:mehedikhan.cse@gmail.com', label: 'Email' },
  { icon: <FiBookOpen size={20} />, href: 'https://mehedi-khan.medium.com', label: 'Medium' },
]

const floatingBadges = [
  { label: 'Django', delay: 0.2, x: -60, y: -40, color: '#44b78b' },
  { label: 'Odoo', delay: 0.4, x: 60, y: -50, color: '#714b67' },
  { label: 'FastAPI', delay: 0.6, x: -80, y: 60, color: '#009688' },
  { label: 'ReactJS', delay: 0.8, x: 70, y: 70, color: '#61dafb' },
]

export default function Hero() {
  return (
    <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', background: 'var(--gradient-hero)' }}>
      <div className="grid-bg" />
      <ParticlesBg />

      <div style={{ position: 'absolute', top: '20%', left: '10%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,180,216,0.12) 0%, transparent 70%)', filter: 'blur(40px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '10%', right: '5%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)', filter: 'blur(40px)', pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: 80 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 60, alignItems: 'center' }} className="hero-grid">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: 'rgba(0,180,216,0.1)', border: '1px solid rgba(0,180,216,0.25)',
                padding: '6px 16px', borderRadius: 100, fontSize: '0.82rem',
                color: 'var(--accent-cyan)', fontFamily: 'var(--font-code)', marginBottom: 24,
              }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#10b981', animation: 'pulse 2s infinite' }} />
                Open to software engineering opportunities
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ fontSize: 'clamp(2.4rem, 5vw, 4.2rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: 16 }}
            >
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.45em', fontWeight: 500, display: 'block', marginBottom: 8, fontFamily: 'var(--font-code)' }}>Hi, I&apos;m</span>
              <span style={{ background: 'linear-gradient(135deg, #fff 30%, #00b4d8 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Mehedi Hasan
              </span>
              <br />
              <span style={{ background: 'linear-gradient(135deg, #00b4d8 0%, #7c3aed 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Khan
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}
            >
              <div style={{ height: 2, width: 40, background: 'linear-gradient(90deg, #00b4d8, transparent)' }} />
              <span style={{ fontSize: '1.15rem', color: 'var(--accent-blue)', fontWeight: 600, fontFamily: 'var(--font-code)' }}>
                Full-stack Web Developer | Python, Django & Odoo
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.8, maxWidth: 620, marginBottom: 36 }}
            >
              I build <strong style={{ color: 'var(--text-primary)' }}>scalable web applications, APIs, and ERP customizations</strong> with strong hands-on experience in
              <strong style={{ color: 'var(--text-primary)' }}> Django, FastAPI, Flask, Odoo, ReactJS, and PostgreSQL</strong>. My work spans product development,
              automation, data processing, and production-focused backend systems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 48 }}
            >
              <a href="#projects" className="btn btn-primary" id="hero-view-projects">
                View Projects
                <FiArrowDown size={16} />
              </a>
              <a href="mailto:mehedikhan.cse@gmail.com" className="btn btn-outline" id="hero-contact">
                Get In Touch
                <FiMail size={16} />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              style={{ display: 'flex', gap: 12 }}
            >
              {socialLinks.map(s => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.label}
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    width: 44, height: 44, borderRadius: 12,
                    background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--text-secondary)', textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = '#00b4d8'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                >
                  {s.icon}
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              style={{ display: 'flex', gap: 32, marginTop: 48, paddingTop: 36, borderTop: '1px solid rgba(255,255,255,0.06)' }}
            >
              {[
                { num: '4.5+', label: 'Years Experience' },
                { num: '4+', label: 'Frameworks Used Daily' },
                { num: '5+', label: 'Personal Projects' },
              ].map(stat => (
                <div key={stat.label}>
                  <div style={{ fontSize: '1.8rem', fontWeight: 800, background: 'linear-gradient(135deg, #00b4d8, #7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{stat.num}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: 2 }}>{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, type: 'spring' }}
            className="hero-avatar"
            style={{ position: 'relative' }}
          >
            <div style={{
              width: 340, height: 340, borderRadius: '50%',
              background: 'linear-gradient(135deg, rgba(0,180,216,0.2), rgba(124,58,237,0.2))',
              border: '2px solid rgba(0,180,216,0.3)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              position: 'relative', boxShadow: '0 0 80px rgba(0,180,216,0.2)',
            }}>
              <div style={{
                width: 290, height: 290, borderRadius: '50%',
                background: 'linear-gradient(135deg, #0d1b3e, #1a0533)',
                border: '1px solid rgba(255,255,255,0.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '7rem', userSelect: 'none',
              }}>
                👨‍💻
              </div>

              <div style={{
                position: 'absolute', inset: -20, borderRadius: '50%',
                border: '1px dashed rgba(0,180,216,0.2)',
                animation: 'spin 20s linear infinite',
              }} />

              {floatingBadges.map(b => (
                <motion.div
                  key={b.label}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, y: [0, -8, 0] }}
                  transition={{ duration: 3, delay: b.delay, repeat: Infinity, ease: 'easeInOut' }}
                  style={{
                    position: 'absolute',
                    top: `calc(50% + ${b.y}px)`, left: `calc(50% + ${b.x}px)`,
                    transform: 'translate(-50%, -50%)',
                    background: 'rgba(5,8,22,0.9)', border: `1px solid ${b.color}40`,
                    borderRadius: 8, padding: '6px 12px',
                    fontSize: '0.75rem', fontFamily: 'var(--font-code)',
                    color: b.color, whiteSpace: 'nowrap',
                    boxShadow: `0 4px 16px ${b.color}30`,
                  }}
                >
                  {b.label}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, color: 'var(--text-muted)' }}
      >
        <span style={{ fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Scroll</span>
        <FiArrowDown size={16} />
      </motion.div>

      <style>{`@media(max-width:900px){.hero-grid{grid-template-columns:1fr !important;}.hero-avatar{margin:0 auto;}}@media(max-width:480px){.hero-avatar>div{width:280px !important;height:280px !important;}.hero-avatar>div>div:first-child{width:230px !important;height:230px !important;font-size:5.5rem !important;}}`}</style>
    </section>
  )
}
