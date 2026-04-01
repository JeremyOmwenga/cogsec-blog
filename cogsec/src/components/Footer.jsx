const styles = {
  footer: {
    marginTop: '5rem',
    borderTop: '1px solid var(--border)',
    padding: '2rem var(--gutter)',
  },
  inner: {
    maxWidth: 'var(--max-width)',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '1rem',
  },
  left: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.7rem',
    color: 'var(--text-faint)',
    letterSpacing: '0.06em',
  },
  right: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.7rem',
    color: 'var(--text-faint)',
    letterSpacing: '0.06em',
  },
  accent: {
    color: 'var(--accent)',
  },
}

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.inner}>
        <span style={styles.left}>
          <span style={styles.accent}>COGSEC</span> © {new Date().getFullYear()} — all opinions are threat assessments
        </span>
        <span style={styles.right}>
          EST. 2026 // KNOWLEDGE IS DEFENCE
        </span>
      </div>
    </footer>
  )
}
