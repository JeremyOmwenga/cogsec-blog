import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

const styles = {
  header: {
    padding: '1.5rem var(--gutter) 0',
    position: 'sticky',
    top: 0,
    zIndex: 100,
    background: 'linear-gradient(to bottom, var(--bg) 80%, transparent)',
  },
  inner: {
    maxWidth: 'var(--max-width)',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: '1.25rem',
    borderBottom: '1px solid var(--border)',
  },
  brand: {
    display: 'flex',
    alignItems: 'baseline',
    gap: '0.6rem',
    textDecoration: 'none',
  },
  logo: {
    fontFamily: 'var(--font-mono)',
    fontSize: '1.1rem',
    fontWeight: 400,
    color: 'var(--accent)',
    letterSpacing: '0.05em',
  },
  cursor: {
    display: 'inline-block',
    width: '9px',
    height: '1.1em',
    background: 'var(--accent)',
    verticalAlign: 'middle',
    animation: 'blink 1.2s step-end infinite',
    marginLeft: '2px',
  },
  tagline: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.62rem',
    color: 'var(--text-muted)',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
  },
  nav: {
    display: 'flex',
    gap: '1.5rem',
    alignItems: 'center',
  },
  navLink: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.72rem',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: 'var(--text-muted)',
    textDecoration: 'none',
    transition: 'color 0.2s',
  },
  navLinkActive: {
    color: 'var(--accent)',
  },
  statusDot: {
    display: 'inline-block',
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    background: 'var(--accent)',
    marginRight: '0.4rem',
    animation: 'blink 2s ease-in-out infinite',
  },
}

export default function Header() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <header style={styles.header}>
      <div style={styles.inner}>
        <Link to="/" style={styles.brand}>
          <span style={styles.logo}>
            COGSEC<span style={styles.cursor} />
          </span>
          <span style={styles.tagline}>// cognitive security</span>
        </Link>

        <nav style={styles.nav}>
         
          <Link
            to="/about"
            style={styles.navLink}
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  )
}
