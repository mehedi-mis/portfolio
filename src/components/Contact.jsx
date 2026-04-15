import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin, FiBookOpen } from 'react-icons/fi'

const contactItems = [
  { icon: <FiMail size={20} />, label: 'Email', value: 'mehedikhan.cse@gmail.com', href: 'mailto:mehedikhan.cse@gmail.com', color: '#00b4d8' },
  { icon: <FiPhone size={20} />, label: 'Primary Phone', value: '+8801531993979', href: 'tel:+8801531993979', color: '#10b981' },
  { icon: <FiPhone size={20} />, label: 'Secondary Phone', value: '+8801879205233', href: 'tel:+8801879205233', color: '#f89820' },
  { icon: <FiMapPin size={20} />, label: 'Location', value: 'East Kazipara, Mirpur-10, Dhaka', href: null, color: '#7c3aed' },
]

const socialLinks = [
  { icon: <FiGithub size={22} />, href: 'https://github.com/MehediMK', label: 'GitHub', color: '#e2e8f0' },
  { icon: <FiLinkedin size={22} />, href: 'https://www.linkedin.com/in/mehedikhan-mk/', label: 'LinkedIn', color: '#0a66c2' },
  { icon: <FiBookOpen size={20} />, href: 'https://mehedi-khan.medium.com', label: 'Medium', color: '#00ab6c' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      await fetch('https://formsubmit.co/ajax/mehedikhan.cse@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `New Portfolio Message from ${form.name}!`,
        }),
      })

      setSent(true)
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setSent(false), 5000)
    } catch (error) {
      console.error(error)
      alert('Something went wrong, please try again.')
    }
  }

  return (
    <section id="contact" style={{ background: 'linear-gradient(180deg, var(--bg-primary) 0%, #080d1e 100%)', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, rgba(124,58,237,0.3), transparent)' }} />
      <div style={{ position: 'absolute', bottom: '20%', left: '5%', width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,180,216,0.08) 0%, transparent 70%)', filter: 'blur(40px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '20%', right: '5%', width: 250, height: 250, borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)', filter: 'blur(40px)', pointerEvents: 'none' }} />

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <div className="section-tag">Contact</div>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">I&apos;m open to software engineering roles, freelance work, and product collaborations</p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 48, alignItems: 'start' }} className="contact-grid">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ display: 'flex', flexDirection: 'column', gap: 24 }}
          >
            <div className="glass-card" style={{ padding: 32 }}>
              <h3 style={{ fontWeight: 700, fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: 8 }}>Let&apos;s Connect</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.93rem', marginBottom: 28 }}>
                If you have a product idea, engineering role, ERP customization need, or API project, send me a message. I&apos;m happy to discuss practical solutions.
              </p>

              {contactItems.map(item => (
                <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: `${item.color}15`, border: `1px solid ${item.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: item.color, flexShrink: 0 }}>
                    {item.icon}
                  </div>
                  <div>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{item.label}</p>
                    {item.href
                      ? <a href={item.href} style={{ color: 'var(--text-primary)', fontWeight: 600, textDecoration: 'none' }}>{item.value}</a>
                      : <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{item.value}</span>
                    }
                  </div>
                </div>
              ))}
            </div>

            <div className="glass-card" style={{ padding: 24 }}>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>Find me on</p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                {socialLinks.map(s => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={s.label}
                    whileHover={{ y: -4, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, padding: '14px 18px', borderRadius: 14, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: s.color, textDecoration: 'none', transition: 'all 0.2s', flex: 1 }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = `${s.color}40`; e.currentTarget.style.background = `${s.color}10` }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)' }}
                  >
                    {s.icon}
                    <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{s.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <form onSubmit={handleSubmit} className="glass-card" style={{ padding: 36 }} id="contact-form">
              <h3 style={{ fontWeight: 700, fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: 28 }}>Send a Message</h3>

              {[
                { name: 'name', label: 'Your Name', type: 'text', placeholder: 'John Doe' },
                { name: 'email', label: 'Email Address', type: 'email', placeholder: 'john@example.com' },
              ].map(field => (
                <div key={field.name} style={{ marginBottom: 20 }}>
                  <label style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.85rem', fontWeight: 600, marginBottom: 8 }}>{field.label}</label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={form[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    required
                    id={`contact-${field.name}`}
                    style={{
                      width: '100%', padding: '12px 16px', borderRadius: 12,
                      background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                      color: 'var(--text-primary)', fontFamily: 'var(--font-main)', fontSize: '0.93rem',
                      outline: 'none', transition: 'border-color 0.2s',
                    }}
                    onFocus={e => e.target.style.borderColor = 'rgba(0,180,216,0.5)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                  />
                </div>
              ))}

              <div style={{ marginBottom: 28 }}>
                <label style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.85rem', fontWeight: 600, marginBottom: 8 }}>Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Hi Mehedi, I&apos;d like to discuss..."
                  required
                  rows={5}
                  id="contact-message"
                  style={{
                    width: '100%', padding: '12px 16px', borderRadius: 12,
                    background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                    color: 'var(--text-primary)', fontFamily: 'var(--font-main)', fontSize: '0.93rem',
                    outline: 'none', resize: 'vertical', transition: 'border-color 0.2s',
                  }}
                  onFocus={e => e.target.style.borderColor = 'rgba(0,180,216,0.5)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                id="contact-submit"
                style={{
                  width: '100%', padding: '14px', borderRadius: 12, border: 'none',
                  background: sent ? 'linear-gradient(135deg,#10b981,#06d6c7)' : 'linear-gradient(135deg,#00b4d8,#7c3aed)',
                  color: '#fff', fontFamily: 'var(--font-main)', fontWeight: 700, fontSize: '1rem',
                  cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                  boxShadow: '0 4px 24px rgba(0,180,216,0.35)', transition: 'background 0.3s',
                }}
              >
                {sent ? 'Message Sent!' : <><FiSend size={16} /> Send Message</>}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: 80, paddingTop: 40, borderTop: '1px solid rgba(255,255,255,0.06)', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
        <p>Designed & Built by <span style={{ color: 'var(--accent-blue)', fontWeight: 600 }}>Mehedi Hasan Khan</span></p>
        <p style={{ marginTop: 6 }}>mehedikhan.cse@gmail.com · Dhaka, Bangladesh · 2026</p>
      </div>

      <style>{`
        input::placeholder, textarea::placeholder { color: var(--text-muted); }
        @media(max-width:768px){ .contact-grid{ grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
