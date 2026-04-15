import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiCode } from 'react-icons/fi'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
          padding: '0 24px',
          transition: 'all 0.3s ease',
          background: scrolled ? 'rgba(5, 8, 22, 0.9)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
        }}
      >
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
          <motion.a href="#home" whileHover={{ scale: 1.05 }} style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
            <div style={{
              width: 38, height: 38, borderRadius: 10,
              background: 'linear-gradient(135deg, #00b4d8, #7c3aed)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 4px 16px rgba(0,180,216,0.4)',
            }}>
              <FiCode color="#fff" size={18} />
            </div>
            <span style={{ fontWeight: 800, fontSize: '1.1rem', background: 'linear-gradient(135deg, #fff, #00b4d8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              MehediKhan<span style={{ WebkitTextFillColor: '#00b4d8' }}>.</span>dev
            </span>
          </motion.a>

          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }} className="nav-desktop">
            {navLinks.map(link => (
              <motion.a
                key={link.href}
                href={link.href}
                whileHover={{ y: -1 }}
                style={{
                  textDecoration: 'none', color: 'var(--text-secondary)',
                  fontSize: '0.9rem', fontWeight: 500, padding: '8px 14px', borderRadius: 8,
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={e => e.target.style.color = '#00b4d8'}
                onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="mailto:mehedikhan.cse@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              style={{
                marginLeft: 8, padding: '10px 20px', borderRadius: 10,
                background: 'linear-gradient(135deg, #00b4d8, #7c3aed)',
                color: '#fff', textDecoration: 'none', fontSize: '0.88rem', fontWeight: 600,
                boxShadow: '0 4px 16px rgba(0,180,216,0.3)',
              }}
            >
              Hire Me
            </motion.a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: 'none', border: 'none', color: 'var(--text-primary)', cursor: 'pointer', display: 'none' }}
            className="nav-mobile-btn"
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'fixed', top: 72, left: 0, right: 0, zIndex: 999,
              background: 'rgba(5,8,22,0.97)', backdropFilter: 'blur(20px)',
              padding: '20px 24px 32px', borderBottom: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            {navLinks.map(link => (
              <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
                style={{ display: 'block', padding: '14px 0', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '1.05rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: flex !important; }
        }
      `}</style>
    </>
  )
}
